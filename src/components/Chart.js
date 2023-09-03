import React from 'react';

function Chart() {
    return (
        <section className="about bg-light" id='chart'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="text-center">

            <h1 className="about-title">MaxxDoge Chart Gecko Terminal</h1>
            <p className="lead text-center">
                 Live data on Gecko Terminal check out the trades right here!
            </p>


                            <div style={{ height: '42px' }}></div>

                        </div>

                    </div>
                </div>
            </div><div className="text-center">
                <div className="iframe-container">
                    <iframe height="1200px" width="100%" id="geckoterminal-embed" title="GeckoTerminal Embed" src="https://www.geckoterminal.com/maxxchain/pools/0x3b2d382526c5202bbfeeb7364662cc8ee61c0f36?embed=1&info=1&swaps=1" frameborder="0" allow="clipboard-write" allowfullscreen></iframe>

                </div>
            </div>
        </section>
    )
}

export default Chart
