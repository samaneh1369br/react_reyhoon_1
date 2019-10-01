import SvgFacebookIcon from "../Svg_facebook/Svg_facebook"
import SvgInstagramIcon from "../Svg_instagram/Svg_instagram"
import SvgGoogleIcon from "../Svg_google/Svg_google"
import SvgTwitterIcon from "../Svg_twitter/Svg_twitter"
import SvgTelegramIcon from "../Svg_telegram/Svg_telegram"
import "./FooterBottom.css"
const SvgComponentData=[
   {
        icon:<SvgFacebookIcon/>,
        href:""
    },
   {
       icon:<SvgInstagramIcon/>,
       href:""
    },
    {
        icon:<SvgGoogleIcon/>,
        href:""
    },
    {
        icon:<SvgTwitterIcon/>,
        href:""
    },
    {
        icon:<SvgTelegramIcon/>,
        href:""
    }
]
 const  SvgComponentRender=()=>{
    const RenderedSvgComponent=SvgComponentData.map(
        (icon)=><a href={icon.href}>{icon.icon}</a>
    )
    return RenderedSvgComponent
 }

 const FooterBottom=()=>{
     return(
        <div class="footer-bottom" >
            <div class="margin-v-15">
                {SvgComponentRender()}
            </div>
            <div class="margin-v-15">
                    © 2017, <a href="/">Reyhoon</a>, All Rights Reserved.
            </div>
        </div>
     )
 }
export default FooterBottom