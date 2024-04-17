import { useEffect, useState } from 'react';
import styles from './css/Flags.module.css'

const Flags = () => {

    const [isToggled, setIsToggled] = useState(new Map());

    const toggleText = (id) => {
        const newState = new Map(isToggled);
        newState.set(id, !newState.get(id));
        setIsToggled(newState);
    }

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 100);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const textContents = [
        {
            id: 1,
            header: "Is The Ikaria Lean Belly Juice For Real?",
            text: <>
                The Ikaria Lean Belly Juice is an all-natural formula that contains only ingredients that are tested and produced in a controlled facility. It is manufactured here in the USA in an FDA-registered facility that follows the GMP (good manufacturing practices) guidelines. <br /><br /> The ingredients we use are of the highest possible standard and tested for the highest purity and potency. <br />As with any dietary supplement, it is recommended that you consult with your physician before taking Ikaria Lean Belly Juice.
            </>
        },
        {
            id: 2,
            header: "Can I Take The Ikaria Lean Belly Juice With Other Supplements?",
            text: <> The Ikaria Lean Belly Juice should be compatible with other supplements without any problems or adverse effects.<br />However, we do not recommend you take Lean Belly Juice together with supplements containing similar ingredients.
            </>
        },
        {
            id: 3,
            header: "Will The Ikaria Lean Belly Juice Really Work For Me?",
            text: <> The Ikaria Lean Belly Juice is proven to support healthy weight loss, maintain healthy digestion and energy levels. <br />It's a powerful and unique blend that is helping thousands of men and women in many different countries.<br /> <br />It makes no difference if you're a man or a woman, if you're 60 or 30 years of age. <br /><br />You can get impressive results by taking the Ikaria Lean Belly Juice daily, ideally for 3 to 6 months. You could notice the difference in a few short days or in a week.<br /> Maybe it'll take a month or two to notice the impressive results you dream of by taking the Ikaria Lean Belly Juice each day. Either way, we believe youll experience great results from the formula, thanks to its unique combination of powerful nutrients.</>
        },
        {
            id: 4,
            header: "What If Ikaria Lean Belly Juice Doesn't Work For Me?",
            text: <> We're very confident that you'll benefit from the Ikaria Lean Belly Juice.<br />
                However, if the Ikaria Lean Belly Juice is less than satisfying for you, feel free to contact us directly to request a prompt refund of your purchase.
                <br /><br />
                Results vary for every man or woman. It may take you longer to notice the positive effects. Or it may be quick.<br />
                Even if the Ikaria Lean Belly Juice gets amazing results for many people, we know that no supplement or medication has a 100% success rate.<br />
                That's why you're covered by our 180-day money-back satisfaction guarantee.</>
        },
        {
            id: 5,
            header: "How Many Bottles Of The Ikaria Lean Belly Juice Should I Order?",
            text: <> The Ikaria Lean Belly Juice's ingredients are scientifically proven to have their greatest effect after 90 days or more.
                <br />This is why it makes a lot of sense for you to get started with the 3 or 6-month packages.<br /><br />
                Sure, you can order a 30-day supply today - and you'll be so convinced by how great you feel in a week or two that you'll be likely to order more.<br />
                That's why taking advantage of our 3 or 6-bottle deals below is the best choice for you.</>
        },
        {
            id: 6,
            header: "How Fast Will I Receive My Order?",
            text: <> Orders are processed and shipped within 2-3 days and should arrive in 5-7 days if you're in the US or 10-12 days if you’re outside the US, depending on customs.</>
        },

    ];


    return (
        <>
            <section>
                <div className={styles.header}>
                    <a href="https://theikariajuice.com/?shield=f8041bnzx2yysu8bg41fd-1za3">
                        <img className={styles.logo} src="logo.png" alt="logo" />
                    </a>
                </div>
            </section>
            <section>
                <div className={styles.productWrap}>
                    <img className={styles.product} src="single-product.png" alt="product-image" />
                    <h1 className={styles.choose}>Please,<br /> choose<br /> your country: </h1>
                </div>
            </section>
            <section>
                <div>
                    <ul className={styles.wrap}>
                        <li>
                            <a href="https://theikariajuice.com/?shield=f8041bnzx2yysu8bg41fd-1za3">
                                <img className={styles.flag} src="canada.jpg" alt="canada-flag" />
                            </a>
                        </li>
                        <li>
                            <a href="https://theikariajuice.com/?shield=f8041bnzx2yysu8bg41fd-1za3">
                                <img className={styles.flag} src="EUA.jpg" alt="eua-flag" />
                            </a>
                        </li>
                        <li>
                            <a href="https://theikariajuice.com/?shield=f8041bnzx2yysu8bg41fd-1za3">
                                <img className={styles.flag} src="uk.jpg" alt="uk-flag" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <div className={styles.heading1}>
                <h1 >Refund Policy 100% Satisfaction</h1>
            </div>
            <section >
                <div className={styles.warranty}>
                    <img className={styles.warranty_img} src="warranty.png" alt="warranty-terms" />
                </div>
            </section>
            <div className={styles.heading2}>
                <h1>Frenquently Asked Questions</h1>
            </div>
            <section>

                {textContents.map((content) => (
                    <div key={content.id}>
                        <div className={styles.containerToogle}>
                            <div className={styles.containerButton}>
                                <h3 className={styles.heading}>{content.header}</h3>
                                <button className={styles.toggle_button} onClick={() => toggleText(content.id)}>{isToggled.get(content.id) ? "-" : "+"}</button>
                            </div>
                            <p className={styles.text} style={{ display: isToggled.get(content.id) ? "block" : "none" }}>{content.text}</p>
                        </div>
                    </div>
                ))}
            </section>
            <section>
                <div>
                    <p className={styles.terms}>
                        100% Satisfaction Guaranteed

                        The Ikaria Lean Belly Juice is backed by a 100% money-back guarantee for 6 months from your original purchase. If you're not totally and completely satisfied with The Ikaria Lean Belly Juice, including your results or your experience in the first 180 days from your purchase, simply let us know by contacting us through this website and you will receive a full refund of what you ordered within 48 hours of the product being returned. Simply return the product, even empty bottles, anytime within 180 days of your purchase and you'll receive a full, no questions asked refund (less shipping and handling).

                        We are so confident in the effectiveness of the Ikaria Lean Belly Juice that we offer this risk-free guarantee. We want you to have peace of mind when trying our product and to feel completely satisfied with your purchase. If, for any reason, you are not satisfied, we are here to make it right for you.

                        To request a refund, simply contact us through this website and our friendly customer service will be ready to assist you with the return and refund process.

                        Your satisfaction is our number one priority. Try the Ikaria Lean Belly Juice today, knowing that you are protected by our total satisfaction guarantee.

                        BuyQuickly Company</p>
                </div>
            </section>
            <div>
                {isVisible && (
                    <button className={styles.scrollToTopButton} onClick={scrollToTop}>
                        T
                    </button>)}
            </div>
        </>
    )
}

export default Flags