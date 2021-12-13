import React from 'react'
import './chat.css'

const Chat = () => {
    return (
        <div class="fixed-button"> 
            <a href="https://api.whatsapp.com/send?phone=51955145550&amp;text=Hola,%20estoy%20interesada,%20¿Me%20podría%20dar%20información?" target='_blank' rel="noreferrer">  
                <img className='whatsapp-image' src={"https://cdn.fs.teachablecdn.com/QPUzS5lORmq8XFzi2FIj"} alt="Contáctanos por WhatsApp"/> 
            </a>
        </div>    
    )
}

export default Chat
