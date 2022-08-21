import { createContext, useState, MouseEvent } from 'react';

interface Props {
  children: React.ReactNode;
}

export const ModalCtx = createContext({
  isModalOpen: false,
  openModal: (_: HTMLButtonElement) => {},
  closeModal: () => {}
});

export function ModalProvider({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activatorButton, setActivatorButton] =
    useState<HTMLButtonElement | null>(null);

  /**
   *
   * @param parentButton: button that triggers the open modal
   */
  const openModal = (parentButton: HTMLButtonElement) => {
    setIsModalOpen(true);
    setActivatorButton(parentButton);
  };

  /**
   * focuses the activator button on modal close (for accessibility)
   */
  const closeModal = () => {
    setIsModalOpen(false);
    activatorButton?.focus();
  };

  return (
    <ModalCtx.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalCtx.Provider>
  );
}
