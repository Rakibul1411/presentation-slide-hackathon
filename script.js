
// Add smooth scrolling between slides
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const slides = document.querySelectorAll('.slide');
        const currentSlide = Array.from(slides).find(slide => 
            slide.getBoundingClientRect().top >= -100 && slide.getBoundingClientRect().top <= 100
        );
        const currentIndex = Array.from(slides).indexOf(currentSlide);
        if (currentIndex < slides.length - 1) {
            slides[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const slides = document.querySelectorAll('.slide');
        const currentSlide = Array.from(slides).find(slide => 
            slide.getBoundingClientRect().top >= -100 && slide.getBoundingClientRect().top <= 100
        );
        const currentIndex = Array.from(slides).indexOf(currentSlide);
        if (currentIndex > 0) {
            slides[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add hover effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.link-btn, a[style*="background: linear-gradient"]');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});
