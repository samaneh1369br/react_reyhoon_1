import "./Show_case_inner.css"
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