import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button, FormLabel, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { useApi } from '../../contexts/ApiProvider';
import { object, string } from 'yup';

import { channelsSelector } from '../../slices';


const AddChannelModal = ({ onHide }) => {
  const inputRef = useRef();
  const { createNewChannel } = useApi();
  const existingChannelName = useSelector(channelsSelector).map(({ name }) => name);

  const onSubmit = (name) => {
    createNewChannel(name);
    onHide();
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <Modal
      show
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Добавить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ name: '' }}
          validationSchema={object({
            name: string()
              .min(3, 'Не меньше 3 букв')
              .max(16, 'Не больше 16 символов')
              .notOneOf(existingChannelName, 'Должно быть уникальным')
              .required('Поле не должно быть пустым'),
          })}
          onSubmit={onSubmit}
          values
          errors
          isValid
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            isValid,
            touched
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Control
                name='name'
                id='name'
                className='mb-2'
                onChange={handleChange}
                value={values.name}
                ref={inputRef}
                isInvalid={touched.name && errors.name}
              ></Form.Control>
              <FormLabel
                htmlFor='name'
                className='visually-hidden'>
                Имя Канала
              </FormLabel>
              <Form.Control.Feedback type="invalid">
                {console.log()}
                {!isValid && errors.name}
              </Form.Control.Feedback>
              <div className='d-flex justify-content-end'>
                <Button className='me-2 btn-secondary' onClick={onHide}>Отменить</Button>
                <Button type='submit' className='btn-primary'>Отправить</Button>
              </div>
            </Form>
          )}
        </Formik>

      </Modal.Body>
    </Modal >
  )
}

export default AddChannelModal;