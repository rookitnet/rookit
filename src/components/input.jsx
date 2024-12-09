import { BrowserView, MobileView } from "react-device-detect";

export function Input() {
    return (
       <>
        <BrowserView>
        <input type="text" className="bg-foreground/10 rounded-lg p-2 pl-4 pr-4 
        text-foreground font-medium focus:border-background outline-none placeholder:text-foreground/20" placeholder="Room Code"/>
        </BrowserView>
        <MobileView>
        <input type="text" className=" bg-foreground/10 rounded-lg p-2 pl-4 pr-4 
        text-foreground font-medium focus:border-background outline-none placeholder:text-foreground/20" placeholder="Room Code"/>
        </MobileView>
        </>
    )
}