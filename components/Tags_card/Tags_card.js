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
     id:8},
     {title:"ماهی",
     id:9},
     {title:"استیک",
     id:10},
     {title:"بشقاب",
     id:11},
     {title:"صبحانه",
     id:12},
     {title:"سوپ",
     id:13},
     {title:"غذاهای دریایی",
     id:14},
     {title:"آبمیوه طبیعی",
     id:15},
]
function tagsCardRender(){
    const Renderedtags=foodTags.map(
        (tags)=><h3 key={tags.id}><a className="tagsLink" href="#">{tags.title}</a></h3>
    )
    return(Renderedtags)
}
const TagsCard=()=>{
    return(
        <section className="more-food ">
             <div className="more-food-flex container-width margin-v-15 ">
                 <h1>انتخاب غذای بیشتر</h1>
                 {tagsCardRender()}
             </div>
        </section>
    )
}
export default TagsCard;