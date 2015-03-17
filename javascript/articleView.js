TWD.articleView = {};

TWD.articleView.init = function(){
    TWD.articleController.articlesLoaded = false;
    TWD.articleController.init();
    TWD.articleController.loadArticles();
};