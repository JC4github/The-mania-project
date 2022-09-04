import styles from '../styles/Osu.module.css'
import Image from 'next/image'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function osu(){
    

    return(
        <div className={styles.container}>
            {/* <div>
                <div className={styles.lineContainer}>
                <svg className={styles.svg} width="204" height="1665" viewBox="0 0 204 1665" fill="none" preserveAspectRatio='xMidYMax meet' xmlns="http://www.w3.org/2000/svg">
                <path d="M105 0.5V494C105.167 511.5 106.5 541.5 91 540C91 539.6 91 531.5 90.5 527.5C90.1899 525.019 89 520.5 82 520L37 527C34.8333 527.5 30.6 530.1 31 536.5V547.5V592C30.6666 597 27.6 606.8 16 606C1.49995 605 0.99998 590 6.99998 585C11.8333 582.5 23.8 579.3 31 588.5L31.4999 551L91 541.5L91 580.5C91.1666 586 88.5 596.9 76.5 596.5C64.5 596.1 62.8333 585.667 63.5 580.5C64.5 577.333 68.6297 573.295 78.5 574C85.5 574.5 89.7566 576.675 94.5 583C99 589 105 598 105 610V627.5C114.5 630.333 133.7 636 134.5 636C135.5 636 141.5 638 142.5 631.5C143.5 625 139 615.5 138.5 615C138 614.5 132 605.5 111.5 602.5C109.833 602.167 106.2 602.4 105 606V684.5C104.833 690.167 101.7 701.6 90.5 702C76.5 702.5 72 691 73 686C74 681 74.9252 675.5 90 675.5C96.6825 675.5 102.397 677.354 104.5 681.5C105 688 105 698.5 105 698.5C105 698.5 104 894 104 998H90.5C87.5 998.167 81.5 1000 81.5 1006C81.5 1012 81.5 1049.83 81.5 1068C81.5 1070 82.9 1074.1 88.5 1074.5C94.1 1074.9 160.5 1074.67 193 1074.5C195.5 1074.33 200.6 1072.8 201 1068V1006C201 1003.33 199.4 998 193 998C186.6 998 131.5 998 106 998V1040H111V1073H115.5V1040H120.5V1000H133.5V1040H138.5V1073H142.5V1040H147.5V1000H160.5V1040H166V1073H169.5V1040H174.5V1000H193C195 1000.17 199 1001.6 199 1006C199 1010.4 199 1049.17 199 1068C198.833 1069.5 197.4 1072.5 193 1072.5C188.6 1072.5 132.167 1072.83 104.5 1073V1147.5V1664.5" stroke="#FFFFFF" strokeWidth="3"/>
                </svg>

                </div>
            </div> */}
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
            <section className={styles.section1}>
                <h1 className={`${styles.title} ${styles.scroll}`} data-rate=".4" data-direction="vertical">What is osu?</h1>
                <p>
                    Osu! is a popular rhythm game developed by Dean Herbert
                </p>
                

            </section>
            <div className={styles.hero2}>
                <p>
                    There are 4 game modes in osu!
                </p>
                <div className={styles.mode1}>
                    <Image
                    src="/assets/osuMode.png"
                    alt="osu mode"
                    width="100%"
                    height="37%"
                    objectFit='contain'
                    layout='responsive'
                    />
                </div>
                <div className={styles.mode2}>
                    <Image
                    src="/assets/taikoMode.png"
                    alt="osu mode"
                    width="100%"
                    height="37%"
                    objectFit='contain'
                    layout='responsive'
                    />
                </div>
                <div className={styles.mode3}>
                    <Image
                    src="/assets/catchMode.png"
                    alt="osu mode"
                    width="100%"
                    height="37%"
                    objectFit='contain'
                    layout='responsive'
                    />
                </div>
                <div className={styles.mode4}>
                    <Image
                    src="/assets/maniaMode.png"
                    alt="osu mode"
                    width="100%"
                    height="37%"
                    objectFit='contain'
                    layout='responsive'
                    />
                </div>
                
            </div>
            <script type='text/javascript' src='/static/pathEffect.js'></script>
        </div>
    )
}