# Open API Tools

https://openapi-generator.tech/

`-g` option is for generator type. Generators listed on https://openapi-generator.tech/docs/generators

### GO Client

```
docker run --rm \
    -v $PWD:/openapitools openapitools/openapi-generator-cli generate \
    -i /openapitools/openapi.json \
    -g go \
    -o /openapitools/out/go
```

## TS Client

https://openapi-generator.tech/docs/generators/typescript-axios/

```
docker run --rm \
    -v $PWD:/openapitools openapitools/openapi-generator-cli generate \
    -i /openapitools/openapi.json \
    -g typescript-axios \
    --additional-properties=withSeparateModelsAndApi=true,apiPackage=IMXAPI,modelPackage=IMXModels  \
    -o /openapitools/out/typescript2
```

Token Experiment:

```
docker run --rm \
    -v $PWD:/openapitools openapitools/openapi-generator-cli generate \
    -i /openapitools/openapi3.yaml \
    -g typescript-axios \
    --additional-properties=withSeparateModelsAndApi=true,apiPackage=IMXAPI,modelPackage=IMXModels  \
    -o /openapitools/out/token
```

## Kotlin Client

```
docker run --rm \
 -v $PWD:/openapitools openapitools/openapi-generator-cli generate \
 -i /openapitools/openapi.json \
 -g kotlin \
 -o /openapitools/out/kotlin

```

## HTML

```
docker run --rm \
 -v $PWD:/openapitools openapitools/openapi-generator-cli generate \
 -i /openapitools/openapi.json \
 -g html \
 -o /openapitools/out/html

```

# Pros/Cons

## Pros

- Generation is very quick
- Multi-lang support. Can use same lib to generate clients for all languages.

## Cons

```

```
