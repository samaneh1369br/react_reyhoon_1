import SvgFacebookIcon from "../Svg_facebook/Svg_facebook"
import SvgInstagramIcon from "../Svg_instagram/Svg_instagram"
import SvgGoogleIcon from "../Svg_google/Svg_google"
import SvgTwitterIcon from "../Svg_twitter/Svg_twitter"
import SvgTelegramIcon from "../Svg_telegram/Svg_telegram"
import "./FooterBottom.css"
const SvgComponentData=[
   {
        icon:<SvgFacebookIcon/>,
        href:"",
        id:0
    },
   {
       icon:<SvgInstagramIcon/>,
       href:"",
       id:1
    },
    {
        icon:<SvgGoogleIcon/>,
        href:"",
        id:2
    },
    {
        icon:<SvgTwitterIcon/>,
        href:"",
        id:3
    },
    {
        icon:<SvgTelegramIcon/>,
        href:"",
        id:4
    }
]
 const  SvgComponentRender=()=>{
    const RenderedSvgComponent=SvgComponentData.map(
        (icon)=><a key={icon.id} href={icon.href}>{icon.icon}</a>
    )
    return RenderedSvgComponent
 }

 const FooterBottom=()=>{
     return(
        <div className="footer-bottom" >
            <div className="margin-v-15">
                {SvgComponentRender()}
            </div>
            <div className="margin-v-15">
                    © 2017, <a href="/">Reyhoon</a>, All Rights Reserved.
            </div>
        </div>
     )
 }
export default FooterBottom