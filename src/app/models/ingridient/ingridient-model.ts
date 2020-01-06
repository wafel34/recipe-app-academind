import { IngridientModelInterface } from './ingridient-model-interface';

export class IngridientModel implements IngridientModelInterface {
    constructor(
        private _name: string,
        private _amount: number
    ) {}

    get Name(): string {
        return this._name;
    }

    get Amount(): number {
        return this._amount;
    }
}
