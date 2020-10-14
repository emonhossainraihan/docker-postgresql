## Docker Command

- `docker image ls`
- `dokcer ps -aq`
- delete all containers including its volumes use: `docker rm -vf $(docker ps -a -q)`
- delete all the images: `docker rmi -f $(docker images -a -q)`
- runs a new command in a running container: `docker exec`


## Notes on Docker Command

- `docker ps` shows only the running containers

- `-a` is for all, and `-q` is return only image ids 

- `docker rmi` is an alias for `docker image rm`

- Remember, you should remove all the containers before removing all the images from which those containers were created.

- Dangling image means not associated with a container

## Run a postgres container

- `docker run --name postgres_test -e POSTGRES_PASSWORD=<> -d postgres`
- `docker exec -it postgres_test psql -U postgres`

> The "postgres=#" prompt is a fresh prompt waiting for the start of a new command, while the "postgres-#" is the result of hitting enter after typing a command that does not end with a semicolon. Access the PostgreSQL server from psql with a specific user:

```
[protocol]://[username]:[password]@[hostname]:[port]/[database]
```

## [Access the database from the host](https://reachmnadeem.wordpress.com/2020/06/02/running-postgresql-database-in-docker-and-connecting-from-host-outside-container/)

[StackOverflow Answer](https://stackoverflow.com/a/51687432/9138425)

- host.docker.internal

 ## prisma2 with postgreSQL

 - `npx prisma init`

## Understand docker-compose

Docker service is used mostly when you configured the master node with Docker swarm so that docker containers will run in a distributed environment and it can be easily managed.

The Compose file manages all the dependencies (databases, queues, caches, etc) of the application and can create every container using a single command.

There’ll be a lot of key-value pairings or directives in your file. The top-level ones are:

- Version
- Services
- Network
- Volumes

## Services

The service key is arguably the most important key in a Docker Compose file. Here, you specify the containers you want to create. There are a lot of options and tons of combinations for configuring containers in this section of the file. These are some options you can define under the services key:

- Image
- Container_name
- Restart: You have the following options, no, always, on-failure and unless-stopped. These options imply that a container will never restart, will always restart, only restart on failure or only when stopped.
- Depends_on
- Environment: For security and ease of use, you extract them from the code and set them up as environment variables. Examples of such variables are API keys, passwords, and so on. These are common in web applications. Note that this key only works if there is no “build” directive in that service. Hence, create the image beforehand. If you intend to use the “build” directive regardless, you’ll need to define the environment variables in an “args” directive. The “args” directive is a sub-directive of “build”.
- Ports
- Volumes: Docker containers have no means of storing data persistently, so they lose data when they restart. With volumes, you can work around this. Volumes makes it possible to create a persistent data storage. It does this by mounting a directory from the docker host into the docker container’s directory.
- Networks
- Entrypoint

> “Context” should contain the path to the directory with the Dockerfile.

## Mount a Volume

```
docker run --mount source=volume-name,destination=path-inside-container docker-images
```

## Mount Directory as a Volume

```
docker run -v "directory_name":volume_name docker_image
```

https://linuxhint.com/docker_cheat_sheet/
https://blog.container-solutions.com/understanding-volumes-docker