import React from 'react';
import { faCircleQuestion, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightToBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Form } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/header.css';

const Header = () => {
    return (
        <div>
            <header>
                <div className='p-2 border border-bottom-dark'>
                    <Container>
                        <Row className='align-items-center justify-content-center'>
                            <Col>
                                <div className="offer text-center">
                                    <span>BEST SPECIAL OFFERS! 40% OFF!</span>
                                </div>
                            </Col>
                            <Col className='d-flex justify-content-center'>
                                <Link to='/' >
                                    <div className="logo">
                                        <img src="https://static.zara.net/stdstatic/5.20.0/images/logo_rss.png" alt="" />
                                    </div>
                                </Link>
                            </Col>
                            <Col>
                                <div className="icon">
                                    <Row>
                                        <Col className='text-center'>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} className='pe-3' />
                                            <FontAwesomeIcon icon={faCircleQuestion} className='pe-3' />
                                            <FontAwesomeIcon icon={faCartShopping} className='pe-3' />
                                            <FontAwesomeIcon icon={faHeart} />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <nav>
                    <div className='py-3'>
                        <Container>
                            <Row className=''>
                                <Col className='nav-padding'>
                                    <Link to="/Woman" className='pe-4 text-decoration-none nav-color'>Woman</Link>
                                    <Link to="/Man" className='pe-4 text-decoration-none nav-color'>Man</Link>
                                    <Link to="/Girl" className='pe-4 text-decoration-none nav-color'>Girl</Link>
                                    <Link to="/Boy" className='pe-4 text-decoration-none nav-color'>Boy</Link>
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2 w-75"
                                    />
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
