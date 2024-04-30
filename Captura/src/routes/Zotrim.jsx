import styles from './css/Zotrim.module.css'
import ImageUpload from '../components/ImageUpload/ImageUpload.jsx'


const Zotrim = () => {

    return (
        <>
            <header>
                <div className={styles.promo} >
                    <p>
                        Sign Up For <b>10% Discount</b> - Avaiable Only <b>This Week</b>
                    </p>
                </div>
                <div className={styles.header}>
                    <a href="https://zotrim.com/?_ef_transaction_id=&oid=13&affid=37993">
                        <img className={styles.logo} src="zotrim-logo.png" alt="logo" />
                    </a>
                </div>
            </header>
            <section className={styles.hero_container}>
                <div className={styles.hero_wrapper}>
                    <h1>Zotrim, The Clinically Proven Appetite Suppressant</h1>
                    <a href='https://zotrim.com/?_ef_transaction_id=&oid=13&affid=37993'>
                        <button className={styles.hero_button}>ORDER NOW</button>
                    </a>
                </div>
                <div className={styles.hero_photo_container}>
                    <picture className={styles.hero_photo}>
                        <source media="(max-width: 440px)" srcSet="weight_small.png" />
                        <source media="(max-width: 768px)" srcSet="weight_medium.png" />
                        <img src="weight_large.png" alt="lost-weight" />
                    </picture>
                </div>
            </section>
            <section className={styles.pros_container}>
                <picture>
                    <source media="(max-width: 440px)" srcSet="experts-small.png" />
                    <source media="(max-width: 768px)" srcSet="experts-medium.jpg" />
                    <img src="experts-large.jpg" alt="experts-approve" />
                </picture>
                <picture>
                    <source media="(max-width: 440px)" srcSet="studies-small.png" />
                    <source media="(max-width: 768px)" srcSet="studies-medium.jpg" />
                    <img src="studies-large.jpg" alt="clinical-studies" />
                </picture>
                <picture>
                    <source media="(max-width: 440px)" srcSet="eat-less-small.png" />
                    <source media="(max-width: 768px)" srcSet="eat-less-medium.jpg" />
                    <img src="eat-less-large.jpg" alt="eat-less" />
                </picture>
                <picture>
                    <source media="(max-width: 440px)" srcSet="fuller-small.png" />
                    <source media="(max-width: 768px)" srcSet="fuller-medium.jpg" />
                    <img src="fuller-large.jpg" alt="fuller-longer" />
                </picture>
            </section>
            <hr />
            <section className={styles.testimony_container}>
                <h1>Success Stories</h1>
                <div className={styles.testimony_wrapper}>
                    <picture>
                        <source media="(max-width: 440px)" srcSet="smith-small.jpg" />
                        <source media="(max-width: 768px)" srcSet="smith-large.jpg" />
                        <img src="smith-large.jpg" alt="testimony-1" />
                    </picture>
                    <picture>
                        <source media="(max-width: 440px)" srcSet="florence-small.jpg" />
                        <source media="(max-width: 768px)" srcSet="florence-large.jpg" />
                        <img src="florence-large.jpg" alt="testimony-2" />
                    </picture>
                    <picture>
                        <source media="(max-width: 440px)" srcSet="michelle-small.jpg" />
                        <source media="(max-width: 768px)" srcSet="michelle-large.jpg" />
                        <img src="michelle-large.jpg" alt="testimony-3" />
                    </picture>
                    <picture>
                        <source media="(max-width: 440px)" srcSet="crellin-small.jpg" />
                        <source media="(max-width: 768px)" srcSet="crellin-large.jpg" />
                        <img src="crellin-large.jpg" alt="testimony-4" />
                    </picture>

                </div>

                <div className={styles.testimony_button_container}>
                    <a href='https://zotrim.com/?_ef_transaction_id=&oid=13&affid=37993'>
                        <button className={styles.testimony_button}>SIGN UP</button>
                    </a>
                </div>
                <div>
                    <ImageUpload />
                </div>
            </section>
        </>
    )
}

export default Zotrim