const b1 =
    document.querySelectorAll(".button");

b1.forEach(function (btn) {
    btn.addEventListener("click", function () {
        alert("YUOR ORDER IS PLACED IN 1O MINUTES");
    });
});
function gotologin() {
    window.location.href = "login.html";
}


function toggleSearch() {
    const searchbar = document.getElementById("searchbar");
    if (searchbar.style.display === "none") {
        searchbar.style.display = "inline-block";
        searchbar.focus();
    } else {
        searchbar.style.display = "none";
        searchbar.value = "";
        showAllBoxes(); // Show all boxes when search closes
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const searchbar = document.getElementById("searchbar");
    const boxes = document.querySelectorAll(".box");

    searchbar.addEventListener("input", function () {
        const value = searchbar.value.toLowerCase();
 
        boxes.forEach(box => {
            if (box.textContent.toLowerCase().includes(value)) {
                box.style.display = "block"; // or "inline-block" if needed
            } else {
                box.style.display = "none";
            }
        });
    });
});

function showAllBoxes() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.style.display = "block");
}

