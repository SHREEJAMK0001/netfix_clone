// let navbar = document.getElementById("navbar");

// const toggle = () => {
//     if (navbar.style.display === "none") {
//         navbar.style.display = "block";
//         navbar.style.textAlign = "left";
//     } else {
//         navbar.style.display = "none";
//     }
// };
function carousel() {
    let carouselSlider = document.querySelector(".carousel-slider");
    let list = document.querySelector(".carousel-list");
    let item = document.querySelector(".carousel-item");
    let list2;
    let a, b;
    const speed = 1;
    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone() {
        list2 = list.cloneNode(true);
        carouselSlider.append(list2);
        list2.style.left = `${width}px`;
    }

    // function movefirst() {
    //     x -= speed;
    //     if (width >= Math.abs(x)) {
    //         list.style.left = `${x}px`;
    //     } else {
    //         clearInterval(a); // Stop the interval when the first carousel finishes
    //         x = width;
    //     }
    // }

    // function movesecond() {
    //     x2 -= speed;
    //     if (list.offsetWidth >= Math.abs(x2)) {
    //         list2.style.left = `${x2}px`;
    //     } else {
    //         clearInterval(b); // Stop the interval when the second carousel finishes
    //         x2 = width;
    //     }
    // }
    function movefirst() {
        x -= speed;
        if (width >= Math.abs(x)) {
            list.style.left = `${x}px`;
        } else {
            x = 0; // Reset x to 0 for continuous looping
            list.style.left = `${x}px`;
        }
    }
    
    function movesecond() {
        x2 -= speed;
        if (list.offsetWidth >= Math.abs(x2)) {
            list2.style.left = `${x2}px`;
        } else {
            x2 = width; // Reset x2 to width for continuous looping
            list2.style.left = `${x2}px`;
        }
    }
    
    function hover() {
        clearInterval(a);
        clearInterval(b);
    }

    function unhover() {
        a = setInterval(movefirst, 10);
        b = setInterval(movesecond, 10);
    }

    clone();
    a = setInterval(movefirst, 10);
    b = setInterval(movesecond, 10);

    carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();
function showVideo(videoId) {
    const video = document.getElementById(videoId);
    const carousel = document.querySelector('.carousel');
  
    // Check if the video is currently hidden
    if (video.classList.contains('video-hidden')) {
      // Hide the carousel
      carousel.style.display = 'block';
  
      // Show the video
      video.classList.remove('video-hidden');
      video.classList.add('video-visible');
      video.play();
  
      // Listen for video ended event
      video.addEventListener('ended', function() {
        // Hide the video
        video.pause();
        video.currentTime = 0;
        video.classList.remove('video-visible');
        video.classList.add('video-hidden');
  
        // Show the carousel
        carousel.style.display = 'block';
      });
    } else {
      // Hide the video
      video.pause();
      video.currentTime = 0;
      video.classList.remove('video-visible');
      video.classList.add('video-hidden');
  
      // Show the carousel
      carousel.style.display = 'block';
    }
  }