import { useState } from "react"
import style from "./App.css"

export default function App() {
    
    const [numero, setNumero] = useState(0)
    
    function aumentar() {
        setNumero(numero + 1)
    }

    function diminuir() {
        setNumero(numero - 1)
    }

    function resetar() {
        setNumero(0)
    }

    return <section>
        <h1>Counter</h1>
        <p>{numero}</p>
        <div class="buttons">
            <button onClick={diminuir}>-</button>
            <button onClick={aumentar}>+</button>
        </div>
        <button onClick={resetar} class="botao-resetar">Reset</button>
    </section>
}