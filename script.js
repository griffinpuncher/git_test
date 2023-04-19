document.addEventListener("DOMContentLoaded",function() {
    const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content! Hahaha!';

    container.appendChild(content);

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.style.color = "red";
    paragraph.textContent = "Hey I'm red!";

    container.appendChild(paragraph);

    const header3 = document.createElement('h3');
    header3.classList.add('header');
    header3.style.color = "blue";
    header3.textContent = "I'm a blue h3";

    container.appendChild(header3);

    const styleDiv = document.createElement('div');
    styleDiv.classList.add('container');
    styleDiv.style.border = "1px solid black";
    styleDiv.style.backgroundColor = "pink";

    const header1 = document.createElement('h1');
    header1.classList.add('header');
    header1.textContent = "I'm in a div"

    const divParagraph = document.createElement('p');
    divParagraph.classList.add('paragraph');
    divParagraph.textContent = "ME TOO!";

    styleDiv.appendChild(header1);
    styleDiv.appendChild(divParagraph);
    
    container.appendChild(styleDiv);

    const btn = document.querySelector('#btn');
    btn.onclick = () => alert("Hello World");

    btn.addEventListener('click', function (e) {
        e.target.style.backgroundColor = "pink";
    });
    
    const alt = document.querySelector('#alt');
    alt.addEventListener('click', () => {
        alert("Hello World");
    });

    const af = document.querySelector('#alertFunction');
    af.addEventListener('click', () => alertFunction(true));

    function alertFunction(bool) {
        if (bool) {
            alert("YAY! YOU DID IT!");
        }
    }
});
