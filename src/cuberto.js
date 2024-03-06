document.addEventListener("DOMContentLoaded", function () {
    const pointer = document.getElementById("pointer");

    document.addEventListener("mousemove", function (e) {
        // Update the position of the pointer element with a slight delay
        const x = e.clientX - pointer.clientWidth / 2;
        const y = e.clientY - pointer.clientHeight / 2;

        pointer.style.transform = `translate(${x}px, ${y}px)`;
    });

    const textContainer = document.querySelector(".hvr");
            const video = document.getElementById("background-video");

            textContainer.addEventListener("mouseover", function () {
                video.style.display = "block";
                video.play();
            });

            textContainer.addEventListener("mouseout", function () {
                video.pause();
                video.style.display = "none";
            });

            document.addEventListener("mousemove", function (e) {
                // Update the position of the video element with a slight delay
                const x = e.clientX - video.clientWidth / 2;
                const y = e.clientY - video.clientHeight / 2;

                video.style.transform = `translate(${x}px, ${y}px)`;
            });
});

