var posts = [];
var eyeD = 0;

function addpost(text) {

    var newPost = { postText: text, postId: eyeD }
    posts.push(newPost);
}

$('.add-post').click(function() {
    var postText = $('#post-name').val();
    eyeD++;
    addpost(postText, eyeD);
    updatePosts();
});

function updatePosts() {
    $('.posts').empty();
    for (var key in posts) {
        $(".posts").append("<p class= 'post' data-id=" + posts[key].postId + " > <button type='button' class='remove'>REMOVE </button>" + posts[key].postText + "</p>");
    }
}

$('.posts').on('click', '.remove', function() {
    var id = $(this).closest('p').data().id;
    for (var i = 0; i < posts.length; i++) {
        if (id === posts[i].postId) {
            posts.splice(i, 1);
            break;
        }
    }
    updatePosts();
});