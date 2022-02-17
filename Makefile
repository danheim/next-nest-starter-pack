NODE_ENV = development

dev:
	NODE_ENV=$(NODE_ENV) docker-compose -f ./docker-compose.yml up