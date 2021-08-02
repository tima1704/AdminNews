import { Link } from 'react-router-dom';
import Style from './Nav.module.scss';
const Navbar = () => {
    return(
        <div className={Style.content_navbar}>
            <div>
                <Link to='/news'>
                    <button title={'politic'}><h1>News</h1></button>
                </Link>
                <Link to='/currensy'>
                    <button title={'currensy'}><h1>Currensy</h1></button>
                </Link>
            </div>
        </div>
    )
};
export default Navbar;