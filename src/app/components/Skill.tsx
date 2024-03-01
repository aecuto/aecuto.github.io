import { Card, CardBody, Typography } from "@material-tailwind/react";
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
    <>
      <i className="devicon-portainer-original colored text-[50px]"></i>
      <i className="devicon-portainer-original colored text-[50px]"></i>
      <i className="devicon-portainer-original colored text-[50px]"></i>

      <div className="flex flex-wrap gap-4 justify-center">
        {data.map(({ label, value }) => (
          <div key={label}>
            <Card className="w-[360px] h-[360px] bg-white/10">
              <CardBody>
                <Typography variant="h5" className="mb-2 text-white">
                  {label}
                </Typography>

                <div className="flex flex-wrap">
                  {value.map((value) => (
                    <div
                      key={value}
                      className="m-1 text-white text-center hover:opacity-50 cursor-pointer"
                    >
                      {/* <StackIcon name={value} /> */}
                      <i
                        className={`devicon-${value}-original colored text-[50px]`}
                      ></i>
                      <p className="text-center">{value}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );

  return;
}
