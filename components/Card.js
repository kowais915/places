import styles from '@/styles/Card.module.css'

const Card = ({title, description}) => {
    
    return ( 
       <>
            
            <div class="card" style={{width: "15rem;", margin: "10px"}}>
                
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
       </>
     );
}
 
export default Card;