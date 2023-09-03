import React from 'react';

function About() {
    return (
        <section className="about bg-light" id='about'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="text-center">
                            <div style={{ height: '42px' }}></div>
                            <div className="text-center">
                                <h1 className="about-title">Contract</h1>
                                <p className="lead text-center">
                                    0x9d1677c605c27d2147ad7a9f220dee64ea4d05d6
                                </p>
                            </div>

                            <div className="button-container">
                                <div className="button-group">
                                    <button
                                        className="link-button"
                                        onClick={() => window.location.href = 'https://t.me/maxxdoge'}
                                    >
                                        Telegram
                                    </button>
                                    <button
                                        className="link-button"
                                        onClick={() => window.location.href = 'https://twitter.com/MaxxdogeToken'}
                                    >
                                        Twitter X
                                    </button>
                                    <button
                                        className="link-button"
                                        onClick={() => window.location.href = 'https://example.com'}
                                    >
                                        Whitepaper
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
