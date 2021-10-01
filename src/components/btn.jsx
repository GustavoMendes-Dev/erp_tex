import React from 'react';

import './btn.css'


function Btn(props) {

    return (
        <div className="btn_tx">
           <a className="btn_tx_a" href={props.link}>{props.children}</a>
        </div>
    )
}

export default Btn;