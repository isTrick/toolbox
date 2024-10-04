type SearchProps = {
  loadUser: (username: string) => Promise<void>;
}

import { useState } from "react";

import { BsSearch } from "react-icons/bs";
import { widgetStyle } from "../assets/styles/globalStyles";

export default function Search({loadUser}: SearchProps) {
  const [username, setUsername] = useState("");
  
  return (
    <div className={`${widgetStyle} flex flex-col justify-center items-center min-h-full`}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus respositórios mais famosos</p>
      <div>
        <input type="text" placeholder="Digite o nome do usuário" onChange={(event) => setUsername(event.target.value)}/>
        <button onClick={() => loadUser(username)}><BsSearch /></button>
      </div>
    </div>
  )
}