# Open API Tools

https://openapi-generator.tech/

`-g` option is for generator type. Generators listed on https://openapi-generator.tech/docs/generators

## GO Client

```
docker run --rm \
    -v $PWD:/client-generated openapitools/openapi-generator-cli generate \
    -i /client-generated/openapi.json \
    -g go \
    -o /client-generated/out/go
```

## TS Client

https://openapi-generator.tech/docs/generators/typescript-axios/

```
docker run --rm \
    -v $PWD:/src/client openapitools/openapi-generator-cli generate \
    -i /../../openapi.json \
    -g typescript-axios \
    --additional-properties=supportsES6=true,npmVersion=6.9.0,typescriptThreePlus=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api \
    -o /src/client
```

## Kotlin Client

```
docker run --rm \
    -v $PWD:/client-generated openapitools/openapi-generator-cli generate \
    -i /client-generated/openapi.json \
    -g kotlin \
    -o /client-generated/out/kotlin
```

## HTML

```
docker run --rm \
 -v $PWD:/client-generated openapitools/openapi-generator-cli generate \
 -i /client-generated/openapi.json \
 -g html \
 -o /client-generated/out/html

```
