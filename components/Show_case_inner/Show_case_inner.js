import "./Show_case_inner.css"
// class ShowCaseInner extends Component{
//     render(){
//         return(
//                 <div class="box-flex column-direction flex-around margin-v-15">
//                         <div></div>
//                         <h2>{this.props.heading}</h2>
//                         <p>{this.props.comment}</p>
//                 </div>
//         )
//     }
// }
// export default ShowCaseInner;

function ShowCaseInner(props){
  

        return(
                <div className="box-flex column-direction flex-around margin-v-15">
                         <div>{props.children}</div> 
                        <h2 className="box-flex-h2">{props.heading}</h2>
                        <p className="box-flex-p">{props.comment}</p>
                </div>
        )

}
export default ShowCaseInner;