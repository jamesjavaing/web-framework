/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.profile',
    'BlurAdmin.pages.documents',
    'BlurAdmin.pages.demos'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    baSidebarServiceProvider.addStaticItem({
      title: 'documents',
      icon: 'ion-ios-more',
      subMenu: [{
          title: 'start',
          icon: 'ion-ios-more',
          stateRef:'start'
        }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: 'demo1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'demo1',
        icon: 'ion-ios-more',
        stateRef:'demo1'
      }]
    });
  }

})();
