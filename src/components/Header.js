import classes from "./Header.module.css";
import { IoApps } from "react-icons/io5";
 function Header() {
    return(
        <header className ={classes.item}>
            <a href="/">Gmail</a>
            <a href="/">Images</a>
            <IoApps className={classes.icon}/>
            <a href="/"><button className={classes.btn}>SignUp</button></a>
        </header>
        
    );
}

export default Header