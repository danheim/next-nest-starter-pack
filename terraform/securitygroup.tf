resource "aws_security_group" "allow-postgres" {
  vpc_id      = aws_vpc.main.id
  name        = "allow-postgres"
  description = "allow-postgres"
  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    cidr_blocks     = ["0.0.0.0/0"]
    #security_groups = [aws_security_group.website-instance.id] # allowing access from instance
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
    self        = true
  }
  tags = {
    Name = "allow-postgres"
  }
}

