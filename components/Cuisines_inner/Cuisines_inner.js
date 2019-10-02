import "./Cuisines_inner.css";
function CuisinesInner(props){
        return(
                <div className="margin-v-15" style={{backgroundImage:`url(${props.image})`}}>
                    <a href="#" className="foodLink">
                      <div className="foodText">
                        <h1>{props.typeFood}
                        </h1>
                        <h4>رستوران فعال{props.activeNumber}
                        </h4>    
                      </div>
                    </a> 
                 </div>
        )
}
export default CuisinesInner;