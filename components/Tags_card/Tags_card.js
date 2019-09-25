import "./Tags_card.css"
const foodTags=[
    {title:"خورشت",
     id:0},
     {title:"غذای پلویی",
     id:1},
     {title:"خوراک",
     id:2},
     {title:"سالاد",
     id:3},
     {title:"غذای ایرانی",
     id:4},
    {title:"فست فود",
     id:5},
     {title:"سوخاری",
     id:6},
     {title:"پاستا",
     id:7},
     {title:"چلوکباب",
     id:0},
     {title:"ماهی",
     id:0},
     {title:"استیک",
     id:0},
     {title:"بشقاب",
     id:0},
     {title:"صبحانه",
     id:0},
     {title:"سوپ",
     id:0},
     {title:"غذاهای دریایی",
     id:0},
     {title:"آبمیوه طبیعی",
     id:0},
]
function tagsCardRender(){
    const Renderedtags=foodTags.map(
        (tags)=><h3 key={tags.id}><a href="#">{tags.title}</a></h3>
    )
    return(Renderedtags)
}

const TagsCard=()=>{
    return(
        <section class="more-food ">
             <div class="more-food-flex container-width margin-v-15 ">
                 <h1>انتخاب غذای بیشتر</h1>
                 {tagsCardRender()}
             </div>
        </section>
    )
}
export default TagsCard;