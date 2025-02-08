# Eternal Sphere Gathering

A real-time resource gathering game built with React, TypeScript, and Phaser.js. Part of the Eternal Sphere game ecosystem.

## Overview

Eternal Sphere Gathering is an isometric 2D game where players manage various resource gathering stations. Currently featuring:

- Mining Station: Manage miners gathering various minerals
- Future stations planned:
  - Herbalism Station: Gather herbs and plants
  - Hunting Station: Hunt and skin creatures

## Prerequisites

- Node.js 18+
- npm or yarn
- Modern web browser with WebGL support

## Tech Stack

- React 18
- TypeScript 5
- Phaser.js 3
- Redux Toolkit
- Tailwind CSS
- WebSocket for real-time updates

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
│   │   ├── stations/      # Station implementations
│   │   ├── scenes/        # Phaser scenes
│   │   └── config/        # Game configuration
│   ├── store/             # Redux store
│   ├── services/          # Backend services
│   │   ├── api/          # REST API
│   │   └── websocket/    # WebSocket handlers
│   └── assets/           # Game assets
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eternalsphere-gathering.git
cd eternalsphere-gathering
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests
- `npm run preview` - Preview production build locally

### Adding a New Station

1. Create station interface implementation in `src/game/stations/`
2. Create Phaser scene in `src/game/scenes/`
3. Add UI components in `src/components/stations/`
4. Register new station type in core game configuration

## Backend Integration

The game connects to these Eternal Sphere backend services:

- Authentication Service (Go/Gin)
- Resource Service (Go/Gin)
- Market Service (Go/Gin)
- Event Bus (Go/gRPC)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[License Type] - see LICENSE.md file for details

## Related Projects

- [eternalsphere-auth](https://github.com/yourusername/eternalsphere-auth)
- [eternalsphere-shared-go](https://github.com/yourusername/eternalsphere-shared-go)