# Listar Certificações - DGAESIG23-1010 RF184

## Request
* Headers:
* `Authorization` : `Bearer <Token>`
* Verb: `GET`
* Path: `/certificacao-tempo-servico/certificacoes`
* Payload: N/A

* Query:
```json
{
    "page": 1,
    "per_page": 10,
    "filter": {
	"requerimento_id": "EQUAL",
	"utilizador_id": "EQUAL",
	"estado": "EQUAL",
	"criado_em": "EQUAL_DATE",
	"atualizado_em": "EQUAL_DATE",
    },
    "order_by": {
	"id",
	"requerimento_id",
	"utilizador_id",
	"estado",
	"criado_em",
	"atualizado_em",
    }
}
```


## Response
* Status Code Sucesso: `200`
* Status Code Erro:
    * `401` : Unauthorized
    * `403` : Forbidden
    * `422` : Unprocessable Entity
    * `500` : Internal Server Error

* Body:
```json
{
    "data": {
	"page": 1,
	"per_page": 10,
	"total_pages": 1,
	"total_records": 1,
	"records": [
	    {
		"id": 1,
		"name": "Nomécleus Maximus",
		"estado": "Assinado",
		"ano_letivo": {
		    "id": 3,
		    "descricao": "Descrição",
		    "data_inicio": "2023, 1, 1, 0, 2",
		    "data_fim": "2023, 1, 1, 0, 2",
		    "situacao": "Ativo",
		},
		"utilizador": {
		    "id": 16,
		    "nome": "Alferno Hexadecinário",
		    "numero_utilizador": "123456780",
		},
		"criado_em": "2023, 1, 1, 0, 2",
		"descarregado_em": "2023, 1, 1, 0, 2", or None
	    }

	]
    }
}
```
