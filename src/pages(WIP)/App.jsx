import React from "react";
import { useTranslation } from "react-i18next";

//router will be here

const MyComponent = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div>
                <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
                <p>{t("authorPage")}</p>
                <p>{t("Forum")}</p>
                <p>{t("userPage")}</p>
            </div>
            <div>
                <div>
                    <p>{t("search")}</p>
                    {/* <div>

                    </div> */}
                </div>
                <h1>{t("welcome")}</h1>
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
        </>

    );
};

export default MyComponent;
