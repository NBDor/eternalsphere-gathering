import Phaser from 'phaser';
import { MiningScene } from '../scenes/MiningScene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game-container',
    backgroundColor: '#93cbee',
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight
    },
    scene: [MiningScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: process.env.NODE_ENV === 'development',
            gravity: { x: 0, y: 0 }
        }
    },
    render: {
        pixelArt: true,
        antialias: false
    }
};

export default GameConfig;