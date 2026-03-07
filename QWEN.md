## Qwen Added Memories
- Use Conventional Commits format for all commit messages (e.g., feat:, fix:, chore:, docs:, style:, refactor:, test:).
- **SEMPRE responda em Português (Brasil)**: Todas as respostas devem ser em português, independentemente do idioma da entrada do usuário.
- **SEMPRE leia todo o contexto da aplicação e a pasta `.agent`**: Antes de realizar qualquer alteração, sempre:
  - Leia as regras em `.agent/rules/` (general.md, api.md, react.md, typescript.md)
  - Explore a estrutura de diretórios e arquivos relevantes
  - Verifique componentes, utilitários e APIs existentes
  - Garanta consistência com os padrões do projeto
- **Acesso ao Figma via MCP**: O Figma está configurado via MCP server remoto em `.config/mcp.json`. Para acessar:
  - Use o servidor MCP `figma-desktop` configurado no arquivo `.config/mcp.json`
  - O servidor está rodando em `http://127.0.0.1:3845/mcp` (Figma Desktop Connector)
  - Certifique-se de que o Figma Desktop Connector esteja em execução antes de usar os comandos do Figma
- **Estrutura de Componentes**: A pasta `components/ui` é reservada exclusivamente para componentes da biblioteca shadcn/ui. **NUNCA** crie componentes personalizados diretamente em `components/ui`. Para novos componentes:
  - Componentes reutilizáveis globais: crie em `components/` (ex: `components/header.tsx`, `components/sidebar.tsx`)
  - Componentes específicos de uma feature/página: crie em `app/[feature]/_components/` (ex: `app/auth/_components/login-form.tsx`)

---

## Modos e Ciclos do Qwen Code (Para o Desenvolvedor)

Quando você pressiona `Tab`, o Qwen Code oferece diferentes modos e comportamentos. Aqui está a explicação completa de cada um:

### 1. **Plan Mode** (Modo de Planejamento)

**O que é:** Modo onde o Qwen cria um plano detalhado antes de executar qualquer alteração no código.

**Como funciona:**
- O Qwen analisa sua solicitação
- Cria um plano passo-a-passo com todas as tarefas necessárias
- Aguarda sua aprovação antes de começar a implementação
- Usa o `exit_plan_mode` quando o plano é aprovado e inicia a codificação

**Quando usar:**
- Tarefas complexas com múltiplos passos
- Refatorações grandes
- Implementação de features novas
- Quando você quer visibilidade completa do que será feito
- Quando não tem certeza sobre a melhor abordagem

**Vantagem:** Você tem controle total e pode ajustar o plano antes de qualquer mudança.

---

### 2. **YOLO Mode** (You Only Live Once)

**O que é:** Modo onde o Qwen executa alterações diretamente sem pedir confirmação prévia.

**Como funciona:**
- O Qwen recebe sua solicitação
- Imediatamente começa a fazer as alterações no código
- Não há plano prévio nem confirmação para cada edição

**Quando usar:**
- Tarefas simples e diretas
- Correções rápidas de bugs
- Mudanças pequenas e bem definidas
- Quando você confia na interpretação do Qwen
- Iterações rápidas durante desenvolvimento

**Risco:** Pode fazer alterações não intencionais se a solicitação for ambígua.

---

### 3. **Auto-Accept Edits**

**O que é:** Configuração que faz o Qwen aceitar automaticamente suas próprias sugestões de edição.

**Como funciona:**
- Normalmente, após sugerir uma edição, o Qwen aguarda você aceitar ou rejeitar
- Com auto-accept habilitado, as edições são aplicadas automaticamente

**Quando usar:**
- Quando quiser fluxo de trabalho mais rápido
- Em conjunto com YOLO mode para máxima velocidade
- Para tarefas rotineiras e repetitivas

---

### 4. **Agent Modes** (Modos de Agente - ao pressionar Tab)

#### `general-purpose` (Agente de Propósito Geral)

**O que é:** Agente autônomo para tarefas complexas e multi-etapas.

**Quando usar:**
- Pesquisas complexas no código (buscar padrões, keywords, arquivos)
- Tarefas que exigem múltiplas operações de leitura/escrita
- Refatorações que envolvem vários arquivos
- Implementação de features completas
- Quando você não tem certeza de onde está o código que precisa modificar

**Exemplo:** "Encontre todos os componentes que usam a API X e atualize para Y"

**Quando NÃO usar:**
- Se você sabe o caminho exato do arquivo (use `read_file` diretamente)
- Para buscas simples de uma classe/função específica (use `glob` ou `grep_search`)

---

### 5. **Ciclos do Qwen (Agent Loops)**

**O que é:** O Qwen pode operar em ciclos iterativos para tarefas complexas.

**Como funciona:**
1. **Análise:** Qwen entende a tarefa e o contexto
2. **Planejamento:** Cria um plano (se em Plan Mode)
3. **Execução:** Realiza as ações necessárias (ler, escrever, buscar)
4. **Verificação:** Confirma se a tarefa foi completada
5. **Iteração:** Se necessário, repete o ciclo para ajustes

**Ciclo típico:**
```
Solicitação → Análise → [Plano → Aprovação] → Execução → Verificação → Conclusão
```

---

### Resumo: Quando Usar Cada Modo

| Tarefa | Modo Recomendado |
|--------|------------------|
| Feature complexa nova | Plan Mode + Agent |
| Bug fix simples | YOLO Mode |
| Refatoração grande | Plan Mode |
| Busca em múltiplos arquivos | Agent (general-purpose) |
| Edição rápida de um arquivo | YOLO + Auto-accept |
| Mudança que requer aprovação | Plan Mode (sem auto-accept) |

---

**Nota:** Esta seção é para referência do desenvolvedor. O Qwen Code deve consultar esta documentação para entender quando cada modo é apropriado.
