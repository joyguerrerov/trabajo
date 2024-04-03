import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './card.css'
import Btn from './Btn'

export default function Cards() {

    const [cards, setCards] = useState([])
  
    const getCards = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())
            .then(data => setCards(data.data))
        
  }

useEffect(() => {  
  getCards()
        

}, [])
    

    const borrar = (evento) => {
        evento.target.parentElement.remove()

    

    }
 

    





    return (
      <>
      <div className='cards'>
          {cards.map((card, index) => 
              <div className='card' key={index}>
                  <h3>{card.title}</h3>
                  <p>{card.userId}</p>
                  {/* <p>{card.id}</p> */}
                  <p>{card.body}</p>
                 <button onClick={(evento) => borrar(evento)}> Borrar </button>


              </div>

          )}
    
          
      
    </div>
    </>
  )
}
