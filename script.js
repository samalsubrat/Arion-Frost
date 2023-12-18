const scrollToTopButton = document.querySelector('.buynow');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });