 angular.module('nblApp', ['ngRoute','ngDraggable']).
      controller('mainCtrl', function ($scope) {
        $scope.centerAnchor = true;
        $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor; };
        $scope.draggableObjects = [{name:'one'}, {name:'two'}, {name:'three'},{name:'one'}, {name:'two'}, {name:'three'},{name:'one'}, {name:'two'}, {name:'three'},{name:'one'}, {name:'two'}, {name:'three'},{name:'one'}, {name:'two'}, {name:'three'},{name:'one'}, {name:'two'}, {name:'three'},{name:'one'}, {name:'two'}, {name:'three'},{name:'one'}, {name:'two'}, {name:'three'},{name:'one'}, {name:'two'}];
        $scope.droppedObjects1 = [];
        $scope.droppedObjects2= [];
        $scope.onDropComplete1=function(index,data,evt){
            //var index = $scope.droppedObjects1.indexOf(data);
            //if (index == -1)
            console.log(index);
            $scope.droppedObjects1.push(data);
        };
        $scope.onDragSuccess1=function(data,evt){
            console.log("133","$scope","onDragSuccess1", "", evt);
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
        };
        $scope.onDragSuccess2=function (index, obj, evt) {
                    var otherObj = $scope.draggableObjects[index];
                    var otherIndex = $scope.draggableObjects.indexOf(obj);
                    $scope.draggableObjects[index] = obj;
                    $scope.draggableObjects[otherIndex] = otherObj;
                };
        $scope.onDropComplete2=function(data,evt){
            
                $scope.droppedObjects2.push(data);
           
        };
        var inArray = function(array, obj) {
            var index = array.indexOf(obj);
        };
      });