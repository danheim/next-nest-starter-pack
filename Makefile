NODE_ENV = development

up:
	NODE_ENV=$(NODE_ENV) docker-compose -f ./docker-compose.yml up

down:
	NODE_ENV=$(NODE_ENV) docker-compose -f ./docker-compose.yml down