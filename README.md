# API Dashboard Project

## Documentation

https://quark-riddle-13a.notion.site/API-Dashboard-aafc8dc7b3d4442b90d1cfc50f949b1d

## Config

API development for dashboard, composed of front and back.
There are 11 directories for each JSON response

"/cards"

response:

```js
[
    {
    "tag": "COMPRAS",
    "valor": "R$ 200.000,00"
    },
    {
    "tag": "VENDAS",
    "valor": "R$ 500.000,00"
    },
    {
    "tag": "ICMS",
    "valor": "R$ 36.000,00"
    },
    {
    "tag": "ST",
    "valor": "R$ 12.000,00"
    }
]
```

"/graphics/year" - in "year" you define this year you want

```js
{
    "tag": "COMPRAS",
    "valor": "R$ 200.000,00"
},
{
    "tag": "VENDAS",
    "valor": "R$ 500.000,00"
},
{
    "tag": "ICMS",
    "valor": "R$ 36.000,00"
},
{
    "tag": "ST",
    "valor": "R$ 12.000,00"
}
```

"/tables/year" - in "year" you define this year you want

```js
{
    "ano": "2017",
    "compras": "R$ 120.430,00",
    "vendas": "530.230,00",
    "ICMS": "14.329,00",
    "ST": "3.490,00"
}
```

Link Dashboard repository:
<https://github.com/b1z3rr4/dashboard-front-project>

