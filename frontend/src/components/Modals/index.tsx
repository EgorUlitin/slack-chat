import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { typeModalSelector } from '../../slices';
import { closeModal } from '../../slices/modalsSlice';

import AddChannelModal from './AddChannelModal';
import RemoveChannelModal from './RemoveChannelModal';
import RenameChannelModal from './RenameChannelModal';

function ModalComponent() {
  const dispatch = useAppDispatch();

  const type = useAppSelector(typeModalSelector);

  const onHide = () => dispatch(closeModal());

  const modalTypes = {
    create: AddChannelModal,
    remove: RemoveChannelModal,
    rename: RenameChannelModal,
  };

  if (!type) {
    return null;
  }

  const Modal = type && modalTypes[type];

  return (
    <Modal onHide={onHide} />
  );
}

export default ModalComponent;
