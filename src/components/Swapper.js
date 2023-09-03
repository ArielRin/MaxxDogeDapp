import React, { useState } from 'react';

function Swapper() {
    const [amount, setAmount] = useState('');
    const targetAddress = '0xthiswallet'; // Replace with the actual target address

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSendAmount = () => {
        // You can add your logic here to send the 'amount' to the 'targetAddress'.
        // This is just a placeholder function for demonstration purposes.
        console.log(`Sending ${amount} to address ${targetAddress}`);
        // Reset the amount input after sending
        setAmount('');
    };

    return (
        <section className="about bg-light" id='swapper'>
            <div className="text-center">

                <div className="text-center">

    <h1 className="about-title">MaxxDoge Swapper</h1>
    <p className="lead text-center">
         Gassless Swapper Send PWR and recieve MaxxDoge (MDOGE) straight into wallet. no need to go to the exchange!
    </p>



                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="0.00 PWR"
                        value={amount}
                        onChange={handleAmountChange}
                        style={{ textAlign: 'right' }} // Right-align text
                 />
                </div>
                <div className="button-container">
                    <button onClick={handleSendAmount}>Send PWR</button>
                </div>
            </div>
        </section>
    );
}

export default Swapper;
