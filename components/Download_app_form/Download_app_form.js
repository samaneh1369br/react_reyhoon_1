import "./Download_app_form.css"
class DownloadAppForm extends React.Component{
    constructor(){
        super();
        this.state={value:""}
        this.handelSubmit=this.handelSubmit.bind(this);
    }
    handelSubmit = (e) => {
        const objectForm=event.target.querySelector("input[type='text']").value;
        e.preventDefault();
        console.log(objectForm)
        console.log(e.target);
    }
   render(){
        return(
            <form className="app-flex-form" onSubmit={this.handelSubmit}>
                <input  type="text" placeholder="مثلا **91234509"  required/>
                <button   type="submit" value="" >دریافت لینک از طریق sms
                </button>
                <p className="app-comment-2">اپلیکیشن ریحون برای Android و iOS در دسترس است.</p>
            </form>
        )
   }
}
export default DownloadAppForm;












