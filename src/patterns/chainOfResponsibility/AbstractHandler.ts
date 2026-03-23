export abstract class AbstractHandler {
  successor?: AbstractHandler;

  abstract handleRequest(request: number): void;
}
