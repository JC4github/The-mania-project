import styles from '../styles/Osu.module.css'
import Image from 'next/image'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function test(){
    return (
    <div>
        <Parallax pages={10}>

            <ParallaxLayer speed={1} className={styles.hero} />

            {/* the line circle */}
            <ParallaxLayer speed={1.5}>
                <svg width="445" height="501" viewBox="5 5 445 501" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M379.789 23.0879C386.44 34.1091 392.344 45.504 397.489 57.1917M379.789 23.0879L66.4256 473.819M379.789 23.0879C375.447 15.8918 370.786 8.85502 365.812 2H353.04M397.489 57.1917C403.109 69.9616 407.822 83.081 411.608 96.4446M397.489 57.1917L104.559 478.532M411.608 96.4446C416.243 112.804 419.489 129.53 421.312 146.428M411.608 96.4446L146.272 478.096M421.312 146.428C423.409 165.872 423.622 185.544 421.897 205.15M421.312 146.428L196.505 469.783M421.897 205.15C417.461 255.561 400.214 305.534 369.257 350.062C357.73 366.642 344.833 381.704 330.824 395.2C309.903 415.355 286.503 432.019 261.485 445.036C258.268 446.711 255.023 448.325 251.753 449.878M421.897 205.15L251.753 449.878M251.753 449.878C233.976 458.324 215.462 464.977 196.505 469.783M196.505 469.783C180.03 473.96 163.221 476.743 146.272 478.096M146.272 478.096C132.426 479.201 118.486 479.353 104.559 478.532M104.559 478.532C91.811 477.781 79.0731 476.215 66.4256 473.819M66.4256 473.819C54.5877 471.577 42.8291 468.609 31.216 464.902M31.216 464.902C21.359 461.755 11.6068 458.077 2 453.859V442.983M31.216 464.902L353.04 2M2 442.983V383.421M2 442.983L308.586 2M2 383.421V320.355M2 383.421L267.177 2M2 320.355V260.793M2 320.355L223.331 2M2 260.793V196.852M2 260.793L181.922 2M2 196.852V137.289M2 196.852L137.467 2M2 137.289V77.7272M2 137.289L96.0576 2M2 77.7272V18.1651M2 77.7272L54.6481 2M2 18.1651V2H13.2385M2 18.1651L13.2385 2M13.2385 2H54.6481M54.6481 2H96.0576M96.0576 2H137.467M137.467 2H181.922M181.922 2H223.331M223.331 2H267.177M267.177 2H308.586M308.586 2H353.04" stroke="#FE46CA" stroke-width="3"/>
                </svg>
            </ParallaxLayer>

            {/* the pills */}
            <ParallaxLayer speed={2}>
                <svg className={styles.pill} width="278" height="278" viewBox="0 100 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M103.032 104.032L17.6951 189.357C13.0364 194.016 9.34091 199.547 6.81963 205.633C4.29836 211.72 3.00067 218.244 3.00067 224.832C3.00067 231.42 4.29836 237.944 6.81963 244.031C9.34091 250.117 13.0364 255.648 17.6951 260.306C22.3535 264.965 27.884 268.661 33.9706 271.182C40.0573 273.703 46.581 275.001 53.1692 275.001C59.7574 275.001 66.2811 273.703 72.3677 271.182C78.4544 268.661 83.9848 264.965 88.6433 260.306L173.968 174.969M103.032 104.032L189.775 18.0202C194.433 13.3615 199.964 9.66604 206.05 7.14477C212.137 4.6235 218.661 3.32581 225.249 3.32581C231.837 3.32581 238.361 4.6235 244.447 7.14477C250.534 9.66604 256.065 13.3615 260.723 18.0202C265.382 22.6786 269.077 28.2091 271.598 34.2958C274.12 40.3824 275.417 46.9061 275.417 53.4943C275.417 60.0825 274.12 66.6062 271.598 72.6929C269.077 78.7795 265.382 84.31 260.723 88.9684L173.968 174.969" stroke="#FE46CA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg className={styles.pill2} width="278" height="278" viewBox="0 100 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M103.032 104.032L17.6951 189.357C13.0364 194.016 9.34091 199.547 6.81963 205.633C4.29836 211.72 3.00067 218.244 3.00067 224.832C3.00067 231.42 4.29836 237.944 6.81963 244.031C9.34091 250.117 13.0364 255.648 17.6951 260.306C22.3535 264.965 27.884 268.661 33.9706 271.182C40.0573 273.703 46.581 275.001 53.1692 275.001C59.7574 275.001 66.2811 273.703 72.3677 271.182C78.4544 268.661 83.9848 264.965 88.6433 260.306L173.968 174.969M103.032 104.032L189.775 18.0202C194.433 13.3615 199.964 9.66604 206.05 7.14477C212.137 4.6235 218.661 3.32581 225.249 3.32581C231.837 3.32581 238.361 4.6235 244.447 7.14477C250.534 9.66604 256.065 13.3615 260.723 18.0202C265.382 22.6786 269.077 28.2091 271.598 34.2958C274.12 40.3824 275.417 46.9061 275.417 53.4943C275.417 60.0825 274.12 66.6062 271.598 72.6929C269.077 78.7795 265.382 84.31 260.723 88.9684L173.968 174.969" stroke="#FE46CA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </ParallaxLayer>

            {/* the three x's */}
            <ParallaxLayer speed={0.6}>
                <svg className={styles.x1} width="209" height="209" viewBox="0 0 209 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M208.125 29.7307L178.394 0L104.062 74.3318L29.7307 0L0 29.7307L74.3318 104.062L0 178.394L29.7307 208.125L104.062 133.793L178.394 208.125L208.125 178.394L133.793 104.062L208.125 29.7307Z" fill="#C82077"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer speed={1}>
                <svg className={styles.x2} width="209" height="209" viewBox="0 0 209 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M208.125 29.7307L178.394 0L104.062 74.3318L29.7307 0L0 29.7307L74.3318 104.062L0 178.394L29.7307 208.125L104.062 133.793L178.394 208.125L208.125 178.394L133.793 104.062L208.125 29.7307Z" fill="#FE46CA"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer speed={0.6}>
                <svg className={styles.x3} width="209" height="209" viewBox="0 0 209 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M208.125 29.7307L178.394 0L104.062 74.3318L29.7307 0L0 29.7307L74.3318 104.062L0 178.394L29.7307 208.125L104.062 133.793L178.394 208.125L208.125 178.394L133.793 104.062L208.125 29.7307Z" fill="#C82077"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer speed={1}>

                <svg className={styles.halfCircle} width="234" height="377" viewBox="0 0 234 377" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 293C0 149.245 100.158 28.5974 234 0.951416V57.4401C131.413 84.0586 55 179.062 55 293C55 322.563 60.1442 350.851 69.555 377H11.7957C4.11654 350.338 0 322.144 0 293Z" fill="#C82077"/>
                </svg>

                <div className={styles.squareContainer}>
                    <svg className={styles.square} width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="48" height="48" stroke="#540E83" stroke-width="10"/>
                    </svg>
                    <svg className={styles.square} width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="48" height="48" stroke="#540E83" stroke-width="10"/>
                    </svg>
                    <svg className={styles.square} width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="48" height="48" stroke="#540E83" stroke-width="10"/>
                    </svg>
                    <svg className={styles.square} width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="48" height="48" stroke="#540E83" stroke-width="10"/>
                    </svg>
                    <svg className={styles.square} width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="48" height="48" stroke="#540E83" stroke-width="10"/>
                    </svg>
                    <svg className={styles.square} width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="48" height="48" stroke="#540E83" stroke-width="10"/>
                    </svg>
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
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.5}>
                <div className={styles.content}>
                    <small className={styles.small}>Welcome to OSU</small>
                    <h1 className={styles.title}>The Home Of Mania!</h1>
                    <button className={styles.button} type="button">Explore</button> 
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.999} speed={1} className={styles.section1}/>
                
            <ParallaxLayer offset={0.999} speed={2}>
                <h1 className={styles.title}>What is osu?</h1>
            </ParallaxLayer>

            <ParallaxLayer offset={0.999} speed={1.5}>
                <p>
                    Osu! is a popular rhythm game developed by Dean Herbert
                </p>
            </ParallaxLayer>

        </Parallax>
    </div>
    )
}