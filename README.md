# CoolSolutions

Site institucional da CoolSolutions em Next.js, TypeScript e Tailwind CSS.

O codigo-fonte principal fica em `coolsolutions/`. A versao HTML/CSS legada foi removida desta branch para evitar publicacoes acidentais do site antigo.

## Desenvolvimento

```bash
cd coolsolutions
npm ci
npm run dev
```

## Validacao

```bash
cd coolsolutions
npm run test
npm run type-check
npm run build
```

## Deploy

O deploy roda pelo GitHub Actions em `.github/workflows/master.yml`.

Fluxo:

1. instala dependencias em `coolsolutions/`;
2. executa `npm run build`;
3. publica o export estatico gerado em `coolsolutions/out/` via FTP para `public_html/`.

Arquivos gerados como `coolsolutions/out/`, `.next/`, `node_modules/` e builds `_next/` nao devem ser versionados.
