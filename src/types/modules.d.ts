// Type declarations for micro frontend modules
declare module 'Contas/components/saldo' {
  const Saldo: React.ComponentType<any>;
  export default Saldo;
}

// Declarações específicas para todos os componentes expostos
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

declare module 'Contas/ExtratoScreen' {
  const ExtratoScreen: React.ComponentType<any>;
  export default ExtratoScreen;
}

declare module 'Contas/CartaoTipoScreen' {
  const CartaoTipoScreen: React.ComponentType<any>;
  export default CartaoTipoScreen;
}

// Fallback para qualquer outro componente
declare module 'Contas/*' {
  const component: React.ComponentType<any>;
  export default component;
}
