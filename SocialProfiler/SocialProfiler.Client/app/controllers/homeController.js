'use strict'
app.controller('homeController',
[
    '$scope', 'toastrService', function ($scope, toastrService) {

        $scope.PageTitle = "Social Profiler";
        $scope.emotionalRangeViewAll = false;
        $scope.opennessViewAll = false;
        $scope.conscientiousnessViewAll = false;
        $scope.introVersionExtroViewAll = false;
        $scope.aggreeabilitynessViewAll = false;

        $scope.teggleEmotionalRange = function () {
            $scope.emotionalRangeViewAll = !$scope.emotionalRangeViewAll;
        }
       
        $scope.emotionalRange = {
            value: 80,
            options: {
                floor: 0,
                ceil: 100,
                readOnly: true
            }
        };
        //EmotionalRanges
        $scope.melancholy = {
            value: 70,
            options: {
                floor: 0,
                ceil: 100,
                readOnly: true
            }
        };
        
        $scope.impulsiveness = {
            value: 70,
            options: {
                floor: 0,
                ceil: 100,
                readOnly: true
            }
        };

        $scope.selfConsciousness = {
            value: 70,
            options: {
                floor: 0,
                ceil: 100,
                readOnly: true
            }
        };

        $scope.stress = {
            value: 70,
            options: {
                floor: 0,
                ceil: 100,
                readOnly: true
            }
        };


        $scope.Fiery = {
            value: 70,
            options: {
                floor: 0,
                ceil: 100,
                readOnly: true
            }
        };
        $scope.worry = {
            value: 70,
            options: {
                floor: 0,
                ceil: 100,
                readOnly: true
            }
        };


    }
]);