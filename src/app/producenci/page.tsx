import FoundProducers from '../components/FoundProducers/FoundProducers';
import ProducerSearch from '../components/ProducerSearch/ProducerSearch';
import styles from './styles.module.css'

const Wyszukaj = () => {
    return ( 
        <div className={styles.page}>
            <h1>Wyszukani Producenci</h1>
            <FoundProducers />
        </div>
     );
}
 
export default Wyszukaj;