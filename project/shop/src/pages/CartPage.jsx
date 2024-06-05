import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

function CartPage() {
  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCart(),
  });

  console.log(cart);

  return (
    <div>
      <h1>장바구니</h1>
    </div>
  );
}

export default CartPage;
