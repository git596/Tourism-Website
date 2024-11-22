// Toggle the dropdown menu
function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Hotel booking function
function bookHotel() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const roomType = document.getElementById('roomType').value;

    // Validate form fields
    if (!name || !email || !phone || !checkin || !checkout || !adults || !roomType) {
        alert("Please fill out all required fields.");
        return;
    }

    // Calculate number of days
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const timeDiff = checkoutDate - checkinDate;
    const numberOfDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    if (numberOfDays <= 0) {
        alert("Check-out date must be after check-in date.");
        return;
    }

    // Display booking confirmation
    const bookingSummary = `
        Booking Summary:
        - Name: ${name}
        - Email: ${email}
        - Phone: ${phone}
        - Check-In Date: ${checkin}
        - Check-Out Date: ${checkout}
        - Duration: ${numberOfDays} day(s)
        - Adults: ${adults}
        - Children: ${children || 0}
        - Room Type: ${roomType}
    `;

    alert(bookingSummary);
    console.log("Booking Details:", {
        name,
        email,
        phone,
        checkin,
        checkout,
        numberOfDays,
        adults,
        children,
        roomType,
    });
}

// Automatically close dropdown when clicking outside of it
window.addEventListener('click', function (event) {
    const menu = document.getElementById('dropdown-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    if (menu.style.display === 'block' && !menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        menu.style.display = 'none';
    }
});

function submitForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!fullName || !email || !phone || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    alert(`Thank you, ${fullName}! We have received your message and will get back to you soon.`);
    console.log("Contact Form Details:", {
        fullName,
        email,
        phone,
        message
    });

    // Clear form fields
    document.getElementById('contactForm').reset();
}






// const carousel = document.querySelector('.carousel');
// const images = carousel.querySelectorAll('img');
// let currentImage = 0;

// setInterval(() => {
//   images[currentImage].classList.remove('active');
//   images[currentImage].classList.add('inactive');
//   currentImage = (currentImage + 1) % images.length;
//   images[currentImage].classList.remove('inactive');
//   images[currentImage].classList.add('active');
// }, 3000); 
// adjust the interval time as needed


