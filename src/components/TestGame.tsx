import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { TestScene } from '../game/scenes/TestScene';

const TestGame: React.FC = () => {
    const gameRef = useRef<Phaser.Game | null>(null);

    useEffect(() => {
        if (gameRef.current) return;

        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            backgroundColor: '#87ceeb',
            scene: TestScene,
            parent: 'test-game-container',
            render: {
                pixelArt: false,
                antialias: true
            }
        };

        gameRef.current = new Phaser.Game(config);

        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        };
    }, []);

    return (
        <div id="test-game-container" className="w-full h-full" />
    );
};

export default TestGame;