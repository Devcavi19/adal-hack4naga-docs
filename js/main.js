// Sidebar toggle for mobile
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        }
    });
}

// Active navigation highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.sidebar-nav a');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Copy code button functionality
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(block => {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.innerHTML = '<i class="fas fa-copy"></i> Copy';
        button.addEventListener('click', () => {
            const code = block.textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i> Copy';
                }, 2000);
            });
        });
        
        wrapper.appendChild(button);
    });
}

// Initialize copy buttons when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCopyButtons);
} else {
    addCopyButtons();
}

// Add table of contents generator
function generateTableOfContents() {
    const toc = document.getElementById('table-of-contents');
    if (!toc) return;

    const headings = document.querySelectorAll('.content-section h2, .content-section h3');
    const tocList = document.createElement('ul');

    headings.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`;
        heading.id = id;

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        a.className = heading.tagName === 'H2' ? 'toc-h2' : 'toc-h3';
        
        li.appendChild(a);
        tocList.appendChild(li);
    });

    toc.appendChild(tocList);
}

// Initialize TOC if element exists
generateTableOfContents();

// Add external link icons
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.querySelector('i')) {
        link.innerHTML += ' <i class="fas fa-external-link-alt" style="font-size: 0.75em; opacity: 0.6;"></i>';
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});
