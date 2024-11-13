export default function Avatar({size}) {
    let width = "w-12"
    if (size === "large") {
        width = "w-28";
    }

    return(
        <div className={`${width} rounded-full overflow-hidden`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg" alt="pfp icon" />
        </div>
    )
}