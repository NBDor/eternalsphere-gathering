import Phaser from 'phaser';

export class TestScene extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private worker?: Phaser.GameObjects.Sprite;
    private cameraSpeed: number = 8;

    constructor() {
        super({ key: 'TestScene' });
    }

    preload() {
        // Load assets
        this.load.image('tile', '/assets/isometric-tile.png');
        this.load.spritesheet('worker', '/assets/worker-sprite.png', {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.spritesheet('resources', '/assets/resource-nodes.png', {
            frameWidth: 64,
            frameHeight: 64
        });
    }

    create() {
        // Set up camera controls
        if (this.input.keyboard) {
            this.cursors = this.input.keyboard.createCursorKeys();
        }

        // Define grid properties
        const gridSize = 7;
        const tileWidth = 64;
        const tileHeight = 32;
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        // Create a map to store tile positions
        const tileMap = new Map<string, {x: number, y: number, tile: Phaser.GameObjects.Image}>();

        // Create isometric grid
        for (let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {
                // Convert grid coordinates to isometric position
                const isoX = (x - y) * (tileWidth / 2);
                const isoY = (x + y) * (tileHeight / 2);
                
                const tile = this.add.image(
                    centerX + isoX,
                    centerY + isoY,
                    'tile'
                );
                tile.setDepth(x + y);

                // Store tile position with grid coordinates as key
                tileMap.set(`${x},${y}`, {
                    x: centerX + isoX,
                    y: centerY + isoY,
                    tile
                });
            }
        }

        // Add worker in the center
        const centerGridPos = Math.floor(gridSize / 2);
        const centerTile = tileMap.get(`${centerGridPos},${centerGridPos}`);
        if (centerTile) {
            this.worker = this.add.sprite(centerTile.x, centerTile.y, 'worker');
            this.worker.setDepth(gridSize * 2);
            this.worker.setScale(1.2);
        }

        // Create worker animations
        this.anims.create({
            key: 'work',
            frames: this.anims.generateFrameNumbers('worker', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: -1
        });
        
        if (this.worker) {
            this.worker.play('work');
        }

        // Define resource positions in grid coordinates
        const resourcePositions = [
            { x: centerGridPos - 1, y: centerGridPos - 1, frame: 0 }, // Iron
            { x: centerGridPos + 1, y: centerGridPos - 1, frame: 1 }, // Copper
            { x: centerGridPos, y: centerGridPos + 1, frame: 2 }      // Gold
        ];

        // Place resources on specific tiles
        resourcePositions.forEach(({ x, y, frame }) => {
            const tilePos = tileMap.get(`${x},${y}`);
            if (tilePos) {
                const resource = this.add.image(
                    tilePos.x,
                    tilePos.y,
                    'resources',
                    frame
                );
                resource.setDepth(x + y);
                resource.setScale(1.1);
            }
        });

        // Add UI text
        this.add.text(10, 10, 'Test Scene - Controls:', {
            fontSize: '16px',
            color: '#000',
            backgroundColor: '#ffffff88'
        });
        this.add.text(10, 30, 'R: Restart Scene\nArrow Keys: Move Camera\nQ/E or Mouse Wheel: Zoom', {
            fontSize: '14px',
            color: '#000',
            backgroundColor: '#ffffff88'
        });

        // Add keyboard controls
        if (this.input.keyboard) {
            this.input.keyboard.on('keydown-R', () => {
                this.scene.restart();
            });

            this.input.keyboard.on('keydown-Q', () => {
                this.cameras.main.zoom = Phaser.Math.Clamp(this.cameras.main.zoom * 0.9, 0.5, 2);
            });
            this.input.keyboard.on('keydown-E', () => {
                this.cameras.main.zoom = Phaser.Math.Clamp(this.cameras.main.zoom * 1.1, 0.5, 2);
            });
        }

        // Add mouse wheel zoom
        this.input.on('wheel', (pointer: Phaser.Input.Pointer, gameObjects: any, deltaX: number, deltaY: number) => {
            const newZoom = this.cameras.main.zoom - deltaY * 0.001;
            this.cameras.main.zoom = Phaser.Math.Clamp(newZoom, 0.5, 2);
        });
    }

    update() {
        // Handle camera movement
        if (this.cursors) {
            if (this.cursors.left.isDown) {
                this.cameras.main.scrollX -= this.cameraSpeed;
            }
            if (this.cursors.right.isDown) {
                this.cameras.main.scrollX += this.cameraSpeed;
            }
            if (this.cursors.up.isDown) {
                this.cameras.main.scrollY -= this.cameraSpeed;
            }
            if (this.cursors.down.isDown) {
                this.cameras.main.scrollY += this.cameraSpeed;
            }
        }
    }
}