import { useEffect, useState } from "react"
import './Cards.css'
import axios from "axios";

export default function Cards() {

    const [cards, setCards] = useState([])


    const getPost = async () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            // console.log(cards);
            .then(data => setCards(data.data))

    }

    useEffect(() => {
        getPost();
    }, []);

    const borrar = (e) => {
        console.log(e.target.parentElement.remove());

    }

    return (
        < div className="card" >
            {
                cards.map((card, index) =>
                    <div key={index} className='conteiner'>
                        <h3>{card.title}</h3>
                        <p>{card.userId}</p>
                        <p>{card.body}</p>
                        <button onClick={(e) => borrar(e)}>Eliminar</button>

                    </div>)
            }
        </div >
    )
}
