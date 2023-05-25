class Player {

    constructor() {
        this.width = 7;
        this.height = 7;
        this.positionX = 70;
        this.positionY = 5;
        this.domElement = null;
        this.createDomElement();
        this.createEventListener();
        this.bonus = 0;
    }

    createDomElement() {
        this.domElement = document.createElement("div");
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        const parentElem = document.getElementById("board");
        parentElem.appendChild(this.domElement);
    }

    moveLeft() {
        this.positionX--;
        if(this.positionX<15 || this.positionX>80){
            console.log("you are out of the road, you are losing points");
            this.bonus--;
            if(this.bonus<0){
                console.log("game over");
            }
            console.log(this.bonus);
        }
    }
    moveRight() {
        this.positionX++;
        if(this.positionX<15 || this.positionX>80){
            console.log("you are out of the road, you are losing points");
            this.bonus--;
            if(this.bonus<0){
                console.log("game over");
            }
            console.log(this.bonus);
        }
    }
    moveUp() {
        this.positionY++;
    }
    moveDown() {
        this.positionY--;
    }
    
    
    createEventListener() {
        document.addEventListener("keydown", (event) => {
            if (event.code === "ArrowRight") {
                player.moveRight();
                if (this.positionX > 95) {
                this.positionX = 95;
                }
                
                this.domElement.style.left = this.positionX + "vw";
            }
            else if (event.code === "ArrowLeft") {
                player.moveLeft();
                if (this.positionX < 0) {
                    this.positionX = 0;
                }
                this.domElement.style.left = this.positionX + "vw";
            }
            else if (event.code === "ArrowUp") {
                player.moveUp();
                if (this.positionY >100) {
                    this.positionY = 100;
                }
                this.domElement.style.bottom = this.positionY + "vh";
            }
            else if (event.code === "ArrowDown") {
                player.moveDown();
                if (this.positionY < 0) {
                    this.positionY = 0;
                }
                this.domElement.style.bottom = this.positionY + "vh";
            } 
        })
    }
    obsCollision(newObstacle) {
        if (newObstacle.positionX < player.positionX + player.width &&
            newObstacle.positionX + newObstacle.width > player.positionX &&
            newObstacle.positionY < player.positionY + player.height &&
            newObstacle.height + newObstacle.positionY > player.positionY) {
            console.log("game over");
            this.bonus = 0;
        }
    }
    bonusCollision(newBonus) {
        if (newBonus.positionX < player.positionX + player.width &&
            newBonus.positionX + newBonus.width > player.positionX &&
            newBonus.positionY < player.positionY + player.height &&
            newBonus.height + newBonus.positionY > player.positionY) {
            this.bonus += 1;
            console.log(`you got more fuel---${this.bonus}`);
        }
    }
    removeObstacle(newObstacle) {
        if (newObstacle.positionY < 0 - newObstacle.height) {
            newObstacle.domElement.remove();
        }
    }
    removeBonus(newBonus) {
        if (newBonus.positionY < 0 - newBonus.height) {
            newBonus.domElement.remove();
        }
    }
}
class Background {
    constructor() {
        this.createDomElement();
        this.width = 500;
        this.height = 500;
        this.positionX = 0;
        this.positionY = 0;
    }
    createDomElement() {
        this.domElement = document.createElement("img");
        this.domElement.className = "background";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        const parentElem = document.getElementById("board");
        parentElem.appendChild(this.domElement);
    }
    moveDown() {
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}

class Obstacle {
    constructor() {
        this.width = 5;
        this.height = 5;
        this.positionX = 20 + Math.floor(Math.random() * 10 * 5.5);
        this.positionY = 80;
        this.domElement = null;
        this.createDomElement();
    }
    createDomElement() {
        this.domElement = document.createElement("div");
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        const parentElem = document.getElementById("board");
        parentElem.appendChild(this.domElement);
    }
    moveDown() {
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}
class Bonus {
    constructor() {
        this.width = 2;
        this.height = 4;
        this.positionX = 20 + Math.floor(Math.random() * 10 * 5.5);
        this.positionY = 80;
        this.domElement = null;
        this.createDomElement();    

    }
    createDomElement() {
        this.domElement = document.createElement("div");
        this.domElement.className = "bonus";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        const parentElem = document.getElementById("board");
        parentElem.appendChild(this.domElement);
    }
    moveDown() {
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}

class Score {
    constructor() {
        this.score = 0;
        this.width = 10;
        this.height = 10;
        this.positionX = 0;
        this.positionY = 70;
        this.createDomElement();
    }
    displayScore() {
        score = this.bonus;
        this.domElement.style.bottom = this.positionY + "vh";
    }
    createDomElement() {
        this.domElement = document.createElement("div");
        this.domElement.className = "score";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.innerText = `SCORE...${this.bonus}`;
        const parentElem = document.getElementById("board");
        parentElem.appendChild(this.domElement);
    }
}

const player = new Player();
const background = new Background();
const score = new Score;
const obsArr = [];
const bonusArr = [];
const backgroundArr = [];

setInterval(() => {
    const newObstacle = new Obstacle();
    obsArr.push(newObstacle);
}, 1000);

setInterval(() => {
    const newBonus = new Bonus();
    bonusArr.push(newBonus);
}, 2000);

setInterval(() => {
    obsArr.forEach((element) => {
        element.moveDown();
        player.obsCollision(element);
        player.removeObstacle(element);
    });
    bonusArr.forEach((element) => {
        element.moveDown();
        player.bonusCollision(element);
        player.removeBonus(element);
    });
}, 40);


setInterval(() => {
    backgroundArr.forEach((element) => {
        element.moveDown();
    });

}, 60);