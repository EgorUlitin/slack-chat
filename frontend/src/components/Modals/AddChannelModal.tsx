import React, { useEffect, useRef } from 'react';
import { useAppSelector } from 'hooks';
import { useTranslation } from 'react-i18next';
import {
  Modal, Button, FormLabel, Form,
} from 'react-bootstrap';
import { Formik } from 'formik';
import { object, string } from 'yup';
import filter from 'leo-profanity';
import { useApi } from '../../contexts/ApiProvider';

import { channelsSelector } from '../../slices';

function AddChannelModal({ onHide }: { onHide: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { createNewChannel } = useApi();
  const { t } = useTranslation();

  const existingChannelName = useAppSelector(channelsSelector).map(({ name }) => name);

  const onSubmit = (data: { name: string }) => {
    const filtredName = filter.clean(data.name);

    createNewChannel({ name: filtredName });
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
        <Modal.Title>{t('modals.addChannelModal.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ name: '' }}
          validationSchema={object({
            name: string()
              .min(3, t<string>('modals.erorrs.min'))
              .max(20, t<string>('modals.erorrs.max'))
              .notOneOf(existingChannelName, t<string>('modals.erorrs.notOneOf'))
              .required(t<string>('modals.erorrs.required')),
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
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Control
                name="name"
                id="name"
                className="mb-2"
                onChange={handleChange}
                value={values.name}
                ref={inputRef}
                isInvalid={!!(touched.name && errors.name)}
                type="text"
              />
              <FormLabel
                htmlFor="name"
                className="visually-hidden"
              >
                {t('modals.addChannelModal.lable')}
              </FormLabel>
              <Form.Control.Feedback type="invalid">
                {!isValid && errors.name}
              </Form.Control.Feedback>
              <div className="d-flex justify-content-end">
                <Button className="me-2 btn-secondary" onClick={onHide}>{t('modals.addChannelModal.cancel')}</Button>
                <Button type="submit" className="btn-primary">{t('modals.addChannelModal.send')}</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default AddChannelModal;
