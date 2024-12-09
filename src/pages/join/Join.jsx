import { BrowserView, MobileView } from "react-device-detect";
import { Navbar } from "../../components/navbar";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

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
    <div className="h-screen grid items-center justify-center gap-2">
        <div className="grid gap-2">
            <Input/>
            <Button/>
        </div>
    </div>
    </>
    )
}