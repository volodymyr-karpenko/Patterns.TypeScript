import { PatternUseCase } from "../PatternUseCase";
import { AbstractSubject } from "./AbstractSubject";
import { Proxy } from "./Proxy";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const subject: AbstractSubject = new Proxy();
        subject.Request();
    }
}