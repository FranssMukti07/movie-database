import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
// import data from "../../utils/constants/data";
import styles from "./AddMovieForm.module.css";

const AddMovieForm = (props) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [link, setLink] = useState("");
    const [genre, setGenre] = useState("");
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isLinkError, setIsLinkError] = useState(false);
    const [isGenreError, setIsGenreError] = useState(false);
    const { movies, setMovies } = props;

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleLink = (e) => {
        setLink(e.target.value);
    };

    const handleGenre = (e) => {
        setGenre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "") {
            setIsTitleError(true);
        } else {
            setIsTitleError(false);
        }

        if (date === "") {
            setIsDateError(true);
        } else {
            setIsDateError(false);
        }

        if (link === "") {
            setIsLinkError(true);
        } else {
            setIsLinkError(false);
        }

        if (genre === "") {
            setIsGenreError(true);
        } else {
            setIsGenreError(false);
        }

        if (title !== "" && date !== "" && link !== "" && genre !== "") {
            const newMovie = {
                id: nanoid(),
                title: title,
                year: date,
                genre: genre,
                type: "Movie",
                poster: link,
            };

            console.log(newMovie);

            setMovies([...movies, newMovie]);
            setIsTitleError(false);
            setIsDateError(false);
            setIsLinkError(false);
            setIsGenreError(false);
        }
    };

    return (
        <div className={styles.container} id="addMovie">
            <div className={styles.addForm}>
                <div className={styles.formLeft}>
                    <img
                        src="https://picsum.photos/300/300 "
                        alt="Gambar Film"
                        className={styles.movie__image}
                    />
                </div>
                <form className={styles.formRight} onSubmit={handleSubmit}>
                    <h3 className={styles.formTitle}>Add Movie</h3>
                    <div className={styles.formLabel}>
                        <label for="">Title</label>
                        <input
                            type="text"
                            name="title"
                            className={styles.inputBox}
                            value={title}
                            onChange={handleTitle}
                        />
                        {isTitleError ? (
                            <Alert>
                                <em className={styles.warning}>
                                    Title Wajib Diisi!
                                </em>
                            </Alert>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className={styles.formLabel}>
                        <label for="">Release Date</label>
                        <input
                            type="text"
                            name="date"
                            className={styles.inputBox}
                            value={date}
                            onChange={handleDate}
                        />
                        {isDateError ? (
                            <Alert>
                                <em className={styles.warning}>
                                    Date Wajib Diisi!
                                </em>
                            </Alert>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className={styles.formLabel}>
                        <label for="">Genre</label>
                        <select
                            name="genre"
                            value={genre}
                            className={styles.inputBox}
                            onChange={handleGenre}
                        >
                            <option value="" selected>
                                ---Select Genre---
                            </option>
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Romance">Romance</option>
                            <option value="Horror">Horror</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Thriller">Thriller</option>
                        </select>
                        {isGenreError ? (
                            <Alert>
                                <em className={styles.warning}>
                                    Genre Wajib Diisi!
                                </em>
                            </Alert>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className={styles.formLabel}>
                        <label for="">Image Link</label>
                        <input
                            type="text"
                            name="link"
                            className={styles.inputBox}
                            value={link}
                            onChange={handleLink}
                        />
                        {isLinkError ? (
                            <Alert>
                                <em className={styles.warning}>
                                    Link Wajib Diisi!
                                </em>
                            </Alert>
                        ) : (
                            ""
                        )}
                    </div>
                    <button className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddMovieForm;
