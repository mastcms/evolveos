(function() {
  'use strict';

  angular
    .module('calli')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
