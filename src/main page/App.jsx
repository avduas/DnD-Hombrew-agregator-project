import React from "react";
import { useTranslation, Trans } from "react-i18next";
import "./App.css";
import NewCampaignCards from "./main page resources/newCampaignCards";
import MostPopularCampaignCards from "./main page resources/mostPopularCampaignCards";
import SearchBar from "./main page resources/searchInput";
import Navigation from "../navbar/navbar";
//router will be here

const Landing = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Navigation />
            <div className="custom-background">
                <div className="blocks">
                    <h1 className="headers">
                        <Trans i18nKey="welcome" >
                            Find your perfect homebrew <span className="red">D&D</span> campaign!
                        </Trans>
                    </h1>
                    <SearchBar />
                </div>
                <div className="blocks">
                    <h2 className="headers"> {t("New campaigns")}</h2>
                    <NewCampaignCards />
                </div>
                <div className="blocks">
                    <h2 className="headers">{t("Popular campaigns")}</h2>
                    <MostPopularCampaignCards />
                </div>
                {/* <div>
                <h3>{t("News")}</h3>
                <h3>{t("Forum")}</h3>
            </div> */}
            </div>
        </>
    );
};

export default Landing;
