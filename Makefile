build:
	docker-compose -f ./docker-compose.yml up --build

init:
	docker-compose -f ./docker-compose.yml up

build_back:
	docker-compose -f ./docker-compose.yml up --build -d

init_back:
	docker-compose -f ./docker-compose.yml up -d

stop:
	docker-compose -f ./docker-compose.yml down --volumes
