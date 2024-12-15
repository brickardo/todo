import { useState } from "react";
import {ToDoListType} from "../types/ToDoListType";
import './todoList.css'

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
            <button id="addCardButton" onClick={ToDoCardCreate}>
                +
            </button>
            <div id="cardList_wrapper">
                <ul id="cardListUl_wrapper">
                    {cards.map((card)=>(
                        <li className="ToDoCard" key={card.id}>
                            <h3 className="CardHeader">{card.header}</h3>
                            <p className="CardText">{card.text}</p>
                            <button className="cardDeteleButton" onClick={()=>DeleteCard(card.id)}>Delete me</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;