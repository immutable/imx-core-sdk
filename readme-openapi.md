# Open API Tools

https://openapi-generator.tech/

`-g` option is for generator type. Generators listed on https://openapi-generator.tech/docs/generators


## TS Client

https://openapi-generator.tech/docs/generators/typescript-axios/

- Mounts PWD to app directory in Docker
- Generates client and outputs to `src/client` directory

```
rm -rf src/client
mkdir src/client

docker run --rm \
    -v $PWD:/app openapitools/openapi-generator-cli generate \
    -i ./app/openapi.json \
    -g typescript-axios \
    --additional-properties=supportsES6=true,npmVersion=6.9.0,typescriptThreePlus=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api,useSingleRequestParameter=true \
    -o /app/src/client
    
```

## HTML

```
docker run --rm \
 -v $PWD:/client-generated openapitools/openapi-generator-cli generate \
 -i /client-generated/openapi.json \
 -g html \
 -o /client-generated/out/html

```
