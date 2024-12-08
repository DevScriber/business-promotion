const buttons = document.querySelectorAll('.question-button')
const content = document.querySelector('.answer-content')


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.question-icon use');
        if (answer.style.display === 'none' || answer.style.display === '')
        { answer.style.display = 'block'; icon.setAttribute('href', './images/icons.svg#question-icon-open'); }
        else { answer.style.display = 'none'; icon.setAttribute('href', './images/icons.svg#question-icon-close');}
    });
});
    