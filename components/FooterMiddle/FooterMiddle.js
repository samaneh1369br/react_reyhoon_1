

import "./FooterMiddle.css"
const FooterMiddleData=[
    {
        id:0,
        source:"https://www.reyhoon.com/react-assets/dist/9e91a300.png"
    },
    {
        id:1,
        source:"https://www.reyhoon.com/react-assets/dist/9e91a300.png"
    },
    {
        id:2,
        source:"https://www.reyhoon.com/react-assets/dist/9e91a300.png"
    }

]
    const FooterMiddleRender=()=>{
     const   RenderedFooterMiddle=FooterMiddleData.map(
            (image)=>
               <img id={image.id} src={image.source}/>
            )
    return RenderedFooterMiddle
    }

const FooterMiddle=()=>{
    return(
            <div class="footer-middle">
                 {FooterMiddleRender()}
            </div>
    );
}
export  default FooterMiddle;