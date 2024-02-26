
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0; // Keep track of the last scroll position

    window.addEventListener("scroll", function() {
        // Get the current scroll position
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Determine if scrolling down
        if (currentScroll > lastScrollTop) {
            // Scrolling down, hide the header and footer
            document.querySelector("header").style.top = "-60px"; // Adjust as needed for your header's size
            document.querySelector("footer").style.bottom = "-60px"; // Adjust as needed for your footer's size
        } else {
            // Scrolling up, show the header and footer
            document.querySelector("header").style.top = "0";
            document.querySelector("footer").style.bottom = "0";
        }
        
        function categoryChanged(selectObject) {
            var value = selectObject.value;
            // Perform an action based on the selected value
            // For example, navigate to a new page
            if (value) {
                window.location.href = '/' + value; // Adjust URL pattern as needed
            }
        }
        
        function searchCategory() {
            var selectObject = document.getElementById('categorySelect');
            var value = selectObject.value;
            // Perform an action based on the selected value
            // For example, navigate to a category page
            if (value) {
                window.location.href = '/' + value; // Adjust URL pattern as needed
            } else {
                alert("Please select a category");
            }
        }
        
        
        // Update lastScrollTop to the current scroll position
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Reset to 0 if scrolling above the document
    }, false);
});

