export abstract class AbstractHandler {

    public Successor?: AbstractHandler;

    public abstract HandleRequest(request: number): void
}