import { Link } from "react-router-dom"
function Presentacional(props){

    return(
        <div className="card-container">
            {props.productos.map((item)=>{
                return (
                    <article className="card">
                        <h2 className="card__title">{item.title} - ${item.price}</h2>
                        <img className="card__image" src={item.image} alt={item.title} />
                        <Link to={`/item/${item.id}`}><button className="btn">ver mas</button></Link>
                    </article>
                )
            })}
        </div>
    )
}

export default Presentacional