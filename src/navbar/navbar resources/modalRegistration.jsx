import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { post } from '../../api/api';


function RegistrationModal({ show, handleClose }) {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [repeatTouched, setRepeatTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const passwordMatch = password === repeatPassword;
  const isFormValid = email.trim() !== '' &&
    password.length >= 3 &&
    password.length <= 30 &&
    passwordMatch &&
    name.trim() !== '';

  const register = async () => {
    try {
      console.log("Отправляем данные:", { email, password, name });
      const data = await post('/api/register', { email, password, name })
      console.log("Регистрация успешна", data)
      handleClose();
    } catch (error) {
      console.error('Ошибка регистрации:', error.message);
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("register")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label htmlFor="inputEmail">Email*</Form.Label>
          <Form.Control
            className={`bg-white ${emailTouched && email.trim() === '' ? 'is-invalid' : ''}`}
            type='email'
            id='inputEmail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="inputPassword5">{t("newPassword")}*</Form.Label>
          <Form.Control
            className={`bg-white ${passwordTouched && (password.length < 3 || password.length > 30) ? 'is-invalid' : ''}`}
            type="password"
            id="inputPassword5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
            required
          />
          <Form.Text id='inputPassword5'>
            Your password must be 3-30 characters long.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="inputPassword1">{t("repeatPassword")}</Form.Label>
          <Form.Control
            className={`bg-white ${repeatPassword && !passwordMatch ? 'is-invalid' : ''}`}
            type="password"
            id="inputPassword1"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            isInvalid={repeatPassword && !passwordMatch}
            required
          />
          <Form.Group>
            <Form.Label htmlFor="inputNickname">{t("nickname")}</Form.Label>
          </Form.Group>
          <Form.Control
            className={`bg-white ${nameTouched && name.trim() === '' ? 'is-invalid' : ''}`}
            type="text"
            id="inputNickname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={register} disabled={!isFormValid}>
          {t("createNewAccount")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegistrationModal;
