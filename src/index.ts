import AbstractFactoryUseCase from "./patterns/abstractFactory/UseCase";
import AdapterUseCase from "./patterns/adapter/UseCase";
import BridgeUseCase from "./patterns/bridge/UseCase";
import BuilderUseCase from "./patterns/builder/UseCase";
import ChainOfResponsibilityUseCase from "./patterns/chainOfResponsibility/UseCase";
import CommandUseCase from "./patterns/command/UseCase";
import CompositeUseCase from "./patterns/composite/UseCase";
import DecoratorUseCase from "./patterns/decorator/UseCase";
import FacadeUseCase from "./patterns/facade/UseCase";
import FactoryMethodUseCase from "./patterns/factoryMethod/UseCase";
import FlyweightUseCase from "./patterns/flyweight/UseCase";
import InterpreterUseCase from "./patterns/interpreter/UseCase";
import IteratorUseCase from "./patterns/iterator/UseCase";
import MediatorUseCase from "./patterns/mediator/UseCase";
import MementoUseCase from "./patterns/memento/UseCase";
import ObserverUseCase from "./patterns/observer/UseCase";
import PrototypeUseCase from "./patterns/prototype/UseCase";
import ProxyUseCase from "./patterns/proxy/UseCase";
import SingletonUseCase from "./patterns/singleton/UseCase";
import StateUseCase from "./patterns/state/UseCase";
import StrategyUseCase from "./patterns/strategy/UseCase";
import TemplateMethodUseCase from "./patterns/templateMethod/UseCase";
import VisitorUseCase from "./patterns/visitor/UseCase";

const PATTERN = Object.freeze({
  AbstractFactory: "Abstract Factory",
  Adapter: "Adapter",
  Bridge: "Bridge",
  Builder: "Builder",
  ChainOfResponsibility: "Chain Of Responsibility",
  Command: "Command",
  Composite: "Composite",
  Decorator: "Decorator",
  Facade: "Facade",
  FactoryMethod: "Factory Method",
  Flyweight: "Flyweight",
  Interpreter: "Interpreter",
  Iterator: "Iterator",
  Mediator: "Mediator",
  Memento: "Memento",
  Observer: "Observer",
  Prototype: "Prototype",
  Proxy: "Proxy",
  Singleton: "Singleton",
  State: "State",
  Strategy: "Strategy",
  TemplateMethod: "Template Method",
  Visitor: "Visitor",
});

function getPatternOutput(patternName?: string) {
  switch (patternName) {
    case PATTERN.AbstractFactory:
      return new AbstractFactoryUseCase().getOutput();
    case PATTERN.Adapter:
      return new AdapterUseCase().getOutput();
    case PATTERN.Bridge:
      return new BridgeUseCase().getOutput();
    case PATTERN.Builder:
      return new BuilderUseCase().getOutput();
    case PATTERN.ChainOfResponsibility:
      return new ChainOfResponsibilityUseCase().getOutput();
    case PATTERN.Command:
      return new CommandUseCase().getOutput();
    case PATTERN.Composite:
      return new CompositeUseCase().getOutput();
    case PATTERN.Decorator:
      return new DecoratorUseCase().getOutput();
    case PATTERN.Facade:
      return new FacadeUseCase().getOutput();
    case PATTERN.FactoryMethod:
      return new FactoryMethodUseCase().getOutput();
    case PATTERN.Flyweight:
      return new FlyweightUseCase().getOutput();
    case PATTERN.Interpreter:
      return new InterpreterUseCase().getOutput();
    case PATTERN.Iterator:
      return new IteratorUseCase().getOutput();
    case PATTERN.Mediator:
      return new MediatorUseCase().getOutput();
    case PATTERN.Memento:
      return new MementoUseCase().getOutput();
    case PATTERN.Observer:
      return new ObserverUseCase().getOutput();
    case PATTERN.Prototype:
      return new PrototypeUseCase().getOutput();
    case PATTERN.Proxy:
      return new ProxyUseCase().getOutput();
    case PATTERN.Singleton:
      return new SingletonUseCase().getOutput();
    case PATTERN.State:
      return new StateUseCase().getOutput();
    case PATTERN.Strategy:
      return new StrategyUseCase().getOutput();
    case PATTERN.TemplateMethod:
      return new TemplateMethodUseCase().getOutput();
    case PATTERN.Visitor:
      return new VisitorUseCase().getOutput();
    default:
      return "Pattern Not Selected\n\n";
  }
}

function start() {
  const patternNameInput = process.argv.at(2) ?? "";

  const patternName = Object.values(PATTERN).find(
    (name) => name.toLowerCase() === patternNameInput.toLowerCase(),
  );

  console.log(
    "\n\n",
    patternName,
    "output:\n\n",
    getPatternOutput(patternName),
  );
}

start();
