import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function HomePage() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["product", { list: true }],
    queryFn: () => api.products.getProducts(),
  });
  const { mutate: addItemToCard } = useMutation({
    mutationFn: (productId) => api.cart.addItemToCard(productId),
  });

  const navigate = useNavigate();

  const handleClickAddItemToCart = async (productId) => {
    addItemToCard(productId, {
      onSuccess: () => {
        const yes = confirm("추가 완료, 장바구니 페이지로 이동?");
        if (yes) navigate("/cart");
      },
    });
  };

  return (
    <div>
      <h1>HomePage</h1>
      {isLoading ? (
        "loading..."
      ) : (
        <ul style={{ textAlign: "left" }}>
          {products.map((product) => (
            <li key={product.id}>
              <h5>{product.name}</h5>
              <button onClick={() => handleClickAddItemToCart(product.id)}>
                장바구니에 추가하기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
