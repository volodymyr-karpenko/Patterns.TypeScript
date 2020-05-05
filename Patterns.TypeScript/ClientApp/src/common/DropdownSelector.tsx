import * as React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { IDropdownProps } from "./IDropdownProps";
import "./dropdown.css";

export const DropdownSelector = (props: IDropdownProps) => {

    let id: number = 0;

    return (
        <DropdownButton id="dropdown-basic-button" drop="up" title={props.title}>
            {props.options.map(
                (option: string): JSX.Element => {
                    id++;
                    return (
                        <Dropdown.Item key={id}
                            onClick={() => props.onOptionClick(option)}>{option}</Dropdown.Item>
                    );
                },
            )}
        </DropdownButton>
    );
};