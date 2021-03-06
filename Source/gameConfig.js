import "phaser";
import { sceneMenu } from './Scenes/mainMenu';
import { preLoad } from './Scenes/preLoader';
import { actualGame } from './Scenes/game';
import { keys } from './Scenes/Calculations/keyDetector';
import { endGame } from './Scenes/gameOver';
import { settings } from './Scenes/settings';

export var config = {
  type : Phaser.AUTO,
  height: 915,
  width: 1890,  //very random but works well
  backgroundColor: 0x000000,
  scene: [preLoad, sceneMenu, actualGame, keys, endGame, settings]
};