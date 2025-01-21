# memoapp

For learning React Native.

## Tool set

- yarn v4

```sh
$ yarn -v
4.4.0
```

## Prerequisites

- docker compose cli > v2.26.x

```sh
$ docker compose version
Docker Compose version v2.26.1-desktop.1
```

## Usage

To get access from outside to a Expo dev. server,  
run the `.sh` file as follow before executing `$ docker compose up -d`.

```sh
$ touch .env 

$ chmod +x ./set_local_ip_address_to_env.sh
$ sh ./set_local_ip_address_to_env.sh

```

Run commands below before the containers up.

```sh
$ yarn install
```

Run containers.

```sh
$ docker compose up -d

```
