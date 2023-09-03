import React from 'react';

function Buy() {
    return (
        <section className="about bg-light" id='buy'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="text-center">
        <div className="text-center">
            <h1 className="about-title">Buy MaxxDoge Now!</h1>
            <p className="lead text-center">
                 Get your MaxxDoge (MDOGE) Directly from our Page right Now. No need to look for contracts or copy paste. just buy below.
            </p>
        </div>
    <div className="iframe-container">
        <iframe
            src="https://maxxswap.org/#/swap?outputCurrency=0x9d1677c605c27d2147ad7A9f220dEe64EA4D05D6&inputCurrency=ETH"  // Replace with your iframe URL
            style={{
                width: '50%', // Set the width to 100% of the viewport width (vw)
                height: '100vh', // Set the height to 100% of the viewport height (vh)
                border: 'none', // Optional: Remove iframe border
                  }}
            frameBorder="0"
            allowFullScreen
            title="Embedded Content"
        ></iframe>

</div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Buy
