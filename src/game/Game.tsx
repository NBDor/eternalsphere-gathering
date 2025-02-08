import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import GameConfig from '../game/config/GameConfig';

const Game: React.FC = () => {
    const gameRef = useRef<Phaser.Game | null>(null);

    useEffect(() => {
        if (gameRef.current) return;

        // Initialize the Phaser game
        gameRef.current = new Phaser.Game({
            ...GameConfig,
            parent: 'game-container'
        });

        // Cleanup function
        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        };
    }, []);

    return (
        <div id="game-container" className="w-full h-full" />
    );
};

export default Game;