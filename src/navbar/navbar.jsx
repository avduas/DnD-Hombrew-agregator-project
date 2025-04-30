import React from "react";
import { ToggleButton, ToggleButtonGroup, Navbar, Container, Row, Col } from "react-bootstrap";
import '../i18n';
import { useTranslation } from "react-i18next";
import "./navbar.css"
import { NavLink } from "react-router-dom";
import LoginModal from "./navbar resources/modalLogin";

const Navigation = ({ user, setUser }) => {
    const { t, i18n } = useTranslation();
    console.log(user)

    return (
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/" className="navbarBrand">DND Homebrew</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ToggleButtonGroup type="radio" name="options" id="radiobutton1" defaultValue={i18n.language}>
                    <ToggleButton variant="dark" id="translateButton1" value={"en"} onClick={() => i18n.changeLanguage("en")}>EN</ToggleButton>
                    <ToggleButton variant="dark" id="translateButton2" value={"ru"} onClick={() => i18n.changeLanguage("ru")}>RU</ToggleButton>
                </ToggleButtonGroup>

                <Row className="w-100 justify-content-end">
                    <Col className="navContainer">
                        <NavLink to="/forum" className="navButton">
                            {t("Forum")}
                        </NavLink>
                    </Col>
                    {user ? (
                        <>
                            <Col className="navContainer">
                                <NavLink to="/addCampaign" className="navButton">
                                    {t("authorPage")}
                                </NavLink>
                            </Col>
                            <Col className="navContainer">
                                <div className="navButton">
                                    {t('hello')}, {user}
                                </div>
                            </Col>
                            <Col className="navContainer">
                                <button onClick={() => setUser(null)} className="navButton">
                                    {t("logout")}
                                </button>
                            </Col>
                        </>
                    ) : (
                        <Col className="navContainer">
                            <div className="navButton">
                                <LoginModal setUser={setUser} user={user} />
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
        </Navbar>
    );
};

export default Navigation;
