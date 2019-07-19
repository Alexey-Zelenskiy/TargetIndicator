import React, {Component} from 'react';
import './App.css'

class App extends Component {

    progressUser() {
        let start = 0;

        let progressElement = document.getElementById('progress-use');
        let money = document.getElementById("myMoney")
        let identity = setInterval(scene, 1000);

        function scene() {

            if (start >= 15) {
                clearInterval(identity)
            } else {

                progressElement.value = start;
                start++;
                money.style.width = start + '$';
                money.innerHTML = start * 1 + '$';
            }

        }
    }

    render() {
        return (
            <div className="App">
                <header>
                </header>
                <div id="container" align="center">
                    <div className="block">
                        <nav className="topLine">
                            <p>Target indicator Demo</p>
                        </nav>
                        <div className="insideBlock">
                            <p className="reached">Reached: </p>
                            <progress id="progress-use" value="0" max="14"/>
                            <div id="myMoney">0$</div>
                        </div>
                    </div>
                </div>
                <button onClick={() => this.progressUser()}>Start</button>
            </div>

        );
    }
}

export default App;
