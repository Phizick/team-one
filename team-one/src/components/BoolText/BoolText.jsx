import imgDone from '../../images/done_green.svg';
import imgCLose from '../../images/close_red.svg';
import stylesBoolText from './BoolText.module.css'
export const BoolText = ({text,bool}) => {
    const classNames = require('classnames')
    return (
        <div className={stylesBoolText.div}>
            <p className={stylesBoolText.p}>{text}</p>
            <img className={classNames(stylesBoolText.img, bool === true ? stylesBoolText.done : stylesBoolText.close)} src={bool === true ? imgDone : imgCLose} alt="icon"/>
        </div>
    )
}