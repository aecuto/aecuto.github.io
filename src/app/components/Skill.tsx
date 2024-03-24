import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Skills() {
  const data = [
    {
      label: "Backend",
      value: [
        "nestjs",
        "express",
        "swagger",
        "nodejs",
        "mongodb",
        "postgresql",
        "docker",
        "portainer",
        "yaml",
      ],
    },
    {
      label: "Frontend",
      value: ["react", "nextjs", "css3", "html5", "materialui", "tailwindcss"],
    },
    {
      label: "DevOps",
      value: [
        "linux",
        "ubuntu",
        "cloudflare",
        "nginx",
        "amazonwebservices",
        "azure",
        "vercel",
        "firebase",
        "ssh",
        "bash",
        "vim",
      ],
    },
    {
      label: "Programing Language",
      value: ["typescript", "javascript", "go", "python", "ruby", "cplusplus"],
    },
    {
      label: "Other",
      value: [
        "redis",
        "json",
        "figma",
        "eslint",
        "git",
        "postman",
        "slack",
        "vscode",
        "jest",
        "github",
        "markdown",
        "ohmyzsh",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.map(({ label, value }) => (
          <div key={label}>
            <Card className="w-[360px] h-[340px] bg-white/20">
              <CardBody>
                <Typography variant="h5" className="mb-2 text-white">
                  {label}
                </Typography>

                <div className="flex flex-wrap">
                  {value.map((value) => (
                    <div
                      key={value}
                      className="m-1 text-white text-center cursor-pointer"
                    >
                      {/* <StackIcon name={value} /> */}
                      <i
                        className={`devicon-${value}-original devicon-${value}-plain colored text-[50px] hover:text-black`}
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
