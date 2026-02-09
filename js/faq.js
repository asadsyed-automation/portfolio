// ===================================
// FAQ ACCORDION FUNCTIONALITY
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                // Close other FAQ items (optional - remove if you want multiple open at once)
                const wasActive = item.classList.contains('active');
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // Toggle current item
                if (!wasActive) {
                    item.classList.add('active');
                }
            });
        });

        console.log('FAQ accordion initialized ✓');
    }
});
