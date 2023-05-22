import styles from '@/styles/Card.module.css'

const Card = ({title}) => {
    return ( 
       <>
            
            <div class="card" style={{width: "15rem;", margin: "10px"}}>
                
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
       </>
     );
}
 
export default Card;