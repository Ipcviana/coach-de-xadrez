# Coach de Xadrez — versão corrigida

## Por que a versão anterior travava em "Preparando Stockfish"?

O navegador não deve criar diretamente um Web Worker apontando para um script de outro domínio. A versão anterior fazia isso com o CDN do Stockfish. A nova versão cria um Worker local (`stockfish-worker.js`) e, dentro dele, carrega o Stockfish do CDN. O Worker também informa ao Emscripten onde encontrar o arquivo WASM.

A documentação do Stockfish.js recomenda usar Web Workers no navegador e disponibiliza a variante lite single-threaded justamente para uma integração simples e leve. citeturn1search0

## IMPORTANTE: como abrir

Não dê duplo clique em `index.html`.

Use um servidor web:

### Opção 1 — Vercel
Envie a pasta inteira para um projeto no Vercel. O `index.html` e `stockfish-worker.js` precisam ficar no mesmo nível.

### Opção 2 — GitHub Pages
Envie os dois arquivos para um repositório e habilite GitHub Pages.

### Opção 3 — computador
Com Python instalado:
`python -m http.server 8000`

Depois abra:
`http://localhost:8000`

## O que mudou
- Worker do Stockfish agora é local/same-origin.
- `Module.locateFile()` aponta o WASM para o CDN.
- mensagens de erro ficaram mais claras.
- o botão não fica preso silenciosamente em "Preparando".

## Próxima melhoria
Depois de confirmar que o motor inicia, podemos trocar o CDN por arquivos WASM hospedados no próprio projeto. Isso elimina a dependência externa e torna o robozinho mais estável para publicação.
