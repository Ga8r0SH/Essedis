import HeaderDefault from "./HeaderDefault";
import HeaderMain from "./HeaderMain";
import { useLocation } from "react-router";

const ChooseHeader = () => {
    const location = useLocation();
    return <>
        {location.pathname === '/' ? <HeaderMain /> : <HeaderDefault />}
        </>
}

export default ChooseHeader;