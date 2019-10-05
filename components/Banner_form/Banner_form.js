import "./Banner_form.css"
import SvgSearch from "../Svg_search/Svg_search"
import SearchInput, {createFilter} from 'react-search-input';

class Form  extends React.Component {
    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
        // this.cityGet=this.cityGet.bind(this);
        this.searchUpdated = this.searchUpdated.bind(this)
        this.state={
         city:"",
         region:"",
         responds:[],
         searchTerm :''
               }
    }

    async componentWillMount() {
      this.getCities();
    }

    getCities = async () => {
        const respond =  await fetch('https://stage.reyhoon.com/public-api/v1/cities',{method:"GET"});
        if (respond.ok) {
            const data = await respond.json();
            this.setState({responds:data})
        }
        else {
            console.error("https_code"+respond.status)
        }
    }

    regionGet=(e)=>{
        
        this.setState({
            region:e.target.value
        },()=>{
            console.log(this.state.region)
            }
        )
    }
    submit=(e)=>{
        e.preventDefault(); 
      ((e.target.querySelector("input[id='txt1']").value)&&(e.target.querySelector("input[id='txt2']").value))
        ? this.setState({
            city:e.target.querySelector("input[id='txt1']").value+" . ",
            region:e.target.querySelector("input[id='txt2']").value
        })
        : 
        this.setState({
            city:"هر دو ورودی را کامل کنید",
            region:"" 
        })
    }
    searchUpdated=(term)=>this.setState({searchTerm:term});
    render(){
     const z=this.state.responds;
       let p= Object.keys(z).map(function(key) {
        return [Number(key), z[key]]});
        p=p[0];
        console.log(p);

    //   this.state.responds.provinces.map((city)=>{console.log(city)})
        // const filteredCities =this.state.responds.filter(createFilter(this.state.searchTerm,'name'));
        // console.log(filteredCities)
       return(   
            <section  style={{marginBottom: '30px', marginTop:"45px !important"}} className="header-form-section margin-v-60" >
                    <p>برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.</p>
                    <form onSubmit={this.submit}  className="header-form">
                        <SearchInput className="child-1"  onChange={()=>this.searchUpdated()} placeholder="تهران"/>
                        <div className="child-2">
                            <span className="child-2-icon">&copy;</span>
                            <input className="child-2-input" type="text" id="txt2" onChange={this.regionGet} placeholder="مثلا نیاوران"/>
                        </div>
                        <button className="child-3" type="submit">
                            <SvgSearch/>
                        </button>
                        
                    </form>
                    <div >
                        {this.state.city}{this.state.region}
                    </div>

                </section>
           
        )
    }
}
export default Form;












// cityGet=(e)=>{
//     this.setState({
//         city:e.target.value
//     },()=>{
//             console.log(this.state.city);
//             fetch(`https://www.reyhoon.com/public-api/v1/cities`).
//             then(   respond=>{
//                         var responeJson=  respond.json();
//                         return responeJson
//                     }
//                 ).
//             catch(  error=>{console.log(error+"    sddddddddddd")})
//           } 
//     )


// }