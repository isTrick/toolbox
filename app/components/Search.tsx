type SearchProps = {
  loadUser: (username: string) => Promise<void>;
}

import { useState } from "react";

import { BsSearch } from "react-icons/bs";

export default function Search({loadUser}: SearchProps) {
  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus respositórios mais famosos</p>
      <div>
        <input type="text" placeholder="Digite o nome do usuário" />
        <button ><BsSearch /></button>
      </div>
    </div>
  )
}