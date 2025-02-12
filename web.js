
document.getElementById('send-button').addEventListener('click', function() {
    const message = document.getElementById('forum-textarea').value;
    if (message.trim()) {
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        document.getElementById('forum-messages').appendChild(newMessage);
        document.getElementById('forum-textarea').value = '';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const forumInput = document.getElementById('forum-input');
    const forumSubmit = document.getElementById('forum-submit');
    const forumPosts = document.getElementById('forum-posts');

    forumSubmit.addEventListener('click', () => {
        const postContent = forumInput.value.trim();
        if (postContent) {
            const postElement = document.createElement('div');
            postElement.className = 'forum-post';
            postElement.textContent = postContent;
            forumPosts.appendChild(postElement);
            forumInput.value = '';
        }
    });
});
        
