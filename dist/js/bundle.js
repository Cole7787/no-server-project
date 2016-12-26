'use strict';

angular.module('noServer', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/home');
  $stateProvider.state('home', {
    url: '/home',
    controller: 'homeCtrl',
    templateUrl: './views/html/home.html'
  }).state('shop', {
    url: '/shop',
    controller: 'shopCtrl',
    templateUrl: './views/html/shop.html'
  }).state('about', {
    url: '/about',
    controller: 'aboutCtrl',
    templateUrl: './views/html/about.html'
  }).state('contact', {
    url: '/contact',
    controller: 'contactCtrl',
    templateUrl: './views/html/contact.html'
  });
});
'use strict';

angular.module('noServer').controller('aboutCtrl', function ($scope) {});
'use strict';

angular.module('noServer').controller('contactCtrl', function ($scope) {});
'use strict';

angular.module('noServer').controller('homeCtrl', function ($scope) {});
'use strict';

$('document').ready(function () {
  'use strict';

  (function () {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerContain = document.getElementsByClassName('b-container')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];

    burgerMenu.addEventListener('click', function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
        el.classList.toggle('open');
      });
    }, false);
  })();
});
'use strict';

angular.module('noServer').service('mainService', function () {});
'use strict';

angular.module('noServer').controller('shopCtrl', function ($scope) {});
//# sourceMappingURL=bundle.js.map
