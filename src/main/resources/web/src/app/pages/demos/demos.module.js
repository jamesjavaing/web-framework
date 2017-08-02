
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.demos', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('demo1', {
          url: '/demo1',
          title: 'demo1',
          templateUrl: 'app/pages/demos/demo1/demo1.html',
          controller: 'demo1Ctrl',
        });
  }

})();
