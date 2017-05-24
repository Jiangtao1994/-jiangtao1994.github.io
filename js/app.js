(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!

//	创建模块
		var app=angular.module('app',[])


//	创建控制器
		app.controller('todosController',['$scope', function ($scope) {
			// 功能1.任务的展示
			//假设已经获取到数据
			$scope.todos=[
				{id:1,name:'吃饭',completed:true},
				{id:2,name:'睡觉',completed:true},
				{id:3,name:'打豆豆',completed:false},
				{id:4,name:'学习',completed:true},
				{id:5,name:'喝水',completed:false},
			]
			// 功能2.添加任务
			//第一个input弹起添加数据
			//M 初始化数据模型
			$scope.newTodo=''
			//利用包裹input标签的form回车提交
			$scope.add=function(){
				//input是空提交个屁
				if(!$scope.newTodo){
					return
				}
				//提交数据
				$scope.todos.push({
					id:Math.random,
					name:$scope.newTodo,
					completed:false
				})
				//提交后重置
				$scope.newTodo=''
			}
			// 功能3.删除任务
			$scope.remove= function (id) {
				//根据id来删除
				for(var i=0;i<=$scope.todos.length-1;i++){
					if($scope.todos[i].id===id){
						console.log(id)
						$scope.todos.splice(i,1)
					}
				}
			}
			// 功能4：修改任务内容

			$scope.isEditingId=-1
			$scope.edit= function (id) {
				$scope.isEditingId = id
			}
			$scope.save= function () {
				$scope.isEditingId=-1
			}

			// 功能5.修改任务状态

			 //功能6.批量切换任务状态
			$scope.selectAll=false;
			$scope.toggleAll=function(){
				for(var i=0;i<$scope.todos.length;i++){
					$scope.todos[i].completed=$scope.selectAll
				}
			}

			// 功能7.显示未完成任务数
			$scope.getActive= function () {
				var count = 0
				for(var i=0;i<$scope.todos.length;i++){
					if(!$scope.todos[i].completed){
						count++
					}
				}
				return count
			}


			// 功能8.清除所有已完成任务
			$scope.clearAll= function () {
				for(var i=$scope.todos.length-1;i>=0;i--){
					if($scope.todos[i].completed){
						$scope.todos.splice(i,1)
					}
				}
			}

		}])

})(angular);
