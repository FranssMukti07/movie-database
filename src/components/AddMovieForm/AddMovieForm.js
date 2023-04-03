// import { useState } from "react";
// import data from "../../utils/constants/data";
import styles from "./AddMovieForm.module.css";

const AddMovieForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.addForm}>
                <div className={styles.formLeft}>
                    <img
                        src="https://picsum.photos/300/300 "
                        alt="Gambar Film"
                        className={styles.movie__image}
                    />
                </div>
                <div className={styles.formRight}>
                    <h3 className={styles.formTitle}>Add Movie</h3>
                    <div className={styles.formLabel}>
                        <label for="">Title</label>
                        <input
                            type="text"
                            name="title"
                            className={styles.inputBox}
                        />
                    </div>
                    <div className={styles.formLabel}>
                        <label for="">Release Date</label>
                        <input
                            type="date"
                            name="date"
                            id=""
                            className={styles.inputBox}
                        />
                    </div>
                    <button
                        className={styles.submitButton}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddMovieForm;
