const button = document.querySelector('button');
let divNumber = 1;

/* const addDiv =  */
function addDiv() {
    const div = document.createElement('div');
    const section = document.querySelector('section');
    div.textContent = divNumber;
    section.appendChild(div);
    if (divNumber % 5 === 0) {
        div.classList.add('circle');
    }
    divNumber++;
}


button.addEventListener('click', addDiv);
// addDiv();