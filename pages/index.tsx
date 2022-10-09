import type { InferGetServerSidePropsType, NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import getConfig from 'next/config'
import Link from 'next/link';
import { style } from '@mui/system';
const { publicRuntimeConfig } = getConfig()

const Home: NextPage = () => {
    return (
        <div className="container mx-auto w-[35rem]">

            <Header web3={false}/>

            <main className={styles.main}>

                <div className={styles.description}>
                    DB DAO is a protocol for community owned databases.
                </div>

                <div className="my-3">
                    Decentralized apps will run on decentralized databases. DB DAO makes each database a DAO and each row in a database an NFT.
                </div>

                <div className="my-3">
                    As a database monetize, those that contributed to it are rewarded.
                </div>

                <div className="my-3">
                    DB DAO is a new protocol to incentivize contributions and allow for structured web3 data to be stored and queried.
                </div>

                <div className="my-3">
                    Get started building a dapp with DB DAO.  Fork the  {" "}
                        <a  href='https://github.com/CurateDAO/db-dao-frontend' target="_blank" rel="noopener noreferrer" className={styles.greenlink}>
                            white label app on github
                        </a> to get started.
                </div>

            </main>
            <Footer/>
        </div>
    );
};

export default Home;