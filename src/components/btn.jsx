import React from 'react'
import { Button } from 'react-bootstrap';

import './btn.css'

function Btn({...props}) {

    return (
        <Button type="submit" className={props.className}>
            {props.title}
        </Button>
    )
}

export default Btn;