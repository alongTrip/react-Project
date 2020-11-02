import React from 'react';
import TemperatureInput from './TemperatureInput.jsx'

// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
// }

class Calculator extends React.Component {
    render() {
        return (
            
            <div className="calculatorBox">
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}

export default Calculator;