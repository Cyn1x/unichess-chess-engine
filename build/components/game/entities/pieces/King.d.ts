import { IPiece, IKing } from './types';
import Square from '../Square';
declare class King implements IPiece, IKing {
    type: string;
    colour: string;
    image: string;
    position: string;
    moves: number;
    moveDirections: Map<string, number>;
    generalDefenceDirections: Map<string, number>;
    knightDefenceDirections: Map<string, number>;
    startingSquare: Square;
    inCheck: boolean;
    castled: boolean;
    constructor(type: string, colour: string, image: string);
    initialise(): void;
    incrementMoveCount(): void;
    isInCheck(): boolean;
    canCastle(): boolean;
    getType(): string;
    getColour(): string;
    getImage(): string;
    getMoveDirections(): Map<string, number>;
    getGeneralDefenceDirections(): Map<string, number>;
    getKnightDefenceDirections(): Map<string, number>;
    getPosition(): string;
    getMoveCount(): number;
    getStartingSquare(): Square;
    setImage(image: string): void;
    setMoveDirections(directions: Map<string, number>): void;
    setGeneralDefenceDirections(directions: Map<string, number>): void;
    setKnightDefenceDirections(directions: Map<string, number>): void;
    setPosition(pos: string): void;
    setStartingSquare(square: Square): void;
    setCheckStatus(check: boolean): void;
    setCastledStatus(castled: boolean): void;
}
export default King;
