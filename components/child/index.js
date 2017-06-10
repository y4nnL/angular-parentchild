import component from './child.component';

// -------------------------------------------------------------------------------------------------
// Module

const moduleName = 'child';
const moduleDeps = [];

angular.module(moduleName, moduleDeps)
  .component(moduleName, component);

// -------------------------------------------------------------------------------------------------
// Export

export default moduleName;
