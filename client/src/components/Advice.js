import './Advice.css';
import dice from '../images/icon-dice.svg';
import divider from '../images/pattern-divider-desktop.svg';
import mobiledivider from '../images/pattern-divider-mobile.svg';

function Advice({ number ,quote }) {
    
    const refreshPage = ()=>{
        window.location.reload();  
    }


    return(
        <div className='AdviceCard'>
            <h1 className='QuoteNumber'>ADVICE #{number}</h1>
            <p className='Quote'>"{quote}"</p>
            <picture>
                <source media='(max-width: 575px)' srcSet={mobiledivider}></source>
                <img className='Line' src={divider} alt='divider' />
            </picture>
            <button className='Dice' onClick={refreshPage}>
                <img className='DiceIcon' src={dice} alt='dice icon'/>
            </button>
        </div>
    );
}


export default Advice;