import { AuthProvider } from "../../contexts/auth.context";

const ProvidersLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ProvidersLayout;
