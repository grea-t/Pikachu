!function () {
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setInterval(() => {
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n >= code.length) {
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 20)
  }
  let code = '.preview {\n' +
    '  height: 100%;\n' +
    '  display: flex;\n' +
    '  justify-content: center;\n' +
    '  align-items: center;\n' +
    '  background: #fee433;\n' +
    '}\n' +
    '.wrapper {\n' +
    '  width: 100%;\n' +
    '  height: 165px;\n' +
    '  position: relative;\n' +
    '}\n' +
    '.nose {\n' +
    '  width: 0;\n' +
    '  height: 0;\n' +
    '  border-style: solid;\n' +
    '  border-width: 12px;\n' +
    '  border-color: black transparent transparent;\n' +
    '  border-radius: 11px;\n' +
    '  position: absolute;\n' +
    '  left: 50%;\n' +
    '  top: 28px;\n' +
    '  margin-left: -12px;\n' +
    '}\n' +
    '.eye {\n' +
    '  width: 49px;\n' +
    '  height: 49px;\n' +
    '  background: #2e2e2e;\n' +
    '  position: absolute;\n' +
    '  border-radius: 50%;\n' +
    '  border: 2px solid #000;\n' +
    '}\n' +
    '.eye::before {\n' +
    '  content: \'\';\n' +
    '  display: block;\n' +
    '  width: 24px;\n' +
    '  height: 24px;\n' +
    '  background: white;\n' +
    '  position: absolute;\n' +
    '  border-radius: 50%;\n' +
    '  left: 6px;\n' +
    '  top: -1px;\n' +
    '  border: 2px solid #000;\n' +
    '}\n' +
    '.eye.left {\n' +
    '  right: 50%;\n' +
    '  margin-right: 90px;\n' +
    '}\n' +
    '.eye.right {\n' +
    '  left: 50%;\n' +
    '  margin-left: 90px;\n' +
    '}\n' +
    '.face {\n' +
    '  width: 68px;\n' +
    '  height: 68px;\n' +
    '  background: #fc0d1c;\n' +
    '  border: 2px solid black;\n' +
    '  border-radius: 50%;\n' +
    '  position: absolute;\n' +
    '  top: 85px;\n' +
    '}\n' +
    '.face.left {\n' +
    '  right: 50%;\n' +
    '  margin-right: 116px;\n' +
    '}\n' +
    '.face.right {\n' +
    '  left: 50%;\n' +
    '  margin-left: 116px;\n' +
    '}\n' +
    '.upperLip {\n' +
    '  height: 25px;\n' +
    '  width: 80px;\n' +
    '  border: 3px solid black;\n' +
    '  position: absolute;\n' +
    '  top: 50px;\n' +
    '  background: #fee433;}\n' +
    '.upperLip.left {\n' +
    '  right: 50%;\n' +
    '  border-bottom-left-radius: 40px 25px;\n' +
    '  border-top: none;\n' +
    '  border-right: none;\n' +
    '  transform: rotate(-20deg);\n' +
    '}\n' +
    '.upperLip.right {\n' +
    '  left: 50%;\n' +
    '  border-bottom-right-radius: 40px 25px;\n' +
    '  border-top: none;\n' +
    '  border-left: none;\n' +
    '  transform: rotate(20deg);\n' +
    '}\n' +
    '.lowerLip-wrapper {\n' +
    '  position: absolute;\n' +
    '  bottom: -15px;\n' +
    '  left: 50%;\n' +
    '  margin-left: -125px;\n' +
    '  height: 120px;\n' +
    '  width: 250px;\n' +
    '  overflow: hidden;\n' +
    '}\n' +
    '.lowerLip {\n' +
    '  position: absolute;\n' +
    '  width: 250px;\n' +
    '  height: 1500px;\n' +
    '  background: #990513;\n' +
    '  border-radius: 250px/1400px;\n' +
    '  border: 2px solid black;\n' +
    '  bottom: 0;\n' +
    '  overflow: hidden;\n' +
    '}\n' +
    '.lowerLip::after {\n' +
    '  content: \'\';\n' +
    '  position: absolute;\n' +
    '  bottom: -20px;\n' +
    '  width: 100px;\n' +
    '  height: 100px;\n' +
    '  background: #fc4a62;\n' +
    '  left: 50%;\n' +
    '  margin-left: -50px;\n' +
    '  border-radius: 50%;\n' +
    '}'
  writeCode('', code)
}.call()