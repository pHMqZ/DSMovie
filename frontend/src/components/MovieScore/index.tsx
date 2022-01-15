import MovieStars from "components/MoviesStars";
import './styles.css';

type Props ={
    score: number;
    count: number;
}

function MovieScore( { score, count } : Props) {

    return (
        <div className="dsmovieph-score-container">
            <p className="dsmovieph-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score}/>
            <p className="dsmovieph-score-count">{count} avaliações</p>
        </div>
        );
}

export default MovieScore;