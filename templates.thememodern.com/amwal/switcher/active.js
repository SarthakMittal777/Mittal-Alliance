// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL and extract the file name
    let currentPage = window.location.pathname.split("/").pop();
  
    // If there's no file name (for index pages), default to 'index.html'
    if (currentPage === "") {
      currentPage = "index.html";
    }
  
    // Select all anchor tags inside the nav
    const navLinks = document.querySelectorAll(".navi-level-1 li a");
  
    // Loop through each anchor tag
    navLinks.forEach((link) => {
      // Get the href attribute of the anchor tag
      const linkHref = link.getAttribute("href");
  
      // Extract the file name from the href
      const linkPage = linkHref.split("/").pop();
  
      // Check if the current page URL matches the href
      if (linkPage === currentPage) {
        // Add the 'active' class to the parent li element
        link.parentElement.classList.add("active");
      } else {
        // Remove the 'active' class if it doesn't match
        link.parentElement.classList.remove("active");
      }
    });
  });
  