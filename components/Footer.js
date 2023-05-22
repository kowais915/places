import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/Footer.module.css'
const Footer = () => {
    return ( 
        <footer className={styles.container}>
            <p>Copyright 2023.  Made with <FontAwesomeIcon icon={faHeart} color="red" /> at GIKI.</p>
        </footer>
     );
}
 
export default Footer;