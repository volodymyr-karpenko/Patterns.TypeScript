import * as React from "react";
import { Card } from "react-bootstrap";
import { IPatternsProps } from "./IPatternsProps";

export class PatternsOutput extends React.PureComponent {

    constructor(props: IPatternsProps) {
        super(props);
        this.props = props;
    }

    public props: IPatternsProps;

    private GetOutputArray(src: string): string[] {
        return src.split("\r\n\r\n");
    };

    render(): JSX.Element {

        let id: number = 0;

        return (

            <Card className="mt-5" style={{ minHeight: '20rem' }}>
                <Card.Body>
                    <Card.Title className="display-4">{this.props.SelectedPatternName}</Card.Title>
                    <Card.Text className="lead text-success">
                        {this.GetOutputArray(this.props.SelectedPatternOutput).map(
                            (output: string): JSX.Element => {
                                id++;
                                return (
                                    <span key={id}><br />{output}</span>
                                );
                            }
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>        

        );
    }
}