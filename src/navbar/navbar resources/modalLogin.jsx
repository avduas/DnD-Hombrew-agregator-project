import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import { useTranslation } from "react-i18next";
import RegistrationModal from './modalRegistration';
import "./css/modalLogin.css"

function LoginModal() {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const openRegistration = () => {
    setShowLogin(false);
    setTimeout(() => {
      setShowRegistration(true);
    }, 100); 
  };

  return (
    <>
      <button className="navButton" onClick={handleLoginShow}>
        {t("registrationAndLogin")}
      </button>

      <Modal show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("login")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor='inputEmail'>Email</Form.Label>
          <Form.Control className='bg-white' type='email' id='inputEmail' />
          <Form.Label htmlFor="inputPassword5">{t("password")}</Form.Label>
          <Form.Control
            className="bg-white"
            type="password"
            id="inputPassword5"
          />
        </Modal.Body>
        <Modal.Footer className='justify-content-evenly'>
          <Button variant='warning' onClick={openRegistration}>
            {t("register")}
          </Button>
          <Button variant="dark" onClick={handleLoginClose}>
            {t("login")}
          </Button>
        </Modal.Footer>
      </Modal>

      <RegistrationModal
        show={showRegistration}
        handleClose={() => setShowRegistration(false)}
      />
    </>
  );
}

export default LoginModal;
