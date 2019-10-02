import React from "react";
import ShowCaseInner from "../Show_case_inner/Show_case_inner"
import "./Show_case.css"
import SvgHeart from "../Svg_heart/Svg_heart"
import SvgLocation from "../Svg_location/Svg_location"
import SvgSpoonAndFork from "../Svg_spoon_and_fork/Svg_spoon_and_fork"

const showCaseData = [
    {
        heading: 'غذایتان را نوش‌جان کنید',
        comment: 'درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.',
        icon: <SvgHeart/>,
        id: 1,
    },
   
    {
        heading: 'شهر و منطقه خود را وارد کنید',
        comment: 'منوی مورد علاقه خود را از بین بیش از 4000 رستوران خوب در تهران و شهرستان‌ها جستجو کنید.',
        icon: <SvgLocation/>,
        id: 2,
    },
    {
        heading: 'غذای خود را انتخاب کنید',
        comment: 'غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید.',  
        icon: <SvgSpoonAndFork/>,
        id: 3,
    },
];

function renderShowcaseCard() {
    const showCaseRendered = showCaseData.map(
        (card) => <ShowCaseInner key={card.id} heading={card.heading} comment={card.comment} children={card.icon} />
    )
    return showCaseRendered;
}


const ShowCase=()=>{
    return(
        <section style={{marginBottom:"45px !important"}} className="container-flex row-direction flex-around  container-width"> 
            {renderShowcaseCard()}
        </section> 

    )
}
export default ShowCase;