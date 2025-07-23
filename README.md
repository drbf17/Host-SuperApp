# Host App - React Native SuperApp Architecture

Este é o aplicativo **Host** de uma arquitetura de SuperApp React Native, construído com [React Native](https://reactnative.dev) e [Module Federation](https://module-federation.io/) usando [@callstack/repack](https://re-pack.dev/).

> **🚨 IMPORTANTE**: Para testar o Host App completo, é **obrigatório** executar os micro apps **Auth**, **Home** e **Contas** simultaneamente. Sem os micro apps rodando, algumas funcionalidades não estarão disponíveis.

## 🏗️ Arquitetura SuperApp

### Micro Frontend Architecture
- **Host App**: Aplicativo principal que orquestra e carrega micro frontends
- **Micro Apps**: Aplicações independentes carregadas dinamicamente
  - `Auth`: Módulo de autenticação com login/logout, gerenciamento de sessão e controle de acesso
    - Repositório: [https://github.com/drbf17/Auth--MicroApp](https://github.com/drbf17/Auth--MicroApp)
  - `Home`: Módulo principal com interface bancária, navegação e integração de serviços
    - Repositório: [https://github.com/drbf17/Home-Micro-App](https://github.com/drbf17/Home-Micro-App)
  - `Contas`: Micro app para funcionalidades relacionadas a conta e saldo
    - Repositório: [https://github.com/drbf17/Contas-MicroApp](https://github.com/drbf17/Contas-MicroApp)

### Tecnologias Principais
- **React Native** 0.79.5
- **React** 19.0.0
- **@callstack/repack** 5.1.3 (Module Federation)
- **@react-navigation/native-stack** 7.3.21
- **react-native-bottom-tabs** 0.9.2 (Native bottom tabs)

## 📱 Estrutura do App

### Navegação
```
AuthProvider (from Auth Micro App)
├── AuthState.isAuthenticated ? 
│   ├── TRUE → MainNavigator (Stack)
│   │   └── Home (Lazy Loaded from Home Micro App)
│   │       └── HomeTabNavigator (Bottom Tabs)
│   │           ├── Home (Banking Dashboard)
│   │           ├── Account (Account Details)
│   │           └── Services (Services List + Remote Components)
│   │               └── RemoteHostScreen (Loads Contas components)
│   └── FALSE → LoginComponent (from Auth Micro App)
└── ContaServices (Direct Contas Integration)
```

### Principais Telas
- **App.tsx**: Orquestrador principal com AuthProvider e lazy loading
- **Auth Micro App**: Sistema de autenticação completo com:
  - **AuthProvider**: Wrapper com function-as-children pattern
  - **LoginComponent**: Interface de login com usuários de teste
  - **Session Management**: Zustand store com estado de autenticação
- **Home Micro App**: Interface bancária completa (após autenticação) com:
  - **Dashboard**: Saldo, transações recentes, ações rápidas
  - **Account**: Detalhes da conta do usuário
  - **Services**: Lista de serviços bancários + componentes remotos do Contas
- **ContaServices**: Integração direta com o micro app Contas

## 🚀 Getting Started

### Pré-requisitos
- Node.js >= 18
- React Native CLI
- Android Studio (para Android)
- Xcode (para iOS)
- CocoaPods (para iOS)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/drbf17/Host.git
cd Host
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Instale dependências iOS** (apenas para iOS)
```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

### Configuração de Ambiente

O projeto usa variáveis de ambiente para configurar URLs dos micro frontends:

1. **Arquivo de ambiente**: `env/.env.development`
```bash
AUTH_MINI_APP_URL=http://localhost:8084
HOME_MINI_APP_URL=http://localhost:9002
CONTA_MINI_APP_URL=http://localhost:9003
```

2. **Configuração dos Micro Apps**
   
   > **🔥 OBRIGATÓRIO**: Os micro apps Auth, Home e Contas devem estar rodando para que o Host funcione corretamente!
   
   Para executar este projeto, você precisa configurar e executar todos os micro apps:
   
   **Micro App Auth (Autenticação):**
   ```bash
   # Clone o micro app Auth
   git clone https://github.com/drbf17/Auth--MicroApp.git
   cd Auth--MicroApp
   
   # Instale as dependências
   npm install
   
   # Execute o micro app na porta 8084
   npm start
   ```
   
   **Micro App Home (Principal):**
   ```bash
   # Clone o micro app Home
   git clone https://github.com/drbf17/Home-Micro-App.git
   cd Home-Micro-App
   
   # Instale as dependências
   npm install
   
   # Execute o micro app na porta 9002
   npm start
   ```
   
   **Micro App Contas:**
   ```bash
   # Clone o micro app Contas
   git clone https://github.com/drbf17/Contas-MicroApp.git
   cd Contas-MicroApp
   
   # Instale as dependências
   npm install
   
   # Execute o micro app na porta 9003
   npm start
   ```
   
   **Confirme que os micro apps estão rodando**:
   - Auth: `http://localhost:8084`
   - Home: `http://localhost:9002`
   - Contas: `http://localhost:9003`

### Executando o Projeto

> **⚠️ PRÉ-REQUISITO OBRIGATÓRIO**: 
> 1. **PRIMEIRO** execute o micro app Auth na porta 8084
> 2. **SEGUNDO** execute o micro app Home na porta 9002
> 3. **TERCEIRO** execute o micro app Contas na porta 9003  
> 4. **DEPOIS** execute o Host App
> 
> **Sem os micro apps Auth, Home e Contas rodando, o Host App não funcionará!**

#### 1. Inicie o Metro Bundler
```bash
npm start
# ou
yarn start
```

#### 2. Execute o app

**Android:**
```bash
npm run android
# ou
yarn android
```

**iOS:**
```bash
npm run ios
# ou
yarn ios
```

## 🔧 Configuração de Micro Frontends

### Module Federation (rspack.config.mjs)
```javascript
remotes: {
  Home: `Home@${process.env.HOME_MINI_APP_URL}/${platform}/mf-manifest.json`,
  Contas: `Contas@${process.env.CONTA_MINI_APP_URL}/${platform}/mf-manifest.json`,
}
```

### Dependências Compartilhadas
As seguintes dependências são compartilhadas entre Host e micro apps:
- React 19.0.0
- React Native 0.79.5
- React Navigation 7.x
- React Native Bottom Tabs 0.9.0
- Module Federation Enhanced

### Configuração de Porta para Android
Para desenvolvimento Android, configure o port forwarding:
```bash
adb reverse tcp:9002 tcp:9002  # Home micro app
adb reverse tcp:9003 tcp:9003  # Contas micro app
```

## 📂 Estrutura de Pastas

```
src/
├── app/
│   ├── App.tsx                 # Orquestrador principal + Lazy loading do Home
│   └── navigation/
│       ├── MainNavigator.tsx   # Navegação principal
│       └── components/         # ErrorBoundary e Placeholder
├── external/
│   └── HostScreen.tsx         # Template para carregamento de micro apps
└── types/
    └── module-federation.d.ts # Types para Module Federation
```

## 🧪 Desenvolvimento com SuperApp

### Carregamento de Módulos Principais
```tsx
// App.tsx - Carregamento lazy do módulo Home principal
const HomeApp = React.lazy(() => import('Home/App'));

<ErrorBoundary name="Main App">
    <React.Suspense fallback={<Placeholder label="Carregando SuperApp..." />}>
        <HomeApp />
    </React.Suspense>
</ErrorBoundary>
```

### Carregamento de Componentes Remotos (no Home)
```tsx
// Home carrega componentes do Contas dinamicamente
const ExtratoScreen = React.lazy(() => import('Contas/ExtratoScreen'));
const ServicesNavigator = React.lazy(() => import('Contas/Services'));

// Uso com Suspense e ErrorBoundary no RemoteHostScreen
<React.Suspense fallback={<Text>Carregando Extrato...</Text>}>
    <ExtratoScreen />
</React.Suspense>
```

### Navegação Entre Apps
```tsx
// Navegação para micro frontend
const handleNavigateToContaServices = () => {
    const parentNavigation = navigation.getParent();
    if (parentNavigation) {
        parentNavigation.navigate('ContaServices');
    }
};
```

## 🛠️ Troubleshooting

### Problemas Comuns

1. **Module Federation não carrega / Erro "Element type is invalid"**
   - **🔴 CAUSA MAIS COMUM**: Micro apps Home ou Contas não estão rodando!
   - **✅ SOLUÇÃO**: 
     - Verifique se o Home está rodando na porta 9002: `curl http://localhost:9002`
     - Verifique se o Contas está rodando na porta 9003: `curl http://localhost:9003`
   - Confirme se as variáveis de ambiente estão corretas no arquivo `.env.development`
   - Verifique o port forwarding no Android: 
     ```bash
     adb reverse tcp:9002 tcp:9002
     adb reverse tcp:9003 tcp:9003
     ```

2. **Tela em branco ou erro de carregamento do Home**
   - **🔴 CAUSA**: O micro app Home não está rodando ou há erro na configuração
   - **✅ SOLUÇÃO**: Verifique os logs do micro app Home e confirme que está expondo corretamente os componentes

3. **Erro de navegação ou componentes remotos**
   - Confirme se os tipos de navegação estão corretos
   - Verifique se a estrutura de navegadores aninhados está correta no módulo Home
   - Confirme se o Contas está expondo os componentes corretos

3. **Dependências não compartilhadas**
   - Verifique se as versões das dependências estão alinhadas
   - Confirme a configuração de `shared` no rspack.config.mjs

## 📚 Recursos Adicionais

- [Re.Pack Documentation](https://re-pack.dev/)
- [Module Federation](https://module-federation.io/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Bottom Tabs](https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs)

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request
