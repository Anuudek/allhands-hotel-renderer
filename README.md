# Allhands Hotel — Motor de Renderização

Este repositório é o **motor de renderização** do projeto **Allhands Hotel**. É um fork do [Nitro Renderer](https://github.com/duckietm/Nitro_Render_V3), uma biblioteca em TypeScript que usa **PixiJS** para desenhar quartos, avatares, mobílias e efeitos no navegador, além de cuidar da comunicação via WebSocket com o servidor do jogo.

## Sobre o projeto Allhands Hotel

O Allhands Hotel é composto por 5 repositórios que trabalham juntos:

| Repositório | Função |
|---|---|
| [`allhands-hotel-server`](https://github.com/Anuudek/allhands-hotel-server) | Servidor do jogo (Java / Polaris) |
| [`allhands-hotel-client`](https://github.com/Anuudek/allhands-hotel-client) | Cliente do jogo (React / Nitro) |
| [`allhands-hotel-renderer`](https://github.com/Anuudek/allhands-hotel-renderer) *(este)* | Motor de renderização do jogo (PixiJS) |
| [`allhands-hotel-cms`](https://github.com/Anuudek/allhands-hotel-cms) | Site/CMS do hotel (Laravel / Atom CMS) |
| [`allhands-hotel-converter`](https://github.com/Anuudek/allhands-hotel-converter) | Ferramenta que baixa e converte os assets oficiais do Habbo |

Este renderer **não roda sozinho**: ele é consumido diretamente pelo código-fonte do [`allhands-hotel-client`](https://github.com/Anuudek/allhands-hotel-client), que precisa tê-lo clonado como pasta **irmã** (`../allhands-hotel-renderer`) para resolver os módulos `@nitrots/*`.

## Stack

- **TypeScript** + **PixiJS 8**
- **Vite** para build
- **Vitest** para testes
- Organizado em pacotes internos (`packages/*`) via Yarn Workspaces: `api`, `avatar`, `room`, `communication`, `session`, `sound`, `events`, entre outros

## Rodando com Docker

O `Dockerfile` deste repositório builda o renderer isoladamente e serve o resultado via nginx (usado, por exemplo, como bundle standalone acessível em `/renderer/`):

```bash
docker build -t allhands-renderer .
```

Quando usado junto com o cliente (`allhands-hotel-client`), o build do cliente inclui este repositório como dependência de código-fonte — não é necessário buildar este Dockerfile separadamente nesse caso.

## Créditos

Baseado no excelente trabalho do time do [Nitro Renderer](https://github.com/duckietm/Nitro_Render_V3). Este fork adapta o projeto para rodar em containers Docker como parte da infraestrutura do Allhands Hotel.
