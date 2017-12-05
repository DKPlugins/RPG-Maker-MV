/*
#############################################################################
#                                                                           #
#          					Random NPC Graphic   	  			    		#
#                                                                           #
#############################################################################

Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Группа ВК: http://vk.com/rpgmakervxaceandmv
Версия: 1.1
Релиз: 07.11.2015
Первый релиз: 30.10.2015
*/

/*:
 * @plugindesc Случайная графика у событий
 * @author DK (Денис Кузнецов)
 * @help
 
 ### Информация о плагине ###
 Название: DK_Random_NPC_Graphic
 Автор: DK
 Сайт: http://vk.com/rpgmakervxaceandmv
 Версия: 1.1
 Релиз: 07.11.2015
 Первый релиз: 30.10.2015
 
 ### Требования к плагину ###
 Требований нет
 
 ### Инструкция ###
 В комментарии события напишите "NPC GRAPHIC - " без ковычек, потом название
 чарсета, заканчивающееся .char, затем в скобках перечислите номера чаров, которые хотите 
 использовать для эвента, также после этого вы можете указать (не обязательно)
 направление эвента (куда он смотрит) - используйте после .char .dir(), где в
 скобках укажите направление 2, 4, 6, 8
 Например: NPC GRAPHIC - Actor2.char(123).dir(4) это приведет к тому, что каждый раз при 
 переходе на карту, где стоит эвент, его графика будет меняться случайным образом, 
 то есть будет выбран чарсет Actor2 и случайный номер(либо 1, либо 2, либо 3) и у
 него будет направление 4.
 Учтите, что нумеровка чаров начинается с 0.
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
 */
 
var Imported = Imported || {};
Imported.DK_Random_NPC_Graphic = true;

var Random_NPC_Graphic_Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
Game_Event.prototype.setupPageSettings = function() {
	Random_NPC_Graphic_Game_Event_setupPageSettings.call(this);
	var char_name = []; // массив названий чаров
	var char_ind = []; // массив индексов чаров
	var char_dir = []; // массив направлений чаров
	var list = this.list();
	for(var i = 0; i < list.length; i++)
	{
		var command = list[i];
		if (command.code === 108 || command.code === 408)
		{
			if (command.parameters[0].match(/NPC[\w\s]*GRAPHIC[\s]*-[\s]*([а-яА-я\w\d\s\!\$\.\,\(\)]+).char/i) != null)
				char_name.push(RegExp.$1);
			if (command.parameters[0].match(/.char\(([\d]+)\)/i) != null)
				char_ind.push(RegExp.$1);
			if (command.parameters[0].match(/.dir\(([\d]+)\)/i) != null)
				char_dir.push(RegExp.$1);
		}
	}
	var name_length = char_name.length;
	var ind_length = char_ind.length;
	if (name_length === 0 || ind_length === 0) return;
	var char_name_rand = Math.randomInt(name_length); // выбираем случайный чар из массива имен
	var index_array = char_ind[char_name_rand]; // массив индексов, выбранного выше названия чара
	var index_rand = Math.randomInt(index_array.length); // случайный индекс из массива индексов, выбранного выше
	if (char_dir[char_name_rand] != null) // если у выбранного чара есть направления
	{
		var direction_array = char_dir[char_name_rand]; // массив направлений для выбранного чара
		var direction = direction_array[Math.randomInt(direction_array.length)]; // случайное направление из массива выше
	}
	this.setImage(char_name[char_name_rand], Number(index_array[index_rand]));
	if (direction != null) // если было указано направление чара
	{
		if (this._originalDirection !== direction) 
		{
			this._originalDirection = direction;
			this._prelockDirection = 0;
			this.setDirectionFix(false);
			this.setDirection(direction);
		}
	}
};