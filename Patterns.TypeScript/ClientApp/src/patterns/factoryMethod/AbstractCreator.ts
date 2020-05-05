import { AbstractProduct } from "./AbstractProduct";

export abstract class AbstractCreator {

    private _Product?: AbstractProduct;

    public get Product(): AbstractProduct {
        return this._Product as AbstractProduct;
    }


    public abstract FactoryMethod(): AbstractProduct;

    public Operation(): void {
        this._Product = this.FactoryMethod();
    }
}