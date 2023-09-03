import React from 'react'
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";

function Footer() {
    return (
        <div className='footer container'>
            <p>Maxx Doge&#169; All Right Reserved</p>
            <div className='social'>
                <a href='https://twitter.com/MaxxdogeToken' >
                    <AiOutlineTwitter size={24} color="#000" />
                </a>
            </div>
        </div>
    )
}

export default Footer
