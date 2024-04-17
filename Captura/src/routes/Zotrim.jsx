import styles from './css/Zotrim.module.css'

const Zotrim = () => {
    return (
        <>
            <header>
                <div className={styles.header}>
                    <a href="https://theikariajuice.com/?shield=f8041bnzx2yysu8bg41fd-1za3">
                        <img className={styles.logo} src="zotrim-logo.png" alt="logo" />
                    </a>
                </div>
            </header>
            <section className={styles.hero_container}>
                <div className={styles.hero_wrapper}>
                    <h1>Zotrim, The Clinically Proven Appetite Suppressant</h1>
                    <button className={styles.hero_button}>ORDER NOW</button>
                </div>
                <img className={styles.hero_photo} src="loose_weight.png" alt="logo" />
            </section>
            <section className={styles.pros_container}>
                <img src="eat-less.png" alt="eat-less" />
                <img src="studies-papers.png" alt="studies-papers" />
                <img src="experts-approved.png" alt="experts-approve" />
                <img src="fuller-for-longer.png" alt="fuller-for-longe" />
            </section>
            <hr />
            <section className={styles.testimony_container}>
                <h1>Success Stories</h1>
                <div className={styles.testimony_wrapper}>
                    <img src="smith.jpg" alt="testimony-1" />
                    <img src="florence.jpg" alt="testimony-2" />
                    <img src="michelle.jpg" alt="testimony-3" />
                    <img src="crellin.jpg" alt="testimony-4" />
                </div>
            </section>
        </>
    )
}

export default Zotrim