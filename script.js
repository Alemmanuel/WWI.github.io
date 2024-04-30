document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
