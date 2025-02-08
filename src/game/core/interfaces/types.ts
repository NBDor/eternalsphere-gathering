import { ResourceType } from './Resource';

export interface Position {
    x: number;
    y: number;
}

export interface ResourceInventory {
    maxCapacity: number;
    resources: {
        [key in ResourceType]?: {
            quantity: number;
            quality: number;
        };
    };
}

// Add any additional shared types here that might be used across multiple interfaces