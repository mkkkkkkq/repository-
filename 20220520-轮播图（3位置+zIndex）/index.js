var carouselItem = document.querySelectorAll('.div-carousel-item')
var carouselTrigger = document.querySelectorAll('.div-carousel-trigger > div')

var process             
var imgIndex = 0        //当前图片的索引
var prevIndex = 4       //前一张显示的图片索引
var zIndex = 6

function showImg( index , direation = 1) {
    // 显示当前图片相应的图标
    for (let i = 0; i < carouselTrigger.length; i++) {
        carouselTrigger[i].classList.remove('active')
    }
    carouselTrigger[index].classList.add('active')

    // 将所有图片放置在下一张显示前的初始位置
    for (let i = 0; i < carouselItem.length; i++) {
        carouselItem[i].style.transition = 'none'
        // 模板字符串（不是单引号，是键盘数字1的左边的按钮）
        carouselItem[i].style.transform = `translateX(${direation * 450}px)`
    }
    // 将当前显示的图片预设在前一张显示位置
    carouselItem[prevIndex].style.transition = '.5s linear'
    carouselItem[prevIndex].style.transform = `translateX(${direation * (-450)}px)`

    // 显示将要显示的下一张图片
    // setTimeout是为了让该图片从 translateX(${direation * 450}px)
    // 变化为 translateX(0px)，否则将会被直接覆盖为 translateX(0px)
    setTimeout(function() {
        carouselItem[index].style.zIndex = zIndex
        carouselItem[index].style.transition = '.5s linear'
        carouselItem[index].style.transform = `translateX(0px)`
    }, 10)
}
// 点击事件初始化
function initListen() {
    carouselTrigger.forEach( (element, key) => {
        element.addEventListener('click', (e) => {
            // 清除自动轮播process
            clearInterval(process)
            // 点击的在显示的后面
            if (key > imgIndex) {
                // 前一张为当前的
                prevIndex = imgIndex  
                // 将要显示的为点击的
                imgIndex = key
                showImg(key, 1)
                zIndex++
            }
            // 点击的在显示的前面
            else if(key < imgIndex) {
                prevIndex = imgIndex
                imgIndex = key
                // 函数方向是为了表示从哪边滑动向哪边
                showImg(key, -1)
                zIndex++
            }

            // 重启轮播
            toggle()
        })
    })
}

// 自动轮播（3秒切换图片）
function toggle() {
    process = setInterval(function() {
        // 三元表达式
        imgIndex = 4 == imgIndex? 0 : imgIndex + 1
        prevIndex = 0 == imgIndex? 4 : imgIndex - 1
        // 切换下一张图片
        showImg(imgIndex, 1)
        zIndex++
    }, 3000)
}

initListen()
toggle()