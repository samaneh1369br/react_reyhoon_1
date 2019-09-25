
import "./Download_app_Market.css"
const DownloadAppMarketData=[
    {title:"دانلود اپلیکیشن اندروید ریحون از کافه بازار",
    image:"https://dist.reyhoon-static.com/web-assets/images/app-links/cafebazaar-light.png?x-oss-process=image/resize,w_199",
    hrefTag:"",
    id:0},
    {title:"دانلود نسخه iOS اپلیکیشن ریحون از سیب اپ",
    image:"https://dist.reyhoon-static.com/web-assets/images/app-links/sibapp-light.png?x-oss-process=image/resize,w_199",
    hrefTag:"", 
    id:1},
    {title:"دانلود مستقیم نسخه اندروید اپلیکیشن ریحون",
    image:"https://dist.reyhoon-static.com/web-assets/images/app-links/reyhoon-light.png?x-oss-process=image/resize,w_199",
    hrefTag:"", 
    id:2},
    {title:"دانلود اپلیکیشن اندروید ریحون از گوگل پلی استور",
    image:"https://dist.reyhoon-static.com/web-assets/images/app-links/google-play-light.png?x-oss-process=image/resize,w_199",
    hrefTag:"", 
    id:3},
    {title:"دانلود نسخه iOS از سیبچه",
    image:"https://dist.reyhoon-static.com/web-assets/images/app-links/ios-sibche-light.png?x-oss-process=image/resize,w_199",
    hrefTag:"", 
    id:4}
    
]
function renderDownloadAppMarket(){
   const DownloadAppMarketRendered=DownloadAppMarketData.map(
        (imagex)=>
        <a href={imagex.hrefTag} key={imagex.id}>
        <img  title={imagex.title} src={`${imagex.image}`} alt={imagex.title}/>
        </a>
    )
    return DownloadAppMarketRendered;
}
const DownloadAppMarket=()=>{
    return(
    <div class="a-in-app-flex">
        {renderDownloadAppMarket()}
    </div>
    )
}
export default DownloadAppMarket;