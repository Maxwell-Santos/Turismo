

## Styled-Components
### Arquivo de definição de tipo - Typescript
- Arquivo criado com a extensão <code>d.ts</code>, para poder inserir meus temas dentro do autocomplete do Typescript

- No arquivo 'tsconfig.json': 
```json
"files":[
  "src/styles/styled.d.ts"
]
```
"files" - Serve para dizer para o typescript, arquivo que eu quero que compile junto com a minha aplicação. Nesse caso, como sobreescrevi uma definição de tipos, quero que ela carregue junto com a aplicação. Para funcioar, basta desligar os servidor do vite e ligar denovo.


## Modelo de Composição