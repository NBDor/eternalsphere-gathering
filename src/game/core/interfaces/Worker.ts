import { Position, ResourceInventory} from './types';
import { Task } from './Task';
export interface Worker {
    id: string;
    name: string;
    position: Position;
    status: WorkerStatus;
    currentTask?: Task;
    inventory: ResourceInventory;
    stats: WorkerStats;
}

export interface WorkerStats {
    miningSpeed: number;
    carryCapacity: number;
    movementSpeed: number;
    efficiency: number;
    experience: number;
    level: number;
}

export enum WorkerStatus {
    IDLE = 'IDLE',
    MOVING = 'MOVING',
    GATHERING = 'GATHERING',
    DELIVERING = 'DELIVERING',
    RESTING = 'RESTING'
}