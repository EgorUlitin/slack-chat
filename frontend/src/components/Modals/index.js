import { useSelector, useDispatch } from 'react-redux';

import { typeModalSelector } from '../../slices';
import { closeModal } from '../../slices/modalsSlice';

import AddChannelModal from './AddChannelModal';
import RemoveChannelModal from './RemoveChannelModal';

const ModalComponent = () => {
  const dispatch = useDispatch();

  const type = useSelector(typeModalSelector);

  const onHide = () => dispatch(closeModal());

  const modalTypes = {
    create: AddChannelModal,
    remove: RemoveChannelModal,
  };

  const Modal = modalTypes[type];

  return (
    type && <Modal onHide={onHide} />
  )
};

export default ModalComponent;