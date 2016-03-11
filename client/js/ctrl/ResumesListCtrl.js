angular.module('myApp')
	.controller("ResumesListCtrl",["$scope","$http","$cookies",function($scope, $http, $cookies){
		if($cookies.get("logined") != "yes"){
			location.href = "#/login";
			return;
		}
		$http.get("/api/resumes_list/").success(function(response){
			if(response.status == "success"){
				$scope.items = [];
				for(var i=0; i < response.data.length; i++){
					var ob = {
						'id':response.data[i].id,
						'email':response.data[i].email,
						'username':response.data[i].username,
						'qq':response.data[i].qq,
						'sex':response.data[i].sex,
						'age':response.data[i].age,
						'yearsOfWorking':response.data[i].yearsOfWorking,
						'school':response.data[i].school,
						'education':response.data[i].education,
						'groupId':response.data[i].groupId,
						'lastDate':response.data[i].lastDate,
						'status':response.data[i].status
					};
					$scope.items.push(ob);
				}
			}else{
				$T.toast(response.msg);
			}
		}).error(function(){
			$T.toast("服务器错误,请联系系统管理员")
		})
		$scope.openResume = function(groupId){
			location.href = "#/resume/"+groupId;
		}
		$scope.delete = function(groupId){
			$http.delete("/api/resume/",{
				params:{
					groupId: groupId
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
	}])
	