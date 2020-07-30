function drawChess() {
 let mainBlock = document.querySelector(".main-block"); // обращаемся к блоку из HTML разметки и присваиваем ему стили mainBlock
 let block; // задаем будущую клетку
 let coordinate; // заготовка переменной для вывода координат

 let flag = true;

 	for (let i = 0; i<8; i++) {
 		for (let j = 0; j<8; j++) {

 			if (j === 0) flag = !flag; // обеспечиваем в начале каждой строки цвет со смещением на значение (иначе были бы просто полоски)

 			block = document.createElement("div"); // создаем новый блочный элемент по размеру клетки
 			mainBlock.appendChild(block); // добавляем внутрь родителя mainBlock новый элемент

 			coordinate = document.createElement("span"); // заготовка: создаем новый элемент типа span 
 			block.appendChild(coordinate); // ... и добавляем внутри родителя  block элемент типа span для вывода координат клетки (я пока не разобрался, как это сделать)


 			if (flag) block.className = "block black";
 			else block.className = "block white";
 			flag = !flag; // после каждого цикла флаг меняет значение на противоположный

 		} 

 	}

}

drawChess();

// дальше пока не разобрался