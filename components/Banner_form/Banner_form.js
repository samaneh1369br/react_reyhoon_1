import "./Banner_form.css"
import SvgSearch from "../Svg_search/Svg_search"

class Form  extends React.Component {
    constructor(){
        super();
        this.submit=this.submit.bind(this)
        this.state={
         city:"",
         address:""
        }
    }
    submit=(e)=>{
        e.preventDefault(); 
      ((e.target.querySelector("input[id='txt1']").value)&&(e.target.querySelector("input[id='txt2']").value))
        ? this.setState({
            city:e.target.querySelector("input[id='txt1']").value+" . ",
            address:e.target.querySelector("input[id='txt2']").value
        })
        : 
        this.setState({
            city:"هر دو ورودی را کامل کنید",
            address:"" 
        })
    }
    render(){
       return(   
            <section  style={{marginBottom: '30px', marginTop:"45px !important"}} className="header-form-section margin-v-60" >
                    <p>برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.</p>
                    <form onSubmit={this.submit}  className="header-form">
                        <input className="child-1" id="txt1"  type="text"  placeholder="تهران"/>
                        <div className="child-2">
                            <span className="child-2-icon">&copy;</span>
                            <input className="child-2-input" type="text" id="txt2" placeholder="مثلا نیاوران"/>
                        </div>
                        <button className="child-3" type="submit">
                            <SvgSearch/>
                        </button>
                        
                    </form>
                    <div >
                        {this.state.city}{this.state.address}
                    </div>

                </section>
        )
    }
}
export default Form;