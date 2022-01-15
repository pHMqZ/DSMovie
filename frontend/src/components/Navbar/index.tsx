
import { ReactComponent as Github } from 'assets/img/github.svg';
import { BASE_URL } from 'utils/requests';
import './styles.css';


function Navbar() {

    
    return (
        <header>
            <nav className="container">
                
                <div className="dsmovieph-nav-content">
                    <a href= {`${BASE_URL}/`}><h1>DSMovie</h1></a>
                    <a href="https://github.com/pHMqZ">
                        <div className='dsmovieph-contact-container'>
                            <Github />
                            <p className='dsmovieph-contact-link'>/pHMqZ</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;