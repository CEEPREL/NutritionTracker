import { useEffect, useState } from "react"
import React from 'react'
import Modal from 'react-modal';
import Food from "./components/Food";

export default function FetchFoodApi() {
    const API_KEY = 'XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf'
    const [apiData, setApiData] = useState(null);
    const [typedFood, setTypedFood] = useState("");
    const [fetchedFood, setFetchedFood] = useState('');
    const [fetchError, setFetchError] = useState('')
    // Modal configs
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
    function fetchFoodData() {

    }

    const fetchData = () => {
        fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${typedFood}&pageSize=5`)
            .then((response) => {
                if (!response.ok) throw new Error('Did not receive expected food data')
                return response.json()
            })
            .then((data) => {
                setFetchedFood(data);
                console.log(data)
                setFetchError(null);
            })
            .catch((err) => {
                console.log(err.message);
                setFetchError(err.message);
            });
    };


    useEffect(() => {

    }, []);

    return (

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



            <br></br>
            <input
                placeholder="Type food to load..."
                onChange={(event) => {
                    setTypedFood(event.target.value)
                }}>
            </input>
            <button onClick={fetchData}>Fetch food</button>
            <br></br>
            {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}

            {fetchedFood ?
                <div>
                    {fetchedFood.map((result, index) => {
                        return (
                            <Food key={index}
                                name={result.foods}
                                 />
                        )
                    })}
                </div>
                : <p>Fetch items to display</p>
            }
        </div>
    )
}

// https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf
