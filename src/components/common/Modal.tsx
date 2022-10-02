import { MouseEventHandler } from 'react'
import ReactDOM from 'react-dom'
import useMount from 'src/hooks/useMount'

interface ModalProps {
  children: JSX.Element | JSX.Element[]
  close: () => void
}

const Modal = ({ children, close }: ModalProps) => {
  const isMount = useMount()

  const closeModal: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      close()
    }
  }

  return (
    <>
      {isMount &&
        ReactDOM.createPortal(
          <div
            onClick={closeModal}
            className="fixed top-0 left-0 right-0 bottom-0 z-20"
          >
            <div className="z-50">{children}</div>
          </div>,
          document.getElementById('__next') as HTMLElement,
        )}
    </>
  )
}

export default Modal
