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
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [];

  function MainCtrl(){
  	angular.element('.dropdown-toggle').dropdown();
    
  	 console.log('MainCtrl')
  };