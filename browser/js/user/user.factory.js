app.factory('UserFactory', function($http) {
	var UserFactory = {};

	UserFactory.createNewUser = function(userInfo) {
		return $http.post('/api/users', userInfo)
		.then(function(user) {
			return user.data;
		});
	};


	return UserFactory;
});