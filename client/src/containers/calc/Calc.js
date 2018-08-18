import React, { Component } from 'react';

import Display from '../../components/display/Display';
import Button from '../../components/button/Button';
import classes from './Calc.css';

class Calc extends Component {
    state = {
        num: '0',
        temp: '',
        calculation: ''
    };

    updateCalcHandler = disp => {
        if (this.state.num.length > 11) this.setState({ num: 'XXXXXXXXXX' })
        else if (this.state.num === '0') this.setState({ num: disp })
        else this.setState({ num: this.state.num + disp }); 
    };

    updateEquation = disp => {
        console.log('num: ', this.state.num, 'temp: ', this.state.temp)
        switch(disp) {
            case '+':
                this.setState({ temp: this.state.num, num: '0', calculation: 'add' }); 
                break;
            case '-':
                this.setState({ temp: this.state.num, num: '0', calculation: 'subtract' }); 
                break;
            case 'x':
                this.setState({ temp: this.state.num, num: '0', calculation: 'multiply' }); 
                break;
            case '/':
                this.setState({ temp: this.state.num, num: '0', calculation: 'divide' }); 
                break;                           
            default: 
                this.setState({ num: this.state.num, temp: this.state.temp, calculation: this.state.calculation });
        }
    };

    updateCalculation = () => {
        switch(this.state.calculation) {
            case 'add':
                let addedNum = Number(this.state.num) + Number(this.state.temp);
                if (addedNum.toString().split('').length > 12) {
                    addedNum = addedNum.toString().split('').slice(0, 11).join('') + '+';
                }
                this.setState({ num: addedNum });
                break;
            case 'subtract':
                this.setState({ num: Number(this.state.temp) - Number(this.state.num) });
                break;
            case 'multiply':
                let multipliedNum = Number(this.state.num) * Number(this.state.temp);
                if (multipliedNum.toString().split('').length > 12) {
                    multipliedNum = multipliedNum.toString().split('').slice(0, 11).join('') + '+';
                }
                this.setState({ num: multipliedNum });
                break; 
            case 'divide':
                let dividedNum = parseFloat(this.state.temp) / parseFloat(this.state.num);
                if (dividedNum.toString().split('.').length === 2) {
                    dividedNum = dividedNum.toFixed(3);
                }
                this.setState({ num: dividedNum });
                break;                  
            default:
                this.setState({ num: '0', temp: '', calculation: '' });        
        }  
    };

    updateClear = () => {
        this.setState({ num: '0', temp: '', calculation: '' });
        // console.log('num: ', this.state.num, 'temp: ',this.state.temp, 'calculation: ', this.state.calculation)
    };

    render() {
        return(
            <div className={classes.Calc}>
                <Display display={this.state.num} />
                <div className={classes.Button}>
                    <Button display='1' clicked={this.updateCalcHandler} />
                    <Button display='2' clicked={this.updateCalcHandler} />
                    <Button display='3' clicked={this.updateCalcHandler} />
                    <Button display='/' clicked={this.updateEquation} />
                </div>
                <div className={classes.Button}>
                    <Button display='4' clicked={this.updateCalcHandler} />
                    <Button display='5' clicked={this.updateCalcHandler} />
                    <Button display='6' clicked={this.updateCalcHandler} />
                    <Button display='x' clicked={this.updateEquation} />
                </div>
                <div className={classes.Button}>
                    <Button display='7' clicked={this.updateCalcHandler} />
                    <Button display='8' clicked={this.updateCalcHandler} />
                    <Button display='9' clicked={this.updateCalcHandler} />
                    <Button display='-' clicked={this.updateEquation} />
                </div>
                <div className={classes.Button}>
                    <Button display='0' clicked={this.updateCalcHandler} />
                    <Button display='.' clicked={this.updateCalcHandler} />
                    <Button display='=' clicked={this.updateCalculation} />
                    <Button display='+' clicked={this.updateEquation} />
                </div> 
                <div className={classes.Button}>
                    <Button display='clear' clicked={this.updateClear} />
                </div>               
            </div>
        );
    }
}

export default Calc;