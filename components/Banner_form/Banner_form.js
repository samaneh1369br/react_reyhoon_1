import "./Banner_form.css"
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
        // console.log()
        // console.log(e.target.querySelector("input[id='txt2']").value)
        
        
      ((e.target.querySelector("input[id='txt1']").value)&&(e.target.querySelector("input[id='txt2']").value))
      ? this.setState({
        city:e.target.querySelector("input[id='txt1']").value+" . ",
        address:e.target.querySelector("input[id='txt2']").value
      })
      : 
      this.setState({
        city:"هر دو ورودی را کامل کنید",
        address:"" })
      


    }
    render(){
     return(   
      <section  style={{marginBottom: '30px'}} className="header-form-section margin-v-60" >
            <p>برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.</p>
            <form onSubmit={this.submit}  className="header-form">
                <input className="child-1" id="txt1"  type="text"  placeholder="تهران"/>
                <div className="child-2">
                    <span className="child-2-icon">&copy;</span>
                    <input className="child-2-input" type="text" id="txt2" placeholder="مثلا نیاوران"/>
                </div>
                <button className="child-3" type="submit"> <svg className="search-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g fill="none" fill-rule="evenodd"><path d="M0 0h18v18H0z"></path><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(2 2)"><circle cx="6.125" cy="6.125" r="6.125"></circle><path d="M13.373 13.373l-2.767-2.767"></path></g><path d="M0 0h18v18H0z"></path></g></svg></button>
                  
            </form>
            <div >{this.state.city}{this.state.address}</div>

        </section>
     )
    }}
export default Form;