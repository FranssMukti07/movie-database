import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { addMovies } from "../../feature/movieSlice";
import { useDispatch } from "react-redux";

const AddMovieForm = (props) => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: "",
        year: "",
        genre: "",
        poster: "",
    });
    const { title, year, genre, poster } = formData;

    const [isError, setIsError] = useState({
        titleError: false,
        yearError: false,
        genreError: false,
        posterError: false,
    });
    const { titleError, yearError, genreError, posterError } = isError;

    const validate = () => {
        if (title === "") {
            setIsError({
                ...isError,
                titleError: true,
            });
        } else if (year === "") {
            setIsError({
                ...isError,
                titleError: false,
                yearError: true,
            });
        } else if (genre === "") {
            setIsError({
                ...isError,
                yearError: false,
                genreError: true,
            });
        } else if (poster === "") {
            setIsError({
                ...isError,
                genreError: false,
                posterError: true,
            });
        } else {
            setIsError({
                titleError: false,
                yearError: false,
                genreError: false,
                posterError: false,
            });
            return false;
        }
    };

    const addMovie = () => {
        const newMovie = {
            id: nanoid(),
            title: title,
            year: year,
            genre: genre,
            type: "Movie",
            poster: poster,
        };

        dispatch(addMovies(newMovie));
        navigation("/");
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate() === false) {
            addMovie();
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
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            className={styles.inputBox}
                            value={title}
                            onChange={handleChange}
                        />
                        {titleError && (
                            <Alert>
                                <em className={styles.warning}>
                                    Title Wajib Diisi!
                                </em>
                            </Alert>
                        )}
                    </div>
                    <div className={styles.formLabel}>
                        <label>Release Date</label>
                        <input
                            type="text"
                            name="year"
                            className={styles.inputBox}
                            value={year}
                            onChange={handleChange}
                        />
                        {yearError && (
                            <Alert>
                                <em className={styles.warning}>
                                    Date Wajib Diisi!
                                </em>
                            </Alert>
                        )}
                    </div>
                    <div className={styles.formLabel}>
                        <label>Genre</label>
                        <select
                            name="genre"
                            value={genre}
                            className={styles.inputBox}
                            onChange={handleChange}
                        >
                            <option value="">---Select Genre---</option>
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Romance">Romance</option>
                            <option value="Horror">Horror</option>
                            <option value="Comedy">Comedy</option>``
                            <option value="Thriller">Thriller</option>
                        </select>
                        {genreError && (
                            <Alert>
                                <em className={styles.warning}>
                                    Genre Wajib Diisi!
                                </em>
                            </Alert>
                        )}
                    </div>
                    <div className={styles.formLabel}>
                        <label>Image Link</label>
                        <input
                            type="text"
                            name="poster"
                            className={styles.inputBox}
                            value={poster}
                            onChange={handleChange}
                        />
                        {posterError && (
                            <Alert>
                                <em className={styles.warning}>
                                    Link Wajib Diisi!
                                </em>
                            </Alert>
                        )}
                    </div>
                    <Button full>Submit</Button>
                    {/* <button className={styles.submitButton}>Submit</button> */}
                </form>
            </div>
        </div>
    );
};

export default AddMovieForm;
