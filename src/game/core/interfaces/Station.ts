import { Position, ResourceInventory} from './types';
import { Worker} from './Worker';
import { Resource } from './Resource';

export interface MiningStation {
    id: string;
    position: Position;
    level: number;
    storage: ResourceInventory;
    workers: Worker[];
    upgrades: StationUpgrades;
    activeResourceNodes: Resource[];
}

export interface StationUpgrades {
    storageCapacity: number;
    processingSpeed: number;
    workerCapacity: number;
    resourceQuality: number;
}