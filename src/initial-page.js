import restaurantImage from './restaurant.jpg';

const homeContent = document.createElement('div');
const image = document.createElement('img');
image.src = restaurantImage;
image.alt = 'Interior of an empty restaurant';

const homePara = document.createElement('p');

homePara.innerHTML = `
    <ul>
        <li>Located right at the heart of the city.</li>
        <li>Come enjoy the ambience of Rapster Restaurant and fill up on our amazing dishes.</li>
        <li>We serve both indegenous and exotic foods.</li>
        <li>Pay us a visit and you are bound to enjoy.</li>
    </ul>
`

homeContent.appendChild(image);
homeContent.appendChild(homePara);

export {homeContent}