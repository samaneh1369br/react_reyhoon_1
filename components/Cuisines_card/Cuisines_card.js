import "./Cuisines_card.css"
import CuisinesInner from "../Cuisines_inner/Cuisines_inner"
import CuisinesHeader from "../Cuisines_header/Cuisines_header"

const CuisinesData=[
    {food:"کباب",
    imageSrc:"https://dist.reyhoon-static.com/uploads/images/cuisines/kebab_1525012065.jpeg@!cuisine_card",
    activeNumber:1836,
    id:0
     },
     {food:"پیتزا",
    imageSrc:"https://dist.reyhoon-static.com/uploads/images/cuisines/pizza_1539780235.jpeg@!cuisine_card",
    activeNumber:1836,
    id:1
     },
     {food:"برگر",
    imageSrc:"https://dist.reyhoon-static.com/uploads/images/cuisines/hamburger_1539779150.jpeg@!cuisine_card",
    activeNumber:1836,
    id:2
     },
     {food:"ساندویچ",
    imageSrc:"https://dist.reyhoon-static.com/uploads/images/cuisines/sandwich_1539782856.jpeg@!cuisine_card",
    activeNumber:1836,
    id:3
     }
];
function renderCuisinesCard(){
    const CuisinesCardRendered=CuisinesData.map(
        (card)=>
            <CuisinesInner key={card.id} typeFood={card.food} image={`${card.imageSrc}`} activeNumber={card.activeNumber}/>
    )
    return CuisinesCardRendered;
}

const CuisinesCard=()=>{
    return(
        <React.Fragment>
            <CuisinesHeader/>
            <section style={{marginTop:"0 !important"}} className="container-flex img-box-flex container-width">
                {renderCuisinesCard()}
            </section> 
        </React.Fragment>
    
    )
    }
export default CuisinesCard;