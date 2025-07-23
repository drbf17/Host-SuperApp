// Types para Module Federation - módulos remotos

// Auth Module
declare module 'Auth/AuthProvider' {
  const AuthProvider: React.ComponentType<any>;
  export default AuthProvider;
}

declare module 'Auth/LoginComponent' {
  const LoginComponent: React.ComponentType<any>;
  export default LoginComponent;
}

declare module 'Auth/App' {
  const App: React.ComponentType<any>;
  export default App;
}

// Home Module
declare module 'Home/App' {
  const App: React.ComponentType<any>;
  export default App;
}

// Contas Module
declare module 'Contas/ExtratoScreen' {
  const ExtratoScreen: React.ComponentType<any>;
  export default ExtratoScreen;
}

declare module 'Contas/Services' {
  const Services: React.ComponentType<any>;
  export default Services;
}

declare module 'Contas/SimpleComponent' {
  const SimpleComponent: React.ComponentType<any>;
  export default SimpleComponent;
}

declare module 'Contas/SaldoRoot' {
  const SaldoRoot: React.ComponentType<any>;
  export default SaldoRoot;
}

declare module 'Contas/SaldoTitle' {
  const SaldoTitle: React.ComponentType<any>;
  export default SaldoTitle;
}

declare module 'Contas/SaldoAmount' {
  const SaldoAmount: React.ComponentType<any>;
  export default SaldoAmount;
}

declare module 'Contas/SaldoToggle' {
  const SaldoToggle: React.ComponentType<any>;
  export default SaldoToggle;
}

declare module 'Contas/CartaoTipoScreen' {
  const CartaoTipoScreen: React.ComponentType<any>;
  export default CartaoTipoScreen;
}
