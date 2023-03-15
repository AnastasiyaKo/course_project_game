"use strict";

//Паралакс главного меню
const canvas=document.getElementById('canvas1');
const ctx= canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width=window.innerWidth;
const CANVAS_HEIGHT=canvas.height=window.innerHeight;
let gameSpeed=3;


const backgroundLayer1=new Image();
backgroundLayer1.src= "img/MainMenu/MainMenu1.png";
const backgroundLayer2=new Image();
backgroundLayer2.src= "img/MainMenu/MainMenu2.png";
const backgroundLayer3=new Image();
backgroundLayer3.src= "img/MainMenu/MainMenu3.png";



window.addEventListener("load", function() {
    class layer {
        constructor(image,speedModifier) {
            this.x=0;
            this.y=0;
            this.width=window.innerWidth;
            this.height=window.innerHeight;
            this.x2=this.width;
            this.image= image;
            this.speedModifier= speedModifier;
            this.speed=gameSpeed*this.speedModifier;
        }

        update() {
            this.speed=gameSpeed*this.speedModifier;
            if (this.x<= -this.width) {
                this.x=this.width+this.x2-this.speed;
            }
            if(this.x2<= -this.width) {
                this.x2=this.width+this.x-this.speed;
            }
            this.x= Math.floor(this.x-this.speed);
            this.x2=Math.floor(this.x2-this.speed);
        }

        draw() {
            ctx.drawImage( this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage( this.image, this.x2, this.y, this.width, this.height);
        }
    }

    const layer1=new layer(backgroundLayer1,0);
    const layer2=new layer(backgroundLayer2,0.5);
    const layer3=new layer(backgroundLayer3,0);


    const gameObjects= [layer1, layer2,layer3];

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        gameObjects.forEach( object => {
            object.update();
            object.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();

});










//SPA


window.onhashchange = switchToStateFromURLHash;

let SPAState = {};

function switchToStateFromURLHash() {
    let URLHash = window.location.hash;

    let stateStr = URLHash.substring(1);

    let pageHTML = "";

    let startGame=document.getElementById("start");
    let rulesGame=document.getElementById("rules");
    let recordGame=document.getElementById("record");


    switch (stateStr) {
        case 'Main':
            startGame.style.cssText=" display: block";
            rulesGame.style.cssText="  display: block";
            recordGame.style.cssText="  display: block";
            break;
        case 'Start':
            pageHTML+="<a class='btn' id='main1' onclick='switchToMainPage()'>Главная</a>";
            startGame.style.cssText=" display: none";
            rulesGame.style.cssText=" display: none";
            recordGame.style.cssText=" display: none";
            break;
        case 'Rules':
            pageHTML+="<a class='btn' id='main' onclick='switchToMainPage()'>Главная</a>";
            startGame.style.cssText=" display: none";
            rulesGame.style.cssText=" display: none";
            recordGame.style.cssText=" display: none";
            break;
        case 'Record':
            pageHTML+="<a class='btn' id='main' onclick='switchToMainPage()'>Главная</a>";
            startGame.style.cssText=" display: none";
            rulesGame.style.cssText=" display: none";
            recordGame.style.cssText=" display: none";
            break;
    }
    document.getElementById('IPage').innerHTML = pageHTML;
}

function switchToState(newState) {
    let stateStr = newState.pagename;
    location.hash = stateStr;
}

function switchToMainPage() {
    switchToState({ pagename: 'Main' });
}
function switchToStartPage() {
    switchToState({ pagename: 'Start' });
}
function switchToRulesPage() {
    switchToState({ pagename: 'Rules' });
}
function switchToRecordPage() {
    switchToState({ pagename: 'Record' });
}

switchToStateFromURLHash();



