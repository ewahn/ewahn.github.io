document.addEventListener("DOMContentLoaded", function() {   
    function fetchListings(category) {
        const ads = JSON.parse(localStorage.getItem('ads')) || {};
        return ads[category] || [];
    }

    function displayListings(listings) {
        const container = document.getElementById('listingsContainer');

        listings.forEach(listing => {
            const elem = document.createElement('div');
            elem.className = 'listing';
            elem.innerHTML = `
                <h3>${listing.title}</h3>
                <p>${listing.description}</p>
                <p>Price: ${listing.price}</p>
            `;

            if (listing.image) {
                const image = new Image();
                image.src = listing.image; 
                image.alt = "Ad image";
                image.style.width = '100px'; 
                elem.appendChild(image); 
            }

            container.appendChild(elem);
        });
    }

   
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    
    const listings = fetchListings(category);
    displayListings(listings);

});
