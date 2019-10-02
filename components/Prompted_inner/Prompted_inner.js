import "./Prompted_inner.css"
const PromptedInnerData=[
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/vitrin_6482_1547633681.jpeg@!branch_logo_web_default",
                title:"ویترین",
                alterText:"ویترین",
                id:0
        },
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/shandiz-jordan_1485_1520945254.jpeg@!branch_logo_web_default",
                title:"شاندیز جردن",
                alterText:"شاندیز جردن",
                id:1
        },
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/rad-catering_1464_1520945288.jpeg@!branch_logo_web_default",
                title:"تهیه غذای راد",
                alterText:"تهیه غذای راد",
                id:2
        },
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/amolay_3424_1520945334.png@!branch_logo_web_default",
                title:"آمولای",
                alterText:"آمولای",
                id:3
        },
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/gennaro_5954_1542626720.jpeg@!branch_logo_web_default",
                title:"جنارو",
                alterText:"جنارو",
                id:4
        },
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/langine_4867_1538558144.jpeg@!branch_logo_web_default",
                title:"لانجین",
                alterText:"لانجین",
                id:5
        },
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/jo_140_1520945298.jpg@!branch_logo_web_default",
                title:"جو",
                alterText:"جو",
                id:6
        },
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/kubaba_5549_1547880029.jpeg@!branch_logo_web_default",
                title:"کوبابا",
                alterText:"کوبابا", 
                id:7
        },
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/tomo_5059_1530707026.jpeg@!branch_logo_web_default",
                title:"تومو",
                alterText:"تومو", 
                id:8
        },
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/narijeh_4007_1520945325.jpeg@!branch_logo_web_default",
                title:"ناریجه",
                alterText:"ناریجه",
                id:9
        },
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/amirchocolate_6246_1545546796.jpeg@!branch_logo_web_default",
                title:"امیر شکلات",
                alterText:"امیر شکلات",
                id:10
        },
        
        {
                image:"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/shirinpolo_450_1520945307.jpeg@!branch_logo_web_default",
                title:"شیرین پلو",
                alterText:"ویترین",
                id:11
        },

];
 
function renderPromptedInner(){
        const promptedInnerRendered=PromptedInnerData.map(
                (logo)=> <div key={logo.id}>
                                <a className="promptedLink" href="#">
                                        <img className="promptedLinkImage" src={`${logo.image}`} alt={logo.alterText} />
                                        <p>{logo.title}</p>
                                </a>

                         </div>
                
              
                
        )
        return promptedInnerRendered;
}







 const PromptedInner = () => {
 
    return(
    <div className="good-resturant-flex">
                <h1>رستوران‌های خوب تهران در ریحون</h1>
                {renderPromptedInner()}
    </div>
    )
}
export default PromptedInner;
