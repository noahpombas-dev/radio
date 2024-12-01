document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio();
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumePercentage = document.getElementById('volumePercentage');
    const stationButtons = document.querySelectorAll('.station-btn');
    const nowPlayingSpan = document.querySelector('#nowPlaying span');
    let currentStation = null;

    function playStation(station) {
        if (currentStation) {
            currentStation.classList.remove('active');
        }
        currentStation = station;
        currentStation.classList.add('active');
        audio.src = station.dataset.station;
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        nowPlayingSpan.textContent = station.querySelector('span').textContent;
    }

    stationButtons.forEach(station => {
        station.addEventListener('click', () => {
            playStation(station);
        });
    });

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            if (currentStation) {
                audio.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value;
        audio.volume = volume / 100;
        volumePercentage.textContent = `${volume}%`;
    });

    audio.addEventListener('play', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });

    audio.addEventListener('pause', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
});

