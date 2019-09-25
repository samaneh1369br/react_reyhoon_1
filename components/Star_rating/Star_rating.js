import React,{Component} from "react";
import "./Star_rating.css"
export default class StarRating extends Component {
    constructor(props){
        super(props); 
        this.state={
            numberStars:5,
            rating:25,
           
        }
    }
      renderStars=(n)=>{
          let i=0;
          let array=[];
          while(i<n){
              
        
        let el=<div className="stars" key={i}></div>;
          array.push(el);
          i++;
          }
          
       let arrayMap= array.map((value, index, array)=>{
            if (parseInt(this.state.rating/(100/this.state.numberStars))>=index){
              value=<div className="stars active" key={index} ></div>;
            }
            return(value)
        });
        return arrayMap;
    }

   componentDidMount(){
       this.setState({
           rating:parseInt(this.props.rating)
       })
   }
    // React lifecycle ro bekhoon ye chizi be naame componentDidMount hast ke daghighan kaaresh hamine ke mikhaay
    render(){
       
        return(
            <div className="parent">
           
                 {this.renderStars(this.state.numberStars)}
            </div>
        
        )
    }
}
