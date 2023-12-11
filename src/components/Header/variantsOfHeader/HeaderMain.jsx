import Learnmore from "../../mainContent/learnMore/LearnMore";
import Header from "../HeaderDef/Header";
import './../../../App.css';

const HeaderMain = () => {
    return (
        <>
        <div className='headerBackground'>
          <Header />
        </div>
        <div className="learn-wrapper">
            <Learnmore />
        </div>
        </>
        
    );
}

export default HeaderMain;