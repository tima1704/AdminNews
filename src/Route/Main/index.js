import {BrowserRouter as Router,  Route,} from 'react-router-dom';
import News from '../../Pages/News';
import Curr from '../../Pages/Currency';
import Navbar from '../../Component/Navbar';
import Style from './Lider.module.scss';
const Lider = () => {
    return(
        <>
        <Router>
            <div className={Style.general_Lider}>
                <div className={Style.general_main}>
                    <div className={Style.left_main}>
                        <Route path='/' component={Navbar}/>
                    </div>
                    <div className={Style.right_main}>
                        <Route path='/news' component={News}/>
                    </div>
                    <div className={Style.right_main}>
                        <Route path='/currensy' component={Curr}/>
                    </div>
                </div>
            </div>
        </Router>
        </>
    )
}
export default Lider;