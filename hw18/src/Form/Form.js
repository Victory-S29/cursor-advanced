import './Form.css';
import { Component } from 'react'
import Timer from '../Timer/Timer';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "",
            intervalNumber: "",
            submit: false,
            isFormValid: false
        }
        this.autostart = true;
         
    }

    validateForm() {
        const { time, intervalNumber } = this.state;
        const isFormValid = time !== "" && intervalNumber !== "";
        this.setState({ isFormValid });
    }

    checkBoxChange() {
        this.autostart = !this.autostart;
    }

    inputValue(event) {
        const { id, value } = event.target;
        this.setState({ [id]: value },  this.validateForm);
 
    }

    render() {
        if (!this.state.submit) return (
                <section>
                    <div className='checkBox-div'>
                        <label className='checkBox-label' htmlFor="autostart"> Автоматичний запуск таймера
                            <input className='checkBox' id="autostart" type="checkbox" defaultChecked
                                onChange={() => { this.checkBoxChange() }}
                            />
                        </label>
                    </div>
                    <div className='input-div'>
                        <label className='input-label' htmlFor="time"> Секунди:
                            <input className='input' id="time" type="number"
                                onChange={e => this.inputValue(e)}
                            />
                        </label>
                    </div>
                    <div className='input-div'>
                        <label className='input-label' htmlFor="intervalNumber"> Інтервал в мілісекундах
                            <input className='input' id="intervalNumber" type="number" defaultChecked
                                onChange={e => this.inputValue(e)}
                            />
                        </label>
                    </div>
                    <button disabled={!this.state.isFormValid} onClick={() => this.setState({ submit: true })}>Підтвердити</button>
                </section>
        )

        else if (this.state.submit) return (
                <Timer onTick={(timee) => console.log("Залишилось часу: " + timee)} autostart={this.autostart} time={parseInt(this.state.time)} intervalNumber={parseInt(this.state.intervalNumber)} />
        )
    }




}
