import "./Cuisines_card.css"
import CuisinesInner from "../Cuisines_inner/Cuisines_inner"

const CuisinesData=[
    {food:"کباب",
    imageSrc:"https://dist.reyhoon-static.com/uploads/images/cuisines/kebab_1525012065.jpeg@!cuisine_card",
    activeNumber:1836
     },
     {food:"پیتزا",
    imageSrc:"https://dist.reyhoon-static.com/uploads/images/cuisines/pizza_1539780235.jpeg@!cuisine_card",
    activeNumber:1836
     },
     {food:"برگر",
    imageSrc:"https://dist.reyhoon-static.com/uploads/images/cuisines/hamburger_1539779150.jpeg@!cuisine_card",
    activeNumber:1836
     },
     {food:"ساندویچ",
    imageSrc:"https://dist.reyhoon-static.com/uploads/images/cuisines/sandwich_1539782856.jpeg@!cuisine_card",
    activeNumber:1836
     }
];
function renderCuisinesCard(){
    const CuisinesCardRendered=CuisinesData.map(
        (card)=><CuisinesInner typeFood={card.food} image={`${card.imageSrc}`} activeNumber={card.activeNumber}/>
    )
    return CuisinesCardRendered;
}

const CuisinesCard=()=>{
    return(
        <section className="container-flex img-box-flex container-width">
            {renderCuisinesCard()}
        </section> 
    
    )
    }
export default CuisinesCard;