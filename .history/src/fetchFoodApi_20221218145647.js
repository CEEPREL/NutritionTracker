import { useEffect, useState } from "react"
import React from 'react'

export default function FetchFoodApi() {
    const API_KEY = 'XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf'
    const [apiData, setApiData] = useState(null);
    const [typedFood, setTypedFood] = useState('');
    const [fetchedFood, setFetchedFood] = useState('');
    Modal configs
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
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
    function fetchFoodData(typedFood) {
        fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&${typedFood}`)
            .then((response) => response.json())
            .then((data) => {
                setFetchedFood(data);
            }
            )
    }
    useEffect(() => {
        fetchFoodData();
    }, []);

    return (

        <div className="container">
            <div className="wrapper-card">
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
                <button onClick={() => { fetchFoodData(typedFood) }}></button>
            </div>


        </div>
    )
}

// https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf
