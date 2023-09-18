import "./ProductCard.css";

interface ProductCardProps {
  productName: string;
  productEnvironmentScore: number;
}

const ProductCard = ({
  productName,
  productEnvironmentScore: productScore,
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <span>{productName}</span>

      <span>Environmental Score: {productScore}</span>

      <div>
        <button>Buy</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
