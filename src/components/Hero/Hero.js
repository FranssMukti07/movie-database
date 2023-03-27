import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.hero__left}>
                    <h3 className={styles.hero__title}>Spiderman</h3>
                    <p className={styles.hero__genre}>Action, Comedy</p>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi facilis iste aliquid repellendus ipsum atque
                        ab corporis possimus? Nostrum facilis ea esse. Sit alias
                        rerum accusamus molestias expedita assumenda voluptates?
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src="https://picsum.photos/536/354"
                        alt="Gambar Film"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;