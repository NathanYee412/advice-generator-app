
import './Advice.css';
import dice from '../images/icon-dice.svg';

function Advice(props) {
    

    return(
        <div className='AdviceCard'>
            <h1 className='QuoteNumber'>Advice #{props.number}</h1>
            <p className='Quote'>"{props.quote}"</p>
            <h1 className='Divider'>"</h1>
            <br />
            <br />
            <div className='Dice'>
                <img className='DiceIcon' src={dice} alt='dice icon'/>
            </div>
        </div>
    );
}


export default Advice;