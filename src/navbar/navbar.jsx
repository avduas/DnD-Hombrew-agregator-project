import React from "react";
import { ToggleButton, ToggleButtonGroup, Navbar, Container, Row, Col } from "react-bootstrap";
import '../i18n';
import { useTranslation } from "react-i18next";
import "./navbar.css"
import { NavLink } from "react-router";
import LoginModal from "./navbar resources/modalLogin";

const Navigation = () => {
    const { t, i18n } = useTranslation();
    return (
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container >
                <Navbar.Brand href="/" className="navbarBrand"> DND Homebrew</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <ToggleButtonGroup type="radio" name="options" id="radiobutton1" defaultValue={i18n.language}>
                    <ToggleButton variant="dark" id="translateButton1" value={"en"} onClick={() => i18n.changeLanguage("en")}>EN</ToggleButton>
                    <ToggleButton variant="dark" id="translateButton2" value={"ru"} onClick={() => i18n.changeLanguage("ru")}>RU</ToggleButton>
                </ToggleButtonGroup>
                <Row >
                    <Col className="navContainer" >
                        <NavLink to={"/addCampaign"} className="navButton">
                            {t("authorPage")}
                        </NavLink>
                    </Col>
                    <Col className="navContainer">
                        <NavLink to={"/forum"} className="navButton">
                            {t("Forum")}
                        </NavLink>
                    </Col>
                    {/* <Col className="navlink">{t("userPage")}</Col> */}
                    <Col className="navContainer">
                        <div className="navButton">ּ
                            <LoginModal />
                        </div>
                        {/* <NavLink className="navButton">
                            
                                {t("registration")}
                            
                        </NavLink> */}
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}
export default Navigation;