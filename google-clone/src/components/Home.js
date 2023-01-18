import React from 'react'
import { FaMicrophone, FaSistrix } from "react-icons/fa";

const Home = (props) => {
    const [state, setState] = React.useState('');
    const searchGoogle = e => {
        props.history.push({ pathname: "/search", state });
    }
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__logo">
                    <img src="/images/google-logo.png" alt="Logo" />

                </div>
                <form className="home__form" onSubmit={searchGoogle}>
                    <input type="text" className="home__input" onChange={(e) => setState(e.target.value)} value={state} />
                    <div className="home__group">
                        <input type="submit" className="home__btn" value="Google Search" />

                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="button" className="feel__btn" value="I'm Feeling Lucky" />
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <input type="button" className="language__btn" value="Google offered in:"/>
                        <input type="button" className="language" value=" हिन्दी  বাংলা  తెలుగు मराठी  தமிழ்  ગુજરાતી  ಕನ್ನಡ  മലയാളം  ਪੰਜਾਬੀ" />

                    </div>

                    <FaSistrix className="search__icon" />
                    <FaMicrophone className="microphone" />
                </form >
            </div >
        </div >
    )
}

export default Home
