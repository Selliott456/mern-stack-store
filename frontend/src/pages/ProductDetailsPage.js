import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();

  console.log(id);

  return <h1>product details</h1>;
};

export default ProductDetailsPage;
