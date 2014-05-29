# A very simple multiselect directive implemented in angular

## Dependencies
- just angular

To use, just include multiselect.js in your page like so

```html
<script src="multiselect.js"></script>
```

Tell your angular app to inject the multiselect module as a dependency, and create a controller that adds an array of options and selected options:

```javascript
angular.module('app', ['multiselect'])
.controller('ctrl', function($scope){
    $scope.options = [
	{Name: 'Julian Krispel-Samsel', Value: '#dw123452'},
	{Name: 'Ted Baker', Value: '#3421e2e'},
	{Name: 'Heather Mason', Value: '#dwql321'}
    ];
    $scope.selectedOptions = [];
};
```

And add the directive to the page, done!:

```html
<multi-select options="options" selection="selectedOptions"></multi-select>
```

