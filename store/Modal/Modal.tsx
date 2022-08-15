import {createContext, useState} from 'react';

interface Props {
  children: React.ReactNode;
}

export const ModalCtx = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({children}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalCtx.Provider value={{isModalOpen, openModal, closeModal}}>
      {children}
    </ModalCtx.Provider>
  )
}
