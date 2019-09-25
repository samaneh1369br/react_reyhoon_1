import "./Banner_form.css"
const Form = () => {

    return(
        <section  style={{marginBottom: '30px'}} className="header-form-section margin-v-60" >
            <p>برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.</p>
            <div className="header-form">
                <input className="child-1"  type="text" placeholder="تهران"/>
                <div className="child-2">
                    <span className="child-2-icon">&copy;</span>
                    <input className="child-2-input" type="text" placeholder="مثلا نیاوران"/>
                </div>
                <button className="child-3"> <svg className="search-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g fill="none" fill-rule="evenodd"><path d="M0 0h18v18H0z"></path><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(2 2)"><circle cx="6.125" cy="6.125" r="6.125"></circle><path d="M13.373 13.373l-2.767-2.767"></path></g><path d="M0 0h18v18H0z"></path></g></svg></button>
                  
            </div>
            

        </section>

    )}
export default Form;