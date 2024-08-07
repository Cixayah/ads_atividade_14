document.addEventListener('DOMContentLoaded', function () {
    let clickCount = 0;
    const clickButton = document.getElementById('clickButton');
    const clickCountSpan = document.getElementById('clickCount');

    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            clickCount++;
            clickCountSpan.textContent = clickCount;

            // Muda a cor do botão temporariamente
            button.style.backgroundColor = 'var(--accent-color)';
            button.style.borderColor = 'var(--accent-color)';

            // Volta ao estado natural após 200ms
            setTimeout(function () {
                button.style.backgroundColor = 'var(--highlight-color)';
                button.style.borderColor = 'var(--highlight-color)';
            }, 200);
        });
    });
});
