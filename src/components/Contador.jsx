import { useState } from "react"
function Contador(props){
    
    const [contador,setContador] = useState(props.inicial)

    const handleSumar = () => {
        setContador(contador + 1)
    }
    
    const handleRestar = () => {
        if(contador > 1){
        setContador(contador - 1)
        }
    }
    
    const handleResetear = () => {
        setContador(1)
    }
    return (
        <p>
            Contador Actual : {contador}
            <button onClick={handleSumar} className="btn">sumar</button>
            <button onClick={handleRestar} className="btn">restar</button>
            <button onClick={handleResetear} className="btn">resetear</button>
        </p>
    )
}

export default Contador