# Eternal Sphere Gathering

Eternal Sphere Gathering is an isometric 2D resource gathering game built with React, TypeScript, and Phaser.js. It's part of the larger Eternal Sphere game ecosystem.

## Features

- Isometric 2D game environment
- Multiple gathering stations:
  - Mining Station (Current Focus)
  - Herbalism Station (Planned)
  - Hunting Station (Planned)
- Real-time resource gathering mechanics
- Worker management system
- Station upgrades and progression
- Resource market integration

## Tech Stack

### Frontend
- React 18
- TypeScript 5
- Phaser.js 3
- Redux Toolkit
- Tailwind CSS
- WebSocket for real-time updates

### Backend Integration
- Authentication Service (Go/Gin)
- Resource Service (Go/Gin)
- Market Service (Go/Gin)
- Event Bus (Go/gRPC)

## Prerequisites

- Node.js (v18+)
- npm or yarn
- Modern web browser with WebGL support

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/eternalsphere-gathering.git
cd eternalsphere-gathering
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
eternalsphere-gathering/
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # UI components
│   │   ├── layout/        # Layout components
│   │   └── stations/      # Station-specific components
│   ├── game/              # Game logic
│   │   ├── core/          # Shared game logic
│   │   │   └── interfaces/# TypeScript interfaces
│   │   ├── stations/      # Station implementations
│   │   ├── scenes/        # Phaser scenes
│   │   └── config/        # Game configuration
│   ├── store/             # Redux store
│   ├── services/          # Backend services
│   │   ├── api/          # REST API
│   │   └── websocket/    # WebSocket handlers
│   └── assets/           # Game assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Game Architecture

### Core Components

1. **Station System**
   - Resource gathering mechanics
   - Worker management
   - Upgrade system
   - Storage management

2. **Worker System**
   - Pathfinding
   - Resource gathering
   - State management
   - Task queue

3. **Resource System**
   - Resource types
   - Spawning mechanics
   - Depletion and regeneration
   - Market integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Related Projects

- [eternalsphere-auth](https://github.com/NBDor/eternalsphere-auth) - Authentication service
- [eternalsphere-shared-go](https://github.com/NBDor/eternalsphere-shared-go) - Shared Go libraries

## License

[License Type] - See LICENSE file for details