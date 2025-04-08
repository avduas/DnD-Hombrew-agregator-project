import React from "react";
import { useTranslation } from "react-i18next";
import { Button, ToggleButton, ToggleButtonGroup, Navbar, Container } from "react-bootstrap";
import "./App.css";

//router will be here

const Landing = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="custom-background">
            <Navbar bg="dark" className="navbar">
                <Container>
                    <ToggleButtonGroup type="radio" name="options" id="radiobutton1" defaultValue={i18n.language}>
                        <ToggleButton variant="dark" id="translateButton1" value={"en"} onClick={() => i18n.changeLanguage("en")}>EN</ToggleButton>
                        <ToggleButton variant="dark" id="translateButton2" value={"ru"} onClick={() => i18n.changeLanguage("ru")}>RU</ToggleButton>
                    </ToggleButtonGroup>
                    <div>{t("authorPage")}</div>
                    <div>{t("Forum")}</div>
                    <div>{t("userPage")}</div>
                </Container>
            </Navbar>
            <div>
                <h1>{t("welcome")}</h1>
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder={t("search")} aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>
            <div>
                <h2>{t("New campaigns")}</h2>
                {/* <div>
                    
                </div> */}
                <h2>{t("Popular campaigns")}</h2>
                {/* <div></div> */}
            </div>
            <div>
                <h3>{t("News")}</h3>
                <h3>{t("Forum")}</h3>
            </div>
        </div>

    );
};

export default Landing;
