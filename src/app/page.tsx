import Image from "next/image";
import styles from './styles.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Polski <br /> EMS</h1>
      <h2>Znajdź swojego producenta</h2>
      <div className={styles.buttons}>
        <Link href={'/wyszukaj'}><button>Wyszukaj</button></Link>
        <Link href={'/wszyscy-producenci'}><button>Wszyscy Producenci</button></Link>
      </div>
    </div>
  );
}
