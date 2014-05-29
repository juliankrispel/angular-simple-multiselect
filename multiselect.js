var config = {
    templateUrl: 'multiSelect.html'
};

var multiSelectTemplate = 
        '<div>' +
        '    <ul>' +
        '        <li ng-repeat="s in selection">' +
        '            {{o.Value}}' +
        '            <button ng-click="selection.splice($index,1)">x</button>' +
        '        </li>' +
        '    </ul>' +
        '    <input ng-focus="isFocused = true" ng-blur="inputBlur()" ng-model="searchFilter"/>' +
        '</div>' +
        '<div class="dropdown" ng-show="isFocused">' +
        '    <div ng-click="selection.push(o)" ng-repeat="o in options | filter: searchFilter | filter: alreadySelected">{{o.Name}}</div>' +
        '</div>';

var Controller = function($scope){
    $scope.focusInput = function(){
    };

    if(!$scope.selection){
        $scope.selection = [];
    }
    $scope.inputBlur = function(){
        setTimeout(function(){
            $scope.isFocused = false;
            $scope.$apply();
        },100);
    };

    $scope.alreadySelected = function(option){
        var result = true;
        angular.forEach($scope.selection, function(selectedOption){
            if(angular.equals(option, selectedOption)){
                result = false;
            }
        });
        return result;
    };
};


angular.module('multiselect', [])
.run(['$templateCache', function($templateCache){
    // Can be overridden by defining a template like this 
    // <script type="text/ng-template" id="multiSelect.html">...</script>
    $templateCache.put(config.templateUrl, multiSelectTemplate);
}])
.directive('multiSelect', [function(){
    return {
        restrict: 'E',
        controller: Controller,
        templateUrl: function(el, attr){
            var templateUrl = attr.templateUrl || config.templateUrl;
            return templateUrl;
        },
        scope: { options: '=', selection: '=' },
        link: function($scope, $elem, $attr){
            console.log($scope);
        }
    };
}]);
