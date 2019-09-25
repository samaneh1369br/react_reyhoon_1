import DownloadAppForm from "../Download_app_form/Download_app_form"
import DownloadAppMarket from "../Download_app_market/Download_app_market"
import "./Download_app.css"

const DownloadApp= ()=>{
        return(
    <section className="app margin-v-15">
        <div className="app-flex">
               <div className="app-flex-comment">
                   <h1 className="app-h-1">ریحون روی موبایل</h1>
                   <p className="app-comment-1">برای دریافت لینک دانلود اپلیکیشن ریحون، شماره موبایل خود را وارد کنید.</p>
               </div>
              <DownloadAppForm/>
              <DownloadAppMarket/>
               <div>
                    <p className="app-comment-3">این فورم توسط reCAPTCHA محافظت شده وسیاسیت حفظ <a href="#"> حریم خصوصی </a>وقوانین سرویس گوگل بر روی آن اعمال می‌شود.</p>

               </div>
        </div>
        <img className="mobile-image" src="https://www.reyhoon.com/react-assets/dist/ca98ff0d.png?__WB_REVISION__=ca98ff0d0c7e3808157aa48c94953a75"  alt="اپ ریحون را دانلود کنید"/>
     </section>
        )
    }
export default DownloadApp;