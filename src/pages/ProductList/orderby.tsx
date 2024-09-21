export function OrderBy() {
    return (
        <div className="orderby mb-4">
            <select 
                name="orderby" 
                id="orderby" 
                className="bg-white border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-blue-500 w-40 md:w-auto"
            >
                <option value="" disabled selected hidden>
                    Order by
                </option>
                <option value="relevance">Relevance</option>
                <option value="upload">Upload date</option>
                <option value="lh-price">Lowest to highest price</option>
                <option value="hl-price">Highest to lowest price</option>
            </select>
        </div>
    );
}


export default OrderBy;