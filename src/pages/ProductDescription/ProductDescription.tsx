import { ProductDetail } from "./ProductDetail";

const App: React.FC = () => {
  const productId = 5; // Aquí defines el ID del producto que deseas mostrar

  return (
    <div>
      <h1>Product Details</h1>
      <ProductDetail id={productId} />
    </div>
  );
};

export default App;