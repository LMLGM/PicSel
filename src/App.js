import React, { Component } from 'react'
import PictureSelect from './PictureSelect'
import './App.css'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picsData: [{
                id: '1',
                name: 'foo',
                url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
            },
            {
                id: '2',
                name: 'foo',
                url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
            },
            {
                id: '3',
                name: 'foo',
                url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
            }],
            value: ["1", "2"]
        }
    }
    setValue(value) {
        console.log(value)
    }
    render() {
        const { picsData, value } = this.state
        return (
            <div>
                <PictureSelect pictures={picsData} value={value} onChange={(value) => this.setValue(value)} />
            </div>
        )
    }
}
export default App