import { Position} from './types';
export interface Resource {
    id: string;
    type: ResourceType;
    position: Position;
    quantity: number;
    quality: number;
    depleted: boolean;
    respawnTime?: number;
}

export enum ResourceType {
    IRON = 'IRON',
    COPPER = 'COPPER',
    GOLD = 'GOLD',
    SILVER = 'SILVER',
    COAL = 'COAL'
}