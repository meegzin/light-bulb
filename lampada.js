const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lightbulb = document.getElementById('light-bulb');

function isLightCrashed(){
    return lightbulb.src.indexOf('quebrada') > -1;
}

function lightbulbOn(){
    if(!isLightCrashed()){
        lightbulb.src = './img/ligada.jpg';
    }
};

function lightbulbOff(){
    if(!isLightCrashed()){
        lightbulb.src = './img/desligada.jpg';
    }
}

function lightbulbCrashed(){
    lightbulb.src = './img/quebrada.jpg';
}


turnOn.addEventListener('click', lightbulbOn);
turnOff.addEventListener('click', lightbulbOff);
lightbulb.addEventListener('mouseover', lightbulbOn);
lightbulb.addEventListener('mouseleave', lightbulbOff);
lightbulb.addEventListener('dblclick', lightbulbCrashed);