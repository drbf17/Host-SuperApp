# Host App - React Native Micro Frontend

Este é o aplicativo **Host** de uma arquitetura de micro frontends React Native, construído com [React Native](https://reactnative.dev) e [Module Federation](https://module-federation.io/) usando [@callstack/repack](https://re-pack.dev/).

> **🚨 IMPORTANTE**: Para testar o Host App completo, é **obrigatório** executar o micro app Contas simultaneamente. Sem o micro app rodando, algumas funcionalidades não estarão disponíveis.

## 🏗️ Arquitetura

### Micro Frontend Architecture
- **Host App**: Aplicativo principal que orquestra e carrega micro frontends
- **Micro Apps**: Aplicações independentes carregadas dinamicamente
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
MainNavigator (Stack)
├── HomeTabs (Bottom Tabs)
│   ├── HomeNavigator
│   ├── AccountNavigator
│   └── ServicesNavigator
└── ContaServices (Micro Frontend)
```

### Principais Telas
- **Home**: Tela inicial do aplicativo
- **Account**: Integração com componente `Saldo` do micro app Contas
- **Services**: Tela com card para navegar para serviços de conta
- **ContaServices**: Carrega o micro app `Contas/Services`

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
CONTA_MINI_APP_URL=http://localhost:8082
```

2. **Configuração do Micro App Contas**
   
   > **🔥 OBRIGATÓRIO**: O micro app Contas deve estar rodando para que o Host funcione corretamente!
   
   Para executar este projeto, você precisa também configurar e executar o micro app Contas:
   
   ```bash
   # Clone o micro app Contas
   git clone https://github.com/drbf17/Contas-MicroApp.git
   cd Contas-MicroApp
   
   # Instale as dependências
   npm install
   
   # Execute o micro app na porta 8082
   npm start
   ```
   
   **Confirme que o micro app está rodando** acessando: `http://localhost:8082`

### Executando o Projeto

> **⚠️ PRÉ-REQUISITO OBRIGATÓRIO**: 
> 1. **PRIMEIRO** execute o micro app Contas na porta 8082
> 2. **DEPOIS** execute o Host App
> 
> **Sem o micro app Contas rodando, o Host App terá funcionalidades limitadas!**

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
  Contas: `Contas@${process.env.CONTA_MINI_APP_URL}/${platform}/mf-manifest.json`,
}
```

### Dependências Compartilhadas
As seguintes dependências são compartilhadas entre Host e micro apps:
- React
- React Native
- React Navigation
- React Native Bottom Tabs

### Configuração de Porta para Android
Para desenvolvimento Android, configure o port forwarding:
```bash
adb reverse tcp:8082 tcp:8082
```

## 📂 Estrutura de Pastas

```
src/
├── app/
│   ├── App.tsx                 # Componente principal
│   └── navigation/
│       └── MainNavigator.tsx   # Navegação principal
├── home/
│   ├── navigation/             # Navegadores das tabs
│   ├── screens/               # Telas principais
│   └── components/            # Componentes reutilizáveis
└── conta/
    └── ContaScreen.tsx        # Tela de integração com micro app
```

## 🧪 Desenvolvimento com Micro Frontends

### Carregamento de Componentes
```tsx
// Carregamento lazy de componente do micro app
const Saldo = React.lazy(() => import('Contas/components/saldo'));

// Uso com Suspense e ErrorBoundary
<ErrorBoundary name="AccountScreen">
    <React.Suspense fallback={<Placeholder label="Carregando..." />}>
        <Saldo 
            value={2580.75}
            currency="BRL"
            isVisible={isVisible}
            onToggle={toggleVisibility}
            title="Saldo disponível"
        />
    </React.Suspense>
</ErrorBoundary>
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
   - **🔴 CAUSA MAIS COMUM**: Micro app Contas não está rodando!
   - **✅ SOLUÇÃO**: Verifique se o micro app está rodando na porta 8082: `curl http://localhost:8082`
   - Confirme se as variáveis de ambiente estão corretas
   - Verifique o port forwarding no Android: `adb reverse tcp:8082 tcp:8082`

2. **Erro de navegação**
   - Confirme se os tipos de navegação estão corretos
   - Verifique se a estrutura de navegadores aninhados está correta

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
