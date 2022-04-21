# Open API Tools

https://openapi-generator.tech/

`-g` option is for generator type. Generators listed on https://openapi-generator.tech/docs/generators


## TS Client

https://openapi-generator.tech/docs/generators/typescript-axios/

- Mounts PWD to app directory in Docker
- Generates client and outputs to `src/api` directory

```
rm -rf src/api
mkdir src/api

docker run --rm \
    -v $PWD:/app openapitools/openapi-generator-cli generate \
    -i ./app/openapi.json \
    -g typescript-axios \
    --additional-properties=supportsES6=true,npmVersion=6.9.0,typescriptThreePlus=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=domain,useSingleRequestParameter=true \
    -o /app/src/api
    
```

## HTML

```
docker run --rm \
 -v $PWD:/client-generated openapitools/openapi-generator-cli generate \
 -i /client-generated/openapi.json \
 -g html \
 -o /client-generated/out/html

```
