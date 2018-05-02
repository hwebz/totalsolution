(function(window) {
    var bgMusic = document.getElementById('bgMusic');
    var upVol = document.getElementById('up');
    var downVol = document.getElementById('down');
    var skipBtn = document.getElementById('skip');

    function controllerVisibility(e) {
        if (e.target.id == 'up') {
            if (bgMusic.volume <= 0.8) {
                bgMusic.volume += 0.2;
            }
        } else {
            if (bgMusic.volume >= 0.2) {
                bgMusic.volume -= 0.2;
            }
        }     
    }

    window.addEventListener('DOMContentLoaded', function() {
        bgMusic.play();

        upVol.addEventListener('click', controllerVisibility);
        downVol.addEventListener('click', controllerVisibility);

        skipBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var dest = this.getAttribute('data-to');

            window.location = dest;

            return false;
        });

        setTimeout(function() {
            window.location = skipBtn.getAttribute('data-to');
        }, 10000);
    });
    
})(window);