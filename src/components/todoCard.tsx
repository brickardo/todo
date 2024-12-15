import React, { useState } from "react"

interface TodoCardProps{
    id: number;
    DeleteCard: (id:number)=>void;
}

export const TodoCard: React.FC<TodoCardProps> = React.memo(({id, DeleteCard}: TodoCardProps) => {
    const [header, setHeader] = useState<string>(`name is ${id}`);
    const [text, setText] = useState<string>("");

    const handleHeaderChangeKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, setFunc: any) => {
        if (e.key === 'Enter') {
            setFunc(e.currentTarget.value);
        }
    }

    return (
        <li className="ToDoCard" key={id}>

            <div className="CardHeaderSection_wrapper">
                <input
                    type="text" defaultValue={header}
                    onKeyDown={(e) => handleHeaderChangeKeyPress(e, setHeader)}
                />
                <h3 className="CardHeader">{header}</h3>
            </div>


            <div className="CardTextSection_wrapper">
                <input
                    type="text" defaultValue={text}
                    onKeyDown={(e) => handleHeaderChangeKeyPress(e, setText)}
                />
                <p className="CardText">{text}</p>
            </div>
            <button className="cardDeteleButton" onClick={() => DeleteCard(id)}>Delete me</button>
        </li>
    )
})