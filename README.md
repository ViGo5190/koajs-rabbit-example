KoaJS + RabbitMQ Example
========================


# Dev run

```bash
nodemon app
```

# build

```bash
yarn run build
```


# test


```bash

curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 6ff9a6cb-1c4a-a90c-6ed4-9ff984c63575" -d '{
	"text": "my name is Vasya"
}' "http://localhost:3019/api/queue"
```