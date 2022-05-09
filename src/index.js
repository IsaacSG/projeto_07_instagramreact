import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Corpo from './body';
import FundoMb from './fundo_mobile';

function App(){
    return(
        <div>
            <Navbar />
            <Corpo />
            <FundoMb />
        </div>
    );
}

ReactDOM.render(<App /> ,document.querySelector(".root"));