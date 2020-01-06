import { RecipeModelInterface } from './recipe-model-interface';

export class RecipeModel implements RecipeModelInterface {
    constructor(
        private _name: string,
        private _description: string,
        private _imagePath: string
    ) {}

    get Name(): string {
        return this._name;
    }

    get Description(): string {
        return this._description;
    }

    get ImagePath(): string {
        return this._imagePath;
    }


}