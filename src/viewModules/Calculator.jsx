import React from 'react';
import TemperatureInput from './TemperatureInput.jsx'

// 现在的需求是希望输入一个输入框 另外一个也跟着变动 学习react的状态提升

// 定义摄氏度与华氏度之间相互转换的函数

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
	constructor(props) {
		super(props)
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
		this.state = {temperature: '', scale: 'c'}
	}
	handleCelsiusChange(temperature) { // 更改类型为c输入框的值
		this.setState({
			temperature: temperature,
			scale: 'c'
		})
	}
	handleFahrenheitChange(temperature) { // 更改类型为f输入框的值
		this.setState({
			temperature: temperature,
			scale: 'f'
		})
	}
    render() {
    	const scale = this.state.scale
    	const temperature = this.state.temperature
    	const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    	const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div className="calculatorBox">
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        );
    }
}

export default Calculator;