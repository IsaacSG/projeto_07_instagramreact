import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Corpo from './body';

function App(){
    return(
        <div>
            <Navbar />
            <Corpo />
        </div>
    );
}

ReactDOM.render(<App /> ,document.querySelector(".root"));