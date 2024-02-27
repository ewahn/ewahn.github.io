document.addEventListener('DOMContentLoaded', function() {
    const ads = JSON.parse(localStorage.getItem('ads')) || {};


    const adsContainer = document.getElementById('adsContainer');


    Object.keys(ads).forEach(category => {

        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1); 
        adsContainer.appendChild(categoryHeader);

    
        ads[category].forEach(ad => {
         
            const adElement = document.createElement('div');
            adElement.classList.add('ad');

            adElement.innerHTML = `
                <h3>${ad.title}</h3>
                <p>${ad.description}</p>
                <p>Price: £${ad.price}</p>
                <p>Category: ${ad.category}</p>
                <img src="${ad.image}" alt="${ad.title}" style="width:100px;height:auto;">
            `;

            adsContainer.appendChild(adElement);
        });
    });
});
