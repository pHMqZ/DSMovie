import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {
    return (
        <div className="dsmovieph-pagination-container">
            <div className="dsmovieph-pagination-box">
                <button className="dsmovieph-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovieph-pagination-button" disabled={false} >
                    <Arrow className="dsmovieph-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
