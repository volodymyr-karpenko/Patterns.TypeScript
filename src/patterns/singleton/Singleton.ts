export class Singleton {
  static #uniqueInstance: Singleton;

  get instance(): Singleton {
    return Singleton.#uniqueInstance;
  }

  static {
    if (!Singleton.#uniqueInstance) {
      Singleton.#uniqueInstance = new Singleton();
    }
  }
}
