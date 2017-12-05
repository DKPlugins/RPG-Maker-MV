/*
Title: New Game
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.0
Release: 31.07.2017
First release: 31.07.2017
Supported languages: Russian, English
*/

/*ru
Название: Новая Игра
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.0
Релиз: 31.07.2017
Первый релиз: 31.07.2017
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.1.0 New game settings
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools_New_Game
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 1.0
 Release: 31.07.2017
 First release: 31.07.2017
 Supported languages: Russian, English

 ### Requirements and dependencies ###
 Availability of working plugin DKTools version 0.97 or above
 Version of RPG Maker 1.5+

 ### License and terms of use ###

 Recent information about the terms of use: https://dk-plugins.ru/terms-of-use

 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

 * @param Variables
 * @desc Variables that will be changed at the beginning of the game
 * @type struct<Variable>[]
 * @default []

 * @param Switches
 * @desc Switches that will be changed at the beginning of the game
 * @type switch[]
 * @default []

 * @param Self Switches
 * @desc Self Switches that will be changed at the beginning of the game
 * @type struct<SelfSwitch>[]
 * @default []

 * @param Gold
 * @desc Gold, which the party will have at the beginning of the game
 * @type number
 * @min 0
 * @default 0

 * @param Items
 * @desc Items which the party will have at the beginning of the game
 * @type struct<Item>[]
 * @default []

 * @param Armors
 * @desc Armors which the party will have at the beginning of the game
 * @type struct<Armor>[]
 * @default []

 * @param Weapons
 * @desc Weapons which the party will have at the beginning of the game
 * @type struct<Weapon>[]
 * @default []

 */

/*:ru
 * @plugindesc v.1.0 Настройки новой игры
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKTools_New_Game
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 1.0
 Релиз: 31.07.2017
 Первый релиз: 31.07.2017
 Поддерживаемые языки: Русский, Английский

 ### Требования и зависимости ###
 Наличие включенного плагина DKTools версии 0.97 или выше
 Версия мейкера 1.5+

 ### Лицензия и правила использования плагина ###

 Актуальная информация о правилах использования: https://dk-plugins.ru/terms-of-use

 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

 * @param Variables
 * @text Переменные
 * @desc Переменные, которые будут изменены в начале игры
 * @type struct<Variable>[]
 * @default []

 * @param Switches
 * @text Переключатели
 * @desc Переключатели, которые будут изменены в начале игры
 * @type switch[]
 * @default []

 * @param Self Switches
 * @text Локальные переключатели
 * @desc Локальные переключатели, которые будут изменены в начале игры
 * @type struct<SelfSwitch>[]
 * @default []

 * @param Gold
 * @text Золото
 * @desc Золото, которое будет у партии в начале игры
 * @type number
 * @min 0
 * @default 0

 * @param Items
 * @text Предметы
 * @desc Предметы, которые будут у партии в начале игры
 * @type struct<Item>[]
 * @default []

 * @param Armors
 * @text Броня
 * @desc Броня, которая будет у партии в начале игры
 * @type struct<Armor>[]
 * @default []

 * @param Weapons
 * @text Оружие
 * @desc Оружие, которое будет у партии в начале игры
 * @type struct<Weapon>[]
 * @default []

 */

/*~struct~Variable:

 * @param Variable
 * @desc Variable ID
 * @type variable

 * @param Type
 * @text Type of value
 * @desc Type of value
 * @type select
 * @option Number
 * @option String
 * @default Number

 * @param Value
 * @text Value of variable
 * @desc Value of variable

 */

/*~struct~Variable:ru

 * @param Variable
 * @text Переменная
 * @desc Номер переменной
 * @type variable

 * @param Type
 * @text Тип значения
 * @desc Тип значения
 * @type select
 * @option Число
 * @value Number
 * @option Строка
 * @value String
 * @default Number

 * @param Value
 * @text Значение переменной
 * @desc Значение переменной

 */

/*~struct~SelfSwitch:

 * @param Map
 * @desc Map ID
 * @type number
 * @min 1

 * @param Event
 * @desc Event ID
 * @type number
 * @min 1

 * @param Switch A
 * @desc Turn on the switch ?
 * @type boolean
 * @default false

 * @param Switch B
 * @desc Turn on the switch ?
 * @type boolean
 * @default false

 * @param Switch C
 * @desc Turn on the switch ?
 * @type boolean
 * @default false

 * @param Switch D
 * @desc Turn on the switch ?
 * @type boolean
 * @default false

 */

/*~struct~SelfSwitch:ru

 * @param Map
 * @text Карта
 * @desc Номер карты
 * @type number
 * @min 1

 * @param Event
 * @text Событие
 * @desc Номер события
 * @type number
 * @min 1

 * @param Switch A
 * @text Переключатель А
 * @desc Включить переключатель ? true - да, false - нет
 * @type boolean
 * @default false

 * @param Switch B
 * @text Переключатель B
 * @desc Включить переключатель ? true - да, false - нет
 * @type boolean
 * @default false

 * @param Switch C
 * @text Переключатель C
 * @desc Включить переключатель ? true - да, false - нет
 * @type boolean
 * @default false

 * @param Switch D
 * @text Переключатель D
 * @desc Включить переключатель ? true - да, false - нет
 * @type boolean
 * @default false

 */

/*~struct~Item:

 * @param Item
 * @desc Added item
 * @type item
 * @default 0

 * @param Amount
 * @desc The amount of items to be added
 * @type number
 * @min 1
 * @default 1

 */

/*~struct~Item:ru

 * @param Item
 * @text Предмет
 * @desc Добавляемый предмет
 * @type item
 * @default 0

 * @param Amount
 * @text Количество
 * @desc Количество добавляемого предмета
 * @type number
 * @min 1
 * @default 1

 */

/*~struct~Armor:

 * @param Item
 * @text Armor
 * @desc Added armor
 * @type armor
 * @default 0

 * @param Amount
 * @desc The amount of armors to be added
 * @type number
 * @min 1
 * @default 1

 */

/*~struct~Armor:ru

 * @param Item
 * @text Броня
 * @desc Добавляемая броня
 * @type armor
 * @default 0

 * @param Amount
 * @text Количество
 * @desc Количество добавляемой брони
 * @type number
 * @min 1
 * @default 1

 */

/*~struct~Weapon:

 * @param Item
 * @text Weapon
 * @desc Added weapon
 * @type weapon
 * @default 0

 * @param Amount
 * @desc The amount of weapons to be added
 * @type number
 * @min 1
 * @default 1

 */

/*~struct~Weapon:ru

 * @param Item
 * @text Оружие
 * @desc Добавляемое оружие
 * @type weapon
 * @default 0

 * @param Amount
 * @text Количество
 * @desc Количество добавляемого оружия
 * @type number
 * @min 1
 * @default 1

 */

var Imported = Imported || {};
Imported.DKTools_New_Game = 1.0;

if (Imported.DKTools) {
	DKTools.PluginManager.requirePlugin('DKTools', 0.97);
} else {
    throw new Error('No plugin "DKTools"! Plugin "DKTools_New_Game" will not work!');
}

var NewGameParam = new DKTools.ParameterManager('DKTools_New_Game');

//=============================================================================
// Data Manager
//=============================================================================

DataManager.initNewGameVariables = function() {
	_.forEach(NewGameParam.get('Variables'), function(object) {
		var varId = object.Variable;
		if (varId > 0) {
			var value = object.Value;
			if (object.Type === 'Number') {
				value = Number(value);
			}
			$gameVariables.setValue(varId, value);
		}
    });
};

DataManager.initNewGameSwitches = function() {
	_.forEach(NewGameParam.get('Switches'), function(switchId) {
		if (switchId > 0) {
			$gameSwitches.setValue(switchId, true);
		}
    })
};

DataManager.initNewGameSelfSwitches = function() {
	_.forEach(NewGameParam.get('Self Switches'), function(object) {
		var mapId = object.Map;
		var eventId = object.Event;
		var switches = [
			{
				Switch: 'A',
				Value: object['Switch A']
			},
			{
				Switch: 'B',
				Value: object['Switch B']
			},
            {
                Switch: 'C',
                Value: object['Switch C']
            },
            {
                Switch: 'D',
                Value: object['Switch D']
            }
		];
		_.forEach(switches, function(obj) {
			var key = [mapId, eventId, obj.Switch];
            $gameSelfSwitches.setValue(key, obj.Value);
        });
    });
};

DataManager.initNewGameAllItems = function(items, database) {
	_.forEach(items, function(object) {
		var itemId = object.Item;
		if (itemId > 0) {
            var item = database[itemId];
            if (item) {
            	var amount = object.Amount;
                $gameParty.gainItem(item, amount);
			}
		}
    });
};

DataManager.initNewGameSettings = function() {
	this.initNewGameVariables();
	this.initNewGameSwitches();
	this.initNewGameSelfSwitches();
	$gameParty.gainGold(NewGameParam.get('Gold'));
	this.initNewGameAllItems(NewGameParam.get('Items'), $dataItems);
	this.initNewGameAllItems(NewGameParam.get('Armors'), $dataArmors);
	this.initNewGameAllItems(NewGameParam.get('Weapons'), $dataWeapons);
};

var New_Game_Settings_DataManager_setupNewGame = DataManager.setupNewGame;
DataManager.setupNewGame = function() {
	New_Game_Settings_DataManager_setupNewGame.call(this);
	this.initNewGameSettings();
};