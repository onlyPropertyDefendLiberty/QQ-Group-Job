angular.module('myApp', ["ngRoute", "ngCookies"])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'tpl/user/login.html',
			controller: 'LoginCtrl'
		}).when('/reg', {
			templateUrl: 'tpl/user/reg.html',
			controller: 'RegCtrl'
		}).when('/index', {
			templateUrl: 'tpl/user/index.html',
			controller: 'IndexCtrl'
		}).when('/logout', {
			template: '',
			controller: 'LogoutCtrl'
		}).when('/change_pwd', {
			templateUrl: 'tpl/user/change_pwd.html',
			controller: 'ChangePwdCtrl'
		}).when('/groups_list', {
			templateUrl: 'tpl/user/groups_list.html',
			controller: 'GroupsListCtrl'
		}).when('/resumes_list', {
			templateUrl: 'tpl/user/resumes_list.html',
			controller: 'ResumesListCtrl'
		}).when('/apply/:groupId', {
			templateUrl: 'tpl/user/apply.html',
			controller: 'ApplyCtrl'
		}).when('/apply', {
			templateUrl: 'tpl/user/apply.html',
			controller: 'ApplyCtrl'

		
		}).when('/hr/list', {
			templateUrl: 'tpl/hr/list.html',
			controller: 'ListCtrl'
		}).when('/hr/list/:groupId', {
			templateUrl: 'tpl/hr/list.html',
			controller: 'ListCtrl'

		}).when('/group/index', {
			redirectTo: '/group/resume_list/'
		}).when('/group', {
			redirectTo: '/group/resume_list/'
		}).when('/group/join/', {
			templateUrl: 'tpl/group/join.html',
			controller: 'GroupJoinCtrl'
		}).when('/group/login/', {
			templateUrl: 'tpl/group/login.html',
			controller: 'GroupLoginCtrl'
		}).when('/group/resume_list/', {
			templateUrl: 'tpl/group/resume_list.html',
			controller: 'GroupResumeListCtrl'
		}).when('/group/change_pwd', {
			templateUrl: 'tpl/group/change_pwd.html',
			controller: 'GroupChangePwdCtrl'
		}).when('/group/admin_list/', {
			templateUrl: 'tpl/group/admin_list.html',
			controller: 'GroupAdminListCtrl'
		}).when('/group/auth_code/', {
			templateUrl: 'tpl/group/auth_code.html',
			controller: 'GroupAuthCodeCtrl'
		}).when('/group/logout', {
			template: '',
			controller: 'GroupLogoutCtrl'
		}).otherwise({redirectTo: '/index'});
	}]);