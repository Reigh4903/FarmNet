// DOM Elements
/*const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const mainContent = document.getElementById('main-content');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Load page content dynamically
function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html;
            // Update active link in navigation
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(page)) {
                    link.classList.add('active');
                }
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            // Scroll to top
            window.scrollTo(0, 0);
            // Load page-specific scripts
            loadPageScript(page);
        })
        .catch(err => {
            console.error('Failed to load page:', err);
            mainContent.innerHTML = `
        <div class="container">
          <div class="alert alert-danger">
            <strong>Error:</strong> Failed to load page content. Please try again later.
          </div>
        </div>
      `;
        });
}

// Load page-specific JavaScript
function loadPageScript(page) {
    const script = document.createElement('script');
    script.src = `pages/${page}.js`;
    script.onerror = () => {
        console.log(`No script found for ${page}`);
    };
    document.body.appendChild(script);
}

// Handle navigation
function handleNavigation() {
    // Get page from URL hash
    let page = window.location.hash.substring(1);
    if (!page) page = 'home';

    // Load the page
    loadPage(page);
}

// Event listeners
window.addEventListener('DOMContentLoaded', handleNavigation);
window.addEventListener('hashchange', handleNavigation);

// Handle auth page type (login/signup)
if (window.location.search.includes('type=')) {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type === 'login' || type === 'signup') {
        window.location.hash = 'auth';
    }
}*/

// Modified loadPage function to handle CSS
function loadPage(page) {
    // Show loading state
    mainContent.innerHTML = '<div class="loading-spinner"></div>';

    // Remove any existing page-specific CSS
    const existingPageCSS = document.querySelector('link[data-page-css]');
    if (existingPageCSS) {
        document.head.removeChild(existingPageCSS);
    }

    // Load page content
    fetch(`pages/${page}.html`)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(html => {
            mainContent.innerHTML = html;

            // Load page-specific CSS if exists
            const pageCSS = document.createElement('link');
            pageCSS.rel = 'stylesheet';
            pageCSS.href = `pages/css/${page}.css`;
            pageCSS.dataset.pageCss = 'true';
            pageCSS.onerror = () => {
                // If no page-specific CSS, just use main styles
                console.log(`No specific CSS for ${page}`);
            };
            document.head.appendChild(pageCSS);

            // Update active nav link
            updateActiveNavLink(page);

            // Load page-specific JS if exists
            loadPageScript(page);
        })
        .catch(err => {
            console.error('Failed to load page:', err);
            mainContent.innerHTML = `
                <div class="container">
                    <div class="alert alert-danger">
                        <strong>Error:</strong> Failed to load page content. Please try again later.
                    </div>
                </div>
            `;
        });
}