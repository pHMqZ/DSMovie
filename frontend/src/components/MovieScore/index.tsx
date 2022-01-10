import MovieStars from "components/MoviesStars";
import './styles.css';

function MovieScore() {
    const score = 3.5;
    const count = 15;

    return (
        <div className="dsmovieph-score-container">
            <p className="dsmovieph-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovieph-score-count">{count} avaliações</p>
        </div>
        );
}

export default MovieScore