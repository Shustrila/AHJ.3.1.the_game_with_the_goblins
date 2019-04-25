import "./css/style.css"
import Game from './js/Game';
import GamePlay from './js/GamePlay';

const game = new Game(new GamePlay(4));

game.init();

