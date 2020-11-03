import React from 'react';
import './TemperatureInput.scss'

// 定义不同输入框的字段
// const scaleName = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// }

// 当两个组件之间的值需要联动时，需要用到react的状态提升。这个时候应该使用props的值，而不应该使用state的值

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }
    handleChange(e) {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value)
    }
    render() {
        const temperature = this.props.temperature // 使用props的的值
        const scale = this.props.scale
        return (
            <fieldset className="fieldsetBox">
                <legend>Enter temperature in {scale}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export default TemperatureInput;