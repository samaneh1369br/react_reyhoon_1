
import {createFilter} from 'react-search-input';
import cx from 'classnames';
import "./Banner_form.css"
import SvgSearch from "../Svg_search/Svg_search"
import ReactDOM from "react-dom";

class Form  extends React.Component {
    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
        // this.cityGet=this.cityGet.bind(this);
        this.searchUpdated = this.searchUpdated.bind(this);
        this.suggestedCittyBlock=React.createRef();
        this.state={
            city:"",
            region:"",
            allCityies:[],
            searchTerm :'',
            sugestionCity:'',
            showSuggestCity: false,
            showSuggestRegion: false,
            allRegion:[]
        }
    }

    async componentDidMount() {
      this.getCities();
    }
   

    getCities = async () => {
        const respond =  await fetch('https://stage.reyhoon.com/public-api/v1/cities',{method:"GET"});
        if (respond.ok) {
            const data = await respond.json();
            this.setState(
                {
                    allCityies:data.cities
                }
            )
        }
        else {
            console.error("https_code"+respond.status)
        }
       
            
    }

    regionGet=(e)=>{
        const regionTyped=e.target.value;
        if (regionTyped.length>=4)
       {
           setTimeout(() => {
                this.setState(
                    {
                        region:regionTyped
                    }
                    ,async()=>{
                        
                        const respond= await fetch(`https://stage.reyhoon.com/location/query?query=${this.state.region}&city=${this.state.city}`)
                        if (respond.ok){
                            const data= await respond.json();
                            if (data.suggestions.length>0){
                                    this.setState(
                                        {
                                            allRegion:data.suggestions,
                                            showSuggestRegion:true
                                        }
                                    )
                            }
                        }
                        else{
                            console.error("https_code"+respond.status)
    
                        }
                    }
                )
            }, 2000);
        }
    }

    submit=(e)=>{
        e.preventDefault(); 
        const node = ReactDOM.findDOMNode(this);
        const text1Value=e.target.querySelector("input[id='txt1']").value;
        const text2Value=e.target.querySelector("input[id='txt2']").value;
        if(text1Value&&text2Value)
        {
            node.querySelector("div[id='nullInput']").textContent= `${this.state.city} . ${ this.state.region}`;
        }
        else{
            const node = ReactDOM.findDOMNode(this);
               node.querySelector("div[id='nullInput']").textContent="لطفا ورودی را وارد کنید";
               console.log("hi")
        }
    }

    searchUpdated=(term)=>{
        let temp=term.target.value;
        if (temp.length>=2){
          this.setState({searchTerm:temp});        
        }
    }

    citySuggestedShow=()=>{
        this.setState(
            {
                showSuggestCity: true,
            }
        )
    }
    regionSuggestedShow=()=>{
        if (this.state.showSuggestRegion)
        this.setState(
            {
               showSuggestRegion: true,
            }
        )
    }

    setCity=(citySelected)=>{
        const node = ReactDOM.findDOMNode(this);
        node.querySelector("input[id='txt2']").focus();
        this.setState(
            {
                city:citySelected,
                showSuggestCity: false
            }
        )
    }  

    setRegion=(regionSelected)=>{
        this.setState(
            {
                region:regionSelected,
                showSuggestRegion: false
            }
        )
    }

    render(){
      console.log(this.state.showSuggestRegion)
          const filteredCities =this.state.allCityies.filter(createFilter(this.state.searchTerm,'name'));
        return(   
            <section
                style={{marginBottom: '30px', marginTop:"45px !important"}}
                className="header-form-section margin-v-60"
            >
                <p>برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.</p>
                <form onSubmit={this.submit} className="header-form">
                    <input  
                        id="txt1"
                        value={this.state.city}
                        type="text" 
                        onFocus={()=>this.citySuggestedShow()}  
                        onChange={(e)=>this.searchUpdated(e)} 
                        placeholder="انتخاب کنید"
                        autoComplete="off" 
                    />  
                    <ul
                        className={cx('citySuggested', {'showCitySuggested': this.state.showSuggestCity})}
                    >
                        <p>( {this.state.allCityies.length}) تحت پوشش</p>
                        {
                            filteredCities.map(
                               (city, key)=>
                                    <li
                                        onClick={()=>this.setCity(city.name)}
                                        key={key}>{city.name}
                                    </li>
                            )
                        }
                    </ul>  
                    <div className="child-2">
                        <span className="child-2-icon">&copy;</span>
                        <input
                            className="child-2-input"
                            autoComplete="off"
                            type="text"
                            id="txt2"
                            onChange={()=>{this.regionGet ;this.regionSuggestedShow()}}
                            placeholder="مثلا نیاوران"
                        />
                    </div>
                    <ul 
                        className={cx('regionSuggested', {'showRegionSuggested': this.state.showSuggestRegion})}
                    >
                        {   
                           this.state.allRegion.map((regionSuggested, key)=><li key={key}  onClick={()=>this.setRegion(regionSuggested.value)}>{regionSuggested.value}</li>)
                        }
                    </ul>
                    <button className="child-3" type="submit">
                        <SvgSearch/>
                    </button>
                    
                </form>
                <div id="nullInput"></div>

            </section>
           
        )
    }
}
export default Form;





