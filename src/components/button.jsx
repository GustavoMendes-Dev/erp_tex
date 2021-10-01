import React from "react";
import { Button } from "react-bootstrap";

import './button.css'

function ButtonP(props) {

    return (
        <Button
        type={props.type}
        icon={props.icon}
        onClick={props.onClick}
        className={props.className}
        >
            {props.children}
        </Button>
    )
}

export default ButtonP;