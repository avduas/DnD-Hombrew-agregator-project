// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import "./App.css";
import NewCampaignCards from "./main page resources/newCampaignCards";
import MostPopularCampaignCards from "./main page resources/mostPopularCampaignCards";
import SearchBar from "./main page resources/searchInput";
import Navigation from "../navbar/navbar";
import AuthorPage from "../pages(WIP)/authorPage";
import Forum from "../pages(WIP)/forum";
import Profile from "../pages(WIP)/userPage";

const App = ({user, setUser}) => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={
                    <div className="custom-background">
                        <div className="blocks">
                            <h1 className="headers">
                                <Trans i18nKey="welcome">
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
                    </div>
                } />
                <Route path="/addCampaign" element={<AuthorPage user={user} />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
};

export default App;
