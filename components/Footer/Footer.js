import FooterTop from "../FooterTop/FooterTop"
import FooterMiddle from "../FooterMiddle/FooterMiddle"
import FooterBottom from "../FooterBottom/FooterBottom"
import "./Footer.css"
const Footer=()=>{
    return(
        <footer className="footer">
            <FooterTop/>
            <FooterMiddle/>
            <FooterBottom/>
        </footer>
    )
}
export default Footer;