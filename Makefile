NODE_ENV = development

up:
	NODE_ENV=$(NODE_ENV) docker-compose up

down:
	NODE_ENV=$(NODE_ENV) docker-compose down

remove:
	NODE_ENV=$(NODE_ENV) docker-compose rm -fs $(s)

build:
	NODE_ENV=$(NODE_ENV) docker-compose build --no-cache $(s)

rebuild:
	remove build