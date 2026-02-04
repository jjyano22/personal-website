// Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Update active nav link
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Show corresponding section
        const targetId = link.getAttribute('href').substring(1);
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});

// Bookshelf filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        // Filter books
        document.querySelectorAll('.book').forEach(book => {
            if (filter === 'all') {
                book.classList.remove('hidden');
            } else if (book.dataset.rating === filter) {
                book.classList.remove('hidden');
            } else {
                book.classList.add('hidden');
            }
        });
    });
});

// Handle URL hash for direct section links
function handleHash() {
    const hash = window.location.hash;
    if (hash) {
        const targetLink = document.querySelector(`nav a[href="${hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }
}

window.addEventListener('hashchange', handleHash);
window.addEventListener('load', handleHash);
