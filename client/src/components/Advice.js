
import './Advice.css';
import dice from '../images/icon-dice.svg';

function Advice(props) {
    
    const refreshPage = ()=>{
        window.location.reload();  
    }


    return(
        <div className='AdviceCard'>
            <h1 className='QuoteNumber'>ADVICE #{props.number}</h1>
            <p className='Quote'>"{props.quote}"</p>
            <hr className='Line'/>
            <h1 className='Divider'>"</h1>
            <br />
            <br />
            <br />
            <button className='Dice' onClick={refreshPage}>
                <img className='DiceIcon' src={dice} alt='dice icon'/>
            </button>
        </div>
    );
}


export default Advice;