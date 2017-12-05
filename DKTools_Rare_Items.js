/*
Title: Rare Items
Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 1.23
Release: 06.09.2016
First release: 19.11.2015
Supported languages: Russian, English
*/

/*ru
Название: Редкие Вещи
Автор: DK (Денис Кузнецов) (http://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 1.23
Релиз: 06.09.2016
Первый релиз: 19.11.2015
Поддерживаемые языки: Русский, Английский
*/

var DKLocalization = DKLocalization || {};

//===========================================================================
// Настройки плагина
// Plugin settings
//===========================================================================

/* Instruction

 Translation settings
 Plugin language: translation

 rarity - text for rare items
 Enter the titles of rarity across the comma in square brackets
 First title for rarity at number 1
 Example: item "Potion" have note <rarity: 1>
 Then item will be displayed like "Potion (Rare)"

 rarity_of_skills - text for rare skills
 Enter the titles of rarity across the comma in square brackets
 First title for rarity at number 1
 Example: skill "Double Attack" have note <rarity: 1>
 Then skill will be displayed like "Double Attack (Rare)"

 standard_rarity - standard text for items
 Items without specified of rarity by default have rarity at number 0
 If you turned on at settings display of standard rarity, then this text will be shown at item
 Example: item "Potion" without note or with this: <rarity: 0>
 Then item will be displayed like "Potion (Normal)"

*/

/*ru Инструкция

 Настройки перевода
 Язык плагина: перевод

 rarity - текст для редких предметов
 В квадратных скобках укажите названия редкости через запятую
 Первое название соответствует редкости под номером 1
 Пример: у предмета "Зелье" есть заметка <rarity: 1>
 Тогда предмет будет отображаться, как "Зелье (Редк.)"

 rarity_of_skills - текст для редких навыков
 В квадратных скобках укажите названия редкости через запятую
 Первое название соответствует редкости под номером 1
 Пример: у навыка "Двойная Атака" есть заметка <rarity: 1>
 Тогда навык будет отображаться, как "Двойная Атака (Редк.)"

 standard_rarity - стандартный текст для предметов
 Предметы, у которых не указана редкость по умолчанию имеет редкость под номером 0
 Если вы включили в настройках отображение стандартной редкости, то этот текст будет отображаться у предмета
 Пример: у предмета "Зелье" нет никакой заметки или есть такая: <rarity: 0>
 Тогда предмет будет отображаться, как "Зелье (Обычн.)"

*/

DKLocalization.DKCore_Rare_Items = {
	rarity: {
		ru: ['(Редк.)', '(Магич.)', '(Эпич.)', '(Лучш.)'],
		en: ['(Rare)', '(Magical)', '(Epic)', '(Best)']
	},
	rarity_of_skills: {
		ru: ['(Редк.)', '(Магич.)', '(Эпич.)', '(Лучш.)'],
		en: ['(Rare)', '(Magical)', '(Epic)', '(Best)']
	},
	standard_rarity: {
		ru: '(Обычн.)',
		en: '(Normal)'
	},
	DKCore_imported_error: {
		ru: 'Отсутствует плагин "DKCore"! Плагин "DKCore_Rare_Items" не будет работать!',
		en: 'No plugin "DKCore"! Plugin "DKCore_Rare_Items" will not work!'
	}
};

//===========================================================================
// Конец настройки плагина
// End of plugin settings
//===========================================================================

/*:
 * @plugindesc v.1.23 Rare items and skills
 * @author DK (Denis Kuznetsov)
 * @help
 
 ### Info about plugin ###
 Title: DKCore_Rare_Items
 Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
 Site: http://dk-plugins.ru
 Group in VK: http://vk.com/dkplugins
 Version: 1.23
 Release: 06.09.2016
 First release: 19.11.2015
 Supported languages: Russian, English
 
 ### Requirement for plugin ###
 Availability of working plugin DKCore version 1.8 or above
 
 ### Warning ###
 The plugin contains the translation settings in the file

 Be careful with downloading plugins to the project folder
 Some plugins have settings in his file
 At update this settings can be overwritten
 
 ### Instruction ###
 By default all items and skills have standard rarity
 A standard rarity have a white color and number 0
 Use notes of item or skills to set the rarity:
 <rarity: X>
 X - number of rarity
 
 To set individual color for item or skill just use note:
 <rarity color: X>
 X - number of color from window skin (message color) or hex format
 Example: <rarity color: 1>
 Example: <rarity color: #ffffff>

 To set individual text for item or skill just use note:
 <rarity text: X>
 X - text of rarity
 Example: <rarity text: (Magical)>
 
 To don't display text of rarity's for specific item or skill use the note:
 <no rarity text>

 Plugin commands:
 1. Change of rarity
 Rarity [type] [id] [rarity]
 [type] - type (item, weapon, armor or skill)
 [id] - ID of item or skill from Database
 [rarity] - new value of rarity
 Example: Rarity item 1 1
 Example: Rarity weapon 2 3

 2. Change of color
 RareColor [type] [id] [color]
 [type] - type (item, weapon, armor or skill)
 [id] - ID of item or skill from Database
 [color] - new color (number from window skin or hex format)
 Example: RareColor item 1 1
 Example: RareColor weapon 2 #ffffff

 3. Change of text
 RareText [type] [id] [text]
 [type] - type (item, weapon, armor or skill)
 [id] - ID of item or skill from Database
 [text] - new text
 Example: RareText item 1 1
 Example: RareText skill 3 #ffffff

 4. Turn on displaying the text of rarity
 ShowRareText [type] [id]
 [type] - type (item, weapon, armor or skill)
 [id] - ID of item or skill from Database
 Example: ShowRareText weapon 1

 5. Turn off displaying the text of rarity
 HideRareText [type] [id]
 [type] - type (item, weapon, armor or skill)
 [id] - ID of item or skill from Database
 Example: HideRareText armor 2
 
 For customizing text of rarity open the "DKCore_Rare_Items.js" file and change text inside "Plugin settings" and "End of plugin settings"
 
 Change language in all supported plugins
 In Event call the command of plugin: DKLocale [locale]
 [locale] - languages of the plugins (ru - russian, en - english)
 Example: DKLocale ru
 Example: DKLocale en
 
 ### For developers ###
 Change language in all supported plugins
 DKLocalizationManager.setLocale(locale);
 locale - plugin language (ru - russian, en - english)
 Example: DKLocalizationManager.setLocale('ru');
 Example: DKLocalizationManager.setLocale('en');
 
 ### License and terms of use for plugin ###
 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)
 
 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)
 
 * @param Colors of Rarity
 * @desc Set the color of rarity across the comma (number or hex). First color complies rarity at number 1
 * @default 4, 3, 2, #483d8b
 
 * @param Show Rarity
 * @desc Will be text of rarity displayed at title of item? (true or false)
 * @default true
 
 * @param Show Standard Rarity
 * @desc Will be text of rarity by number 0 displayed at title of item? (true or false)
 * @default false
 
*/

/*:ru
 * @plugindesc v.2.0 Редкость предметов и навыков
 * @author DK (Денис Кузнецов)
 * @help
 
 ### Информация о плагине ###
 Название: DKCore_Rare_Items
 Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
 Сайт: http://dk-plugins.ru
 Группа ВК: http://vk.com/dkplugins
 Версия: 2.0
 Релиз: 06.09.2016
 Первый релиз: 19.11.2015
 Поддерживаемые языки: Русский, Английский
 
 ### Требования к плагину ###
 Наличие включенного плагина DKCore версии 1.8 или выше
 
 ### Внимание ###
 Плагин содержит настройки перевода внутри файла

 Будьте внимательны при скачивании плагинов в папку проекта
 Некоторые плагины имеют настройки в самом файле
 При обновлении эти настройки могут быть перезаписаны
 
 ### Инструкция ###
 По умолчанию все предметы и навыки имеют стандартную редкость
 Для стандартной редкости установлен белый цвет
 Стандартная редкость имеет номер 0
 Используйте заметки предмета или навыка, чтобы указать редкость:
 <rarity: X>
 X - номер редкости предмета
 
 Чтобы установить индивидуальный цвет для предмета или навыка, используйте заметки:
 <rarity color: X>
 X - номер цвета из обложки окна (цвета сообщений) или hex формат
 Пример: <rarity color: 1>
 Пример: <rarity color: #ffffff>

 Чтобы установить индивидуальный текст для предмета или навыка, используйте заметки:
 <rarity text: X>
 X - текст редкости
 Пример: <rarity text: (Магический)>
 
 Чтобы не отображать текст редкости у определенного предмета или навыка, используйте заметки:
 <no rarity text>
 
 Команды плагина:
 1. Смена редкости
 Rarity [type] [id] [rarity]
 [type] - тип (item, weapon, armor или skill)
 [id] - ID предмета или навыка из Базы данных
 [rarity] - новое значение редкости
 Пример: Rarity item 1 1
 Пример: Rarity weapon 2 3
 
 2. Смена цвета
 RareColor [type] [id] [color]
 [type] - тип (item, weapon, armor или skill)
 [id] - ID предмета или навыка из Базы данных
 [color] - новый цвет (номер из обложки окна или hex формат)
 Пример: RareColor item 1 1
 Пример: RareColor weapon 2 #ffffff

 3. Смена текста
 RareText [type] [id] [text]
 [type] - тип (item, weapon, armor или skill)
 [id] - ID предмета или навыка из Базы данных
 [text] - новый текст
 Пример: RareText item 1 1
 Пример: RareText skill 3 #ffffff
 
 4. Включить отображение текста редкости
 ShowRareText [type] [id]
 [type] - тип (item, weapon, armor или skill)
 [id] - ID предмета или навыка из Базы данных
 Пример: ShowRareText weapon 1
 
 5. Выключить отображение текста редкости
 HideRareText [type] [id]
 [type] - тип (item, weapon, armor или skill)
 [id] - ID предмета или навыка из Базы данных
 Пример: HideRareText armor 2
 
 Для настройки текста редкости откройте "DKCore_Rare_Items.js" файл и измените настройки внутри "Настройки плагина" и "Конец настройки плагина"
 
 Смена языка у всех поддерживаемых плагинов
 В событии вызвать команду доп. модуля: DKLocale [locale]
 [locale] - Язык плагинов (ru - русский, en - английский)
 Пример: DKLocale ru
 Пример: DKLocale en
 
 ### Для разработчиков ###
 Смена языка у всех поддерживаемых плагинов
 DKLocalizationManager.setLocale(locale);
 locale - Язык плагинов (ru - русский, en - английский)
 Пример: DKLocalizationManager.setLocale('ru');
 Пример: DKLocalizationManager.setLocale('en');
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
 * @param Show Standard Rarity
 * @desc Отображать текст 0 редкости в названии предмета ? (true - да, false - нет)
 * @default false

 * @param Rarities
 * @type struct<Rarity>[]
 
*/

/*~struct~Rarity:ru

 * @param Show Text
 * @text Показать текст
 * @type boolean

 * @param Prefix
 * @text Префикс
 * @type struct<RarityData>[]

 * @param Suffix
 * @text Суффикс
 * @type struct<RarityData>[]

 * @param Color
 * @text Цвет
 * @desc Номер цвета из обложки или hex формат

 */

/*~struct~RarityData:ru

 * @param Locale
 * @text Язык
 * @desc Язык параметра

 * @param Data
 * @text Название

 */

var Imported = Imported || {};
Imported.DKTools_Rare_Items = 2.0;

if (!Imported.DKTools) {
    throw new Error('No plugin "DKTools"! Plugin "DKTools_Rare_Items" will not work!');
}

var RareItemsParam = new DKTools.ParameterManager('DKTools_Rare_Items');

//===========================================================================
// Data Manager
//===========================================================================

var Rare_Items_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
   	if (!Rare_Items_DataManager_isDatabaseLoaded.call(this)) {
   		return false;
   	}
   	// this.processRareItemsNotetags($dataItems);
   	// this.processRareItemsNotetags($dataWeapons);
   	// this.processRareItemsNotetags($dataArmors);
   	// this.processRareItemsNotetags($dataSkills);
   	return true;
};

DataManager.processRareItemsNotetags = function(database) {
	var rarity_regexp = /<\s*rarity\s*:\s*(\d+)\s*>/i;
	var message_color_regexp = /<\s*rarity\s*color:\s*(\d+)\s*>/i;
	var hex_color_regexp = /<\s*rarity\s*color:\s*(#\w{6})\s*>/i;
	var rarity_text_regexp = /<\s*rarity\s*text:\s*(.+)\s*>/i;
	var no_rarity_text_regexp = /<\s*no\s*rarity\s*text\s*>/i;
	for(var i = 1; i < database.length; i++) {
		var item = database[i];
		var notedata = item.note.split(/[\r\n]+/);
		item.rarity = 0;
		item.rarity_color = 0;
		item.rarity_text = '';
		item.show_rarity_text = true;
		for(var j = 0; j < notedata.length; j++) {
			var line = notedata[j];
			if (line.match(rarity_regexp)) {
				item.rarity = Number(RegExp.$1);
			}
			if (line.match(message_color_regexp)) {
				item.rarity_color = Number(RegExp.$1);
			}
			if (line.match(hex_color_regexp)) {
				item.rarity_color = RegExp.$1;
			}
			if (line.match(rarity_text_regexp)) {
				item.rarity_text = RegExp.$1;
			}
			if (line.match(no_rarity_text_regexp)) {
				item.show_rarity_text = false;
			}
			if (item.rarity !== 0 && item.rarity_color === 0) {
				var color = RareItemsParam.colors[item.rarity - 1];
				var number = Number(color);
				item.rarity_color = Number.isNaN(number) ? color : number;
			}
		}
	}
};

//===========================================================================
// Window Base
//===========================================================================

Window_Base.prototype.rarityColor = function(item) {
	if (item.rarity_color == null) {
		return this.normalColor();
	}
	if (item.rarity_color > 0 && item.rarity_color < 32) {
		return this.textColor(item.rarity_color);
	}
	if (item.rarity_color.constructor === String) {
		return item.rarity_color;
	}
	return this.normalColor();
};

Window_Base.prototype.rarityName = function(item) {
	if (!item.show_rarity_text) {
		return '';
	}
	if (item.rarity_text !== '') {
		return ' %1'.format(item.rarity_text);
	}
	if (item.rarity > 0 && RareItemsParam.show_rarity) {
		if (DataManager.isSkill(item)) {
			return DKLocalizationManager.DKCore_Rare_Items_Rarity(' #rarity_of_skills#', item.rarity - 1);
		} else {
			return DKLocalizationManager.DKCore_Rare_Items_Rarity(' #rarity#', item.rarity - 1);
		}
	}
	if (item.rarity === 0 && RareItemsParam.show_standard_rarity) {
		return DKLocalizationManager.DKCore_Rare_Items(' #standard_rarity#');
	}
	return '';
};

Window_Base.prototype.drawItemName = function(item, x, y, width) {
	if (!item) {
		return;
	}
    width = width || 312;
    var iconBoxWidth = Window_Base._iconWidth + 4;
    this.drawIcon(item.iconIndex, x + 2, y + 2);
    this.changeTextColor(this.rarityColor(item));
    this.drawText(item.name + this.rarityName(item), x + iconBoxWidth, y, width - iconBoxWidth);
	this.resetTextColor();
};

//===========================================================================
// Game Interpreter
//===========================================================================

var Rare_Items_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Rare_Items_Game_Interpreter_pluginCommand.call(this, command, args);
    // args[0] - type
    // args[1] - ID
    var database;
    var type = args[0] || '';
    var id = Number(args[1]);
    switch(type.toLowerCase()) {
        case 'item': {
            database = $dataItems;
            break;
        }
        case 'weapon': {
            database = $dataWeapons;
            break;
        }
        case 'armor': {
            database = $dataArmors;
            break;
        }
        case 'skill': {
            database = $dataSkills;
            break;
        }
    }
    if (command === 'Rarity') {
        database[id].rarity = Number(args[2]);
    }
    if (command === 'RareColor') {
        var item = database[id];
        var color = args[2];
        var number = Number(color);
        item.rarity_color = Number.isNaN(number) ? color : number;
    }
    if (command === 'RareText') {
        database[id].rarity_text = args[2];
    }
    if (command === 'ShowRareText') {
        database[id].show_rarity_text = true;
    }
    if (command === 'HideRareText') {
        database[id].show_rarity_text = false;
    }
}