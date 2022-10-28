import { Button } from "../Button/Button";
import styleHeader from './Header.module.css';
import user from '../../images/user.svg';
export const Header = () => {
    return (
        <header className={styleHeader.header}>
        <div className={styleHeader.profile}>
        <Button type="primary" width={48} img={user}/>
        <p className={styleHeader.profile_name}>{window.localStorage.getItem('login')}</p>
        </div>
        <div className={styleHeader.button}>
        <Button type="primary" width={210}>Получить рекомендацию</Button>
        </div>
        </header>
    )

}