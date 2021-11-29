import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

export function BoxLogin({children, ...props}) {

    let back = props.back &&
    <Link to="/login">
        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.63568 6.88824L8.30255 11.5551L6.96943 12.8882L0.969428 6.88824L6.96943 0.888245L8.30255 2.22137L3.63568 6.88824Z" fill="#2D3748"/>
        </svg>
    </Link>

    return (
        <React.Fragment>
            <section className="bg__login--student">
                <div className="logo__app">
                </div>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <div className="login">
                            <div className="login__box">
                                {back}
                                <h1 className="text-center">{props.title}</h1>
                                {children}
                            </div>
                            <div className="text-center copy">Powered by © 2021 Textiu.co</div>
                        </div>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    )
}