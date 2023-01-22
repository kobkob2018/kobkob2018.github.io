---
layout: page
permalink: news
title: News
---

<script type = "text/javascript" >
  var news_posts = [
    {"slag": "none"}
    {% for newpost in site.data.mynews %}
      ,{
          "slag": "{{newpost.slag}}",
          "user": "{{newpost.user}}"
      }
    {% endfor %}
  ];
 
  news_posts.forEach(newpost => {
    if(newpost.slag == 'none'){
      return;
    }
    fetch('https://dev.to/api/articles/'+newpost.user+'/'+newpost.slag).then((res) => res.json()).then(article => {
      //console.log(article);
      

      let article_template = document.getElementById("apitoui_template")
            .querySelector(".news-post-template")
            .cloneNode(true);

      article_template.querySelector(".title-plaeceholder").innerHTML = article.title;
      let ar_image = article_template.querySelector(".img-placeholder");
      ar_image.src = article.user.profile_image_90;
      ar_image.title = article.user.name;
      
      article_template.querySelector(".username-plaeceholder").innerHTML = article.user.name;
      article_template.querySelector(".date-plaeceholder").innerHTML = article.readable_publish_date;
      article_template.querySelector(".read-plaeceholder").innerHTML = article.reading_time_minutes;
      article_template.querySelector(".description-plaeceholder").innerHTML = article.description;
      let taglist_placeholder = article_template.querySelector(".taglist-plaeceholder");
      article.tags.forEach(tag => {
        taglist_placeholder.append("#"+tag+" ");
      });

      
      article_template.querySelectorAll(".news-post-link-to").forEach(link => {
        link.href = article.canonical_url;
      });

      let articles_placeholder = document.getElementById("articles_placeholder");
      articles_placeholder.append(article_template);

    });
  });



  news_posts.forEach(newpost => {
    if(newpost.slag == 'none'){
      return;
    }
    fetch('https://dev.to/api/articles/'+newpost.user+'/'+newpost.slag)
      .then((res) => res.json())
      .then(article => {
        console.log(article);
        ... //code goes here
    });
  });


</script>
<div id="articles_placeholder" class = "dev-to-articles">


</div>

<div id="apitoui_template" class = "apitoui-template" style="display:none">
  <div class = "news-post-template" >
    <a href = "#" target = "_NEW" class = "news-post-link-to" >
      <div class = "news-post-wrap" >
            <div class="post-left-side">
              <img class = "img-placeholder" src = "" alt = "" />
            </div>
            <div class="post-right-side">
              <h4>
                <span class = "title-plaeceholder" ></span>
              </h4>
              <div class="small-details">
                <small class="news-post-details">
                  <span class = "username-plaeceholder" ></span> ・ <span class = "date-plaeceholder" ></span> ・ <span class = "read-plaeceholder" ></span> minutes read
                </small>
              </div>
              <div class="post-description">
                <span class="description-plaeceholder"></span>
              </div>
              <div class="taglist">
                <small class="news-post-taglist">
                    <span class = "taglist-plaeceholder" ></span>
                </small>
              </div>
            </div>
      </div>
    </a>
  </div>
</div>

{% include phone-contact.html %}