const homeContent = document.createElement('div');

const homePara = document.createElement('p');

homePara.innerHTML = `
    <ul>
        <li>Located right at the heart of the city.</li>
        <li>Come enjoy the ambience of Rapster Restaurant and fill up on our amazing dishes.</li>
        <li>We serve both indegenous and exotic foods.</li>
        <li>Pay us a visit and you are bound to enjoy.</li>
    </ul>
`
homeContent.appendChild(homePara);
export {homeContent}