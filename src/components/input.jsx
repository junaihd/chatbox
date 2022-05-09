import { useState } from 'react'
import axios from 'axios'

const Input = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name && message) {
        const id = new Date().getTime().toString();
        axios.post('https://sheetdb.io/api/v1/15u7z1k8uu49i', { name, message, id});

        setName('');
        setMessage('');
        alert('Swipe down to update post');
        }
        else{
          alert('Empty fields!');
        }
    }

  return (
    <header>
        <form >
        <input type="text"
               className="name"
               placeholder='Enter your Name' 
               required 
               value={name}
               onChange={(e) => setName(e.target.value)}
               />

        <input type="text" 
               className='message' 
               placeholder='Enter the Message' 
               required 
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               />
               <button className='btn' onClick={handleSubmit}>Post</button>
               </form>
    </header>
  )
}

export default Input;