import styleModalHead from './ModalHead.module.css';
import closeImg from '../../images/close.svg';

export const ModalHead = ({text,closeModal}) => {
    return (
        <span className={styleModalHead.span}>
            <h2 className={styleModalHead.text}>{text}</h2>
            <button className={styleModalHead.button} onClick={closeModal}><img src={closeImg} alt="logo"/></button>
        </span>
    )
}