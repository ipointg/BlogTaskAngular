(function(){
    var app = angular.module('blogApp',[]);

    app.controller('BlogController', ['$http', function($http){
        var blog = this;
        blog.title = "Test Blog App";

        blog.posts = {};
        $http.get('http://localhost:3000/posts').then(successCallback, errorCallback);
        function successCallback(data){
            blog.posts = data.data;
        }
        function errorCallback(error){
            return error
        }

        blog.tab = 'blog';

        blog.selectTab = function(setTab){
            blog.tab = setTab;
            blog.post.editor = false;
        };

        blog.isSelected = function(checkTab){
            return blog.tab === checkTab;
        };

        blog.post = {};
        blog.addPost = function(){
            blog.post.createdOn = Date.now();
            blog.post.comments = [];
            blog.post.likes = 0;
            blog.posts.unshift(this.post);
            blog.tab = 0;
            blog.post ={};
        };

        blog.deletePost = function(post) {
            blog.posts.splice(blog.posts.indexOf(post), 1);
            blog.tab = 'blog';
        };

        blog.editPost = function () {
            blog.post.editor = true;
        }


    }]);

    app.controller('CommentController', function(){
        this.comment = {};
        this.addComment = function(post){
            this.comment.createdOn = Date.now();
            post.comments.push(this.comment);
            this.comment ={};
        };
    });

})();