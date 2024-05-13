import { useState } from "react";

export default function Player({ initialName, symbol,isActive }) {
    const[playerName,setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((isEditing) => !isEditing); //here always try to pass like a function because inside react sheduling works so if to try to do it direclty negating the value you may encounter issues
    }
    function handleNameChange(event){
        setPlayerName(event.target.value);
    }
    const playerNameField = isEditing ? (
        <input type="text" placeholder="Name" value={playerName}  onChange={handleNameChange}/>
      ) : (
        <span className="player-name">{playerName}</span>
      );

      const buttonField = isEditing ? ('Save') : ('Edit');

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
            {playerNameField}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{buttonField}</button>
        </li>

    );
}