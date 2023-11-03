# Rest Api Books with AWS ☁️

this a rest api made with lambda in AWS. Is serveless architecture where we use the services that haves 
aws.

## Requirements 🔑

- NodeJs 18
- Account AWS
- AWS SDK kit 3

## Services:

- API Gateway -> API REST
- Lambda -> Funtions
- DynamoDB -> Database
- CloudWatch -> Logging
- AIM -> Policies And Roles

## Api:

### Get all books 📚
```
GET /books
```

#### response:

```json
{
	"books": [
		{
			"id_book": "313048d8-6109-44a8-97b4-ebdbb0ecd530",
			"description": "Libro interesante de leer",
			"title": "La Divina Comedia"
		},
		{
			"id_book": "7893e729-977a-448b-b19d-dad4c4f26316",
			"description": "De casualidad",
			"title": "Marginal Media"
		}
	]
}
```

### Create a new book ✏️
#### body:

- title: string
- description: string

```
GET /books
```

#### response:

```json
{
	"newBook": {
		"title": "Marginal Media",
		"description": "De casualidad",
		"id_book": "7893e729-977a-448b-b19d-dad4c4f26316"
	}
}
```
