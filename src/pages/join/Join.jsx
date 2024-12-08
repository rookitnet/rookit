import { BrowserView, MobileView } from "react-device-detect";
import Navbar from "../../components/navbar";

export default function Join() {
    return (
        <>
        <BrowserView>
            <Navbar/>
        </BrowserView>
        <MobileView>
            <Navbar/>
        </MobileView>
        </>
    )
}