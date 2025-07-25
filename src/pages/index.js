import Head from 'next/head'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import clients from '@/data/clients.json'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Growup Studio | Next.js, Wordpress og Shopify</title>
                <meta name="description" content="Next.js, Wordpress og Shopify hjemmesideløsninger. Få personlig hjælp til din hjemmeside hos os. Vi tilbyder skræddersyede løsninger."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <h1 className={styles.h1}>Next.js, Wordpress og Shopify.</h1>
                        <p className={styles.subh1}>Få personlig hjælp til din hjemmeside hos os.
                            Vi tilbyder skræddersyede løsninger. Vi har 10+ års erfaring med at
                            hjælpe små og mellemstore virksomheder med deres hjemmesider, og grafiske opgaver.
                        </p>
                    </header>
                    <ul className={styles.clientList}>
                        {clients.map((client, index) => (
                            <li className={styles.client} key={index}>
                                {client.client_name}
                                <sup> {client.client_year}</sup>
                            </li>
                        ))}
                    </ul>
                    <a className={styles.contactBtn} href={'mailto:hello@growupstudio.dk'}>Kontakt os her {'->'}</a>
                </div>
            </main>
        </>
    )
}
