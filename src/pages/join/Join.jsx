import { BrowserView, MobileView } from "react-device-detect";
import { Navbar } from "../../components/navbar";
import { Input } from "../../components/input";

export default function Join() {
    return (
        <>
        <BrowserView>
            <Navbar/>
            <Form/>
        </BrowserView>
        <MobileView>
            <Navbar/>
            <Form/>
        </MobileView>
        </>
    )
}

function Form() {
    return (
    <>
    <div className="h-screen flex items-center justify-center">
        <Input/>
    </div>
    </>
    )
}