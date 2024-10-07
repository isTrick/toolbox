type SearchProps = {
  loadUser: (username: string) => Promise<void>;
  className?: string;
}

import { useState } from "react";

import { BsSearch } from "react-icons/bs";
import { widgetStyle } from "../assets/styles/globalStyles";

export default function Search({loadUser}: SearchProps) {
  const [username, setUsername] = useState("");
  
  return (
   <div className={`${widgetStyle} flex flex-col justify-center items-center h-full bg-neutral-900`}>
      <h2 className="text-2xl font-semibold">Procure por um usuário:</h2>
      <p>Conheça seus respositórios em destaque</p>
      <div className="flex flex-row items-center justify-center gap-1">
        <input className="text-neutral-700 rounded-sm outline-none mt-4 mb-4" type="text" placeholder="Digite o nome do usuário" onChange={(event) => setUsername(event.target.value)}/>
        <button onClick={() => loadUser(username)}><BsSearch /></button>
      </div>
    </div>
  )
}