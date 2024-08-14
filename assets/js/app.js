function playVideo(videoId, button) {
    const video = document.getElementById(videoId);
    video.play();
    button.style.display = 'none';

    video.addEventListener('play', () => {
        video.controls = true;
    });

    video.addEventListener('pause', () => {
        video.controls = false;
        button.style.display = 'block';
    });

    video.addEventListener('ended', () => {
        video.controls = false;
        button.style.display = 'block';
    });
}

document.getElementById('playIcon').addEventListener('click', () => {
    playVideo('diligenceVideo', document.getElementById('playIcon'));
});

document.addEventListener('DOMContentLoaded', function () {
    const playIcons = document.querySelectorAll('.pause-icon');
    let currentPlayingVideo = null;

    playIcons.forEach(playIcon => {
        playIcon.addEventListener('click', function () {
            const videoId = this.getAttribute('data-video-id');
            const videoElement = document.getElementById(videoId);

            // Pause and reset currently playing video
            if (currentPlayingVideo && currentPlayingVideo !== videoElement) {
                currentPlayingVideo.pause();
                currentPlayingVideo.currentTime = 0;
                currentPlayingVideo.removeAttribute('controls');
                currentPlayingVideo.parentElement.querySelector('.pause-icon').style.display = 'block';
            }

            // Toggle play/pause for the clicked video
            if (videoElement.paused) {
                videoElement.play();
                videoElement.setAttribute('controls', 'true');
                this.style.display = 'none';
                currentPlayingVideo = videoElement;
            } else {
                videoElement.pause();
                videoElement.currentTime = 0;
                videoElement.removeAttribute('controls');
                this.style.display = 'block';
                currentPlayingVideo = null;
            }
        });
    });
});



// ==============PARTICLE JS================
particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#254153" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 7, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#192d59", "opacity": 1, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "remove" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);