'use strict';

angular.module('App.Controllers')

.controller('homeController',
    function ($log,$scope, Loki ) {
        $log.debug('homeController loading');

    //var DB_FILE = 'demo.json';

      $scope.newContact = {};
      $scope.contacts;
      $scope.db;


     /* $scope.quit = function () {
        $scope.db.close();
        window.close();
      };*/

      // call on window close?  since fs adapter is synchronous this should work
     /* $scope.$on("$destroy", function() {
        $scope.db.close();
        window.onbeforeunload = undefined;
      });*/

      // scope on destroy does not seem to work well with node webkit so this is workaround from :
      // http://captainkuro.com/javascript/accessing-file-system-with-node-webkit/
      /*var gui = require('nw.gui');
      gui.Window.get().on('close', function() {
        $scope.db.close();

        this.close(true); // don't forget this line, else you can't close window
      });*/

      $scope.insert = function () {
        $scope.contacts.insert($scope.newContact);
        $scope.newContact = {};
      };

      $scope.delete = function (i) {
        $scope.contacts.remove(i);
      };

      $scope.contacts;

      $scope.db = new Loki('myDb');
      //  db.loadDatabase({}, load);


      $scope.contacts = $scope.db.getCollection('contacts');
            // if the database did not exist we will initialize empty database here
            if ($scope.contacts === null) {
              $scope.contacts = $scope.db.addCollection('contacts');
              $scope.contacts.insert({name: 'joe', age: 39, firstLanguage: 'italian'});
              $scope.contacts.insert({name: 'dave', age: 30, firstLanguage: 'english'});
              $scope.contacts.insert({name: 'tim', age: 30, firstLanguage: 'english'});
              $scope.contacts.insert({name: 'jonas', age: 30, firstLanguage: 'swedish'});
              $scope.contacts.insert({name: 'pedro', age: 30, firstLanguage: 'spanish'});
            }
        $scope.db.saveDatabase();

            console.log($scope);
           //$scope.$apply();

    });
