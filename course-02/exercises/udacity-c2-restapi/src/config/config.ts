export const config = {
  dev: {
    username: "udagraminouedev",
    password: "0504mathminton",
    database: "udagraminouedev",
    host: "udagraminouedev.cxozpmzxzfci.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-2",
    aws_profile: "default",
    aws_media_bucket: "udagram-ruttner-dev",
  },
  jwt: {
    secret: " ",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
