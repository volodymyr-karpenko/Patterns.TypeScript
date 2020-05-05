import { AbstractSubject } from "./AbstractSubject";
import { ConcreteSubject } from "./ConcreteSubject";

export class Proxy extends AbstractSubject {

    private Subject?: AbstractSubject;

    public Request(): void {
        if (!this.Subject) {
            this.Subject = new ConcreteSubject();
        }

        this.Subject.Request();
    }
}