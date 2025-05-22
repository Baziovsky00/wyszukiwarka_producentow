import { Metadata } from 'next';
import ProducerSearch from '../components/ProducerSearch/ProducerSearch';
import styles from './styles.module.css'

export const metadata: Metadata = {
  title: "Wyszukiwarka Producentów Elektroniki w Polsce",
  description: "Wybierz region, wymagania i skalę produkcji, aby znaleźć najlepszego producenta elektroniki dopasowanego do Twoich potrzeb.",
  keywords: [
    "wyszukiwarka producentów elektroniki",
    "EMS wyszukiwanie",
    "produkcja elektroniki Polska",
    "filtruj producentów PCB"
  ],
  openGraph: {
    title: "Wyszukiwarka Producentów Elektroniki",
    description: "Znajdź producenta elektroniki według lokalizacji, wymagań i skali produkcji.",
    url: "https://twoja-strona.pl/wyszukaj",
    siteName: "Wyszukiwarka Producentów",
    locale: "pl_PL",
    type: "website"
  }
};


const Wyszukaj = () => {
    return ( 
        <div className={styles.page}>
            <h1>Wyszukaj Producenta</h1>
            <ProducerSearch />
        </div>
     );
}
 
export default Wyszukaj;