var emojis = [
    "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", 
    "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐ถ", "๐", "๐ฃ", 
    "๐ฅ", "๐ฎ", "๐ฏ", "๐ช", "๐ซ", "๐ด", "๐", "๐", "๐", "๐", "๐",
    "๐", "๐", "๐", "๐ฒ", "๐ท", "๐", "๐", "๐", "๐ค", "๐ข", "๐ญ", 
    "๐ฆ", "๐ง", "๐จ", "๐ฌ", "๐ฐ", "๐ฑ", "๐ณ", "๐ต", "๐ก", "๐ ", "๐", 
    "๐ฟ", "๐น", "๐บ", "๐", "โ ", "๐ป", "๐ฝ", "๐พ", "๐ฃ", "๐", "๐", 
    "๐", "โค", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", 
    "๐", "๐", "๐", "๐", "๐งโ๐คโ๐ง", "๐ช", "๐", "๐", "โ", "๐", "๐", 
    "โ", "โ", "๐", "๐", "๐", "โ", "๐", "๐", "๐", "๐", "โ"
]

// emojiๅฎนๅจๆก
var emojiSelector = document.getElementsByClassName('emoji-selector')[0]
// ่พๅฅๆก
var chatInput = document.getElementsByClassName('chat-input')[0]
// ๆธ็ฉบๆ้ฎ
var clearButton = document.getElementsByClassName('chat-button-clear')[0]
// ๅ้ๆ้ฎ
var sendButton = document.getElementsByClassName('chat-button-send')[0]
// ๅไธช่กจๆ
var emojiBtn = document.getElementsByClassName('emoji-item')

// ๆพ็คบ่กจๆ
for (let index = 0; index < emojis.length; index++) {
    emojiSelector.innerHTML += "<span class='emoji-item'>" + emojis[index] + "</span>"
}

// ๆธ็ฉบๆ้ฎ็นๅปๅๅบ
clearButton.addEventListener("click", function(e) {
    // ๆธ็ฉบ่พๅฅๆก
    chatInput.value = ''
    // ็ฆ็นๆพๅ่พๅฅๆกไธญ
    chatInput.focus()
})
// ๅ้ๆ้ฎ็นๅปๅๅบ
sendButton.addEventListener("click", function(e) {
    if (chatInput.value === '') {
        alert('่พๅฅๆกไธ่ฝไธบ็ฉบ')
    }
    else {
        // ๆพ็คบ่พๅฅๅๅฎน
        alert('่พๅฅๅๅฎนไธบ:  \n' + chatInput.value)
        // ๆธ็ฉบ่พๅฅๆก
        chatInput.value = ''
    }
    // ็ฆ็นๆพๅ่พๅฅๆกไธญ
    chatInput.focus()
})

// emoji็นๅปๅๅบ
for (let index = 0; index < emojiBtn.length; index++) {
    emojiBtn[index].addEventListener('click', function(e) {
        // ็นๅปๆถ๏ผ็ฆ็นๆพๅฅ่พๅฅๆกไธญ
        chatInput.focus()
        // ๅๆ  ๅ้ข ๆๅฅๆๆฌ
        chatInput.setRangeText(emojis[index])
        // ้ๆฐ่ฎพ็ฝฎๅๆ ไฝ็ฝฎ, ๅๅ็งปๅจemoji็้ฟๅบฆ
        // a += 100 ็ธๅฝไบ a = a + 100
        chatInput.selectionStart += emojis[index].length
    })
}