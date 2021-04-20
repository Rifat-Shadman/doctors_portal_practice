import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const TransactionForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null);
            console.log('[error]', error);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{color:'red'}}>{paymentError}</p>
            }

            {
                paymentSuccess && <p style={{color:'green'}}>Your Payment was successfull</p>
            }
        </div>
    );
};

export default TransactionForm;


// import React, { useMemo, useState } from "react";
// import {
//   useStripe,
//   useElements,
//   CardNumberElement,
//   CardCvcElement,
//   CardExpiryElement
// } from "@stripe/react-stripe-js";

// import useResponsiveFontSize from '../../useResponsiveFontSize';
// import './style.css';
// const useOptions = () => {
//   const fontSize = useResponsiveFontSize();
//   const options = useMemo(
//     () => ({
//       style: {
//         base: {
//           fontSize,
//           color: "#424770",
//           letterSpacing: "0.025em",
//           fontFamily: "Source Code Pro, monospace",
//           "::placeholder": {
//             color: "#aab7c4"
//           }
//         },
//         invalid: {
//           color: "#9e2146"
//         }
//       }
//     }),
//     [fontSize]
//   );

//   return options;
// };

// const TransactionForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const options = useOptions();

//   const [error, setError] = useState(null);

//   const handleSubmit = async event => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     const payload = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardNumberElement)
//     });
//     console.log("[PaymentMethod]", payload);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Card number
//         <CardNumberElement
//           options={options}
//           onReady={() => {
//             console.log("CardNumberElement [ready]");
//           }}
//           onChange={event => {
//             console.log("CardNumberElement [change]", event);
//           }}
//           onBlur={() => {
//             console.log("CardNumberElement [blur]");
//           }}
//           onFocus={() => {
//             console.log("CardNumberElement [focus]");
//           }}
//         />
//       </label>
//       <br/>
//       <label>
//         Expiration date
//         <CardExpiryElement
//           options={options}
//           onReady={() => {
//             console.log("CardNumberElement [ready]");
//           }}
//           onChange={event => {
//             console.log("CardNumberElement [change]", event);
//           }}
//           onBlur={() => {
//             console.log("CardNumberElement [blur]");
//           }}
//           onFocus={() => {
//             console.log("CardNumberElement [focus]");
//           }}
//         />
//       </label>
//       <br/>
//       <label>
//         CVC
//         <CardCvcElement
//           options={options}
//           onReady={() => {
//             console.log("CardNumberElement [ready]");
//           }}
//           onChange={event => {
//             console.log("CardNumberElement [change]", event);
//           }}
//           onBlur={() => {
//             console.log("CardNumberElement [blur]");
//           }}
//           onFocus={() => {
//             console.log("CardNumberElement [focus]");
//           }}
//         />
//       </label>
//       <br/>
//       <button type="submit" disabled={!stripe}>
//         Pay 
//       </button>
//     </form>
//   );
// };

// export default TransactionForm;
