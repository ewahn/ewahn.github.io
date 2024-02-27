
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0; 

    document.getElementById('searchButton').addEventListener('click', function() {
        window.location.href = 'listing.html';
    });
    

    window.addEventListener("scroll", function() {    
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
       
        if (currentScroll > lastScrollTop) {
            
            document.querySelector("header").style.top = "-60px"; 
            document.querySelector("footer").style.bottom = "-60px"; 
        } else {
       
            document.querySelector("header").style.top = "0";
            document.querySelector("footer").style.bottom = "0";
        }
        
        function categoryChanged(selectObject) {
            var value = selectObject.value;             
            if (value) {
                window.location.href = '/' + value; 
            }
        }
        

         
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    }, false);
        
    });
    

