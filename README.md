# Calculadora em React

Calculadora web criada para praticar estado, componentes reutilizáveis e estilização com React.

## O que foi melhorado

- Operações encadeadas sem precisar apertar `=` a cada etapa
- Bloqueio de múltiplos pontos decimais no mesmo número
- Tratamento explícito de divisão por zero no visor
- Suporte ao teclado físico com `Enter`, `Backspace` e `Esc`
- Botões de `+/-` e `%`
- Foco visível, `aria-label` e navegação por teclado
- Nova identidade visual retrô, com `ThemeProvider`

## Tecnologias

- React 18
- JavaScript
- Styled Components
- Create React App
- React Testing Library e Jest

## Arquitetura

```text
src/
├── components/
│   ├── Button/
│   └── Input/
├── App.js
├── styles.js
├── theme.js
├── global.js
└── App.test.js
```

## Rodar localmente

```bash
npm install
npm start
```

## Testes

```bash
npm test -- --watchAll=false
```

## Demo ao vivo

[https://JacksonJeanPS.github.io/CalculadoraReact-Desafio01](https://JacksonJeanPS.github.io/CalculadoraReact-Desafio01)

## Roadmap

- [x] Impedir múltiplos separadores decimais
- [x] Tratar divisão por zero
- [x] Adicionar suporte completo ao teclado
- [x] Permitir troca de sinal e porcentagem
- [x] Melhorar acessibilidade e foco visível
- [x] Publicar demonstração