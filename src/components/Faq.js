import React from 'react';
import "../assets/styles.css";
import 'bootstrap/dist/css/bootstrap.css';

function Faq() {
    return (
        <div class="faq container" id="FAQ">
            <h1 class="faqhead text-center">
                Frequently asked questions
            </h1>
            <div class="faq-questions">
                <details open="">
                    <summary>FAQ Question</summary>
                    <div class="faq__content">
                        <p>FAQN Answer mate!</p>
                    </div>
                </details>
                <details>
                    <summary>FAQ Question</summary>
                    <div class="faq__content">
                        <p>FAQN Answer mate!</p>
                    </div>
                </details>
                <details>
                    <summary>FAQ Question</summary>
                    <div class="faq__content">
                        <p>FAQN Answer mate!</p>
                    </div>
                </details>
                <details>
                    <summary>FAQ Question</summary>
                    <div class="faq__content"><p>FAQN Answer mate!</p>
                    </div>
                </details>
                <details>
                    <summary>FAQ Question</summary>
                    <div class="faq__content">
                        <p>FAQN Answer mate!</p>
                    </div>
                </details>
            </div>
        </div>
    )
}

export default Faq;
