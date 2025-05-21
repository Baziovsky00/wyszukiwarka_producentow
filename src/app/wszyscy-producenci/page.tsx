import { getAllProducers } from '../../lib/actions';
import styles from './styles.module.css'
import AllProducers from '../components/AllProducers/AllProducers';

const Wyszukaj = async () => {
    const producers = await getAllProducers()
    
    return ( 
        <div className={styles.page}>
            <h1>Wszycy Producenci</h1>
            <AllProducers producers={producers}/>
        </div>
     );
}
 
export default Wyszukaj;