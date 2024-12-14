import { useState } from "react";
import {ToDoListType} from "../types/ToDoListType";

function ToDoList(){
    const [counter, setCounter] = useState(1);
    const [cards, setCards] = useState<ToDoListType>([]);

    const ToDoCardCreate = () =>{
        setCards([...cards, {id: counter, header: `name is ${counter}`, text: 'Beleberda', creatingDate: "Hz"}])
        setCounter(counter+1);
    }

    const DeleteCard = (id: number) =>{
        setCards((previusCards)=> previusCards.filter((item)=> item.id !== id));
    }
    return (
        <div id="ToDo_wapper">
            <button onClick={ToDoCardCreate}>
                +
            </button>
            <div>
                <ul>
                    {cards.map((card)=>(
                        <li className="ToDoCard" key={card.id}>
                            <h3>{card.header}</h3>
                            <p>{card.text}</p>
                            <button onClick={()=>DeleteCard(card.id)}>Delete me</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;