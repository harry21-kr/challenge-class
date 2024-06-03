import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
import Page from "../components/Page";

const HomePage = () => {
  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () => api.products.getProducts(),
  // });

  const {
    data: brands,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: () => api.brands.getBrands(),
  });

  if (isLoading) return <Page>Loading...</Page>;
  if (isError) return <Page>Error!</Page>;

  return (
    <Page>
      <ol>
        {brands?.map((brand) => (
          <li key={brand.id}>{brand.nameKr}</li>
        ))}
      </ol>
    </Page>
  );
};
export default HomePage;
