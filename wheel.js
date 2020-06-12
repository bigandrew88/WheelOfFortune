'use strict';

var $ = function (id) { return document.getElementById(id); };

var finalColor;

(function () {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;

    startButton.addEventListener('click', () => {

    startButton.style.pointerEvents = 'none';

    deg = Math.floor(5000 + Math.random() * 5000);

    wheel.style.transition = 'all 10s ease-out';

    wheel.style.transform = `rotate(${deg}deg)`;

    wheel.classList.add('blur');
  });
    
    wheel.addEventListener('transitionend', () => {

    wheel.classList.remove('blur');

    startButton.style.pointerEvents = 'auto';

    wheel.style.transition = 'none';

    const actualDeg = deg % 360;
    //console.log(actualDeg);
    finalColor = findColor(actualDeg);
    //console.log(finalColor);
      
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();

function findColor(angle){
    let color;
    if (angle >= 0 && angle < 15){
        color =  "yellow_green";
        $("prize").value = "5000";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 15 && angle < 40){
        color =  "yellow";
        $("prize").value = "1000";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 45 && angle < 66){
        color =  "orange";
        $("prize").value = "500";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 66 && angle < 98){
        color =  "red";
        $("prize").value = "250";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 98 && angle < 124){
        color =  "pink";
        $("prize").value = "500";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 124 && angle < 145){
        color =  "light_pink";
        $("prize").value = "750";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 145 && angle < 180){
        color =  "lighter_pink";
        $("prize").value = "250";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 180 && angle < 206){
        color =  "light_purple";
        $("prize").value = "1000";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 206 && angle < 231){
        color =  "purple";
        $("prize").value = "2500";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 231 && angle < 257){
        color =  "blue";
        $("prize").value = "250";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 257 && angle < 276){
        color =  "light_blue";
        $("prize").value = "750";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 276 && angle < 308){
        color =  "blue_green";
        $("prize").value = "500";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 308 && angle < 334){
        color =  "green";
        $("prize").value = "1000";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }else if (angle >= 334 && angle < 359){
        color =  "light_green";
        $("prize").value = "250";
        $("total").value = parseInt($("prize").value) + parseInt($("total").value);
    }
   return color; 
}
