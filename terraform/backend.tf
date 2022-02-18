terraform {
  backend "s3" {
    bucket = "website-terraform-state-f1272"
    key = "terraform/website"
    region = "eu-central-1"
    profile = "terraform"
  }
}