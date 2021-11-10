import classes from "./Center.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";


function Center() {
  const [logo, setLogo] = useState("");

    function handleChange(event) {
        const { value } = event.target;
        setLogo(value);
    }

    return(
        <div className={classes.center}>
            {logo.trim().length < 1 ? <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" 
                alt="google-logo"></img> : <div><p className={classes.newLogo}>{logo}</p></div> }
            <form>
            <div className={classes.midDiv}>
               <HiOutlineSearch className={classes.lens}/> 
                <div className={classes.inDiv}>
                    <input className={classes.in} placeholder="Search Google or type a URL" onChange={handleChange} value={logo} />
                </div>
                <img  className={classes.mic} src="https://upload.wikimedia.org/wikipedia/commons/2/22/Google_microphone_logo.png" alt="mic" />
            </div>

            <div className={classes.btnDiv}>
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            </form>
            <div className={classes.lang}>
                <p>Google offer in: <a href="/">Hausa</a> <a href="/">Igbo</a> <a href="/">Èdè Yorùbá</a> <a href="/">Nigerian Pidgin</a></p>
            </div>

        </div>

    );
}

export default Center;