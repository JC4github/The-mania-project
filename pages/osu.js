import styles from '../styles/Osu.module.css'
import Image from 'next/image'

export default function osu(){
    return(
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <small className={styles.small}>Welcome to OSU</small>
                    <h1 className={styles.title}>The Home Of Mania!</h1>
                    <button className={styles.button} type="button">Explore</button> 
                </div>

                <div className={styles.logo1}>
                    <Image
                    src="/assets/Osulogo.png"
                    alt="osu! logo"
                    width={500}
                    height={500}
                    />
                </div>

                <div className={styles.logo2}>
                    <Image
                    src="/assets/Osulogo.png"
                    alt="osu! logo"
                    width={520}
                    height={520}
                    />
                </div>

                <div className={styles.logo3}>
                    <Image
                    src="/assets/OsulogoWhite.png"
                    alt="osu! logo"
                    width={750}
                    height={750}
                    />
                </div>
            </div>
            <div>
                <h1 className={styles.title2}>What is osu!?</h1>
            </div>
        </div>
    )
}