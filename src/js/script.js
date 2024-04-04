// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  
  form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission
    
    // Submit the form data using Fetch API
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form)
      });
      
      if (response.ok) {
        // If the response is successful, show a pop-up notification
        alert('Your message has been sent successfully!');
        // Reset the form
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error if necessary
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  const errorMessages = document.querySelectorAll('.error-message');

  form.addEventListener('submit', function (event) {
    let isValid = true;

    // Check each required input field
    form.querySelectorAll('[required]').forEach(function (input) {
      if (!input.value.trim()) {
        isValid = false;
        const errorMessage = input.nextElementSibling;
        errorMessage.classList.remove('hidden');
      }
    });

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });

  // Add event listeners to hide error messages when inputs are focused or changed
  form.querySelectorAll('[required]').forEach(function (input) {
    input.addEventListener('input', function () {
      const errorMessage = input.nextElementSibling;
      errorMessage.classList.add('hidden');
    });

    input.addEventListener('focus', function () {
      const errorMessage = input.nextElementSibling;
      errorMessage.classList.add('hidden');
    });
  });
});
