TWD.articleController = {};

TWD.articleController.init = function(){};

TWD.articleController.loadArticles = function(){
    var articleDOM = $(document),
        articleTargets = articleDOM.querySelectorAll('[data-article-target]');

    if(!TWD.articleView.articlesLoaded){
        $.ajax({
            type: 'GET',
            url: '/articles/mainArticle.json',
            cache: false,
            success: function(data) {
                articleTargets[0].append(data.success.articleImage);
                articleTargets[0].append(data.success.articleTime);
                articleTargets[0].append(data.success.articleHeading);
                articleTargets[0].append(data.success.articleBody);
            }
        })
    }
};
