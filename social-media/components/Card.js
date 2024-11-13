export default function Card({children, noPadding}) {
    let classes = "bg-white shadow-lg shadow-gray-500 shadow-md rounded-md mb-5 overflow-hidden"
    if (!noPadding) {
        classes += " p-4 "
    }

    return (
        <div className={classes}>
            {children}
        </div>
    );
}