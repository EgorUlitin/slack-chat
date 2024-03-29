import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Formik, Field } from 'formik';
import {
  Container, Row, Col, Card, Form, Button,
} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useAuth } from '../contexts/AuthProvider';
import routes from '../routes';

import image from '../signup_img.jpg';

const SignupPage = () => {
  const [isExistingUser, setExistingUser] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const auth = useAuth();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onSubmit = (userData: { username: string, password: string, confirmPassword: string }) => {
    const body = { username: userData.username, password: userData.password };

    axios.post(routes.signupPath(), body)
      .then((response) => {
        setExistingUser(false);

        const { username, token } = response.data;

        auth.logIn({ username, token });

        const { from } = location.state?.pathname || { from: { pathname: '/' } };
        navigate(from);
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setExistingUser(true);
        }
      });
  };

  return (
    <Container className="h-100" fluid>
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <Card.Img className="rounded-circle" variant="center" src={image} />
              </div>
              <Formik
                validateOnBlur
                initialValues={{ username: '', password: '', confirmPassword: '' }}
                validationSchema={yup.object({
                  username: yup.string()
                    .min(3, t<string>('signupPage.erorrs.username.min'))
                    .max(20, t<string>('signupPage.erorrs.username.max'))
                    .required(t<string>('signupPage.erorrs.username.required')),
                  password: yup.string().min(6, 'Не менее 6 символов').required(t<string>('signupPage.erorrs.password.min')),
                  confirmPassword: yup.string().oneOf([yup.ref('password'), null], t<string>('signupPage.erorrs.confirmPassword')),
                })}
                onSubmit={onSubmit}
                values
                errors
                isValid
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  isSubmitting,
                  values,
                  errors,
                  isValid,
                  touched,
                }) => (
                  <Form onSubmit={handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
                    <fieldset disabled={isSubmitting}>
                      <h1 className="text-center mb-4">{t('signupPage.title')}</h1>
                      <Form.Group className="form-floating mb-3">
                        <Field
                          as={Form.Control}
                          id="username"
                          name="username"
                          placeholder="Имя пользователя"
                          value={values.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={isExistingUser || (touched.username && errors.username)}
                          required
                        />
                        <Form.Label htmlFor="username">{t('signupPage.usernameLable')}</Form.Label>
                        <Form.Control.Feedback type="invalid" tooltip>
                          {!isValid && errors.username}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-floating mb-4">
                        <Field
                          as={Form.Control}
                          placeholder="Пароль"
                          id="password"
                          name="password"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          autoComplete="current-password"
                          isInvalid={isExistingUser || (touched.password && errors.password)}
                          required
                        />
                        <Form.Label htmlFor="password">{t('signupPage.passwordLable')}</Form.Label>
                        <Form.Control.Feedback type="invalid" tooltip>
                          {!isValid && errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-floating mb-4">
                        <Field
                          as={Form.Control}
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          placeholder="Пароль"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          autoComplete="current-confirmPassword"
                          isInvalid={isExistingUser
                            || (touched.confirmPassword && errors.confirmPassword)}
                          required
                        />
                        <Form.Label htmlFor="confirmPassword">{t('signupPage.confirmPasswordLable')}</Form.Label>
                        <Form.Control.Feedback type="invalid" tooltip>
                          {(!isValid && errors.confirmPassword) || (isExistingUser && 'Такой пользователь уже существует')}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>
                          {isExistingUser && 'Такой пользователь уже существует'}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Button className="w-100 btn btn-outline-primary" variant="outline-primary" type="submit">
                        {t('signupPage.registration')}
                      </Button>
                    </fieldset>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
