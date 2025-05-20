import ProducerSearch from '../components/ProducerSearch/ProducerSearch';
import styles from './styles.module.css'

const Wyszukaj = () => {
    return ( 
        <div className={styles.page}>
            <h1>Wyszukaj Producenta</h1>
            <ProducerSearch />
        </div>
     );
}
 
export default Wyszukaj;