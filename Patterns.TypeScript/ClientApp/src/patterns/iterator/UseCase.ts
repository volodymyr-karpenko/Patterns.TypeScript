import { PatternUseCase } from "../PatternUseCase";
import { Enumerable } from "./Enumerable";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const enumerable: Enumerable = new Enumerable();

        for (let i = 0; i < 10; i++) {
            enumerable.SetItem(i, i.toString());
        }

        for (const item of enumerable) {
            PatternUseCase.Output += item + "\r\n\r\n";
        }
    }
}