## Poem Server

A GraphQL Chinese poem server based on [chinese-poetry/chinese-poetry](https://github.com/chinese-poetry/chinese-poetry).

Endpoint: `/graphql` with schema

```
type Query {
  hello: String
  ci: [CI]
}
type CI {
    rhythmic: String
    author: String
    content: String
}
```
