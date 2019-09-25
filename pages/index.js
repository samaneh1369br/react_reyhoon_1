// import React  from "react"
 import  Header from "../components/Header/Header"
import  Banner from "../components/Banner_box/Banner_box"
 import "./index.css"
 import ShowCase from "../components/Show_case/Show_case"
 import BestResturantInDayHeadingst from "../components/Best_resturant_in_day_heading/Best_resturant_in_day_heading";
//  import {threeJson} from './json'
import BranchCard from "../components/Branch_card/Branch_card"
import PromptedBox from "../components/Prompted_box/Prompted_box"
import CuisinesHeader from "../components/Cuisines_header/Cuisines_header"
import CuisinesCard from "../components/Cuisines_card/Cuisines_card"
import TagsCard from "../components/Tags_card/Tags_card"
import DownloadApp from "../components/Download_app/Download_app"
// import "./font.css"

const Index = () => {
    
    return(
        <React.Fragment>
            <Header/>
            <Banner/>
            <ShowCase/>
            <BestResturantInDayHeadingst/>
            <BranchCard/>
            <PromptedBox/>
            <CuisinesHeader/>
            <CuisinesCard/>
            <TagsCard/>
            <DownloadApp/>
        </React.Fragment>
    )
}
export default Index 



// class Index extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             userData:[],
//         }
//     }
//     componentDidMount() {
    

        // fetch('https://chilivery.com/client-api/restaurant/detail?city=tehran&restaurantSlug=shaverma-kabab')
        // .then(response => response.json())
        // .then(data => {
        //     this.setState({
        //         userData:data
        //     },()=>{
        //         console.log(this.state.userData)
        //     })
        // })
        // .catch(error => console.error(error))
//     };
//     render(){
//         return(
//             <React.Fragment>
//                 <Header/>
//                 <Banner/>
//                 <ShowCase/>
//                 <BestResturantInDayHeadingst/>
//                 {/* {
//                     this.state.userData.map((item,index)=>(
//                         <div key={index}>
//                             <span>{item.name} {item.username}</span>
//                         </div>
//                     ))
//                 } */}
//             </React.Fragment>
//         )
//     }
// }
// export default Index 