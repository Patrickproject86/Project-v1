// script.js
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageText = document.getElementById('message').value.trim();

    if (messageText) {
        const messagesContainer = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = messageText;
        messagesContainer.appendChild(newMessage);

        // 清空输入框
        document.getElementById('message').value = '';
    } else {
        alert('留言内容不能为空！');
    }
});