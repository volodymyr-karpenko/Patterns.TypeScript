import * as React from "react";
import { Container } from "react-bootstrap";
import NavMenu from "./NavMenu";

export default class Layout extends React.PureComponent {

    public constructor(props: { children?: React.ReactNode; }) {
        super(props);
        this.props = props;
    }

    public props: { children?: React.ReactNode; };

    public render() {

        return (

            <React.Fragment>
                <NavMenu />
                <Container>
                    {this.props.children}
                </Container>
            </React.Fragment>

        );
    }
}
