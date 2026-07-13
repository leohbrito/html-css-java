## CoolSolutions — Site Institucional

Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS. ESLint + Prettier + Jest.

### Rodando localmente

```bash
npm install
npm run dev
```

### Build e start

```bash
npm run build
npm start
```

### Lint e testes

```bash
npm run lint
npm run test
```

### Deploy

O deploy é automático via GitHub Actions (`.github/workflows/master.yml`) a cada push na `master`:

1. `npm ci` e `npm run build` em `coolsolutions/` (gera o export estático em `out/`);
2. verifica `index.html`, `404.html` e `sitemap.xml`;
3. publica `out/` via SFTP em `public_html/` (e `public_html/workflows/`).

O `next.config.mjs` usa `output: 'export'`, então `npm run build` já produz o site estático em `out/`.

### SEO e A11y

- Metadata por página, Open Graph/Twitter, sitemap, robots, manifest
- A11y: foco visível, semântica, labels e aria

### Conteúdo

Conteúdo em PT-BR conforme briefing em `/src/app` e componentes em `/src/components`.
