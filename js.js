document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".multiple-text");
  const textArray = ["Front-end Developer", "UX/UI Designer", "Creative Coder"];
  let index = 0,
    charIndex = 0,
    isDeleting = false;

  function animateText() {
    textElement.innerHTML = textArray[index].substring(0, charIndex);
    charIndex += isDeleting ? -1 : 1;

    if (!isDeleting && charIndex === textArray[index].length) {
      setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
    }

    setTimeout(animateText, isDeleting ? 50 : 100);
  }

  animateText();
});
// section 2

//  thanh header
function loadHeader() {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch((error) => console.log("Lỗi khi tải header:", error));
}

window.onload = loadHeader; // Chạy khi trang tải xong
