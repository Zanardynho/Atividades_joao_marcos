# Minha Calculadora

**Disciplina:** Programação para Dispositivos Móveis II  
**Professor:** João Lucas  
**Turma:** 5º semestre  
**Aluno:** Paulo Zanardi

## 1. Objetivo

Desenvolver uma calculadora simples com quatro operações matemáticas, entrada de dois números, apresentação do resultado na interface e validação dos dados informados.

O projeto principal da atividade utiliza **React Native com Expo**. Também foi incluída uma versão em HTML, CSS e JavaScript para facilitar a execução diretamente no navegador e a captura de tela.

## 2. Arquivos

- `app/index.tsx`: implementação da calculadora em React Native com Expo.
- `README.md`: explicação da atividade e instruções.

### TODO 1 — Campos vazios

Antes de converter os campos em números, o código verifica se algum deles está vazio usando `trim()`. Se estiver, atualiza a mensagem na tela e utiliza `return` para interromper a função.

### TODO 2 — Números válidos

Os valores digitados são convertidos com `Number()`. A função `Number.isFinite()` verifica se o resultado é um número válido e finito. Se não for, o aplicativo apresenta uma mensagem de orientação e interrompe o cálculo.

### TODO 3 — Operações matemáticas

- Soma (`+`): `n1 + n2`
- Subtração (`-`): `n1 - n2`
- Multiplicação (`*`): `n1 * n2`
- Divisão (`/`): `n1 / n2`

### TODO 4 — Divisão por zero

Antes de dividir, o código verifica se `n2 === 0`. Caso seja verdadeiro, mostra a mensagem **“Não é possível realizar divisão por zero.”** e interrompe a função com `return`.

### TODO 5 — Atualização do resultado

No React Native, `setResultado(String(valor))` atualiza o estado do resultado. Como o texto da tela utiliza esse estado, o React Native atualiza a interface automaticamente.

Na versão web, o texto da área de resultado é atualizado diretamente no elemento da página.

## 6. Explicação dos principais elementos

| Elemento | Função |
|---|---|
| `useState` | Armazena os dois números digitados e o resultado. Quando o estado muda, a interface é atualizada. |
| `TextInput` | Permite que o usuário digite os números. |
| `Pressable` | Cria os botões que respondem ao toque. |
| `onPress` | Executa a função quando o botão é pressionado. |
| `calcular()` | Recebe a operação escolhida, valida os dados, realiza o cálculo e atualiza o resultado. |
| `StyleSheet` | Organiza cores, tamanhos, espaçamentos, bordas e alinhamentos da interface. |

## 7. Funcionamento dos botões

Todos os quatro botões utilizam a mesma função `calcular()`, mas enviam símbolos diferentes:

- `calcular('+')`: solicita uma soma.
- `calcular('-')`: solicita uma subtração.
- `calcular('*')`: solicita uma multiplicação.
- `calcular('/')`: solicita uma divisão.

Assim, a função identifica qual operação deve executar por meio do parâmetro recebido.

## 8. Testes realizados / esperados

| Primeiro número | Segundo número | Operação | Resultado esperado |
|---:|---:|---|---|
| 8 | 2 | Somar | 10 |
| 8 | 2 | Subtrair | 6 |
| 8 | 2 | Multiplicar | 16 |
| 8 | 2 | Dividir | 4 |
| 8 | 0 | Dividir | Mensagem de divisão por zero |
| Vazio | 2 | Qualquer | Mensagem solicitando os dois números |

Também deve ser testado o preenchimento com conteúdo inválido, para conferir a mensagem de números válidos.

## 9. Captura de tela e entrega

**Aluno:** Paulo Henrique  
**Turma:** 5º semestre
