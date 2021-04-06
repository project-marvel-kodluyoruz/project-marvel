import react from "react"
import './Home.scss';
import CharacterPages from '../CharacterPages/CharacterPages'
import ComicsPage from '../Comics/Comics'
import * as Scroll from 'react-scroll';

import HomeCarousels from '../../Components/HomeCarousels/HomeCarousels'
import { Animated } from "react-animated-css";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <div className="homePage">              
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay="200" isVisible={true}>
                <HomeCarousels />
                </Animated>
            </div>
            <div id="CharacterPages" className="CharacterPages">
                <CharacterPages/>
            </div>
            <div id="ComicsPage"className="ComicsPage">
                <ComicsPage/>
            </div>
        </div>
    );
};

export default Home;