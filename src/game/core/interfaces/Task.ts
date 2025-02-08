import { Position } from './types';
import { Resource } from './Resource';

export interface Task {
    id: string;
    type: TaskType;
    priority: number;
    targetResource?: Resource;
    targetPosition: Position;
    progress: number;
    completed: boolean;
}

export enum TaskType {
    MINE_RESOURCE = 'MINE_RESOURCE',
    DELIVER_RESOURCE = 'DELIVER_RESOURCE',
    MOVE_TO_POSITION = 'MOVE_TO_POSITION',
    REST = 'REST'
}