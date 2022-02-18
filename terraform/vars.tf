variable "AWS_REGION" {
  default = "eu-central-1"
}

variable "DB" {
  type = object({
    name = string
    username = string
    password = string
  })
  default = {
    name = "website"
    username = "root"
    password = "AmjnQbPYb3!sVdjDFt"
  }
}