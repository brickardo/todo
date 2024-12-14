import { useState } from "react";
import {ToDoListType} from "../types/ToDoListType";

function ToDoList(){
    const [counter, setCounter] = useState(0);
    const [cards, setCards] = useState<ToDoListType>([]);

    const ToDoCardCreate = () =>{
        setCounter(counter+1);
        setCards([...cards, {header: `name is ${counter}`, text: 'Beleberda', creatingDate: "Hz"}])
    }

    return (
        <div id="ToDo_wapper">
            <button onClick={ToDoCardCreate}>
                +
            </button>
            <div>
                <ul>
                    {cards.map((card, index)=>(
                        <li className="ToDoCard" key={index}>
                            <h3>{card.header}</h3>
                            <p>{card.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;