import threeJson from "../../assets/best_three_good_resturant"
import "./Branch_card.css"
import StarRating from "../Star_rating/Star_rating"
export default class BranchCard extends React.Component{
    constructor(){
        super()
        this.state={
            dataResturant:[]
         }
    }

    // createBranchCard=(n)=>{
    //         let i=0;
    //         let array=[];
    //         while(i<n){
                                
    //             let el=<BranchCardInner ind={i}/>;
    //                 array.push(el);
    //                 i++;
    //             }
    //             return(array);
    // }
    componentDidMount(){
        this.setState({dataResturant:threeJson})
    }
    render(){
        return(
            <section className="container-flex row-direction phablet-only-max container-width">
                        {
                            this.state.dataResturant.map((item,index)=>{ 
                                       return(
                                        <div className="resturant-flex column-direction flex-evenly">
                                        <div>
                                          <img src={item.image}/>
                                        </div>
                                        <h1>{item.name}</h1>
                                        <div className="div_flex">
                                            <span className="gold">{item.voteNumber}</span>
                                            <StarRating rating={item.rateAverage}/>
                                            <span>({item.rateAverage})</span>
                                        </div>
                                        <div>{item.description}</div> 
                                        <p>{item.address}</p>
                                        <button className="btn btn-in-box">شروع سفارش</button>
                                      </div>
                                       )

                            })
                

                            
                        }
            </section>
            )
    
    }

}




















//     import BranchCardInner from "../Branch_card_inner/Branch_card_inner"
// import threeJson from "../../assets/best_three_good_resturant"

// export default class BranchCard extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             dataResturant:[]
//          }
//     }

//     createBranchCard=(n)=>{
//             let i=0;
//             let array=[];
//             while(i<n){
                                
//                 let el=<BranchCardInner ind={i}/>;
//                     array.push(el);
//                     i++;
//                 }
//                 return(array);
//     }
//     componentDidMount(){
//         this.setState({dataResturant:threeJson},
//             ()=>console.log(this.state.dataResturant.name))
//     }
//     render(){
//         return(
//             <section class="container-flex row-direction phablet-only-max container-width">
//             {this.createBranchCard()}
//             </section>
//             )
    
//     }




// }
    
   

//}
    
