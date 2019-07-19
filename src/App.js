import React, {Component} from 'react';
import './App.css'
import axios from 'axios';

class App extends Component {
    state = {
        people: ""
    }

    componentDidMount() {
        const url = 'http://alex.devel.softservice.org/testapi/';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    data: data.balance_usd
                });
            });
    }

    progressUser(time) {
        document.getElementById('more1').hidden = false;
        document.getElementById('target').style.background = '#898282';
        let start = 0;
        this.setState({color: false});
        let progressElement = document.getElementById('progress-use');
        let money = document.getElementById("myMoney")
        const intervalId = setInterval(() => {
            {
                if (start >= 15) {
                    clearInterval(intervalId);
                    document.getElementById('target').style.background = '#00A910';
                    document.getElementById('more1').hidden = true;
                } else if (start >= 14) {
                    time = time * 2;
                    progressElement.value = start;
                    start = Math.round((start + 0.2) * 100) / 100;
                    money.style.width = start + '$';
                    money.innerHTML = start + '$'
                } else {
                    progressElement.value = start;
                    start++;
                    money.style.width = start + '$';
                    money.innerHTML = start + '$'
                }
            }
        }, time)
    }
    ;

    render() {
        const data = this.state.data;
        return (
            <div className="App">
                <div id="container" align="center">
                    <div className="block">
                        <nav className="topLine">
                            <p>Target indicator Demo</p>
                        </nav>
                        <div className="insideBlock">
                            <p className="reached">Reached: <progress id="progress-use" value="0" max="14"/>
                                <div id="target">
                                    <h3>Target</h3>
                                    <hr/>
                                    <a>15$</a>
                                    <h1>'</h1>
                                    <h2>${this.state.data}</h2>
                                </div>
                            </p>
                            <h5 id="more1">You need $1 more to reach your target.</h5>
                        </div>
                    </div>
                    <div id="myMoney">0$</div>
                </div>
                <button onClick={() => this.progressUser(Math.round(100000 / 100))}>Start</button>
            </div>

        );
    }
}

export default App;
