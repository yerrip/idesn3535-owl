$(document).ready(function() {
			var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


			var apiKey = "9316b55ce2094d1a8ef5608871ec08ad"

			$.ajax( {
				url:url,
				data: {
					'api-key': apiKey
				},
				success: function (result) {
					// console.log(result);
					const articles = result.response.docs;
					console.log(articles);

					const articleList = document.createElement('ul');
					$("#main").append(articleList);

					articles.forEach(function(article) {
						const articleItem = document.createElement('li');

					if (article.multimedia.length > 0 && article.multimedia[0].type === "image") {
						const articleImage = document.createElement('img');
						articleImage.src = "https://nytimes.com/" + article.multimedia[0].url;
						articleItem.classList.add('has-image')
					}

						const pubDate = document.createElement('div');
						pubDate.classList.add('pub-date');
						pubDate.innerText = new Date(article.pub_date)
						articleItem.append(pubDate)

						const articleHeader = document.createElement('h2');
						articleHeader.innerHTML = article.headline.main;
						articleItem.append(articleHeader);

						articleList.append(articleItem)


						const articleSummary = document.createElement('p');
						articleSummary.innerHTML = article.snippet;
						articleItem.append(articleSummary);


					});
				},

				error: function(err){
					throw err;
				}
			})

			$(document).on("scroll", function () {
				var pageTop = $(document).scrollTop()
				var pageBottom = pageTop + $(window).height()
				var tags = $("li")

				for (var i = 0; i < tags.length; i++) {
				var tag = tags[i]

				if ($(tag).position().top < pageBottom) {
				$(tag).addClass("visible")
				} else {
				$(tag).removeClass("visible")
				}
				}
				})

		});


