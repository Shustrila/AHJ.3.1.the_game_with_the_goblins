class GamePlay {
    constructor(field) {
        this.fields = field;
        this.root = '#root';
        this.nodes = [];
        this.randomIndex = 0;
        this.intervalRandom = null;
    }

    randomPositionGoblin(elemet, time){
        this.intervalRandom = setInterval(() => {
            const fields = document.querySelectorAll('.js-map-field');
            this.randomIndex = Math.floor(Math.random() * fields.length);

            return fields[this.randomIndex].appendChild(elemet);
        }, time)
    }

    creationFilds(){
        const map = this.fields * this.fields;

        for(let i = 0; i < map; i++) {
            const li = document.createElement('li');

            li.className = 'map__field js-map-field';
            li.style.cursor = 'pointer';
            this.nodes.push(li);
        }
    }

    creationMap(){
        const root = document.querySelector(this.root);
        const ul = document.createElement('ul');

        ul.className = 'map';
        ul.setAttribute('id', 'map');
        ul.style.gridTemplateRows = `repeat(${this.fields}, 75px)`;
        ul.style.gridTemplateColumns = `repeat(${this.fields}, 75px)`;

        root.append(ul);
        this.creationFilds();

        const nodeMap = document.querySelector('#map');

        for(const field of this.nodes){
            nodeMap.appendChild(field);
        }
    }

    creationStat(hits, misses) {
        const root = document.querySelector(this.root);
        const div = document.createElement('div');
        const counter = document.querySelector('.js-counter');

        if (counter !== null) {
            counter.remove();
        }

        div.className = 'counter js-counter';
        div.innerHTML = `<p>Попадания: ${hits}</p><p>Промахи: ${misses}</p>`;

        root.prepend(div);
    }

    onClick(callback = () => {}) {
        this.nodes.forEach((item, i) => {
            item.addEventListener('click', e => callback(e, i))
        })
    }

    static messageInfo(message) {
        alert(message);
    }
}

export default GamePlay;
