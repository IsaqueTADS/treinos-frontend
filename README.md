# Fit.AI - Treinos Frontend

<div align="center">

**Aplicativo mobile-first para gerenciamento de treinos com Inteligência Artificial**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

[Demo Online](#demo-online) • [Tecnologias](#tecnologias-utilizadas) • [Instalação](#instalação) • [Como Rodar](#como-rodar-o-projeto)

</div>

---

## 📱 Sobre o Projeto

O **Fit.AI** é uma aplicação web focada em **mobile** para gerenciamento de treinos pessoais impulsionada por Inteligência Artificial. O objetivo é proporcionar uma experiência personalizada para usuários que desejam organizar, acompanhar e otimizar seus treinos com o auxílio de um coach virtual baseado em AI.

> **📚 Origem do Projeto:** A Versão 1.0 deste projeto foi desenvolvida seguindo o bootcamp do **Felipe** da **Full Stack Club**, porem modificado. Deixo aqui meus sinceros agradecimentos pelo excelente projeto e pela oportunidade de aprendizado. Pretendo continuar evoluindo essa aplicação, implementando novas funcionalidades e melhorias.
>
> 🔗 **Full Stack Club:** [https://www.youtube.com/@dicasparadevs](https://www.youtube.com/@dicasparadevs)

### ✨ Funcionalidades Principais

- 🤖 **Chat com AI Personal Trainer** - Crie planos de treino personalizados conversando com nossa AI
- 📊 **Consistency Tracker** - Acompanhe sua evolução com heatmaps semanais e mensais
- 🔥 **Streak Counter** - Mantenha sua sequência de treinos e bata recordes pessoais
- 📅 **Planos de Treino Semanais** - Organize seus treinos por dia da semana
- ⏱️ **Sessões de Treino** - Inicie, acompanhe e complete sessões de treino
- 📈 **Estatísticas Detalhadas** - Visualize métricas de desempenho e evolução
- 👤 **Perfil do Usuário** - Gerencie peso, altura, gordura corporal e idade
- 🔐 **Autenticação Completa** - Login com email/senha ou Google

---

## 🌐 Demo Online

A aplicação está disponível em:

**🔗 https://apptreinos.isaque.dev.br/**

> ⚠️ **Importante sobre a Demo:**
>
> - A aplicação está hospedada no **App Render** utilizando o **plano gratuito**
> - Ao acessar, pode ser necessário aguardar alguns segundos para o backend e frontend inicializarem
> - Recomenda-se recarregar a página caso encontre erros iniciais
> - Durante testes locais, erros podem aparecer enquanto o backend estiver indisponível - atualize a página e verifique manualmente
>
> 🤖 **Chat com AI:** Caso o chat de AI apresente erros, pode ser necessário atualizar a chave da API Gemini Flash no backend, pois o limite gratuito expira rapidamente. Se a AI não estiver funcionando na demo, este é o motivo.

---

## 📱 Mobile-First & React Native

> **⚠️ Atenção:** Esta aplicação foi desenvolvida exclusivamente para **dispositivos móveis**.
>
> - A interface foi otimizada para telas de smartphones
> - A experiência web é limitada e não reflete o design final
> - O objetivo é utilizar esta base como foundation para um aplicativo **React Native**
> - A estrutura de componentes e lógica de negócio está preparada para migração para mobile nativo

---

## 🛠️ Tecnologias Utilizadas

### Framework & Core

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Next.js](https://nextjs.org) | 16.1.6 | Framework React com App Router e Server Components |
| [React](https://react.dev) | 19.2.3 | Biblioteca de interface do usuário |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Superset tipado para JavaScript |

### Estilização & UI

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Framework CSS utilitário |
| [shadcn/ui](https://ui.shadcn.com) | 3.8.5 | Biblioteca de componentes reutilizáveis |
| [Radix UI](https://www.radix-ui.com) | 1.4.3 | Componentes de UI headless e acessíveis |
| [Lucide React](https://lucide.dev) | 0.577.0 | Biblioteca de ícones modernos |
| [tw-animate-css](https://github.com) | 1.4.0 | Animações para Tailwind |

### Autenticação & Validação

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [better-auth](https://better-auth.com) | 1.4.18 | Autenticação completa e segura |
| [Zod](https://zod.dev) | 4.3.6 | Validação de schemas com TypeScript |
| [React Hook Form](https://react-hook-form.com) | 7.71.2 | Gerenciamento performático de formulários |
| [@hookform/resolvers](https://github.com) | 5.2.2 | Integração React Hook Form com Zod |

### Inteligência Artificial

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [AI SDK](https://sdk.vercel.ai) | 6.0.49 | SDK para integração com modelos de AI |
| [@ai-sdk/react](https://sdk.vercel.ai) | 3.0.51 | Hooks React para AI SDK |
| [streamdown](https://github.com) | 2.4.0 | Renderização de Markdown em streaming |

### API & Data Fetching

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Orval](https://orval.dev) | 8.5.2 | Geração de cliente API tipado a partir de OpenAPI/Swagger |
| [nuqs](https://nuqs.47ng.com) | 2.8.9 | Gerenciamento de query strings tipado |

### Utilitários

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [dayjs](https://day.js.org) | 1.11.19 | Manipulação de datas leve e rápida |
| [clsx](https://github.com) | 2.1.1 | Utilitário para classes condicionais |
| [tailwind-merge](https://github.com) | 3.5.0 | Merge inteligente de classes Tailwind |
| [dotenv](https://github.com) | 17.3.1 | Gerenciamento de variáveis de ambiente |

### Ferramentas de Build & Qualidade

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [ESLint](https://eslint.org) | 9.x | Linter para código JavaScript/TypeScript |
| [Prettier](https://prettier.io) | 3.8.1 | Formatador de código opinativo |
| [PostCSS](https://postcss.org) | 8.x | Processador de CSS |

---

## 📁 Estrutura do Projeto

```
treinos-frontend/
├── app/                          # App Router do Next.js
│   ├── _components/              # Componentes compartilhados
│   │   ├── bottom-nav.tsx        # Navegação inferior fixa
│   │   ├── chat.tsx              # Chat com AI
│   │   ├── consistency-tracker.tsx
│   │   └── workout-day-card.tsx
│   ├── _lib/                     # Utilitários e API
│   │   ├── api/
│   │   │   └── fetch-generated/  # Cliente API gerado pelo Orval
│   │   ├── auth-client.ts        # Cliente better-auth
│   │   └── fetch.ts              # Custom fetch wrapper
│   ├── auth/                     # Autenticação
│   │   ├── login/
│   │   └── signup/
│   ├── onboarding/               # Fluxo de onboarding
│   ├── profile/                  # Perfil do usuário
│   ├── stats/                    # Estatísticas e progresso
│   ├── workout-plans/            # Planos de treino
│   │   └── [id]/
│   │       └── days/[dayId]/
│   ├── globals.css               # Estilos globais e temas
│   ├── layout.tsx                # Layout root
│   └── page.tsx                  # Home page (Dashboard)
│
├── components/
│   └── ui/                       # Componentes shadcn/ui
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
│
├── hooks/                        # Hooks customizados
│   └── use-form.ts               # Hook para formulários com validação
│
├── lib/                          # Utilitários globais
│   └── utils.ts                  # Função cn() para classes
│
├── public/                       # Assets estáticos
│   └── login-bg.png
│
├── .env.example                  # Variáveis de ambiente
├── package.json                  # Dependências e scripts
├── tailwind.config.ts            # Configuração Tailwind
├── tsconfig.json                 # Configuração TypeScript
└── orval.config.ts               # Configuração Orval (API)
```

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [**Node.js**](https://nodejs.org) versão 24.x ou superior
- [**pnpm**](https://pnpm.io) (gerenciador de pacotes recomendado)
  ```bash
  npm install -g pnpm
  ```
- **Backend da API** rodando (veja [Integração com a API](#integração-com-a-api))
- Navegador moderno (Chrome, Firefox, Edge ou Safari)
- **Dispositivo móvel** ou **DevTools do navegador** em modo mobile para melhor experiência

---

## 🚀 Instalação

Siga os passos abaixo para configurar o projeto localmente:

### 1. Clone o repositório

```bash
git clone <repositorio>
cd treinos-frontend
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` com as configurações adequadas (veja [Configuração](#configuração)).

### 4. Gere o cliente API (opcional)

Se a API backend estiver disponível, gere o cliente tipado:

```bash
pnpm exec orval
```

---

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto baseado em `.env.example`:

```env
# URL base da API backend
NEXT_PUBLIC_API_URL=http://localhost:3333
```

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `NEXT_PUBLIC_API_URL` | URL do backend da API | `http://localhost:3333` |

### Configuração da API

A aplicação se comunica com um backend externo. Certifique-se de que:

1. O backend esteja rodando na URL especificada em `NEXT_PUBLIC_API_URL`
2. O endpoint `/swagger.json` esteja acessível para geração do cliente Orval
3. As rotas de autenticação estejam configuradas corretamente

---

## ▶️ Como Rodar o Projeto

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
pnpm dev
```

A aplicação estará disponível em:

**🔗 http://localhost:3000**

> 💡 **Dica:** Use o **DevTools do navegador** (F12) e ative o **modo de dispositivo móvel** (Ctrl+Shift+M) para uma experiência mais fiel ao design mobile-first.

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Gera build de produção |
| `pnpm start` | Inicia servidor de produção |
| `pnpm lint` | Executa o linter ESLint |
| `pnpm exec orval` | Gera cliente API a partir do Swagger |
| `pnpm exec shadcn add <component>` | Adiciona componente shadcn/ui |

---

## 📦 Build para Produção

### Gerar Build

```bash
pnpm build
```

Este comando:
- Compila a aplicação para JavaScript otimizado
- Minifica CSS e JavaScript
- Gera páginas estáticas quando possível
- Cria uma pasta `.next` otimizada

### Rodar em Produção

Após o build, inicie o servidor de produção:

```bash
pnpm start
```

A aplicação estará disponível em **http://localhost:3000** com otimizações de produção.

---

## 🌐 Integração com a API

### Comunicação

O frontend se comunica com a API backend através de:

- **Fetch API nativa** do browser
- **Cliente gerado automaticamente** pelo Orval a partir do Swagger/OpenAPI
- **Tipagem forte** em todos os endpoints

### Endpoints Principais

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/home/{date}` | GET | Dashboard (treino do dia, consistência) |
| `/me/` | GET | Dados do usuário |
| `/me/` | PUT | Atualizar dados do usuário |
| `/ai/` | POST | Chat com AI personal trainer |
| `/workout-plans/` | POST | Criar plano de treino |
| `/workout-plans/` | GET | Listar planos de treino |
| `/workout-plans/{id}` | GET | Obter plano específico |
| `/workout-plans/{planId}/days/{dayId}` | GET | Obter dia de treino |
| `/workout-plans/{planId}/days/{dayId}/sessions` | POST | Iniciar sessão de treino |
| `/stats` | GET | Estatísticas do usuário |

### Autenticação

- **Biblioteca:** `better-auth`
- **Método:** Session-based com cookies HTTP-only
- **Fluxo:** Login → Cookie de sessão → Requisições autenticadas

### Custom Fetch

O arquivo `app/_lib/fetch.ts` fornece um wrapper que:
- Adiciona automaticamente a URL base da API
- Injeta cookies em requisições SSR
- Retorna objetos com `status`, `data` e `headers`

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças seguindo Conventional Commits
   ```bash
   git commit -m 'feat: adiciona nova funcionalidade'
   ```
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Padrões de Código

- Use **TypeScript** em todos os arquivos
- Siga as regras do **ESLint** e **Prettier**
- Componentes UI: use **shadcn/ui** como base
- Estilização: **Tailwind CSS** com classes utilitárias
- Mensagens de commit: **Conventional Commits**

---

## 📄 Licença

Este projeto está sob licença MIT. Sinta-se livre para usar, modificar e distribuir.

---

## 📞 Suporte

Para dúvidas ou problemas:

- Abra uma **issue** no repositório
- Verifique a documentação da [API backend](#integração-com-a-api)
- Consulte os recursos do [Next.js](https://nextjs.org/docs)

---

<div align="center">

**Feito com ❤️ e Next.js**

[⬆ Topo](#fitai---treinos-frontend)

</div>
