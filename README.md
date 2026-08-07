# Calculadora em React

Calculadora web criada para praticar estado, componentes reutilizáveis e estilização com React.

## Problema resolvido

Implementar uma interface simples capaz de executar as quatro operações matemáticas básicas sem recarregar a página.

## Funcionalidades

- Soma, subtração, multiplicação e divisão
- Entrada de números decimais
- Limpeza completa do cálculo
- Resultado atualizado no visor
- Interface construída com componentes reutilizáveis

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
│   ├── Button/       # Botão reutilizável
│   └── Input/        # Visor da calculadora
├── App.js            # Estado e regras das operações
├── styles.js         # Layout principal
└── global.js         # Estilos globais
```

O estado mantém o número atual, o primeiro operando e a operação selecionada. Os componentes de botão recebem rótulo e callback, mantendo a interface separada da regra principal.

## Executar

```bash
git clone https://github.com/JacksonJeanPS/CalculadoraReact-Desafio01.git
cd CalculadoraReact-Desafio01
npm install
npm start
```

Acesse `http://localhost:3000`.

## Testes

```bash
npm test -- --watchAll=false
```

Os testes cobrem renderização, soma e limpeza do visor.

## Decisões técnicas

- React Hooks para controlar operações e visor.
- Styled Components para encapsular os estilos.
- Componentes pequenos para facilitar manutenção.
- Testes por comportamento visível ao usuário.

## Limitações conhecidas

- A divisão por zero ainda precisa de mensagem específica.
- Operações encadeadas e correção individual de dígitos ainda não foram implementadas.
- O tratamento de múltiplos pontos decimais será incluído em uma próxima versão.

## Roadmap

- [ ] Impedir múltiplos separadores decimais
- [ ] Tratar divisão por zero
- [ ] Adicionar suporte completo ao teclado
- [ ] Permitir troca de sinal e porcentagem
- [ ] Melhorar acessibilidade e foco visível
- [ ] Publicar demonstração e adicionar print verdadeiro

## Licença

Projeto educacional desenvolvido durante desafio de React.
