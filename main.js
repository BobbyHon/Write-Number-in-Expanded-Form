function expandedForm(num) {
    num = num.toString().split('')
    let answer = []
  
    for (let i = 0; i < num.length; i++){
      if (!(num[i] == 0))
        {
          answer.push(num[i].padEnd(num.length - i, '0'))
        }
    }
    return answer.join(' + ')
  }