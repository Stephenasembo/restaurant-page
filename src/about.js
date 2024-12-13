const aboutContent = document.createElement('div')
const aboutPara = document.createElement('p');

aboutPara.innerText = `Feel free to contact us at:
    0700000111
    0712345678
    Rapster@gmail.com

    Book a reservation withus through any form of contact
`;

aboutContent.setAttribute('class', 'aboutContent')
aboutContent.appendChild(aboutPara);

export { aboutContent };