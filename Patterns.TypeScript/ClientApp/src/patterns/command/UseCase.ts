import { PatternUseCase } from "../PatternUseCase";
import { Invoker } from "./Invoker";
import { AbstractCommand } from "./AbstractCommand";
import { ConcreteCommand } from "./ConcreteCommand";
import { Receiver } from "./Receiver";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const receiver: Receiver = new Receiver();
        const command: AbstractCommand = new ConcreteCommand(receiver);
        const invoker: Invoker = new Invoker();
        invoker.ExecuteCommand(command);
        invoker.UndoLastCommand();
    }    
}