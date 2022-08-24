var keys = document.querySelectorAll('.calculator .calc-buttons span')
var operators = ['+', '-', 'x', '÷', '%']
// 小数点是否可以输入(确保一个数只能有1个小数点)
var decimalAdded = false

for (let index = 0; index < keys.length; index++) {
    keys[index].onclick = function(e) {
        var input = document.querySelector('.screen')
        // 输入的内容
        var inputVal = input.innerHTML
        // 点击按钮的内容
        var btnVal = this.innerHTML

        if(btnVal == 'C') {
            // 清空输入内容
            input.innerHTML = ''
            // 重置：小数点是否可以输入
            decimalAdded = false
        } else if (btnVal == '=') {
            // 点击等于号的时候
            // equation：输入的表达式
            var equation = inputVal
            // 最后一个字符
            var lastChar = equation[equation.length - 1]
            // 将输入的表达式中的乘除号替换为计算符号
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/')

            // 如果最后一位字符是计算符号或者小数点，则去除最后一位字符
            if(operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '')
            // 如果表达式不为空，则用 eval() 来运算表达式
            if(equation)
                input.innerHTML = eval(equation)
            // 重置：小数点是否可以输入
            decimalAdded = false
        } else if (operators.indexOf(btnVal) > -1) {
            // 点击计算符号时

            // 当前的最后一个字符
            var lastChar = inputVal[inputVal.length - 1]
            // 如果当前输入不为空, 且最后一个字符不为计算符号时
            if(inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal
            else if (inputVal == '' && btnVal == '-') {
                // 为空时点击'-'号，也可以输入
                input.innerHTML += btnVal
            }
            // 当输入字符数大于1时，并且最后一个字符为运算符时
            if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                // 替换最后一个字符的运算符号
                input.innerHTML = inputVal.replace(/.$/, btnVal)
            } 
            // 重置：小数点是否可以输入
            decimalAdded = false
        } else if (btnVal == '.') {
            // 确保一个数只能由一个小数点
            if(!decimalAdded) {
                input.innerHTML += btnVal
                decimalAdded = true
            }
        } else {
            // 其他数字时
            input.innerHTML += btnVal
        }
    }
}
// 主题切换
var calculator = document.querySelector('.calculator')
var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')

function changeTheme(e) {
    if(e.target.checked) {
        calculator.classList.add('theme-dark')
    } else {
        calculator.classList.remove('theme-dark')
    }
}
toggleSwitch.addEventListener('change', changeTheme)