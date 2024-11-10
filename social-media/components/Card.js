export default function Card({children}) {
    return (
        <div className="bg-white shadow-lg shadow-gray-500 shadow-md rounded-md p-4 mb-5">
            {children}
        </div>
    );
}