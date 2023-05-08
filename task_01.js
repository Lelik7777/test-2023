//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
function truncate(str,maxLength) {
  if(str.length > maxLength){
    return str.slice(0,maxLength)+'...';
  }
}
console.log(truncate('sdfsdfsadfasdfasd',10));