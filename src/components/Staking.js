import React from 'react';

function Staking() {
    return (
        <section className="about bg-light" id='staking'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="text-center">

            <h1 className="about-title">Staking</h1>
            <p className="lead text-center">
                 Lock your dogs up here!
            </p>

    <div className="iframe-container">
        <iframe
            height="1600px"
            width="100%"
            id="dawghaus-embed"
            title="Degen Dawg Haus"
            src="https://maxx.degen.haus/dawghaus"
            frameborder="0"
            allow="clipboard-write"
            allowfullscreen
        ></iframe>

    </div>
                            <div style={{ height: '42px' }}></div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Staking
