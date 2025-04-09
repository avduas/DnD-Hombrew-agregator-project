import { InputGroup, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./css/searchInput.css";
import "./icon/magnifier-1_icon-icons.com_56924.svg"

const SearchBar = () => {
    const { t, i18n } = useTranslation();
    return (

        <Form>
            <InputGroup>
                <Form.Control placeholder={t("search")} className="bg-white" type="text"></Form.Control>
                <button className="button"><img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt={t("search")} className="searchLoop"/></button>
            </InputGroup>
        </Form>
    )
}

export default SearchBar;