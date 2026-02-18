// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname;
  var page = path.split('/').pop() || 'index.html';
  var isHome = page === '' || page === 'index.html' || path.endsWith('/');
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    link.classList.remove('active');
    if (isHome && href === 'index.html') link.classList.add('active');
    else if (!isHome && href === page) link.classList.add('active');
  });

  // Optional: "Fetch" search button
  var fetchBtn = document.querySelector('.btn-fetch');
  var searchInput = document.querySelector('.search-input');
  if (fetchBtn && searchInput) {
    fetchBtn.addEventListener('click', function () {
      var q = searchInput.value.trim();
      if (q) {
        // Simple in-page search: scroll to first element containing text
        var sections = document.querySelectorAll('.content-section, .faq-item, .pet-card');
        for (var i = 0; i < sections.length; i++) {
          if (sections[i].textContent.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
            sections[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
        }
      }
    });
  }
});
