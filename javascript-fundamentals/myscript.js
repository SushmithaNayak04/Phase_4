// alert('Photo Gallery Project Started..');

var msg = document.getElementById("desc").innerHTML;

function update(element) {
    document.getElementById("desc").innerHTML = element.alt;
}

function unDo() {
    document.getElementById("desc").innerHTML = msg;
}

function showContent() {
    element = document.getElementById("content");
    element.style.display = "block";
}

function hideContent() {
    element = document.getElementById("content");
    element.style.display = "none";
}