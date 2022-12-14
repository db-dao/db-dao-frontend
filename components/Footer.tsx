import Link from 'next/link'
import styles from '../styles/Home.module.css';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div>
                Backed by Polychain Capital, Avalanche&apos;s Blizzard Fund, DAO5, and a curated set of angel investors.
                Made in SF, NYC, and Berlin.
            </div>
            <div>
                Follow us on
                <Link href='https://twitter.com/db_dao' target="_blank" >
                    <a className={styles.greenlink}> Twitter</a>
                </Link>.
            </div>
        </footer>
    )
};

export default Footer;