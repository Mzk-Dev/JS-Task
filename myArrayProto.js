function MyArray(){
  this.startL = arguments.length;
  this.arg = arguments;
  this.count = 0;
  this.newarr = [] ;
  this.arr = [];
  this.prevarr = [];
  this.nextarr = [];
  this.value = '';
  this.indexDeleteValue = '';
  this.countUl = 0;
  this.contextMenu = 0;
  this.ul = null;

  this.init = function(){
    for (var i = 0; i < this.startL; i++){
      this.newarr[i] = this.arg[i];
    }
    
    this.createContext();
  }

  this.init();
  this.length();
}


MyArray.prototype.length = function(){
  var i=0;
  while(this.newarr[i]){
    i++;
  }
  this.count = i;
}

MyArray.prototype.push = function(...args){
  let i = 0;
  while(args[i]){
    this.newarr[this.count] = args[i];
    this.count++;
    i++;
  }
} 
// arr.push('w');
// console.log(arr);
MyArray.prototype.pop = function(){
  this.value = this.newarr[this.count-1];
  this.arr = [] ; 
  let i = 0;
  while(i<this.count-1){
    this.arr[i] = this.newarr[i];
    i++; 
  }
  this.newarr = [];
  i=0;
  while(this.arr[i]){
    this.newarr[i] = this.arr[i];
    i++;
  }
  this.length();
  return this.value ;
}
// arr1 = arr.pop();
// console.log(arr);
MyArray.prototype.shift = function(){
  this.value = this.newarr[0];
  let i = 1 ;
  this.arr = [];
  while(i<this.count){
    this.arr[i-1] = this.newarr[i];
    i++;
  }
  this.newarr = [];
  i = 0;
  while(this.arr[i]){
    this.newarr[i] = this.arr[i];
    i++;
  }
  this.length();
  return this.value ;
}
// arr1 = arr.shift();
// console.log(arr1);
MyArray.prototype.unshift = function(...args){
  let i = 0 ;
  this.arr = [];
  while(args[i]){
    this.arr[i] = args[i];
    i++;
  }
  let j = 0;
  while(this.newarr[j]){
    this.arr[i] = this.newarr[j];
    i++;
    j++;
  }
  this.newarr = [];
  i = 0;
  while(this.arr[i]){
    this.newarr[i] = this.arr[i];
    i++;
  }
  this.length();
}
// arr.unshift('i','wo','wo');
// console.log(arr);
MyArray.prototype.splice = function(index,deleteC,...args){
  let i = 0 ;
  this.arr = [];
  let length = this.count;
  let I = index;
  let D = deleteC;
  if(index>=0){
    while(D){//Записываю удаляемые значение в массив arr
      this.arr[i] = this.newarr[I];
      D--;
      I++;
      i++;
    }
    this.nextarr = [];
    let sum = index+deleteC;
    i = 0;
    while(this.newarr[sum]){//Аргументы что остались > index+deleteC
      this.nextarr[i] = this.newarr[sum];
      sum++;i++;
    }
    this.prevarr = [];
    i = 0;
    while(i<index){//Аргументы что остались < index
      this.prevarr[i] = this.newarr[i];
      i++;
    }
  }
  else{
    while(D){//Все тоже самое , но индекс с минусом
      arr[i] = this.newarr[length+I];
      i++;
      D--;
      I++;
    }
    this.nextarr = [];
    i=0;
    let sum = length+(index+deleteC);
    while(this.newarr[sum]){
      this.nextarr[i] = this.newarr[sum];
      sum++;i++;
    }
    this.prevarr = [];
    i = 0;
    while(i<length+index){
      this.prevarr[i] = this.newarr[i];
      i++;
    }
  }
  //Выполнение
  this.newarr = [];
  i = 0;
  while(this.prevarr[i]){
    this.newarr[i] = this.prevarr[i];
    i++;
  }
  let j = 0;
  if(args != []){
    while(args[j]){
      this.newarr[i] = args[j];
      i++;j++;
    }
  }
  j = 0;
  while(this.nextarr[j]){
    this.newarr[i] = this.nextarr[j];
    i++;j++;
  }
  this.length();
  return this.arr; 
  
}
// check = arr.splice(2,0,'add','this');
// console.log(arr);
MyArray.prototype.slice = function(start,end){
  this.arr = [];
  let i = 0;
  let s = start;
  let length = this.count;
  if(start>0 && end>0){//Есть старт и енд 
    while(s<end){
      this.arr[i] = this.newarr[s];
      i++;s++;
    }
    return this.arr;
  }
  else if(start<0 && end<0){//Отрицательные оба
    while(s<end){
      this.arr[i] = this.newarr[length+s];
      i++;s++;
    }
    return this.arr;
  }
  else if(start>0 && !end){//Без энда
    while(this.newarr[s]){
      this.arr[i] = this.newarr[s];
      i++;s++;
    }
    return this.arr;
  }
  else if(start<0 && !end){//Без энда + отрицательный старт
    while(s<0){
      this.arr[i] = this.newarr[length+s];
      i++;s++;
    }
    return this.arr;
  }
  else{//Скопировать весь массив 
    while(this.newarr[i]){
      this.arr[i] = this.newarr [i];
      i++;
    }
    return this.arr;
  }
}

// arr1 = arr.slice(-3,0);
// console.log(arr1);
MyArray.prototype.CreateList = function(){
  this.div = document.createElement('div');
  this.div.className = 'divBeforeUl';
  document.body.append(this.div);
  this.ul = document.createElement('ul');
  this.div.append(this.ul);
  // if(this.countUl>0) return;
  // this.countUl += 1;
  this.ul.className = 'list';
  this.ul.id = 'list';
  let i = 0;
  
  while(this.newarr[i]){
    var li = document.createElement('li');
    li.textContent = this.newarr[i];
    li.className = 'cls-context-menu-li';
    this.ul.append(li);
    i++;
  }
  
  this.ul.addEventListener('contextmenu' , this.rightClickContext.bind(this));
  this.ul.addEventListener('click', this.changeColor.bind(this));
  this.ul.addEventListener('click', this.leftClickContext.bind(this));
  this.ul.addEventListener('mousedown' , this.mouseDown.bind(this));
  
};

MyArray.prototype.changeColor = function(e){
    let target = e.target;
    if (target.tagName != 'LI') return; 
    if(this.rgtClickContextMenu.style.display === 'block') return;
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    target.style.background = color;
    
}

// MyArray.prototype.openContext = function(){

// }

// MyArray.prototype.closeContext = function(){
  
// }

MyArray.prototype.createContext = function(){
  this.rgtClickContextMenu = document.createElement('div');
  this.rgtClickContextMenu.className = 'cls-context-menu';
  this.rgtClickContextMenu.id = 'div-context-menu';
  document.body.append(this.rgtClickContextMenu);

  let ul = document.createElement('ul');
  this.rgtClickContextMenu.append(ul);

  let li = document.createElement('li');
  ul.append(li);

  let a = document.createElement('a');
  a.className = 'delete';
  a.textContent = 'Delete';
  li.append(a);

  
  a.addEventListener('click', this.deleteContext.bind(this));
  
  
}

MyArray.prototype.leftClickContext = function(e){
  this.rgtClickContextMenu.style.display = 'none';
};

MyArray.prototype.rightClickContext = function(e){
  var elmnt = e.target;
  if ( elmnt.className.startsWith ( "cls-context-menu")) {
    e.preventDefault();
    this.rgtClickContextMenu.style.zIndex = 9999;
    this.rgtClickContextMenu.style.left = e.pageX + 'px';
    this.rgtClickContextMenu.style.top = e.pageY + 'px';
    this.rgtClickContextMenu.style.display = 'block';
    
    this.indexDeleteValue = this.indexOf(elmnt.textContent);
  }
}
MyArray.prototype.indexOf = function(value){
  let i = 0 ;
  while(i<=this.count){
    if(value === this.newarr[i]) return i;
    i++;
  }
}

MyArray.prototype.deleteContext = function(e){
  // var value = this.value;
  
  // let target = e.target;
  // if(e.className !='cls-context-menu') return;
  let div = document.querySelector('.divBeforeUl');
  div.remove();
  // let li = document.querySelectorAll('.cls-context-menu-li');
  // li.forEach(e => e.parentNode.removeChild(e));
  // this.countUl = 0;
  this.splice(this.indexDeleteValue,1);
  console.log(this.newarr);
  this.CreateList();
  this.leftClickContext();
  // }
}

MyArray.prototype.mouseDown = function(e){

  this.selectedLi = e.target;
  this.selectedLi.addEventListener('dragstart',function(){return false});
  
  if(this.selectedLi.tagName != 'LI') return;
 
  this.selectedLi.style.position = 'absolute';
  // this.selectedLi.style.display = 'block';
  this.selectedLi.style.zIndex = 1000;
  // document.body.append(this.selectedLi);
  // this.moveAt(e.pageX, e.pageY);
  this.selectedLi.addEventListener('mousemove', this.onMouseMove.bind(this));
  this.selectedLi.addEventListener('mouseup', this.onMouseUp.bind(this));
  
}

MyArray.prototype.moveAt = function(pageX, pageY){
  this.selectedLi.style.left = pageX - this.selectedLi.offsetWidth / 2 + 'px';
  this.selectedLi.style.top = pageY - this.selectedLi.offsetHeight / 2 + 'px';
}

MyArray.prototype.onMouseMove = function(e){
  this.moveAt(e.pageX, e.pageY);
  // this.selectedLi.addEventListener('click',this.onMouseUp.bind(this));
}



MyArray.prototype.onMouseUp = function(){
  document.removeEventListener('mousemove', this.onMouseMove.bind(this));
  this.selectedLi.style.position = 'static';
  // this.selectedLi.onmouseup = null;
}



arr = new MyArray('y','a','u','s','t','a','l');
arr.CreateList();




