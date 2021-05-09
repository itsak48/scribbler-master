var activeCard;

function openDeleteModel(id) {
  document.getElementById("confirmer-modal").style.display = "block";
  activeCard = id;
  console.log("id"+id);
}

function deletePost(action) {
  document.getElementById("confirmer-modal").style.display = "none";

  console.log('action:'+action)
  if (action == false) {
    return;
  }
  var card = document.getElementById('post-card' + activeCard);
  console.log('card='+card);
  card.style.display = "none";
  card.className = "deleted";
}

function openPost(index) {
  document.location.href = "./posts.html?index="+index;
}

var posts=[
  {id:1,
    author  :"Srishti Gupta",
    heading :"'let' me be a 'const’(ant), not a ‘var’(iable)!",
    content :"Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."
  },
  {id:2,
    author  :"Colby Fayock",
    heading :"What is linting and how can it save you time?",
    content :"One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have."
  },
  {id:3,
    author  :"Yazeed Bzadough",
    heading :"How to Get More Views on Your Tech Blog",
    content :"If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
  },
  {id:4,
    author  :"Cedd Burge",
    heading :"How to write easily describable code",
    content :"When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."
  },
  {id:5,
    author  :"Srishti Gupta",
    heading :"Everything you should know about ‘module’ & ‘require’ in Node.js",
    content :"Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."
  }
]
showPostslist();
function showPostslist() {
  posts.forEach(function(value, index) {
    var template = '<div class="post-card" id=post-card' + value.id + '>'
        + '<div class="post-author">'
        + '<p>' + value.author + '</p>'
        + '</div>'
        + '<div class="post-content">'
        + '<div class="content-heading">'
        + '<p class="heading">' + value.heading + '</p>'
        + '<span class="heading-font" onclick="openDeleteModel('+value.id+')">'
        + '<i aria-hidden="true" class="fa fa-trash"></i>'
        + '</span>'
        + '</div>'
        + '<p class="content-text"> ' + value.content + '</p>'
        + '<span onclick="openPost('+index+')" style="float: right;">'
        + '<i class="fa fa-ellipsis-h"></i>'
        + '</span>'
        + '</div>'
        + '</div>';
    document.getElementById('postsblock').innerHTML += template;
  });
}