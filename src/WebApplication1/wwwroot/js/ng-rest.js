(function () {
    'use strict';
    var prApp = angular.module('patientRecordsApp', []);
})();

(function () {
    'use strict';
    var prService = 'patientFactory';
    angular.module('patientRecordsApp').factory(prService, ['$http', patientFactory]);

    function patientFactory($http) {
        function getPatientsFromApi() {
            return $http.get('http://localhost:53307/api/Patient');
        }

        var patientService = {
            getPatientsFromApi: getPatientsFromApi
        };
    
        return patientService;
    }
})();

(function () {
    'use strict';

    var pController = 'patientController';

    angular.module('patientRecordsApp').controller(pController, ['$scope', 'patientFactory', patientController]);

    function patientController($scope, patientFactory) {
        $scope.patients = [];

        patientFactory.getPatientsFromApi().success(function (patientData) {
            $scope.patients = patientData;
            console.log('Data obtained successfully.');
        }).error(function (err) {
            console.log('An error has occurred: ' + err);
        });
    }

})();


