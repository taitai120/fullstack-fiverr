import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, Col, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    // const [navbar, setNavbar] = useState(false);

    // useEffect(() => {
    //     const changeBackground = () => {
    //         if (window.scrollY >= 10) {
    //             setNavbar(true);
    //         } else {
    //             setNavbar(false);
    //         }
    //     };
    //     window.addEventListener("scroll", changeBackground);
    // }, []);
    const navbar = false;

    return (
        <div>
            <div className={navbar ? "nn active" : "nn"}>
                <Row className="containerh">
                    <Col className="col1">
                        <FontAwesomeIcon
                            icon={faBars}
                            size="2x"
                            color={navbar ? "black" : "white"}
                            id="baricon"
                        />
                        <div className="nm">
                            <div className={navbar ? "disactive" : "logo"}>
                                <img
                                    src="images/fiverr_logo_white.png"
                                    alt=""
                                />
                            </div>
                            <div className={navbar ? "logo" : "disactive"}>
                                <img src="images/fiverr_logo.png" alt="" />
                            </div>
                        </div>
                        <div
                            className={
                                navbar ? "searchBar" : "searchBar searchBarHide"
                            }
                        >
                            <Form inline>
                                <img
                                    src="images/search.png"
                                    alt="logo"
                                    className="searchLogo"
                                />
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-lg-0"
                                />
                                <button className="btnn">Search</button>
                            </Form>
                        </div>
                    </Col>
                    <ul className="nvegation">
                        <li className="ll">
                            <Link
                                className={
                                    navbar ? "linkColor" : "disActiveColor"
                                }
                                to="/"
                            >
                                Fiverr Business
                            </Link>
                        </li>
                        <li className="sli">
                            <Link
                                className={
                                    navbar ? "linkColor" : "disActiveColor"
                                }
                                to="/"
                            >
                                Explore
                            </Link>
                        </li>
                        <li className="sli">
                            <Link
                                className={
                                    navbar ? "linkColor" : "disActiveColor"
                                }
                                to="/"
                            >
                                <span className="global">
                                    <img
                                        src="images/globe.png"
                                        color="green"
                                        width="14px"
                                        height="14px"
                                        alt="logo"
                                    />
                                </span>
                                <span>English</span>
                            </Link>
                        </li>
                        <li className="tli">
                            <Link
                                className={
                                    navbar ? "linkColor" : "disActiveColor"
                                }
                                to="/"
                            >
                                RsPKR
                            </Link>
                        </li>
                        <li className="tli">
                            <Link
                                className={
                                    navbar ? "linkColor" : "disActiveColor"
                                }
                                to="/"
                            >
                                Become a seller
                            </Link>
                        </li>
                        <li className={navbar ? "linkColor" : "disActiveColor"}>
                            Sign In
                        </li>
                        <li className="bli">
                            <Link
                                className={
                                    navbar
                                        ? "signInLi linkColor"
                                        : "signInLi disActiveColor"
                                }
                                to="/join"
                            >
                                <Button variant="outline-success">Join</Button>
                            </Link>
                        </li>
                    </ul>
                </Row>
            </div>
        </div>
    );
};

export default Header;
