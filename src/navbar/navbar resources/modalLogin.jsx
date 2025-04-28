import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useTranslation } from "react-i18next";
import RegistrationModal from './modalRegistration';
import { post } from '../../api/api';

function LoginModal() {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [password, setPassword] = useState("");
  const [inputEmailTouched, setInputEmailTouched] = useState(false);
  const [inputPasswordTouched, setInputPasswordTouched] = useState(false);
  const [email, setEmail] = useState("");

  const login = async () => {
    try {
      console.log('Отправляем данные:', { email, password });
      const data = await post('/api/login', { email, password });
      console.log("Успешный вход", data)
      setShowLogin(false);
    } catch (error) {
      console.error('Ошибка входа:', error.message);
    }
  };

  const handleLoginClose = () => setShowLogin(false)
  const handleLoginShow = () => setShowLogin(true);

  const openRegistration = () => {
    setShowLogin(false);
    setTimeout(() => {
      setShowRegistration(true);
    }, 100);
  };

  const isPasswordInvalid = inputPasswordTouched && password.length < 3;
  const isEmailEmpty = inputEmailTouched && (email.length == 0 || !email.includes('@'));
  const formHasErrors = isEmailEmpty || isPasswordInvalid;

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
          <Form.Control
            className={`bg-white ${isEmailEmpty ? 'is-invalid' : ''}`}
            type='email'
            id='inputEmail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setInputEmailTouched(true)}
          />
          {isEmailEmpty && (<div className="invalid-feedback" style={{ display: 'block' }}>
            {t("emailInvalid")}
          </div>)}
          <Form.Label htmlFor="inputPassword5">{t("password")}</Form.Label>
          <Form.Control
            className={`bg-white ${isPasswordInvalid ? 'is-invalid' : ''}`}
            type="password"
            id="inputPassword5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setInputPasswordTouched(true)}
          />
          {isPasswordInvalid && (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              {t("passwordTooShort")}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className='justify-content-evenly'>
          <Button variant='warning' onClick={openRegistration}>
            {t("register")}
          </Button>
          <Button variant="dark" onClick={login} disabled = {formHasErrors}>
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
