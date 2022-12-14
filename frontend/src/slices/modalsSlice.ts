import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModalTypes = 'create' | 'remove' | 'rename' | null;

interface IModalState {
  type: ModalTypes
  data: null | number
}

const initialState: IModalState = {
  type: null,
  data: null,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IModalState>) => {
      const { type, data } = action.payload;
      state.type = type;
      state.data = data;
    },
    closeModal: (state) => {
      state.type = null;
      state.data = null;
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
