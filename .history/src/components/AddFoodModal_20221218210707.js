import React from 'react'

export default function AddFoodModal() {
    return (
        <div>
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
        </div>
    )
}
