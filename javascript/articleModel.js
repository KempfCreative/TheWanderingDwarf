TWD.articleModel = {};

TWD.articleModel.loadArticles = function(){
    var articleDOM = $(document),
        articleTargets = articleDOM.querySelectorAll('[data-article-target]');

    if(!TWD.articleView.articlesLoaded){
        TWD.articleView.articlesLoaded = true;
        for (var i = 1; i <= articleTargets.length; i++) {
            (function(i){
                $.ajax({
                    type: 'GET',
                    url: TWD.articleController.articleEndpoint + 'mainArticle' + i + '.json',
                    cache: false,
                    success: function(data) {
                        $(articleTargets[i]).append(data.success.articleImage);
                        $(articleTargets[i]).append(data.success.articleTime);
                        $(articleTargets[i]).append(data.success.articleHeading);
                        $(articleTargets[i]).append(data.success.articleBody);
                    }
                });
            })(i);
        };
    }
};