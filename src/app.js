import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello,World!</h1>
                <h2>现在是：{this.state.date.toLocaleString()}</h2>
            </div>
        )
    }

    componentDidMount() {
        var _this = this;
        this.timerId = setInterval(() => {
            _this.setState({
                date: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('app')
);
