/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('WebFramework.pages.ui', [
    'WebFramework.pages.ui.typography',
    'WebFramework.pages.ui.buttons',
    'WebFramework.pages.ui.icons',
    'WebFramework.pages.ui.modals',
    'WebFramework.pages.ui.grid',
    'WebFramework.pages.ui.alerts',
    'WebFramework.pages.ui.progressBars',
    'WebFramework.pages.ui.notifications',
    'WebFramework.pages.ui.tabs',
    'WebFramework.pages.ui.slider',
    'WebFramework.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
