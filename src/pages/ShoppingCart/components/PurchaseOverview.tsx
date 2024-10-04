interface PurchaseOverviewProps {
    subtotal: number;
    discounts: number[];
    total: number;
  }
  
  export const PurchaseOverview: React.FC<PurchaseOverviewProps> = ({ subtotal, discounts, total }) => {
    return (
      <div className="bg-gray-200 py-8 px-6 rounded-lg shadow-md">
        <div>
          <h3 className="text-lg font-semibold">Purchase Overview</h3>
          <br />
          <div className="flex justify-between mb-4">
            <div>
              <h4 className="font-medium">Sub-total:</h4>
              <h4 className="font-medium">Purchase delivery:</h4>
            </div>
            <div className="text-right">
              <h4 className="font-medium">${subtotal.toLocaleString()}</h4>
              <h4 className="font-medium">$0</h4>
            </div>
          </div>
          <hr className="my-4 border-t" />
          <h3 className="text-lg font-semibold">Discounts</h3>
          <div className="flex flex-col">
            {discounts.map((discount, index) => (
              <div className="flex justify-between mb-4" key={index}>
                <h4 className="font-medium">Discount on Product {index + 1}:</h4>
                <h4 className="font-medium">${discount.toLocaleString()}</h4>
              </div>
            ))}
          </div>
          <div className="flex justify-between mb-4">
            <h4 className="font-medium">Total discount:</h4>
            <h5 className="font-semibold">${discounts.reduce((total, d) => total + d, 0).toLocaleString()}</h5>
          </div>
          <hr className="my-4 border-t" />
          <div className="flex justify-between mb-4">
            <h4 className="font-medium">Total:</h4>
            <h5 className="font-semibold">${total.toLocaleString()}</h5>
          </div>
          <br />
          <div className="text-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Start payment
            </button>
          </div>
        </div>
      </div>
    );
  };
  