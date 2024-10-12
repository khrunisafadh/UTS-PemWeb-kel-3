document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 300);
        
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0)';
        });
    });
});
