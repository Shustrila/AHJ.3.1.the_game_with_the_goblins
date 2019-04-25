import imageGomlin from '../images/goblin.png';

class Goblin {
    constructor(nameEl, className) {
        this.nameEl =  nameEl;
        this.className = className;
    }

    nodeImg() {
        const img = document.createElement(this.nameEl);

        img.className = this.className;
        img.style.cursor = 'crosshair';
        img.setAttribute('src', imageGomlin);
        return img;
    }
}

export default Goblin;
