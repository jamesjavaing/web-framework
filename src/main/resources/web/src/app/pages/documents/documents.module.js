// 
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.documents', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('start', {
          url: '/start',
          templateUrl: 'app/pages/documents/start/start.html',
          title: 'start documents',
          controller:'startCtrl',
        })
  }

})();