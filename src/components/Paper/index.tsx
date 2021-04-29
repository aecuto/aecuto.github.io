import MuiPaper from "@material-ui/core/Paper";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Paper = ({ children }: Props) => {
  return (
    <MuiPaper
      square
      style={{ padding: "20px", marginBottom: "20px", color: "#4f4f4f" }}
    >
      {children}
    </MuiPaper>
  );
};

export default Paper;
