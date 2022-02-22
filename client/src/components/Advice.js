
import './Advice.css';
import dice from '../images/icon-dice.svg';

function Advice(props) {
    

    return(
        <div className='AdviceCard'>
            <h1 className='QuoteNumber'>ADVICE #{props.number}</h1>
            <p className='Quote'>"{props.quote}"</p>
            <hr className='Line'/>
            <h1 className='Divider'>"</h1>
            <br />
            <br />
            <br />
            <div className='Dice' onClick="history.go(0);">
                <img className='DiceIcon' src={dice} alt='dice icon'/>
            </div>
        </div>
    );
}


export default Advice;