import 'antd/dist/antd.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {DatePicker, message} from 'antd';
import "whatwg-fetch";
const bannersRes = '/zhutiapi/service/banner.php?type=0&msubtype=0&width=1080&height=1920&kernelCode=6&versionCode=&protocolCode=4&language=zh-CN&sign=5af33d8456cf639095e06759e6db7cf3914a10ff';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }

        fetch(bannersRes).then((response) => {
            console.log('response:', response);
        });
    }

    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({date});
    }

    render() {
        return (
            <div>
                <DatePicker onChange={value => this.handleChange(value)}/>
                <div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
