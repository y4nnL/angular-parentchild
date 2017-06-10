import child from '../child';
import component from './parent.component';

// -------------------------------------------------------------------------------------------------
// Module

const moduleName = 'parent';
const moduleDeps = [
  child,
];

angular.module(moduleName, moduleDeps)
  .component(moduleName, component);

// -------------------------------------------------------------------------------------------------
// Export

export default moduleName;
