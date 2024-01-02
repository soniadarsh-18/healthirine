$(".icon").click(function () {
  $("span").toggleClass("cancel");
});

//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Wait for the page to finish loading
window.addEventListener("load", function () {
  // Set a timeout to simulate a long-loading page
  setTimeout(function () {
    // Add the "loaded" class to the body
    document.querySelector("body").classList.add("loaded");
  }, 500);
});

// Affiliate Disclaimer

const affiliateLink = document.getElementById("affiliate-link");
const popupOverlay = document.querySelector(".popup-overlay");
const closeBtn = document.querySelector(".close-btn");

affiliateLink.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});
document
  .getElementById("affiliate-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // add this line to prevent the default behavior
    document.querySelector(".popup-overlay").style.display = "flex";
  });
var scrollPosition; // add this variable to store the scroll position

document
  .getElementById("affiliate-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // save the current scroll position
    document.querySelector(".popup-overlay").style.display = "flex";
  });

document
  .querySelector(".close-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".popup-overlay").style.display = "none";
    window.scrollTo(0, scrollPosition); // restore the scroll position
  });

const allToggleModal = document.querySelectorAll('[data-toggle="modal"]');

allToggleModal.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const modal = document.querySelector(this.dataset.target);
    const modalClose = modal.querySelector(".modal__close");

    modal.classList.add("show");

    modalClose.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.remove("show");
    });
  });
});

document.addEventListener("click", function (e) {
  if (e.target.matches(".modal")) {
    e.target.classList.remove("show");
  }
});

//JS CODE COPY BLOG URL

document.addEventListener("DOMContentLoaded", function () {
  const copyLink = document.getElementById("copyLink");
  const copyLinkText = document.getElementById("copyLinkText");
  const blogURL = "https://healthirine.com/"; // Replace with your actual blog URL

  copyLink.addEventListener("click", function (event) {
    event.preventDefault();

    // Create a temporary textarea element to copy the URL to the clipboard
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = blogURL;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    // Change the link text to "Copied" for a brief duration
    copyLinkText.textContent = "Copied!";
    setTimeout(function () {
      copyLinkText.textContent = "Copy Blog URL";
    }, 2500); // Change back to "Copy Blog URL" after 2 seconds
  });
});

// JS CODE FOR SHARE WORD DYNAMIC CHANGE

document.addEventListener("DOMContentLoaded", function () {
  const shareLink = document.getElementById("shareLink");
  const shareLinkText = document.getElementById("shareLinkText");

  shareLink.addEventListener("click", function (event) {
    event.preventDefault();

    // Your sharing logic here
    // For demonstration purposes, we will change the text to "Sharing" for 2 seconds
    shareLinkText.textContent = "Sharing";

    setTimeout(function () {
      shareLinkText.textContent = "Share";
    }, 3000); // Change back to "Share" after 3 seconds
  });
});

// Get the modal and image elements
var modal = document.getElementById("myModal");
var img = document.getElementById("myImage");
var modalImg = document.getElementById("modalImage");
var yourNewButton = document.getElementById("yourNewButtonId"); // Change "yourNewButtonId" to your desired button's ID

// Open the modal when the image is clicked
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
// Close the modal when the new button is clicked
yourNewButton.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function calculate() {
  var target = document.getElementById("target").value;
  var consumed = document.getElementById("consumed").value;
  var unit = document.getElementById("unit").value;
  var unitConsumed = document.getElementById("unit-consumed").value;

  var errorMessageElement = document.getElementById("error-message");
  var resultElement = document.getElementById("result");
  var productElement = document.getElementById("product");

  errorMessageElement.textContent = "";
  resultElement.textContent = "";
  productElement.innerHTML = "";

  if (target === "" || consumed === "") {
    errorMessageElement.textContent = "Please fill in all the fields.";
    return;
  }

  if (unit === "liters") {
    target *= 1000;
  }

  if (unitConsumed === "liters") {
    consumed *= 1000;
  }

  var remaining = target - consumed;

  if (remaining < 0) {
    resultElement.textContent = "You exceeded your daily target!";
  } else if (remaining === 0) {
    resultElement.textContent =
      "Congratulations! You reached your daily target!";
  } else {
    resultElement.textContent =
      "You have " + remaining + " ml left to reach your daily target.";
  }

  // Product recommendation based on water intake
  var productButton = document.createElement("button");
  productButton.classList.add("product-button");
  productButton.textContent =
    "Get our premium water bottle for better hydration!";
  productButton.addEventListener("click", function () {
    window.open("https://amzn.to/3PqalWx", "_blank");
  });
  productElement.appendChild(productButton);
}

// FITNESS GOAL TRACKER

function calculate() {
  var goal = document.getElementById("target").value;
  var achieved = document.getElementById("achieved").value;
  var unit = document.getElementById("unit").value;

  var errorMessageElement = document.getElementById("error-message");
  var resultElement = document.getElementById("result");
  var productElement = document.getElementById("product");

  errorMessageElement.textContent = "";
  resultElement.textContent = "";
  productElement.innerHTML = "";

  if (goal === "" || achieved === "") {
    errorMessageElement.textContent = "Please fill in all the fields.";
    return;
  }

  var remaining = goal - achieved;

  if (remaining < 0) {
    resultElement.textContent =
      "Congratulations! You exceeded your daily goal!";
  } else if (remaining === 0) {
    resultElement.textContent = "Congratulations! You reached your daily goal!";
  } else {
    resultElement.textContent =
      "You have " + remaining + " " + unit + " left to reach your daily goal.";
  }

  // Product recommendation based on fitness goal
  var productButton = document.createElement("button");
  productButton.classList.add("product-button");
  productButton.textContent =
    "Check out our fitness equipment for better results!";
  productButton.addEventListener("click", function () {
    window.open("https://example.com/fitness-equipment", "_blank");
  });
  productElement.appendChild(productButton);
}

