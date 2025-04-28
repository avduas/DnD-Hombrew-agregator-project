import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import Form from 'react-bootstrap/Form';


function RegistrationModal({ show, handleClose }) {
  const { t } = useTranslation();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("register")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label htmlFor = "inputEmail">Email</Form.Label>
        <Form.Control className='bg-white' type='email' id='inputEmail' />
        <Form.Label htmlFor="inputPassword5">{t("newPassword")}</Form.Label>
          <Form.Control
            className="bg-white"
            type="password"
            id="inputPassword5"
          />
          <Form.Label htmlFor="inputPassword1">{t("repeatPassword")}</Form.Label>
          <Form.Control
            className="bg-white"
            type="password"
            id="inputPassword1"
          />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          {t("createNewAccount")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegistrationModal;
