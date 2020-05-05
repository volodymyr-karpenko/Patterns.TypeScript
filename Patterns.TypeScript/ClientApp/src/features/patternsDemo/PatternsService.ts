import { PatternType } from "./PatternType";
import AbstractFactoryUseCase from "../../patterns/abstractFactory/UseCase";
import AdapterUseCase from "../../patterns/adapter/UseCase";
import BridgeUseCase from "../../patterns/bridge/UseCase";
import BuilderUseCase from "../../patterns/builder/UseCase";
import ChainOfResponsibilityUseCase from "../../patterns/chainOfResponsibility/UseCase";
import CommandUseCase from "../../patterns/command/UseCase";
import CompositeUseCase from "../../patterns/composite/UseCase";
import DecoratorUseCase from "../../patterns/decorator/UseCase";
import FacadeUseCase from "../../patterns/facade/UseCase";
import FactoryMethodUseCase from "../../patterns/factoryMethod/UseCase";
import FlyweightUseCase from "../../patterns/flyweight/UseCase";
import InterpreterUseCase from "../../patterns/interpreter/UseCase";
import IteratorUseCase from "../../patterns/iterator/UseCase";
import MediatorUseCase from "../../patterns/mediator/UseCase";
import MementoUseCase from "../../patterns/memento/UseCase";
import ObserverUseCase from "../../patterns/observer/UseCase";
import PrototypeUseCase from "../../patterns/prototype/UseCase";
import ProxyUseCase from "../../patterns/proxy/UseCase";
import SingletonUseCase from "../../patterns/singleton/UseCase";
import StateUseCase from "../../patterns/state/UseCase";
import StrategyUseCase from "../../patterns/strategy/UseCase";
import TemplateMethodUseCase from "../../patterns/templateMethod/UseCase";
import VisitorUseCase from "../../patterns/visitor/UseCase";
import { IPatternsState } from "./IPatternsState";

export class PatternsService {

    public GetPatternOutput(patternType: string): IPatternsState {
        switch (patternType) {
            case PatternType.AbstractFactory:
                return { SelectedPatternName: PatternType.AbstractFactory, SelectedPatternOutput: new AbstractFactoryUseCase().GetOutput() };
            case PatternType.Adapter:
                return { SelectedPatternName: PatternType.Adapter, SelectedPatternOutput: new AdapterUseCase().GetOutput() };
            case PatternType.Bridge:
                return { SelectedPatternName: PatternType.Bridge, SelectedPatternOutput: new BridgeUseCase().GetOutput() };
            case PatternType.Builder:
                return { SelectedPatternName: PatternType.Builder, SelectedPatternOutput: new BuilderUseCase().GetOutput() };
            case PatternType.ChainOfResponsibility:
                return { SelectedPatternName: PatternType.ChainOfResponsibility, SelectedPatternOutput: new ChainOfResponsibilityUseCase().GetOutput() };
            case PatternType.Command:
                return { SelectedPatternName: PatternType.Command, SelectedPatternOutput: new CommandUseCase().GetOutput() };
            case PatternType.Composite:
                return { SelectedPatternName: PatternType.Composite, SelectedPatternOutput: new CompositeUseCase().GetOutput() };
            case PatternType.Decorator:
                return { SelectedPatternName: PatternType.Decorator, SelectedPatternOutput: new DecoratorUseCase().GetOutput() };
            case PatternType.Facade:
                return { SelectedPatternName: PatternType.Facade, SelectedPatternOutput: new FacadeUseCase().GetOutput() };
            case PatternType.FactoryMethod:
                return { SelectedPatternName: PatternType.FactoryMethod, SelectedPatternOutput: new FactoryMethodUseCase().GetOutput() };
            case PatternType.Flyweight:
                return { SelectedPatternName: PatternType.Flyweight, SelectedPatternOutput: new FlyweightUseCase().GetOutput() };
            case PatternType.Interpreter:
                return { SelectedPatternName: PatternType.Interpreter, SelectedPatternOutput: new InterpreterUseCase().GetOutput() };
            case PatternType.Iterator:
                return { SelectedPatternName: PatternType.Iterator, SelectedPatternOutput: new IteratorUseCase().GetOutput() };
            case PatternType.Mediator:
                return { SelectedPatternName: PatternType.Mediator, SelectedPatternOutput: new MediatorUseCase().GetOutput() };
            case PatternType.Memento:
                return { SelectedPatternName: PatternType.Memento, SelectedPatternOutput: new MementoUseCase().GetOutput() };
            case PatternType.Observer:
                return { SelectedPatternName: PatternType.Observer, SelectedPatternOutput: new ObserverUseCase().GetOutput() };
            case PatternType.Prototype:
                return { SelectedPatternName: PatternType.Prototype, SelectedPatternOutput: new PrototypeUseCase().GetOutput() };
            case PatternType.Proxy:
                return { SelectedPatternName: PatternType.Proxy, SelectedPatternOutput: new ProxyUseCase().GetOutput() };
            case PatternType.Singleton:
                return { SelectedPatternName: PatternType.Singleton, SelectedPatternOutput: new SingletonUseCase().GetOutput() };
            case PatternType.State:
                return { SelectedPatternName: PatternType.State, SelectedPatternOutput: new StateUseCase().GetOutput() };
            case PatternType.Strategy:
                return { SelectedPatternName: PatternType.Strategy, SelectedPatternOutput: new StrategyUseCase().GetOutput() };
            case PatternType.TemplateMethod:
                return { SelectedPatternName: PatternType.TemplateMethod, SelectedPatternOutput: new TemplateMethodUseCase().GetOutput() };
            case PatternType.Visitor:
                return { SelectedPatternName: PatternType.Visitor, SelectedPatternOutput: new VisitorUseCase().GetOutput() };
            default:
                return { SelectedPatternName: "Select Pattern", SelectedPatternOutput: "Pattern Not Selected \r\n\r\n" };
        }
    }
}