import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
    interface MyMovie {
        Title: string,
        Year: string,
        Runtime: string,
        Poster: string
        id: string
    }
    const [movies, setMovies] = useState<MyMovie[]>([]);

    useEffect(() => {
        axios
            .get<MyMovie[]>("http://localhost:3000/movies")
            .then((res) => {
                console.log(res.data)
                setMovies(res.data)
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div>
                <h1>Movies List</h1>
            </div>
            <div className=" w-75 rounded  shadow p-4">
                <table className="table">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <Link to="/crt" className="btn btn-success" >Add+</Link>
                    </div>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TItle</th>
                            <th scope="col">Year</th>
                            <th scope="col">Runtime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr>
                                <th scope="row">{movie.id}</th>
                                <td>{movie.Title}</td>
                                <td>{movie.Year}</td>
                                <td>{movie.Runtime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Products;
