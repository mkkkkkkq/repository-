var sidebar = document.querySelectorAll('.sidebar')
var menulist = document.querySelectorAll('.menu-list')
var listItems = document.querySelectorAll('.menu-list-item')
var expandButton = document.querySelectorAll('.menu-foot-button')

// 是否持续展开
var isExpand = [0, 0]

// 鼠标移入导航栏才出现滚动条
sidebar.forEach(function(el, i) {
    el.onmouseenter = function(e) {
        menulist[i].style.overflowY = 'scroll'
    }
    el.onmouseleave = function(e) {
        menulist[i].style.overflowY = 'hidden'
    }
})

// 移入时列表展开
menulist.forEach(function(el, i) {
    el.onmouseenter = function(e) {
        if( 0 == isExpand[i] && !sidebar[i].classList.contains('is-expanded') ) {
            sidebar[i].classList.add('is-expanded')
        }
    }
    el.onmouseleave = function(e) {
        if( 0 == isExpand[i] && sidebar[i].classList.contains('is-expanded') ) {
            sidebar[i].classList.remove('is-expanded')
        }
    }
})

// 菜单项 点击事件
listItems.forEach(function(el, i) {
    // 右边菜单项
    if (i >= 13) {
        el.onclick = function(e) {
            for (let index = 13; index < listItems.length; index++) {
                listItems[index].classList.remove('is-selected')
            }
            listItems[i].classList.add('is-selected')
        }
    }
    // 左边菜单项
    else {
        el.onclick = function(e) {
            for (let index = 0; index < 13; index++) {
                listItems[index].classList.remove('is-selected')
            }
            listItems[i].classList.add('is-selected')
        }
    }
})

// 展开/收缩导航栏按钮 点击事件
expandButton.forEach(function(el, i) {
    el.onclick = function(e) {
        if ( 0 == isExpand[i] ) {
            isExpand[i] = 1
        } else {
            isExpand[i] = 0
        }
        sidebar[i].classList.toggle('is-expanded')
    }
})