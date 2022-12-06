import axios from 'axios';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useRollbar } from '@rollbar/react';
import {
  Container, Row, Col, Card, Form, Button,
} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAuth } from '../contexts/AuthProvider';
import routes from '../routes';

import image from '../login_img.jpg';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginPage = () => {
  const [authFailed, setAuthFailed] = useState(false);

  const rollbar = useRollbar();
  const inputRef = useRef();
  const auth = useAuth();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      setAuthFailed(false);

      await schema.validate(values)
        .then(async (data) => {
          const { data: { username, token } } = await axios.post(routes.loginPath(), data);

          auth.logIn({ username, token });

          const { from } = location.state?.pathname || { from: { pathname: '/' } };
          navigate(from);
        })
        .catch((error) => {
          rollbar.error('Error on login', error, values);

          if (error?.response?.status === 401) {
            setAuthFailed(true);
          }

          if (error.code === 'ERR_NETWORK') {
            toast.error(t('loginPage.fetchError'));
          }
        });
    },
  });

  const inputStyle = cn({ 'is-invalid': authFailed });

  return (
    <Container className="h-100" fluid>
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <Card.Img className="rounded-circle" variant="center" src={image} />
              </div>
              <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
                <fieldset disabled={formik.isSubmitting}>
                  <h1 className="text-center mb-4">{t('loginPage.title')}</h1>
                  <Form.Group className="form-floating mb-3">
                    <Form.Control
                      className={inputStyle}
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      id="username"
                      name="username"
                      autoComplete="username"
                      placeholder="Ваш ник"
                      required
                      ref={inputRef}
                    />
                    <Form.Label htmlFor="username">{t('loginPage.nicknameLable')}</Form.Label>
                  </Form.Group>
                  <Form.Group className="form-floating mb-4">
                    <Form.Control
                      className={inputStyle}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      id="password"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      placeholder="Пароль"
                      required
                    />
                    <Form.Label htmlFor="password">{t('loginPage.passwordLable')}</Form.Label>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {authFailed && t('loginPage.wrongData')}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button className="w-100 mb-3 btn btn-outline-primary" variant="outline-primary" type="submit">
                    {t('loginPage.login')}
                  </Button>
                </fieldset>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span>{t('loginPage.footerText')}</span>
                <Link to={routes.signupPage()}>{t('loginPage.footerLink')}</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
