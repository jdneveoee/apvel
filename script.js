
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Светлая тема' : 'Темная тема';
});
const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const post = button.closest('.post');
        const fullText = post.querySelector('.full-text');
        if (fullText.style.display === 'none') {
            fullText.style.display = 'block';
            button.textContent = 'Скрыть';
        } else {
            fullText.style.display = 'none';
            button.textContent = 'Читать далее';
        }
    });
});
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Сообщение отправлено!');
    contactForm.reset();
});
     function toggleDescription(button) {
    const description = button.nextElementSibling; 
     if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block"; 
        button.innerText = "Скрыть"; 
    } else {
        description.style.display = "none"; 
        button.innerText = "Подробнее"; 
    }
}
