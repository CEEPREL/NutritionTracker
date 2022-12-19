import React from 'react'

export default function AddFoodModal() {
    return (
        <div>
        
    <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal" >
                <div className="modal-title">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                </div>

                <div>I am a modal</div>
                <form>
                    <input />

                </form>
            </Modal>
        </div>
    )
}
