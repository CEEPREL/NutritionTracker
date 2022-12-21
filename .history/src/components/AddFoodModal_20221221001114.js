import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import Modal from 'react-modal';

export default function AddFoodModal({ handleAddFoodItem }) {
    const [name, setName] = useState("")
    const [serving, setServing] = useState("")
    const [protein, setProtein] = useState("")
    const [calories, setCalories] = useState("")
    const [sugar, setSugar] = useState("")

    Modal.setAppElement()

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddFoodItem(name, serving, protein, calories, sugar)
        setName("")
        setServing("")
        setProtein("")
        setCalories("")
        setSugar("")
        setIsOpen(false);
    }

    Modal.setAppElement()
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '600px',
            backgroundColor: '#2e3039'

        },
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
                <p>Add Food</p>
                <button onClick={openModal}><h1 style={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "space-between" }}><FaPlus /></h1></button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal" >
                <div className="modal-title">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add new food to list</h2>
                    <button onClick={closeModal}>close</button>
                </div>

                <div style={{}}>
                    <form onSubmit={handleSubmit} style={{
                        display: "flex", flexDirection: "column",
                        textAlign: 'left', gap: '10px'
                    }}>
                        <img src="images/breakfast.svg" alt="Logo" style={{ zIndex: "-1" }} />
                        <label htmlFor="name">Food name</label>
                        <div style={{
                            display: "flex", flexDirection: "column", position: "absolute",
                            textAlign: 'left', gap: '10px', justifyContent: "center", alignItems: "center"
                        }}>
                            <label>Serving size</label>

                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label>Serving size</label>
                            <input
                                type="number"
                                id="serving"
                                value={serving}
                                onChange={(e) => setServing(e.target.value)}
                            />

                            <label>Protein amount</label>
                            <input
                                type="number"
                                id="protein"
                                value={protein}
                                onChange={(e) => setProtein(e.target.value)}
                            />

                            <label>Serving size</label>
                            <input
                                type="number"
                                id="calories"
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                            />

                            <label>Serving size</label>
                            <input
                                type="number"
                                id="sugar"
                                value={sugar}
                                onChange={(e) => setSugar(e.target.value)}
                            />

                            <button type="submit" onClick={handleSubmit}>Add Food</button>
                        </div>
                    </form>

                </div>
            </Modal>
        </div>
    )
}
