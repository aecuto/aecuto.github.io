import { Container } from "@material-ui/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div style={{ backgroundColor: "#fbfbfb" }}>
      <Container>
        <div>{children}</div>
      </Container>
    </div>
  );
};

export default Layout;
