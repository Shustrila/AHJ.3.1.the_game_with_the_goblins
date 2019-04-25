import GamePlay from './GamePlay';
import Goblin from './Goblin';


class Game {
    constructor(gamePlay) {
        this.stateHits = 0;
        this.stateMisses = 0;
        this.goblin = new Goblin('img', 'map__img js-goblin');
        this.gamePlay = gamePlay;
        this.eventsLock = false;
    }

    init() {
        this.gamePlay.creationStat(this.stateHits, this.stateMisses);
        this.gamePlay.creationMap();
        this.gamePlay.randomPositionGoblin(this.goblin.nodeImg(), 500);

        this.gamePlay.onClick(this.onClickNode.bind(this));
    }

    _addStateHits(i, max) {
        return new Promise(resolve => {
            this.eventsLock = true;
            this.stateHits += 1;

            if (this.stateHits === max) {
                GamePlay.messageInfo('you win!!!');
                this.stateHits = 0;
                this.stateMisses = 0;
            }

            document.querySelector('.js-goblin').remove();
            clearInterval(this.gamePlay.intervalRandom);
            setTimeout(() => {
                this.eventsLock = false;
                resolve()
            }, 1000);
        });
    }

    _addStateMisses(i, max) {
        return new Promise(resolve => {
            this.eventsLock = true;
            this.stateMisses += 1;

            if (this.stateMisses === max) {
                GamePlay.messageInfo('Game over!!!');
                this.stateHits = 0;
                this.stateMisses = 0;
            }

            document.querySelector('.js-goblin').remove();
            clearInterval(this.gamePlay.intervalRandom);
            setTimeout(() => {
                this.eventsLock = false;
                resolve()
            }, 1000);
        });
    }

    onClickNode(e, i) {
        e.preventDefault();

        if (!this.eventsLock) {
            if (this.gamePlay.randomIndex === i) {
                this._addStateHits(i, 5).then(() => {
                    this.gamePlay.creationStat(this.stateHits, this.stateMisses);
                    this.gamePlay.randomPositionGoblin(this.goblin.nodeImg(), 1000);
                });
            } else {
                this._addStateMisses(i, 5).then(() => {
                    this.gamePlay.creationStat(this.stateHits, this.stateMisses);
                    this.gamePlay.randomPositionGoblin(this.goblin.nodeImg(), 1000);
                });
            }
        }
    }
}

export default Game;
