.PHONY: generate-openapi
generate-openapi: get-openapi generate-api

.PHONY: get-openapi
get-openapi-prod:
	curl -H "Accept: application/json+v3" \
    https://api.x.immutable.com/openapi \
    -o openapi.json

.PHONY: generate-api
generate-api:
	rm -rf src/api && \
    mkdir src/api && \
	docker run --rm -v $(shell pwd):/app openapitools/openapi-generator-cli generate \
    -i ./app/openapi.json \
    -g typescript-axios \
    --additional-properties=supportsES6=true,npmVersion=6.9.0,typescriptThreePlus=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=domain,useSingleRequestParameter=true \
    -o /app/src/api