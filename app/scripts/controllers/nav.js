'use strict';

/**
 * @ngdoc function
 * @name iamWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iamWebApp
 */
angular
  .module('iamWebApp')
  .controller('NavCtrl', NavCtrl);

  MainCtrl.$inject = [];

  function NavCtrl(){
  	 angular.element('.dropdown-toggle').dropdown();
    console.log('NavCtrl')
  };