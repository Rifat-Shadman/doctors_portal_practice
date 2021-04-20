// import React from 'react';
// import Modal from 'react-modal';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import TransactionForm from '../TransactionForm/TransactionForm';


// const stripePromise = loadStripe('pk_test_51Ig0F5Jiwxrib6qmbv3kg6P1kszz0NliGVBOhRgaDWRsCjOtj1wCIAb6tdYLBha3aoKIAokxF62CxFpraGEFpH95009HRhCFiu');


// Modal.setAppElement('#root')

// const Transaction = ({ modalIsOpen, closeModal }) => {

//     return (

//         // <Modal
//         //         isOpen={modalIsOpen}
//         //         onRequestClose={closeModal}
//         //         style={customStyles}
//         //         contentLabel="Example Modal"
//         //     >
//             <Elements stripe={stripePromise}>
//                 <TransactionForm modalIsOpen={ modalIsOpen} closeModal={closeModal }></TransactionForm>
//             </Elements>
//         // </Modal>

//     );
// };

// export default Transaction;




import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import TransactionForm from '../TransactionForm/TransactionForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ig0F5Jiwxrib6qmbv3kg6P1kszz0NliGVBOhRgaDWRsCjOtj1wCIAb6tdYLBha3aoKIAokxF62CxFpraGEFpH95009HRhCFiu');


const Transaction = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <TransactionForm handlePayment={handlePayment}></TransactionForm>
        </Elements>
    );
};

export default Transaction;