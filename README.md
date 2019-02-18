## Chinese Poetry Server

A Chinese poetry GraphQL server based on [chinese-poetry/chinese-poetry](https://github.com/chinese-poetry/chinese-poetry),
servered as API for [https://github.com/ifyouseewendy/zhifou](https://github.com/ifyouseewendy/zhifou).

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
