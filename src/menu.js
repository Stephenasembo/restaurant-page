const menuContent = document.createElement('div')
const menuPara = document.createElement('p');

menuPara.innerHTML = `
    <h2>Menu</h2>
    <div class='menuContainer'>
        <ul>
            <h3>Beverages</h3>
            <li>Tea: 0.3$</li>
            <li>Coffee: 0.8$</li>
            <li>Soda 300ml: 1$</li>
            <li>Soda 500ml: 1.5$</li>
        </ul>
        <ul>
            <h3>Food</h3>
            <li>Rice: 2$</li>
            <li>Beans: 1$</li>
            <li>Soup: 1.8$</li>
            <li>Pasta: 3$</li>
        </ul>
    </div>
    `;

menuContent.appendChild(menuPara);

export { menuContent };