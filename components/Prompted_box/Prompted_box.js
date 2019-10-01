import PromptedInner from "../Prompted_inner/Prompted_inner"
import "./Prompted_box.css"
const PromptedBox = () => {

    return(
    <React.Fragment>
        <section>

            <div className="section-bg margin-v-45" >
            <div className="good-resturant">
            <PromptedInner/>
            </div>
            </div>
        </section>
    </React.Fragment>
    )}
export default PromptedBox;