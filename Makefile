.PHONY: generate-openapi-prod
generate-openapi-prod: get-openapi-prod generate-api

.PHONY: generate-openapi-sandbox
generate-openapi-sandbox: get-openapi-sandbox generate-api

.PHONY: get-openapi-prod
get-openapi-prod:
	rm openapi.json && touch openapi.json && \
	curl -H "Accept: application/json+v3" \
    https://api.x.immutable.com/openapi \
    -o openapi.json

.PHONY: get-openapi-sandbox
get-openapi-sandbox:
	rm openapi.json && touch openapi.json && \
	curl -H "Accept: application/json+v3" \
    https://api.sandbox.x.immutable.com/openapi \
    -o openapi.json

.PHONY: generate-api
generate-api:
	rm -rf src/api && \
    mkdir src/api && \
	docker run --rm -v $(shell pwd):/app openapitools/openapi-generator-cli:v6.2.1 generate \
    -i ./app/openapi.json \
    -g typescript-axios \
    --additional-properties=supportsES6=true,npmVersion=6.9.0,typescriptThreePlus=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=domain,useSingleRequestParameter=true \
    -o /app/src/api