import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import StackIcon from "tech-stack-icons";

export function Skills() {
  const data = [
    {
      label: "Backend",
      value: [
        "nestjs",
        "swagger",
        "json",
        "serverless",
        "nodejs",
        "mongodb",
        "postgresql",
        "redis",
      ],
    },
    {
      label: "Frontend",
      value: [
        "reactjs",
        "nextjs2",
        "css3",
        "html5",
        "i18next",
        "materialui",
        "tailwindcss",
      ],
    },
    {
      label: "DevOps",
      value: [
        "bash",
        "vim",
        "docker",
        "ec2",
        "firebase",
        "linux",
        "ubuntu",
        "cloudflare",
        "azure",
      ],
    },
    {
      label: "Programing Language",
      value: ["typescript", "js", "python", "ruby"],
    },
    {
      label: "Other",
      value: [
        "figma",
        "eslint",
        "prettier",
        "git",
        "postman",
        "slack",
        "vscode",
        "jest",
        "github",
        "markdown",
      ],
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
      {data.map(({ label, value }) => (
        <div key={label}>
          <Card className="w-96 h-60 bg-white/10">
            <CardBody>
              <Typography variant="h5" className="mb-2 text-white">
                {label}
              </Typography>
              {value.map((value) => (
                <Button
                  key={value}
                  variant="outlined"
                  className="p-0 m-1 text-white border-0"
                >
                  <StackIcon name={value} />
                  <p>{value}</p>
                </Button>
              ))}
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );

  return;
}
