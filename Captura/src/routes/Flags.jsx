import styles from './css/Flags.module.css'

const Flags = () => {
    return (
        <>
            <div className={styles.header}>
                <a href="https://theikariajuice.com/?shield=f8041bnzx2yysu8bg41fd-1za3">
                    <img className={styles.logo} src="logo.png" alt="logo" />
                </a>
            </div>
            <div>
                <div className={styles.productWrap}>
                    <img className={styles.product} src="single-product.png" alt="product-image" />
                    <h1 className={styles.choose}>Please,<br /> choose<br /> your country: </h1>
                </div>
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
            </div>
            <div>
                <p className={styles.terms}>
                    100% Satisfaction Guaranteed

                    The Ikaria Lean Belly Juice is backed by a 100% money-back guarantee for 6 months from your original purchase. If you're not totally and completely satisfied with The Ikaria Lean Belly Juice, including your results or your experience in the first 180 days from your purchase, simply let us know by contacting us through this website and you will receive a full refund of what you ordered within 48 hours of the product being returned. Simply return the product, even empty bottles, anytime within 180 days of your purchase and you'll receive a full, no questions asked refund (less shipping and handling).

                    We are so confident in the effectiveness of the Ikaria Lean Belly Juice that we offer this risk-free guarantee. We want you to have peace of mind when trying our product and to feel completely satisfied with your purchase. If, for any reason, you are not satisfied, we are here to make it right for you.

                    To request a refund, simply contact us through this website and our friendly customer service will be ready to assist you with the return and refund process.

                    Your satisfaction is our number one priority. Try the Ikaria Lean Belly Juice today, knowing that you are protected by our total satisfaction guarantee.

                    BuyQuickly Company</p>
            </div>
        </>
    )
}

export default Flags