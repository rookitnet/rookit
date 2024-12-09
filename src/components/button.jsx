export function Button({onClick}) {
    return (
        <>
        <button className="bg-primarybutton hover:bg-primarybutton/90 text-primarybuttontext rounded-lg p-2 pl-4 pr-4" onClick={() => onClick()}>Join</button>
        </>
    )
}