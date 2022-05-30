const languageInput = document.querySelector('.languages');
const deleteBtn = document.getElementById('delete');
const addBtn = document.getElementById('add');

const languageSection = document.getElementById('language-section');

const ul = document.createElement('ul');
languageSection.appendChild(ul);

addBtn.onclick = function () {
    if (!languageInput.value) {
        alert('Please enter a programming language!');
    } else {
        ul.innerHTML += `<li>${languageInput.value}</li>`;
        languageInput.value = '';
        javascriptControl();
    }
};

const javascriptControl = () => {
    document.querySelectorAll('ul li').forEach((language) => {
        const lowerCase = language.textContent.toLowerCase();
        if (lowerCase === 'javascript') {
            language.setAttribute('class', 'red');
        }
    })
};

deleteBtn.onclick = function () {
    ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert('There is no language to be deleted!')
};

languageInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addBtn.onclick()
    }
    if (e.code === 'Delete') {
        deleteBtn.onclick()
    }
});

window.onload = () => {
    javascriptControl();
    languageInput.focus();
}