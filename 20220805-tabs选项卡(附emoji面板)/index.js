// 当前所在选项卡索引
var activeIndex = 0
// 按钮
var tabButtons = document.querySelectorAll('.ex-tabs .tab-button')
// 页面
var tabPanes = document.querySelectorAll('.ex-tabs .tab-pane')

tabButtons.forEach(function(el, index) {
    el.addEventListener('click', function(e) {
        // 点击的是当前显示的选项卡按钮, 不处理
        if ( index == activeIndex ) {
            return
        }
        else {
            // 修改 按钮样式
            tabButtons[index].classList.add('tab-active')
            tabButtons[activeIndex].classList.remove('tab-active')
            // 修改 显示的选项卡
            tabPanes[activeIndex].classList.add('tab-hide')
            tabPanes[index].classList.remove('tab-hide')
            // 更新 当前所在选项卡索引
            activeIndex = index
        }
    })
})


// emoji
var emojis = [[
        "😄","😃","😁","😊","😘","😚","😗","😙","😭","😂",
        "😳","😒","😏","😔","😣","😠","😡","😖","😷","😉",
        "😍","😥","😪","😌","😜","😝","😓","😲","😞","😨",
        "😰","😅","😆","😋","😫","😤","😩","😵","😁","🤓",
        "😎","😑","😮","😴","😕","🤭","🤯","🧐","🤣","🤤",
        "🤥","🤧","😇","😐","😶","😈","👿","👹","👻","💀"
    ],[
        "🐱","🐵","🐯","🐶","🦁","🐮","🐷","🐭","🐻","🐨",
        "🐰","🐹","🐽","🐸","🐴","🐺","🐗","🦄","🐔","🐦",
        "🐤","🐧","🐣","🐍","🐛","🐉","🐎","🐈","🐑","🐅",
        "🦌","🐙","🐓","🐇","🐿","🐼","🐒","🦃","🐩","🐊",
        "🐡","🐲","🦈","🦉","🦇","🦕","🦔","🦒","🦓","🦑",
        "🦏","🦍","🐋","🐬","🐳","🐌","🐜","🐝","🐞","🦋"
    ],[
        "🍇","🍈","🍉","🍊","🍋","🍌","🍍","🍎","🍏","🍐", 
        "🍑","🍒","🍞","🍔","🍙","🍚","🍧","🍜","🍨","🍲",
        "🍝","🍵","☕","🍣","🌯","🌮","🍺","🍻","🍸","🍷",
        "🧀","🍰","🍡","🍢","🍛","🍘","🍱","🍭","🍳","🍿",
        "🍟","🎂","🍦","🌭","🍼","🍾","🍹","🍖","🍗","🍕",
        "🍤","🍥","🍩","🍪","🍬","🍮","🍯","🥟","🥤","🥩"
    ],[
        "⚽","🏀","🎾","⚾","🏈","🎳","🎱","🏐","🏉","🏒",
        "🏑","🏏","🏓","🏹","🎿","⛸","⛳","🎶","🎵","🎼",
        "🎧","🎤","🎬","🎰","🏆","🎣","🚵","🚴","🏇","🏄",
        "🏂","🏋","🏌","🏊","🎹","🎷","🎸","👾","🎮","🀄",
        "🃏","🎴","🕹","🎯","🏁","🎢","⛵","🥇","🥈","🥉",
        "🛸","🎲","🎠","🎡","🚣","🚤","🎪","🎭","⛹","💿"
    ],[
        "💋","💌","💘","❤","💗","💙","💚","💛","💜","💟",
        "♣","♦","♥","🔱","🔗","🚺","💟","🚮","🚻","🏧",
        "🛂","🛃","🛄","🛅","🚹","♿","🚰","🚾","🚭","⛔",
        "🚫","🔞","📵","🚯","🚱","🚳","🚷","0️⃣","1️⃣","2️⃣",
        "3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟","⏩","◀",
        "⏪","🔼","⏫","🔽","⏬","🉐","🔠","🔡","🔢","🔣",
    ]]

// 当前所在选项卡索引
var emojiActiveIndex = 0
// 页面
var emojiPanes = document.querySelectorAll('.emoji-tabs .tab-pane')
// 按钮
var emojiButtons = document.querySelectorAll('.emoji-tabs .tab-button')

// 初始化显示表情
for ( let x = 0; x < emojis.length; x++) {
    for (let y = 0; y < emojis[x].length; y++) {
        emojiPanes[x].innerHTML += "<span class='emoji-item'>" + emojis[x][y] + "</span>"
    }
}

emojiButtons.forEach(function(el, index) {
    el.addEventListener('click', function(e) {
         // 点击的是当前显示的选项卡按钮, 不处理
        if ( index == emojiActiveIndex ) {
            return
        }
        else {
            // 修改 按钮样式
            emojiButtons[index].classList.add('tab-active')
            emojiButtons[emojiActiveIndex].classList.remove('tab-active')
            // 修改 显示的选项卡
            emojiPanes[emojiActiveIndex].classList.add('tab-hide')
            emojiPanes[index].classList.remove('tab-hide')
            // 更新 当前所在选项卡索引
            emojiActiveIndex = index
        }
    })
})