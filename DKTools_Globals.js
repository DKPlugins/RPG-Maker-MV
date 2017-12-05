/*
Title: Globals
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.1
Release: 02.12.2017
First release: 23.10.2017
Supported languages: Russian, English
*/

/*ru
Название: Глобальные данные
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.1
Релиз: 02.12.2017
Первый релиз: 23.10.2017
Поддерживаемые языки: Русский, Английский
*/

/*:
 * @plugindesc v.1.1 Saves variables and switches regardless of player saving
 * @author DK (Denis Kuznetsov)
 * @help

 ### Info about plugin ###
 Title: DKTools_Globals
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 1.1
 Release: 02.12.2017
 First release: 23.10.2017
 Supported languages: Russian, English
 Thank you for your support: https://dk-plugins.ru/donate

 ### Requirements and dependencies ###
 The presence of the included plugin DKTools version 0.992 or higher
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
 * @desc List of variables
 * @type variable[]
 * @default []

 * @param Switches
 * @desc List of switches
 * @type switch[]
 * @default []

*/

/*:ru
 * @plugindesc v.1.1 Сохраняет переменные и переключатели независимо от сохранения игрока
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKTools_Globals
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 1.1
 Релиз: 02.12.2017
 Первый релиз: 23.10.2017
 Поддерживаемые языки: Русский, Английский
 Спасибо за Вашу поддержку: https://dk-plugins.ru/donate

 ### Требования и зависимости ###
 Наличие включенного плагина DKTools версии 0.992 или выше
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
 * @desc Список переменных
 * @type variable[]
 * @default []

 * @param Switches
 * @text Переключатели
 * @desc Список переключателей
 * @type switch[]
 * @default []

*/

'use strict';

var Imported = Imported || {};
Imported.DKTools_Globals = 1.1;

if (Imported.DKTools) {
    DKTools.PluginManager.requirePlugin('DKTools', 0.992);
} else {
    throw new Error('No plugin "DKTools"! Plugin "DKTools_Globals" will not work!');
}

var GlobalsParam = new DKTools.ParameterManager('DKTools_Globals');

GlobalsParam._loadGlobals = false;

const Globals_Game_Variables_setValue = Game_Variables.prototype.setValue;
Game_Variables.prototype.setValue = function(variableId, value) {
    Globals_Game_Variables_setValue.call(this, variableId, value);
    if (GlobalsParam._loadGlobals) {
        return;
    }
    const variables = GlobalsParam.get('Variables');
    if (variables === variableId || DKTools.Utils.Array.contains(variables, variableId)) {
        DataManager.saveGlobals();
    }
};

const Globals_Game_Switches_setValue = Game_Switches.prototype.setValue;
Game_Switches.prototype.setValue = function(switchId, value) {
    Globals_Game_Switches_setValue.call(this, switchId, value);
    if (GlobalsParam._loadGlobals) {
        return;
    }
    const switches = GlobalsParam.get('Switches');
    if (switches === switchId || DKTools.Utils.Array.contains(switches, switchId)) {
        DataManager.saveGlobals();
    }
};

const Globals_DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
    Globals_DataManager_createGameObjects.call(this);
    this.loadGlobals();
};

DataManager.loadGlobals = function() {
    const file = new DKTools.IO.File('save/', 'globals.rpgsave');
    const result = file.load({
        decompress: true,
        parse: true,
        sync: true
    });
    if (result.status === DKTools.IO.OK) {
        const globals = result.data;
        if (globals) {
            GlobalsParam._loadGlobals = true;
            _.forEach(globals.variables, function(value, variableId) {
                $gameVariables.setValue(variableId, value);
            });
            _.forEach(globals.switches, function(value, switchId) {
                $gameSwitches.setValue(switchId, value);
            });
            GlobalsParam._loadGlobals = false;
        }
    }
};

DataManager.saveGlobals = function() {
    let variables = GlobalsParam.get('Variables');
    let switches = GlobalsParam.get('Switches');
    const data = { variables: {}, switches: {} };
    if (_.isFinite(variables)) {
        variables = [variables];
    }
    if (_.isFinite(switches)) {
        switches = [switches];
    }
    _.forEach(variables, function(variableId) {
        data.variables[variableId] = $gameVariables.value(variableId);
    });
    _.forEach(switches, function(switchId) {
        data.switches[switchId] = $gameSwitches.value(switchId);
    });

    const file = new DKTools.IO.File('save/', 'globals.rpgsave');
    file.save(data, {
        createDirectory: true,
        stringify: true,
        compress: true,
        sync: true
    });
};