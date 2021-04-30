import { LinearProgress, Typography } from "@material-ui/core";
import styled from "styled-components";

const ProgressText = styled(Typography)`
  position: absolute;
  color: white;
  top: 0px;
  left: 50%;
  transform: translate(-50%);
`;

type Props = {
  name: string;
  level: number;
  color?: "primary" | "secondary";
};

const LevelSkill = ({ level = 0, name, color = "primary" }: Props) => {
  const text = ["NONE", "INTERMEDIATE", "ADVANCE", "EXPERT", "MASTER"];
  const value = [0, 65, 70, 80, 90];
  return (
    <div style={{ marginBottom: "20px" }}>
      <Typography>{name}</Typography>
      <div style={{ position: "relative" }}>
        <LinearProgress
          color={color}
          variant="determinate"
          value={value[level]}
          style={{ height: "24px" }}
        />
        <ProgressText>{text[level]}</ProgressText>
      </div>
    </div>
  );
};

export default LevelSkill;
