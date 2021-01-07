#### Событие – это сигнал от браузера о том, что что-то произошло, например, клик мыши, двойной клик мыши, отправка формы, прокрутка окна и тд
У каждого такого события есть название, каждое событие мы можем обработать на стороне js,  чтобы при наступлении того или иного события происходило то, что нам нужно

#### Список наиболее распростроненных событий:
1. События мыши:
   1. click - одинарный щелчок (нажата и отпущена кнопка мыши)
   2. dblclick - двойной щелчок
   3. contextmenu - щелчок правой кнопкой мыши на элементе
   4. selectstart - начало выделения контента
   5. mousemove - перемещение курсора мыши в пределах текущего элемента
   6. mouseout - курсор мыши выведен за пределы текущего элемента
   7. mouseover - курсор мыши наведен на текущий элемент
   8. mouseup - отпущена кнопка мыши в пределах текущего элемента
   9. mousedown - нажата кнопка мыши в пределах текущего элемента

2. События клавиатуры:
   1. keydown - нажата клавиша на клавиатуре
   2. keypress - нажата и отпущена клавиша на клавиатуре
   3. keyup - отпущена клавиша на клавиатуре
   
3. События формы и ее элементов:
   1. focus - получение элементом фокуса (щелчок мышью на элементе или нажатие клавиши табуляции)
   2. blur - потеря текущим элементом фокуса, т.е. переход к другому элементу. Возникает при щелчке мышью вне элемента либо нажатии клавиши табуляции
   3. change - изменение значений элементов формы. Возникает после потери элементом фокуса, т.е. после события blur
   4. reset - сброс данных формы ( щелчок по кнопке type="reset"). Данное событие - событие формы!
   5. submit - отправка данных формы ( щелчок по кнопке type="submit"). Данное событие - событие формы!
   6. select - выделение текста в текущем элементе
   
4.  События окна браузера:
    1. load - закончена загрузка документа
    2. move - перемещение окна
    3. resize - изменение размеров окна
    4. scroll - прокрутка окна или области
   
   