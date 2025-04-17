import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Modal = ({title, children, onClose}) => {

  return (
    <div className='relative z-40 w-screen'
        aria-label='Modal'
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
        onClick={onClose}
    >
    <div className='fixed inset-0 bg-black opacity-80 transition-opacity' aria-hidden="true"></div>
    <div className='fixed inset-0 w-full overflow-y-auto'>
        <div className='flex z-50 min-h-full w-full items-center justify-center p-4 text-center'>
            <div className='relative w-full transform overflow-hidden rounded-md p-4'>
                <div className='bg-[#f1efec] p-4 rounded-md space-y-6'>
                    <div className='modal-header w-full flex items-center justify-between border-b-2 border-gray-200 pb-2'>
                        <h2>{title}</h2>
                        <button type='button' onClick={onClose} aria-label='Close modal' className='p-1 font-medium rounded-md hover:bg-gray-200 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200'>
                            <span><FaTimes size={20}/></span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Modal;