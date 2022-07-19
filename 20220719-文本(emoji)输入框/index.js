var emojis = [
    "😀", "😁", "😂", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", 
    "😍", "😘", "😗", "😙", "😚", "😇", "😐", "😑", "😶", "😏", "😣", 
    "😥", "😮", "😯", "😪", "😫", "😴", "😌", "😛", "😜", "😝", "😒",
    "😓", "😔", "😕", "😲", "😷", "😖", "😞", "😟", "😤", "😢", "😭", 
    "😦", "😧", "😨", "😬", "😰", "😱", "😳", "😵", "😡", "😠", "😈", 
    "👿", "👹", "👺", "💀", "☠", "👻", "👽", "👾", "💣", "💋", "💌", 
    "💘", "❤", "💓", "💔", "💕", "💖", "💗", "💙", "💚", "💛", "💜", 
    "💝", "💞", "💟", "💏", "🧑‍🤝‍🧑", "💪", "👈", "👉", "☝", "👆", "👇", 
    "✌", "✋", "👌", "👍", "👎", "✊", "👊", "👋", "👏", "👐", "✍"
]

// emoji容器框
var emojiSelector = document.getElementsByClassName('emoji-selector')[0]
// 输入框
var chatInput = document.getElementsByClassName('chat-input')[0]
// 清空按钮
var clearButton = document.getElementsByClassName('chat-button-clear')[0]
// 发送按钮
var sendButton = document.getElementsByClassName('chat-button-send')[0]
// 单个表情
var emojiBtn = document.getElementsByClassName('emoji-item')

// 显示表情
for (let index = 0; index < emojis.length; index++) {
    emojiSelector.innerHTML += "<span class='emoji-item'>" + emojis[index] + "</span>"
}

// 清空按钮点击响应
clearButton.addEventListener("click", function(e) {
    // 清空输入框
    chatInput.value = ''
    // 焦点放回输入框中
    chatInput.focus()
})
// 发送按钮点击响应
sendButton.addEventListener("click", function(e) {
    if (chatInput.value === '') {
        alert('输入框不能为空')
    }
    else {
        // 显示输入内容
        alert('输入内容为:  \n' + chatInput.value)
        // 清空输入框
        chatInput.value = ''
    }
    // 焦点放回输入框中
    chatInput.focus()
})

// emoji点击响应
for (let index = 0; index < emojiBtn.length; index++) {
    emojiBtn[index].addEventListener('click', function(e) {
        // 点击时，焦点放入输入框中
        chatInput.focus()
        // 光标 后面 插入文本
        chatInput.setRangeText(emojis[index])
        // 重新设置光标位置, 向后移动emoji的长度
        // a += 100 相当于 a = a + 100
        chatInput.selectionStart += emojis[index].length
    })
}