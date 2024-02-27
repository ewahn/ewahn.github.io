
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitAdForm').addEventListener('submit', function(e) {
        console.log('Form submitted');
        e.preventDefault(); 


 
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('image').value; 


    let ads = JSON.parse(localStorage.getItem('ads')) || {};

 
    if (!ads[category]) {
        ads[category] = [];
    }

    ads[category].push({title, description, price, category, image});

    localStorage.setItem('ads', JSON.stringify(ads));



const successMessage = document.getElementById('submitSuccessMessage');
successMessage.style.display = 'block';


setTimeout(() => successMessage.style.display = 'none', 5000);

    });
});