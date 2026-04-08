export const Product = ({ item }) => {
  return (
    <div className="product-card">
      <h3>{item.name}</h3>
      <p className="price">{item.price} руб.</p>
    </div>
  );
};