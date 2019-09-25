function CuisinesInner(props){
    

        return(
            <div className="margin-v-15" style={{backgroundImage:`url(${props.image})`}}>
            <h1>{props.typeFood}</h1>
            <h4>رستوران فعال{props.activeNumber}</h4>
        </div>
        )

}
export default CuisinesInner;