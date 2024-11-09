import React from 'react'

function page() {
    return (
        

            <div className='contact-container'>

                <h1 className='contact-title'>Contact Me</h1>
                <div className='contatc'>
                    Name
                    <input className="input-box" type="text"
                        placeholder='Write here your name' />
                    Email
                    <input className="input-box" type="text"
                        placeholder='Write here your email' />
                    Message
                    <textarea className='message-box' placeholder='write your message'
                    ></textarea>
                   
                    <button className='submit-btn'>
                        Send Message
                    </button>
                </div>
            </div>

        
    )
}

export default page