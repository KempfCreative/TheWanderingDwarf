TWD.articleController = {};
TWD.articleController.articleEndpoint = {};

TWD.articleController.init = function(){
    TWD.articleController.articleEndpoint = '/articles/top/'; //set the default
};

TWD.articleController.hasHistoryAPI = function(){
    return !!(window.history && history.pushState);
};

TWD.articleController.updateUrl = function(pageName){
    if (TWD.articleController.hasHistoryAPI()){
        var pageState = {};
        history.pushState(pageState, "null", pageName);
    };
};

TWD.articleController.whichArticles = function(){
    var navigation = document.getElementByTagName('nav'),
        navTop = $('#top'),
        navMasterworks = $('#masterworks'),
        navStrongHold = $('#stronghold'),
        navElves = $('#elves'),
        navBeasts = $('#beasts');

    $(navigation).on('click', navTop, function(){
        var state = $(this).getAttribute('data-article-nav');
        TWD.articleController.updateUrl(state);
        TWD.articleController.articleEndpoint = '/articles/top/';
        TWD.articleModel.loadArticles();
    });
    $(navigation).on('click', navMasterworks, function(){
        var state = $(this).getAttribute('data-article-nav');
        TWD.articleController.updateUrl(state);
        TWD.articleController.articleEndpoint = '/articles/masterworks/';
        TWD.articleModel.loadArticles();
    });
    $(navigation).on('click', navStrongHold, function(){
        var state = $(this).getAttribute('data-article-nav');
        TWD.articleController.updateUrl(state);
        TWD.articleController.articleEndpoint = '/articles/strongholds/';
        TWD.articleModel.loadArticles();
    });
    $(navigation).on('click', navElves, function(){
        var state = $(this).getAttribute('data-article-nav');
        TWD.articleController.updateUrl(state);
        TWD.articleController.articleEndpoint = '/articles/elves/';
        TWD.articleModel.loadArticles();
    });
    $(navigation).on('click', navBeasts, function(){
        var state = $(this).getAttribute('data-article-nav');
        TWD.articleController.updateUrl(state);
        TWD.articleController.articleEndpoint = '/articles/beasts/';
        TWD.articleModel.loadArticles();
    });
};
