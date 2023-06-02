let modal = document.createElement("div");
modal.id = "modal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.zIndex = "1";
modal.style.left = "0";
modal.style.top = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.overflow = "auto";
modal.style.backgroundColor = "rgba(0,0,0,0.9)";
document.body.appendChild(modal);

let modalContent = document.createElement("div");
modalContent.style.position = "relative";
modalContent.style.margin = "auto";
modalContent.style.width = "60%";
modalContent.style.maxWidth = "800px";
modal.appendChild(modalContent);

let modalImg = document.createElement("img");
modalImg.style.margin = "auto";
modalImg.style.display = "block";
modalImg.style.width = "100%";
modalContent.appendChild(modalImg);

let prevBtn = document.createElement("a");
prevBtn.textContent = "Prev";
prevBtn.style.position = "absolute";
prevBtn.style.top = "50%";
prevBtn.style.left = "0";
prevBtn.style.transform = "translateY(-50%)";
prevBtn.style.textDecoration = "none";
prevBtn.style.color = "white";
prevBtn.style.fontSize = "2em";
prevBtn.style.opacity = "0.7";
prevBtn.style.cursor = "pointer";
modalContent.appendChild(prevBtn);

let nextBtn = document.createElement("a");
nextBtn.textContent = "Next";
nextBtn.style.position = "absolute";
nextBtn.style.top = "50%";
nextBtn.style.right = "0";
nextBtn.style.transform = "translateY(-50%)";
nextBtn.style.textDecoration = "none";
nextBtn.style.color = "white";
nextBtn.style.fontSize = "2em";
nextBtn.style.opacity = "0.7";
nextBtn.style.cursor = "pointer";
modalContent.appendChild(nextBtn);

let images = Array.from(document.querySelectorAll("#gallery img"));
let currentIndex;

images.forEach((img, index) => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        currentIndex = index;
    });
});

prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    modalImg.src = images[currentIndex].src;
});

nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    modalImg.src = images[currentIndex].src;
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
