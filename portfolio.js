window.addEventListener("load", () => {
  const loader = document.querySelector
  ("#preloader");
  const loaderWrapper = document.querySelector
  (".loader-wrapper");
  if (loader) {
    loader.remove(); 
    loaderWrapper.remove();
  }
});



function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("moreText");
    const btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.innerText = "Read more";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.innerText = "Read less";
    }
}


const text = "Front-End Developer🚀";
let index = 0;
let isDeleting = false;

function type() {
    const element = document.getElementById("typewriter");

    if (isDeleting) {
        element.innerHTML = text.substring(0, index--);
    } else {
        element.innerHTML = text.substring(0, index++);
    }

    let speed = isDeleting ? 80 : 200; // deleting is faster

    if (!isDeleting && index === text.length + 1) {
        isDeleting = true;
        speed = 1000; // pause before deleting
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        speed = 100; // pause before typing again
    }

    setTimeout(type, speed);
}

type();
