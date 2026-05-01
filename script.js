// Smooth scrolling for navigation links in a horizontal layout
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const container = document.querySelector('.gallery-container');
            container.scrollTo({
                left: targetElement.offsetLeft,
                behavior: 'smooth'
            });
        }
    });
});

// Translate vertical mouse wheel scrolling into horizontal scrolling
const container = document.querySelector('.gallery-container');
container.addEventListener('wheel', (e) => {
    // Prevent default vertical scroll unless user is scrolling very fast
    e.preventDefault();
    container.scrollBy({
        left: e.deltaY * 2.5, // Scroll speed multiplier
        behavior: 'smooth'
    });
}, { passive: false });

// Function for the image click (onclick="toggleArtInfo()")
function toggleArtInfo() {
    // Finds the specific room section containing the clicked image
    const currentRoom = event.currentTarget.closest(".gallery-room");
    const artInfo = currentRoom.querySelector(".art-info-hidden");
    
    artInfo.classList.toggle("show");
}

// Logic for the buttons (Replaces the single ID with a class for multiple rooms)
// Note: In your HTML, change id="toggleArtBtn" to class="toggleArtBtn"
const toggleButtons = document.querySelectorAll(".toggleArtBtn");

toggleButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        // Finds the specific room section containing this specific button
        const currentRoom = this.closest(".gallery-room");
        const artInfo = currentRoom.querySelector(".art-info-hidden");
        
        artInfo.classList.toggle("show");
        
        // Update text based on state for this specific button
        this.textContent = artInfo.classList.contains("show") 
            ? "Hide Art Info" 
            : "Show Art Info";
    });
});