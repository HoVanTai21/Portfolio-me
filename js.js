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
  return fetch("header.html") // Thêm return để đảm bảo trả về Promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch((error) => console.log(" Lỗi khi tải header:", error));
}

function loadFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => console.log("Lỗi khi tải footer:", error));
}

//// lấy data
function getData(language, key) {
  return fetch("data/noidung.json") // đọc tệp json
    .then((response) => response.json()) // chuyển dữ liệu thành obj
    .then((data) => data[language][key])
    .catch((error) => console.error("Lỗi:", error));
}

// hàm hiển thị dữ liệu
function loadNoidung(language) {
  getData(language, "Gioithieu").then(
    (text) => (document.getElementById("Gioithieu").innerText = text)
  );
  getData(language, "Bantomtat").then(
    (text) => (document.getElementById("Bantomtat").innerText = text)
  );
  getData(language, "Cackynang").then(
    (text) => (document.getElementById("Cackynang").innerText = text)
  );
  getData(language, "tieude1").then(
    (text) => (document.getElementById("tieude1").innerText = text)
  );
  getData(language, "tieude2").then(
    (text) => (document.getElementById("tieude2").innerText = text)
  );
  getData(language, "tieude3").then(
    (text) => (document.getElementById("tieude3").innerText = text)
  );
  getData(language, "tieude4").then(
    (text) => (document.getElementById("tieude4").innerText = text)
  );

  getData(language, "tieude5").then(
    (text) => (document.getElementById("tieude5").innerText = text)
  );
  getData(language, "tieude6").then(
    (text) => (document.getElementById("tieude6").innerText = text)
  );
  getData(language, "tieude7").then(
    (text) => (document.getElementById("tieude7").innerText = text)
  );
  getData(language, "tieude8").then(
    (text) => (document.getElementById("tieude8").innerText = text)
  );
  getData(language, "tieude9").then(
    (text) => (document.getElementById("tieude9").innerText = text)
  );
  getData(language, "tieude10").then(
    (text) => (document.getElementById("tieude10").innerText = text)
  );
  getData(language, "tieude11").then(
    (text) => (document.getElementById("tieude11").innerText = text)
  );
  getData(language, "tieude12").then(
    (text) => (document.getElementById("tieude12").innerText = text)
  );
  getData(language, "tieude13").then(
    (text) => (document.getElementById("tieude13").innerText = text)
  );
  getData(language, "tieude14").then(
    (text) => (document.getElementById("tieude14").innerText = text)
  );
  getData(language, "Hientai").then(
    (text) => (document.getElementById("Hientai").innerText = text)
  );

  getData(language, "Noidung1").then(
    (text) => (document.getElementById("Noidung1").innerText = text)
  );
  getData(language, "Noidung2").then(
    (text) => (document.getElementById("Noidung2").innerText = text)
  );
  getData(language, "Noidung3").then(
    (text) => (document.getElementById("Noidung3").innerText = text)
  );
  getData(language, "Noidungnho1").then(
    (text) => (document.getElementById("Noidungnho1").innerText = text)
  );
  getData(language, "Noidungnho2").then(
    (text) => (document.getElementById("Noidungnho2").innerText = text)
  );
  getData(language, "Noidungnho3").then(
    (text) => (document.getElementById("Noidungnho3").innerText = text)
  );
  getData(language, "btn").then(
    (text) => (document.getElementById("btn").innerText = text)
  );
  getData(language, "btnPortfolio").then(
    (text) => (document.getElementById("btnPortfolio").innerText = text)
  );
  getData(language, "tudau").then(
    (text) => (document.getElementById("tudau").innerText = text)
  );
  getData(language, "chuyennganh").then(
    (text) => (document.getElementById("chuyennganh").innerText = text)
  );
  getData(language, "namhoc").then(
    (text) => (document.getElementById("namhoc").innerText = text)
  );
  getData(language, "kynang").then(
    (text) => (document.getElementById("kynang").innerText = text)
  );
}

// Hàm khởi chạy sau khi header đã load xong
function init() {
  loadNoidung("VN"); // Mặc định hiển thị tiếng Việt

  // Gán sự kiện sau khi header đã tải xong
  document
    .getElementById("btn-en")
    ?.addEventListener("click", () => loadNoidung("EN"));
  document
    .getElementById("btn-vn")
    ?.addEventListener("click", () => loadNoidung("VN"));
}

// Khi trang tải xong, load header trước rồi mới load nội dung
window.onload = function () {
  loadHeader().then(() => {
    setTimeout(init, 500); // Đợi header tải xong rồi mới gán sự kiện
  });
};
