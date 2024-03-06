// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");
document.addEventListener("DOMContentLoaded", function () {
    const pointer = document.getElementById("pointer");

    document.addEventListener("mousemove", function (e) {
        // Update the position of the pointer element with a slight delay
        const x = e.clientX - pointer.clientWidth / 2;
        const y = e.clientY - pointer.clientHeight / 2;

        pointer.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// let mm = new MagnetMouse({
//     magnet: {
//       element: '.magnet'
//     }
//   });
  
// mm.init();
  
