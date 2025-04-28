$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        cssEase: 'linear',
        speed: 1500,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slid3how: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    let audio = new Audio('assets/defi/devinette.mp3');
    let isPlaying = false;

    let specialProfiles = {
        "Khalilos": false,
        "Pantoufle": false,
        "English plz": false
    };

    function allSpecialProfilesClicked() {
        return specialProfiles["Khalilos"] && specialProfiles["Pantoufle"] && specialProfiles["English plz"];
    }

    function resetSpecialProfiles() {
        specialProfiles = {
            "Khalilos": false,
            "Pantoufle": false,
            "English plz": false
        };
    }

    $('.carousel-item').on('click', function() {
        var $item = $(this);
        var nickname = $item.find('.nickname').text().trim();

        var $img = $item.find('img');
        var posX = $img.offset().left + $img.width() / 2;
        var posY = $img.offset().top + $img.height() / 2;

        confetti({
            particleCount: 100,
            spread: 60,
            origin: {
                x: posX / window.innerWidth,
                y: (posY - window.scrollY) / window.innerHeight
            }
        });

        $img.css('visibility', 'hidden');
        $item.find('.nickname').css('visibility', 'hidden');

        if (specialProfiles.hasOwnProperty(nickname)) {
            specialProfiles[nickname] = true;

            let foundMessage = $('<div class="found-message">¡Bien! ' + (3 - Object.values(specialProfiles).filter(Boolean).length) + ' leyendas restantes</div>');
            $('body').append(foundMessage);

            foundMessage.css({
                'position': 'fixed',
                'bottom': '20px',
                'right': '20px',
                'background-color': 'rgba(138, 53, 223, 0.9)',
                'color': 'white',
                'padding': '10px 15px',
                'border-radius': '5px',
                'font-size': '16px',
                'z-index': '9999',
                'font-family': '"LondrinaSolid", sans-serif',
                'opacity': '0'
            }).animate({
                'opacity': '1'
            }, 300);

            setTimeout(function() {
                foundMessage.animate({
                    'opacity': '0'
                }, 300, function() {
                    foundMessage.remove();
                });
            }, 2000);
        } else {
            resetSpecialProfiles();
        }

        if (allSpecialProfilesClicked()) {
            let message = $('<div class="defi-message">¡Felicidades, ahora cántalo!<br><span class="sound-note"><ion-icon name="volume-high-outline"></ion-icon> Activez le son</span></div>');
            $('body').append(message);

            message.css({
                'position': 'fixed',
                'top': '50%',
                'left': '50%',
                'transform': 'translate(-50%, -50%)',
                'background-color': 'rgba(30, 102, 44, 0.95)',
                'color': 'white',
                'padding': '40px 50px',
                'border-radius': '15px',
                'font-size': '38px',
                'z-index': '9999',
                'box-shadow': '0 0 40px rgba(0,0,0,0.5)',
                'text-align': 'center',
                'font-family': '"LondrinaSolid", sans-serif',
                'opacity': '0',
                'min-width': '500px',
                'border': '4px solid white'
            }).find('.sound-note').css({
                'font-size': '22px',
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'margin-top': '15px',
                'opacity': '0.9',
                'gap': '8px'
            });

            message.animate({
                'opacity': '1',
                'transform': 'translate(-50%, -50%) scale(1.1)',
            }, 500, function() {
                $(this).animate({
                    'transform': 'translate(-50%, -50%) scale(1)'
                }, 200);
            });

            if (isPlaying) {
                audio.pause();
                audio.currentTime = 0;
            }
            audio.play();
            isPlaying = true;

            setTimeout(function() {
                message.animate({
                    'opacity': '0'
                }, 500, function() {
                    message.remove();
                });
            }, 5000);

            setTimeout(function() {
                confetti({
                    particleCount: 300,
                    spread: 120,
                    origin: { x: 0.5, y: 0.5 }
                });
            }, 500);

            resetSpecialProfiles();
        }

        setTimeout(function() {
            $img.css('visibility', 'visible');
            $item.find('.nickname').css('visibility', 'visible');
        }, 10000);
    });

    $('.videos .choree').attr('poster', 'assets/video/minia_choree.webp');
});