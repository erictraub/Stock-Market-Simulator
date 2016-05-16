app.factory('UserFactory', function($http) {
	var UserFactory = {};

	UserFactory.createNewUser = function(userInfo) {
		return $http.post('/api/users', userInfo)
		.then(function(users) {
			return users.data;
		});
	};

	UserFactory.getAllUsers = function() {
		return $http.get('/api/users')
		.then(function(response) {
			return response.data;
		})	
		.then(function(users) {
			users.forEach(function(user) {
				user.inAddArray = false;
			});
			return users;
		});
	};


	return UserFactory;
});