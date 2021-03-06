angular.module('myApp')
	.controller("ResumeCtrl",["$scope","$http","$routeParams","$cookies", "getUser", function($scope, $http, $routeParams, $cookies, getUser){
		if($cookies.get("logined") != "yes"){
			location.href = "#/login";
			return;
		}
		$scope.edit = "edit/";
		if($routeParams.edit == "edit"){
			$scope.canEdit = true;
			$scope.edit = ""
		}
		getUser(function(data){
			$scope.username = data.username;
		})
		$http.get("/api/resume/",{
			params:{
				groupId: $routeParams.groupId 
			}
		}).success(function(response){
			if(response.status == "success"){
				if(response.count == 0){
					$scope.isExist = false;
					location.href = "#/resume/edit/"+$routeParams.groupId;
				}else{
					$scope.isExist = true;
				}
				$scope.data = response.data;
				$scope.data.sexOptions = $T.sexOptions; 
				$scope.data.eduOptions = $T.eduOptions;
			}else{
				$T.toast(response.msg);
			}
		}).error(function(){
			$T.toast("服务器错误,请联系系统管理员")
		})
		$scope.delete = function(){
			$http.delete("/api/resume/",{
				params:{
					groupId: $scope.data.groupId
				}
			}).success(function(response){
				if(response.status == "success"){
					$T.toast("更新成功")
					location.href = "#/resumes_list"
				}else{
					$T.toast(response.msg)
				}
			}).error(function(){
				$T.toast("服务器错误,请联系系统管理员")
			})
		}
		$scope.post = function() {
			$http.post('/api/resume/',{
				'email':$scope.data.email,
				'groupId':$scope.data.groupId,
				'username':$scope.data.username,
				'qq':$scope.data.qq,
				'sex':$scope.data.sex,
				'age':$scope.data.age,
				'yearsOfWorking':$scope.data.yearsOfWorking,
				'school':$scope.data.school,
				'education':$scope.data.education,
				'content':$scope.data.content,
				'display':$scope.data.display
			}).success(function(response){
				if(response.status == "success"){
					$T.toast("更新成功")
					location.reload();
				}else{
					$T.toast(response.msg)
				}
			}).error(function() {
				$T.toast("服务器错误,请联系系统管理员")
			});
		}
		$scope.submit = function(){
			$http.put("/api/resume/",{
				id: $scope.id,
				email: $scope.email,
				username:$scope.username,
				qq:$scope.qq,
				sex:$scope.sex,
				age:$scope.age,
				yearsOfWorking:$scope.yearsOfWorking,
				school:$scope.school,
				education:$scope.education,
				display: $scope.display,
				content: $scope.content
			}).success(function(response){
				if(response.status == "success"){
					$T.toast("更新成功")
					location.reload()
				}else{
					$T.toast(response.msg)
				}
			}).error(function(){
				$T.toast("服务器错误,请联系系统管理员")
			})
		}
		
	}])
	