import classes from "./Footer.module.css";

function Footer() {
    return (
        <div className={classes.foot}>
            <div className={classes.init}><p>Nigeria</p></div>
        
            <div className={classes.fin}>
                <div className={classes.fin1}>
                    <a href="/">About</a>
                    <a href="/">Advertising</a>
                    <a href="/">Business</a>
                    <a href="/">How Search Works</a>
                </div>
                <div className={classes.fin2}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" alt="leaf" />
                <a href="/">Carbon neutral since 2007</a>
                </div>
                <div className={classes.fin3}>
                <a href="/">Privacy</a>
                <a href="/">Terms</a>
                <a href="/">Settings</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;