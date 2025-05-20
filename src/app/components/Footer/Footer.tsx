import Link from 'next/link';
import styles from './styles.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <Link href={'/o-nas'}>O nas</Link>
                <Link href={'/kontakt'}>Kontakt</Link>
                <Link href={'/regulamin'}>Regulamin</Link>
            </div>
            <button>Chcę znaleźć się na stronie</button>
        </div>
    );
}

export default Footer;