import React from "react";
import { ToggleButton, ToggleButtonGroup, Navbar, Container, Row, Col } from "react-bootstrap";
import './i18n';
import { useTranslation } from "react-i18next";
import "./navbar.css"

const Navigation = () => {
    const { t, i18n } = useTranslation();
    return (
        <Navbar bg="dark"  data-bs-theme="dark" className="navbar">
            <Container >
                <Navbar.Brand href="#home" className="navbarBrand"> DND Homebrew</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <ToggleButtonGroup type="radio" name="options" id="radiobutton1" defaultValue={i18n.language}>
                    <ToggleButton variant="dark" id="translateButton1" value={"en"} onClick={() => i18n.changeLanguage("en")}>EN</ToggleButton>
                    <ToggleButton variant="dark" id="translateButton2" value={"ru"} onClick={() => i18n.changeLanguage("ru")}>RU</ToggleButton>
                </ToggleButtonGroup>
                <Row >
                    <Col className="navlink" >{t("authorPage")}</Col>
                    <Col className="navlink">{t("Forum")}</Col>
                    <Col className="navlink">{t("userPage")}</Col>
                    <Col className="navlink">{t("registration")}</Col>
                </Row>
            </Container>
        </Navbar>
    )
}
export default Navigation;