import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  open(url: string): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeWebview',
);