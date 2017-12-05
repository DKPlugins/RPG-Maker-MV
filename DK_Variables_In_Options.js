/*
Title: Variables in Options
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.0
Release: 06.11.2017
First release: 06.11.2017
Supported languages: Russian, English
*/

/*ru
Название: Переменные в Опциях
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.0
Релиз: 06.11.2017
Первый релиз: 06.11.2017
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.1.0 Adds variables to options
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DK_Variables_In_Options
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 1.0
 Release: 06.11.2017
 First release: 06.11.2017
 Supported languages: Russian, English

 ### License and terms of use ###

 Recent information about the terms of use: https://dk-plugins.ru/terms-of-use

 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

 * @param Variables
 * @desc Variables
 * @type struct<Variable>[]
 * @default []

 * @param Order
 * @desc Order of options
 * @type select[]
 * @value Always Dash
 * @value Remember Command
 * @value Variables
 * @value BGM Volume
 * @value BGS Volume
 * @value ME Volume
 * @value SE Volume
 * @option Other (Options of other plugins)
 * @value Other
 * @default ["Always Dash","Remember Command","Variables","Other","BGM Volume","BGS Volume","ME Volume","SE Volume"]


*/

/*:ru
* @plugindesc v.1.0 Добавляет переменные в опции
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DK_Variables_In_Options
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 1.0
 Релиз: 06.11.2017
 Первый релиз: 06.11.2017
 Поддерживаемые языки: Русский, Английский

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
 * @desc Переменные
 * @type struct<Variable>[]
 * @default []

 * @param Order
 * @text Очередь
 * @desc Очередь опций
 * @type select[]
 * @option Персонаж всегда бежит
 * @value Always Dash
 * @option Запомнить команду
 * @value Remember Command
 * @option Переменные
 * @value Variables
 * @option Уровень громкости BGM
 * @value BGM Volume
 * @option Уровень громкости BGS
 * @value BGS Volume
 * @option Уровень громкости ME
 * @value ME Volume
 * @option Уровень громкости SE
 * @value SE Volume
 * @option Другое (Опции других плагинов)
 * @value Other
 * @default ["Always Dash","Remember Command","Variables","Other","BGM Volume","BGS Volume","ME Volume","SE Volume"]

*/

/*~struct~Variable:

 * @param Text
 * @text Option text
 * @desc Option text
 * @default

 * @param Variable
 * @text Option variable
 * @desc Option variable
 * @type variable
 * @default 0

 * @param Default Value
 * @desc Default value
 * @type number
 * @min -10000
 * @max 10000
 * @default 0

 * @param Change Step
 * @desc Change step of variable
 * @type number
 * @min 1
 * @default 1

 * @param Min Value
 * @desc Minimum value
 * @type number
 * @min -10000
 * @max 10000
 * @default 0

 * @param Max Value
 * @desc Maximum value
 * @type number
 * @min -10000
 * @max 10000
 * @default 100

 * @param Visibility Switch
 * @desc Switch that controls the visibility of the option
 * @type switch
 * @default 0

 */

/*~struct~Variable:ru

 * @param Text
 * @text Текст опции
 * @desc Текст опции
 * @default

 * @param Variable
 * @text Переменная опции
 * @desc Переменная опции
 * @type variable
 * @default 0

 * @param Default Value
 * @text Значение по умолчанию
 * @desc Значение по умолчанию
 * @type number
 * @min -10000
 * @max 10000
 * @default 0

 * @param Change Step
 * @text Шаг изменения
 * @desc Шаг изменения переменной
 * @type number
 * @min 1
 * @default 1

 * @param Min Value
 * @text Минимальное значение
 * @desc Минимальное значение
 * @type number
 * @min -10000
 * @max 10000
 * @default 0

 * @param Max Value
 * @text Максимальное значение
 * @desc Максимальное значение
 * @type number
 * @min -10000
 * @max 10000
 * @default 100

 * @param Visibility Switch
 * @text Переключатель видимости
 * @desc Переключатель, который управляет видимостью опции
 * @type switch
 * @default 0

 */

'use strict';

var Imported = Imported || {};
Imported.DK_Variables_In_Options = 1.0;

/**
 * @type {Variables: Object[], Order: String[]}
 */
var VariablesInOptionsParam = (function() {
    function parse(string) {
        try {
            return JSON.parse(string, function(key, value) {
                try {
                    return parse(value);
                } catch (e) {
                    return value;
                }
            });
        } catch(e) {
            return string;
        }
    };

    const params = PluginManager.parameters('DK_Variables_In_Options');

    return {
        Variables: parse(params['Variables']),
        Order: parse(params['Order'])
    };
})();

//===========================================================================
// Window_Options
//===========================================================================

const Variables_In_Options_Window_Options_addCommand = Window_Options.prototype.addCommand;
Window_Options.prototype.addCommand = function(name, symbol, enabled, ext) {
    const index = this.findSymbol(symbol);
    if (index === -1) {
        Variables_In_Options_Window_Options_addCommand.apply(this, arguments);
    }
};

/**
 * Возвращает ext команды по ее индексу
 *
 * @param {Number} index - Индекс
 * @returns {* | null}
 */
Window_Options.prototype.commandExt = function(index) {
    return this._list[index] ? this._list[index].ext : null;
};

const Variables_In_Options_Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
    for (const order of VariablesInOptionsParam.Order) {
        switch (order) {
            case 'Always Dash':
                this.addCommand(TextManager.alwaysDash, 'alwaysDash');
                break;
            case 'Remember Command':
                this.addCommand(TextManager.commandRemember, 'commandRemember');
                break;
            case 'Variables':
                this.addVariables();
                break;
            case 'Other':
                Variables_In_Options_Window_Options_makeCommandList.call(this);
                break;
            case 'BGM Volume':
                this.addCommand(TextManager.bgmVolume, 'bgmVolume');
                break;
            case 'BGS Volume':
                this.addCommand(TextManager.bgsVolume, 'bgsVolume');
                break;
            case 'ME Volume':
                this.addCommand(TextManager.meVolume, 'meVolume');
                break;
            case 'SE Volume':
                this.addCommand(TextManager.seVolume, 'seVolume');
                break;
        }
    }
};

Window_Options.prototype.addVariables = function() {
    let index = 0;
    for (const param of VariablesInOptionsParam.Variables) {
        const visibilitySwitch = param['Visibility Switch'];
        const isVisible = !visibilitySwitch || visibilitySwitch > 0 && $gameSwitches.value(visibilitySwitch);
        if (param.Variable > 0 && isVisible) {
            this.addCommand(param.Text, 'variable' + index, true, param);
            index++;
        }
    }
};

const Variables_In_Options_Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
    const symbol = this.commandSymbol(index);
    if (this.isVariableSymbol(symbol)) {
        return this.getConfigValue(symbol);
    }
    return Variables_In_Options_Window_Options_statusText.call(this, index);
};

Window_Options.prototype.isVariableSymbol = function(symbol) {
    return symbol.indexOf('variable') >= 0;
};

const Variables_In_Options_Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
    const symbol = this.currentSymbol();
    if (this.isVariableSymbol(symbol)) {
        const ext = this.currentExt();
        let value = this.getConfigValue(symbol);
        value += ext['Change Step'];
        value = value.clamp(ext['Min Value'], ext['Max Value']);
        this.changeValue(symbol, value);
    } else {
        Variables_In_Options_Window_Options_processOk.call(this);
    }
};

const Variables_In_Options_Window_Options_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
    const symbol = this.currentSymbol();
    if (this.isVariableSymbol(symbol)) {
        const ext = this.currentExt();
        let value = this.getConfigValue(symbol);
        value += ext['Change Step'];
        value = value.clamp(ext['Min Value'], ext['Max Value']);
        this.changeValue(symbol, value);
    } else {
        Variables_In_Options_Window_Options_cursorRight.call(this, wrap);
    }
};

const Variables_In_Options_Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
    const symbol = this.currentSymbol();
    if (this.isVariableSymbol(symbol)) {
        const ext = this.currentExt();
        let value = this.getConfigValue(symbol);
        value -= ext['Change Step'];
        value = value.clamp(ext['Min Value'], ext['Max Value']);
        this.changeValue(symbol, value);
    } else {
        Variables_In_Options_Window_Options_cursorLeft.call(this, wrap);
    }
};

const Variables_In_Options_Window_Options_changeValue = Window_Options.prototype.changeValue;
Window_Options.prototype.changeValue = function(symbol, value) {
    if (this.isVariableSymbol(symbol)) {
        const lastValue = this.getConfigValue(symbol);
        if (value !== lastValue) {
            this.setConfigValue(symbol, value);
            this.redrawCurrentItem();
            SoundManager.playCursor();
        }
    } else {
        Variables_In_Options_Window_Options_changeValue.call(this, symbol, value);
    }
};

const Variables_In_Options_Window_Options_getConfigValue = Window_Options.prototype.getConfigValue;
Window_Options.prototype.getConfigValue = function(symbol) {
    if (this.isVariableSymbol(symbol)) {
        const index = this.findSymbol(symbol);
        const ext = this.commandExt(index);
        if (ext) {
            return $gameVariables.value(ext.Variable);
        }
        return 0;
    }
    return Variables_In_Options_Window_Options_getConfigValue.call(this, symbol);
};

const Variables_In_Options_Window_Options_setConfigValue = Window_Options.prototype.setConfigValue;
Window_Options.prototype.setConfigValue = function(symbol, value) {
    if (this.isVariableSymbol(symbol)) {
        const index = this.findSymbol(symbol);
        const ext = this.commandExt(index);
        if (ext) {
            $gameVariables.setValue(ext.Variable, value);
        }
    } else {
        Variables_In_Options_Window_Options_setConfigValue.call(this, symbol, value);
    }
};

//===========================================================================
// DataManager
//===========================================================================

const Variables_In_Options_DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
    Variables_In_Options_DataManager_createGameObjects.call(this);
    ConfigManager.load();
};

//===========================================================================
// ConfigManager
//===========================================================================

const Variables_In_Options_ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
    const config = Variables_In_Options_ConfigManager_makeData.call(this);
    for (const param of VariablesInOptionsParam.Variables) {
        const variableId = param.Variable;
        if (variableId > 0) {
            config['Variable_%1_%2'.format(param.Text, param.Variable)] = $gameVariables.value(variableId);
        }
    }
    return config;
};

const Variables_In_Options_ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    Variables_In_Options_ConfigManager_applyData.call(this, config);
    if (!$gameVariables) {
        return;
    }
    for (const param of VariablesInOptionsParam.Variables) {
        const variableId = param.Variable;
        if (variableId > 0) {
            $gameVariables.setValue(param.Variable, this.readVariable(config, param));
        }
    }
};

ConfigManager.readVariable = function(config, param) {
    const value = config['Variable_%1_%2'.format(param.Text, param.Variable)];
    return value !== undefined ? value : param['Default Value'];
};