<h1 align="center">Honeybud Anime List 🍯 </h1>
client da API <a href="https://myanimelist.net/apiconfig/references/api/v2">MyAnimeListAPI</a>, feito em TypeScript usando React.

## 🔖 Índice
- [Objetivos](#objetivos)
- [Como rodar](#install)
- [Estrutura](#estrutura)
- [Design](#design)
- [Próximos passos](#proximos)

## 💾 Como rodar<a name="install"></a>
Requisito: `Node.js v19.7.0`

```
git clone https://github.com/biaferre/honeybud-animelist
cd honeybud

//em um terminal:
node serverProxy.js // rodar o proxy

//em terminal paralelo:
yarn install
yarn build
yarn start
```
> buscando praticidade na manutenção de dependências, optei por usar yarn ao invés de npm.

## 👷‍♂️ Estrutura<a name="estrutura"></a>
### Feito com:
- `axios` - lidar com requisições
- Typescript
- NodeJS
- ReactJS
[Autenticação]("https://myanimelist.net/apiconfig/references/authorization") - OAuth 2.0

### Organização dos arquivos:
```
├── src
│   ├── assets 
│   │   ├── images // pngs, jpegs e jpgs necessarios 
│   │   ├── fonts // fonte "ReemKufi" em .ttf
│   ├── components // componentes criados em .tsx com seus respectivos .css
│   ├── interfaces // todas as interfaces mais gerais usadas (interfaces muito específicas foram mantidas no mesmo arquivo que o elemento que as usa)
│   ├── pages // páginas (landing page, home, login)
│   ├── services // serviços de autenticação, receber coleção e lista
│   ├── utilities // utilitário: codeverifier pra checar o desafio fornecido
├── public // default nao alterado pelo escopo do projeto
├── .gitignore
├── yarn.lock
├── package.json
├── setupProxy.js
├── tsconfig.json
```

## 🎯 Objetivos <a name="objetivos"></a>
- ✅ Uso correto de React Hooks
- ✅ Boas práticas de estilização
- 🔄 Implementar infinity scroll
- 🔄 Aplicar requisições (GET, POST, PUT, DELETE) em API
> 🔄 = parcial  ✅ = feito


## 👀 Próximos passos <a name="proximos"></a>
- Corrigir o POST da autenticação
- Gerar listas com possibilidade de DELETE e PATCH dos itens
