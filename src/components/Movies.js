import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import Flexible from './Flexible';

const APİ_KEY = 'f2e5e993cbef37f9bf1511dc3c01edad';
const BASE_URL = 'https://api.themoviedb.org/3';
const İMG_URL = 'https://image.tmdb.org/t/p/w500';
const BASİS_APİ = BASE_URL + '/discover/movie?sort_by=popularity.desc&api_key=' + APİ_KEY + '&language=tr';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=' + APİ_KEY + '&query=';



const Movies = () => {

    const [Filmler, setFilmler] = useState([]);
    const [AramaTerimi, setAramaTerimi] = useState("");

    function APİAl(APİ) {
        fetch(APİ).then(res => res.json()).then(data => {
            setFilmler(data.results)
        });
    }

    useEffect(() => {
        APİAl(BASİS_APİ);
    }, []);

    function useToggleForDarkLight() {
        let BODY = document.body;
        let MENÜ = document.getElementById("menü");
        let MENÜBTN = document.getElementById("menü-btn");
        BODY.classList.toggle("light-mode");
        MENÜ.classList.toggle("bg-dark");
        MENÜ.classList.toggle("text-light");
        MENÜBTN.classList.toggle("light-mode");
        MENÜBTN.classList.toggle("text-dark");
    }

    function olayYönetimi(e) {
        e.preventDefault();

        if (AramaTerimi) {
            APİAl(SEARCH_URL + AramaTerimi + '&language=tr');

            setAramaTerimi("");
        } else {
            APİAl(BASİS_APİ);
        }
    }

    const searchSystem = (e) => {
        setAramaTerimi(e.target.value);
    }
    return (
        <>
            <nav className="navbar bg-light fixed-top" id="menü">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">FİLM LİSTESİ | M.Can tarafından</span>

                    <form className="d-flex" onSubmit={olayYönetimi}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="ARA"
                            aria-label="ARA"
                            onChange={searchSystem} />
                    </form>

                    <button className="btn" id="menü-btn" onClick={useToggleForDarkLight}>
                        light/dark
                    </button>
                </div>
            </nav>

            <Flexible classFlex="D-flex-wrap-center Mt-65 ">
                {
                    Filmler.map(film => {
                        return (
                            <MovieCard
                                key={film.id}
                                filmiçeriği={film.overview}
                                filmyılı={film.release_date}
                                filmposteri={İMG_URL + film.poster_path}
                                filmadı={film.title}
                                filmortalaması={film.vote_average}
                                filmoysayısı={film.vote_count}
                                filmorijinaladı={film.original_title}
                            />
                        )
                    })
                }
            </Flexible>
        </>
    )

}

export default Movies;