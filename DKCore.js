/*
Title: DKCore
Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 1.81
Release: 13.09.2016
First release: 26.10.2015
Supported languages: Russian, English
*/

/*ru
Название: Ядро DKCore
Автор: DK (Денис Кузнецов) (http://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 1.81
Релиз: 13.09.2016
Первый релиз: 26.10.2015
Поддерживаемые языки: Русский, Английский
*/

var DKLocalization = DKLocalization || {};

//===========================================================================
// Plugin settings
// Настройки плагина
//===========================================================================

/* Instruction

 Translation settings
 Plugin language: translation

*/

/*ru Инструкция

 Настройки перевода
 Язык плагина: перевод

*/

DKLocalization.DKCore = {
	update_required: {
		ru: 'Требуется обновить плагин "DKCore" до минимальной версии',
		en: 'Required to update the plugin "DKCore" to minimal version'
	},
	checking_for_updates: {
		ru: 'Проверка обновлений',
		en: 'Checking for updates'
	},
	locale: {
		ru: 'Локаль',
		en: 'Locale'
	},
	beta_version: {
		ru: 'BETA версия',
		en: 'BETA version'
	},
	all_plugins: {
		ru: 'Все плагины',
		en: 'All plugins'
	},
	installed: {
		ru: 'Установленные',
		en: 'Installed'
	},
	not_installed: {
		ru: 'Нет',
		en: 'No'
	},
	installed_version: {
		ru: 'Установлено',
		en: 'Installed'
	},
	available_version: {
		ru: 'Доступно',
		en: 'Available'
	},
	correct_version: {
		ru: 'Обновление не требуется!',
		en: 'Update is not required!'
	},
	incorrect_version: {
		ru: 'Требуется обновление!',
		en: 'Update required!'
	},
	description: {
		ru: 'Описание',
		en: 'Description'
	},
	supported_languages: {
		ru: 'Поддерживаемые языки',
		en: 'Supported languages'
	},
	warning: {
		ru: 'Внимание!',
		en: 'Warning!'
	},
	settings: {
		ru: 'Данный плагин содержит настройки внутри файла!\nБудьте внимательны при замене файла новой версией',
		en: 'This plugin contains the settings in the file!\nBe careful when changing the file a new version'
	},
	urls: {
		ru: 'Ссылки',
		en: 'Links'
	},
	site: {
		ru: 'Сайт',
		en: 'Site'
	},
	plugin_count: {
		ru: 'Количество плагинов',
		en: 'Plugin count'
	},
	changelog: {
		ru: 'Список изменений',
		en: 'Changelog'
	},
	download: {
		ru: 'Скачать',
		en: 'Download'
	},
	download_beta: {
		ru: 'Скачать BETA',
		en: 'Download BETA'
	},
	group_in_vk: {
		ru: 'Группа ВК',
		en: 'Group in VK'
	},
	light_zone: {
		ru: 'Светлая зона',
		en: 'Light zone'
	},
	neutral_zone: {
		ru: 'Нейтральная полоса',
		en: 'Neutral zone'
	},
	cancel: {
		ru: 'Назад',
		en: 'Back'
	},
	new_version: {
		ru: 'Доступна новая версия для плагина',
		en: 'Available a new version for plugin'
	}
};

//===========================================================================
// End of plugin settings
// Конец настройки плагина
//===========================================================================

/*:
 * @plugindesc v.1.81 Required for the other plugins from author DK and to checking for update
 * @author DK (Denis Kuznetsov)
 * @help

 ### Info about plugin ###
 Title: DKCore
 Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
 Site: http://dk-plugins.ru
 Group in VK: http://vk.com/dkplugins
 Version: 1.81
 Release: 13.09.2016
 First release: 26.10.2015
 Supported languages: Russian, English
 
 ### Warning ###
 The plugin contains the translation settings in the file
 
 Be careful with downloading plugins to the project folder
 Some plugins have settings in his file
 At update this settings can be overwritten
 
 To checking of update you need internet
 
 ### Instruction ###
 1. Checking for updates
 In Event call the command of plugin: DKUpdates
 
 2. Change language in all supported plugins
 In Event call the command of plugin: DKLocale [locale]
 [locale] - Languages of the plugins (ru - russian, en - english)
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
 
 * @param Plugin Language
 * @desc Plugin language (ru - russian, en - english)
 * @default en
 
 * @param Automatic Update Checking
 * @desc Automatic update checking (true or false)
 The information output at console
 * @default false
 
 * @param Open Console
 * @desc Open a debug console (true or false)
 * @default false

*/

/*:ru
 * @plugindesc v.1.81 Требуется для других плагинов от автора DK и для проверки обновлений
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKCore
 Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
 Сайт: http://dk-plugins.ru
 Группа ВК: http://vk.com/dkplugins
 Версия: 1.81
 Релиз: 13.09.2016
 Первый релиз: 26.10.2015
 Поддерживаемые языки: Русский, Английский
 
 ### Внимание ###
 Плагин содержит настройки перевода внутри файла
 
 Будьте внимательны при скачивании плагинов в папку проекта
 Некоторые плагины имеют настройки в самом файле
 При обновлении эти настройки могут быть перезаписаны
 
 Для проверки обновлений требуется интернет
 
 ### Инструкция ###
 1. Проверка обновлений
 В событии вызвать команду доп. модуля: DKUpdates
 
 2. Смена языка у всех поддерживаемых плагинов
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
 
 * @param Plugin Language
 * @desc Язык плагина (ru - русский, en - английский)
 * @default ru
 
 * @param Automatic Update Checking
 * @desc Автоматическая проверка обновлений (true - да, false - нет)
 Информация выводится в консоль
 * @default false
 
 * @param Open Console
 * @desc Открыть отладочную консоль (true - да, false - нет)
 * @default false

*/

var Imported = Imported || {};
Imported.DKCore = true;

var DKVersion = DKVersion || {};
DKVersion.DKCore = 1.81;

var DKCoreVersion = DKCoreVersion || {};

var DKCoreParam = {};
DKCoreParam.param = PluginManager.parameters('DKCore');

var DKLocale 							= DKLocale || DKCoreParam.param['Plugin Language'];

DKCoreParam.automatic_update_checking 	= DKCoreParam.param['Automatic Update Checking'];
DKCoreParam.open_console 				= DKCoreParam.param['Open Console'];

//===========================================================================
// DK Localization Manager
//===========================================================================

var DKLocalizationManager = DKLocalizationManager || null;

if (!DKLocalizationManager) {

	DKLocalizationManager = function () {
		throw new Error('This is a static class (Это статический класс!)');
	};

	DKLocalizationManager.setLocale = function(locale) {
		if (DKLocale === locale) {
			return false;
		}
		DKLocale = locale;
		ConfigManager.save();
		this.onLocaleChange(DKLocale);
		return true;
	};

	DKLocalizationManager.onLocaleChange = function() {
	};

	DKLocalizationManager.translation = function (plugin, param) {
		var plugin_localization = DKLocalization[plugin];
		var locale = DKLocale;
		if (!plugin_localization) {
			var error = 'undefined plugin: "%1"'.format(plugin);
			throw new Error(error);
		}
		var param_translation = plugin_localization[param];
		if (!param_translation) {
			var error = '%1: undefined parameter: "%2"'.format(plugin, param);
			throw new Error(error);
		}
		var result = param_translation[locale];
		if (!result) {
			var error = '%1: undefined locale: "%2"'.format(plugin, locale);
			throw new Error(error);
		}
		return result;
	};

	DKLocalizationManager.format = function (string, params) {
		return string.replace(/%([0-9]+)/g, function (s, n) {
			return params[Number(n) - 1];
		});
	};

	DKLocalizationManager.parser = function (plugin, match, param) {
		return this.translation(plugin, param);
	};

	DKLocalizationManager.arrayParser = function (plugin, index, match, param) {
		return this.translation(plugin, param)[index] || '';
	};

	//===========================================================================
	// Config Manager
	//===========================================================================

	var DKCore_ConfigManager_makeData = ConfigManager.makeData;
	ConfigManager.makeData = function() {
		var config = DKCore_ConfigManager_makeData.call(this);
		config.DKLocale = DKLocale;
		return config;
	};

	var DKCore_ConfigManager_applyData = ConfigManager.applyData;
	ConfigManager.applyData = function(config) {
		DKCore_ConfigManager_applyData.call(this, config);
		DKLocale = this.readDKLocale(config);
	};

	ConfigManager.readDKLocale = function(config) {
		return config.DKLocale ? config.DKLocale : DKLocale;
	};
}

var DKCore_DKLocalizationManager_onLocaleChange = DKLocalizationManager.onLocaleChange;
DKLocalizationManager.onLocaleChange = function(locale) {
	DKCore_DKLocalizationManager_onLocaleChange.call(this, locale);
	var scene = SceneManager._scene;
	if (scene && scene instanceof Scene_DKUpdates) {
		scene.onLocaleChange();
	}
};

DKLocalizationManager.DKCore = function (string, params) {
	var plugin = 'DKCore';
	string = string.replace(/#([^#]+)#/g, this.parser.bind(this, plugin));
	return this.format(string, params);
};

//===========================================================================
// DK Core
//===========================================================================

function DKCore() {
	throw new Error('This is a static class (Это статический класс!)');
}

DKCore.debug = false;

DKCore.boolean = {};
DKCore.boolean.ru = ['нет', 'выключить', 'выкл', 'отключить', 'ложь', 'убрать'];
DKCore.boolean.en = ['false', 'disable', 'deactivate', 'no', 'not', 'off'];

DKCore.booleanArray = function() {
    var array = [];
    for(var locale in DKCore.boolean) {
        array = array.concat(DKCore.boolean[locale]);
    }
    return array;
};

DKCore.toBool = function(value) {
	if (value == null) {
        return false;
    }
    if (Number(value) === 0) {
        return false;
    }
	value = value.toLowerCase();
	var array = this.booleanArray();
	for(var i = 0; i < array.length; i++) {
		if (array[i] === value) {
			return false;
		}
	}
	return true;
};

DKCore.SplitString = function(string) {
	string = string.replace(/\s*\,\s*/g, ',');
	return string.split(',');
};

DKCore.StringToNumberArray = function(object) {
	if (object === '') {
		return [];
	}
	if (object.constructor === String) {
		object = this.SplitString(object);
	}
	return object.map(function(value) {
		return Number(value);
	});
};

DKCore.StringToBoolArray = function(object) {
	if (object === '') {
		return [];
	}
	if (object.constructor === String) {
		object = this.SplitString(object);
	}
	return object.map(function(value) {
		return DKCore.toBool(value);
	});
};

DKCore.StringToFontArray = function(font) {
	var standard_font_array = this.standardFontArray();
	if (font === '') {
		return standard_font_array;
	}
	if (font.constructor === String) {
		font = this.SplitString(font);
	}
	if (font.length === 0) {
		return standard_font_array;
	}
	var array = [];
	if (font[0] !== '-1') {
		array[0] = font[0];
	} else {
		array[0] = standard_font_array[0];
	}
	array[1] = this.toBool(font[1]);
	if (font[2] !== '-1') {
		array[2] = Number(font[2]);
	} else {
		array[2] = standard_font_array[2];
	}
	return array;
};

DKCore.standardFontName = function() {
	return 'GameFont';
};

DKCore.standardFontItalic = function() {
	return false;
};

DKCore.standardFontSize = function() {
	return 28;
};

DKCore.standardFontArray = function() {
	return [this.standardFontName(), this.standardFontItalic(), this.standardFontSize()];
};

DKCore.MinMaxValue = function(min, max, value) {
	return Math.min(max, Math.max(min, value));
};

DKCore.CloneObject = function(originalObject, circular) {
    var propertyIndex, descriptor, keys, current, nextSource, indexOf;
	var copies = [{ source: originalObject, target: Object.create(Object.getPrototypeOf(originalObject))}],
        cloneObject = copies[0].target, sourceReferences = [originalObject], targetReferences = [cloneObject];
    while(current = copies.shift()) {
        keys = Object.getOwnPropertyNames(current.source);
        for(propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
            descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
            if (!descriptor.value || typeof descriptor.value !== 'object') {
                Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                continue;
            }
            nextSource = descriptor.value;
            descriptor.value = Array.isArray(nextSource) ? [] : Object.create(Object.getPrototypeOf(nextSource));
            if (circular) {
                indexOf = sourceReferences.indexOf(nextSource);
                if (indexOf !== -1)
                {
                    descriptor.value = targetReferences[indexOf];
                    Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                    continue;
                }
                sourceReferences.push(nextSource);
                targetReferences.push(descriptor.value);
            }
            Object.defineProperty(current.target, keys[propertyIndex], descriptor);
            copies.push({source: nextSource, target: descriptor.value});
        }
    }
    return cloneObject;
};

DKCore.setupWindow = function(window, preset, windowskin) {
	if (!window || !preset) return;
	if (!windowskin) windowskin = preset.windowskin;
	if (windowskin && windowskin !== '-1')
		window.windowskin = ImageManager.loadSystem(windowskin);
	var opacity = preset.opacity;
	if (opacity && opacity.constructor === Array && opacity.length === 3)
	{
		if (opacity[0] !== -1) window.opacity = opacity[0];
		if (opacity[1] !== -1) window.contentsOpacity = opacity[1];
		if (opacity[2] !== -1) window.backOpacity = opacity[2];
	}
	var tone = preset.tone;
	if (tone && tone.constructor === Array && tone.length === 3)
	{
		window.setTone(tone[0], tone[1], tone[2]);
		window.updateTone = function() { };
	}
	this.removeWindowFrame(window, preset.frameless);
};

DKCore.setupFont = function(window, font) {
	if (!window) {
		return;
	}
	font = font || this.standardFontArray();
	window.contents.fontFace = font[0];
	window.contents.fontItalic = font[1];
	window.contents.fontSize = font[2];
};

DKCore.removeWindowFrame = function(window, frameless) {
	if (!frameless) {
		return;
	}
	window._refreshFrame = function() {
		var w = this._width;
		var h = this._height;
		this._windowFrameSprite.bitmap = new Bitmap(w, h);
		this._windowFrameSprite.setFrame(0, 0, w, h);
	};
	window._refreshFrame();
};

DKCore.openConsole = function() {
    if (Utils.isNwjs() && Utils.isOptionValid('test')) {
      var debug_window = require('nw.gui').Window.get().showDevTools();
      debug_window.moveTo(0, 0);
      window.focus();
    }
};

DKCore.checkVersion = function() {
	var data = [];
	for(var plugin in DKCoreVersion) {
		var version = DKCoreVersion[plugin];
		data.push(version);
	}
	var max = Math.max.apply(Math, data);
	var error = DKLocalizationManager.DKCore('#update_required#: %1 (#installed_version#: %2)', [max, DKVersion.DKCore]);
	if (max > DKVersion.DKCore) {
		throw new Error(error);
	}
};

//===========================================================================
// Scene Manager
//===========================================================================

var DKCore_SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function() {
	DKCore_SceneManager_initialize.call(this);
	DKCore.checkVersion();
	if (DKCore.toBool(DKCoreParam.open_console)) {
		DKCore.openConsole();
	}
	if (DKCore.toBool(DKCoreParam.automatic_update_checking)) {
		DKUpdates.autoCheckUpdates();
	}
};

//===========================================================================
// Array
//===========================================================================

Array.prototype.count = function(item) {
	var amount = 0;
	for(var i = 0; i < this.length; i++) {
		if (this[i] === item || (Number.isNaN(this[i]) && Number.isNaN(item))) {
			amount++;
		}
	}
	return amount;
};
Object.defineProperty(Array.prototype, 'count', { enumerable: false });

Array.prototype.counts = function() {
	if (this.isEmpty()) {
		return 0;
	}
	var array = arguments;
	if (arguments.length === 1 && arguments[0] && arguments[0].constructor === Array) {
		array = arguments[0];
	}
	var amount = 0;
	for(var i = 0; i < array.length; i++) {
		amount += this.count(array[i]);
	}
	return amount;
};
Object.defineProperty(Array.prototype, 'counts', { enumerable: false });

Array.prototype.realLength = function() {
	return this.length - this.counts(Number.NaN, null, undefined);
};
Object.defineProperty(Array.prototype, 'realLength', { enumerable: false });

Array.prototype.isEmpty = function() {
	return this.length === 0;
};
Object.defineProperty(Array.prototype, 'isEmpty', { enumerable: false });

Array.prototype.isNeedCompact = function() {
	return this.length !== this.realLength();
};
Object.defineProperty(Array.prototype, 'isNeedCompact', { enumerable: false });

Array.prototype.isNumberArray = function() {
	if (this.isNeedCompact()) {
		return false;
	}
	for(var i = 0; i < this.length; i++) {
		var object = this[i];
		if (object.constructor !== Number) {
			return false;
		}
	}
	return !this.isEmpty();
};
Object.defineProperty(Array.prototype, 'isNumberArray', { enumerable: false });

Array.prototype.isBooleanArray = function() {
	if (this.isNeedCompact()) {
		return false;
	}
	for(var i = 0; i < this.length; i++) {
		var object = this[i];
		if (object.constructor !== Boolean) {
			return false;
		}
	}
	return !this.isEmpty();
};
Object.defineProperty(Array.prototype, 'isBooleanArray', { enumerable: false });

Array.prototype.isStringArray = function() {
	if (this.isNeedCompact()) {
		return false;
	}
	for(var i = 0; i < this.length; i++) {
		var object = this[i];
		if (object.constructor !== String) {
			return false;
		}
	}
	return !this.isEmpty();
};
Object.defineProperty(Array.prototype, 'isStringArray', { enumerable: false });

Array.prototype.compact = function() {
	if (!this.isNeedCompact()) {
		return this;
	}
	for(var i = 0; i < this.length; i++) {
		if (!this[i]) {
			this.splice(i, 1);
			return this.compact();
		}
	}	
	return this;
};
Object.defineProperty(Array.prototype, 'compact', { enumerable: false });

Array.prototype.insert = function(index, item) {
	this.splice(index, 0, item);
};
Object.defineProperty(Array.prototype, 'insert', { enumerable: false });

Array.prototype.min = function() {
	if (!this.isNumberArray()) {
		return Number.NaN;
	}
	return Math.min.apply(Math, this);
};
Object.defineProperty(Array.prototype, 'min', { enumerable: false });

Array.prototype.max = function() {
	if (!this.isNumberArray()) {
		return Number.NaN;
	}
	return Math.max.apply(Math, this);
};
Object.defineProperty(Array.prototype, 'max', { enumerable: false });

Array.prototype.disjunction = function() {
	if (!this.isBooleanArray()) {
		return null;
	}
	return this.count(true) > 0;
};
Object.defineProperty(Array.prototype, 'disjunction', { enumerable: false });

Array.prototype.conjunction = function() {
	if (!this.isBooleanArray()) {
		return null;
	}
	return this.count(false) === 0;
};
Object.defineProperty(Array.prototype, 'conjunction', { enumerable: false });

//===========================================================================
// Window DKCore Command
//===========================================================================

function Window_DKCore_Command() {
	this.initialize.apply(this, arguments);
}

Window_DKCore_Command.prototype = Object.create(Window_Command.prototype);

Window_DKCore_Command.prototype.updateTone = function() {
};

Window_DKCore_Command.prototype.itemTextAlign = function() {
	return 'center';
};

Window_DKCore_Command.prototype.deactivate = function() {
	Window_Command.prototype.deactivate.call(this);
	this.setCursorRect(0, 0, 0, 0);
};

Window_DKCore_Command.prototype.processTouch = function() {
	if (this.isOpenAndActive()) {
		if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
            this._touching = true;
            this.onTouch(true);
        } else if (TouchInput.isCancelled()) {
            if (this.isCancelEnabled()) {
				this.processCancel();
			}
        }
    } else if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
		var x = this.canvasToLocalX(TouchInput.x);
		var y = this.canvasToLocalY(TouchInput.y);
		var hitIndex = this.hitTest(x, y);
		if (hitIndex >= 0) {
			this.callHandler('activate', hitIndex);
		}
	}
};

Window_DKCore_Command.prototype.callHandler = function(symbol, index) {
	this.updateInputData();
	if (symbol === 'activate') {
		return this._handlers[symbol](index);
	}
	Window_Command.prototype.callHandler.call(this, symbol);
};

//===========================================================================
// DK Version Control
//===========================================================================

function DKUpdates() {
	throw new Error('This is a static class (Это статический класс!)');
}

DKUpdates.data = null;

DKUpdates.load = function(onload) {
	var xhr = new XMLHttpRequest();
	var url = 'http://pastebin.com/raw/Ts100WU9';
	xhr.open('GET', url);
	xhr.setRequestHeader('Cache-Control', 'no-cache');
	xhr.overrideMimeType('application/json');
	xhr.onload = function() {
		if (this.status < 400) {
			onload.call(this, JSON.parse(this.responseText));
		}
	};
	xhr.send();
};

DKUpdates.onloadCheckUpdates = function(data) {
	DKUpdates.data = data;
	SceneManager.push(Scene_DKUpdates);
};

DKUpdates.onloadAutoCheckUpdates = function(data) {
	for(var plugin in DKVersion) {
		var object = data[plugin];
		if (!object) {
			continue;
		}
		var installed_version = DKVersion[plugin];
		var available_version = object.version || 0;
		var beta_version = object.beta_version || 0;
		var max_version = Math.max(available_version, beta_version);
		var text = '';
		if (max_version === beta_version && object.download_beta_url != null && object.download_beta_url != '') {
			text = '(#beta_version#)';
		}
		if (max_version > installed_version) {
			var output = DKLocalizationManager.DKCore('#new_version#: "%1"\n#installed_version#: %2\n#available_version#: %3 ' + text, [plugin, installed_version, max_version]);
			console.log(output);
		}
	}
};

DKUpdates.checkUpdates = function() {
	this.load(this.onloadCheckUpdates);
};

DKUpdates.autoCheckUpdates = function() {
	this.load(this.onloadAutoCheckUpdates);
};

//===========================================================================
// Scene DK Updates
//===========================================================================

function Scene_DKUpdates() {
	this.initialize.apply(this, arguments);
}

Scene_DKUpdates.prototype = Object.create(Scene_Base.prototype);
Scene_DKUpdates.prototype.constructor = Scene_Base;

Scene_DKUpdates.prototype.create = function() {
	this.createData('installed');
	this.createWindowLayer();
	this.createAllWindows();
	this.createLocaleButton();
};

Scene_DKUpdates.prototype.createData = function(mode) {
	this.data = [];
	for(var plugin_name in DKUpdates.data) {
		if (Imported.hasOwnProperty(plugin_name) || mode === 'all') {
			var object = DKUpdates.data[plugin_name];
			if (object.hide) {
				continue;
			}
			object.name = plugin_name;
			this.data.push(object);
		}
	}
};

Scene_DKUpdates.prototype.createAllWindows = function() {
	this.createTitleWindow();
	this.createVersionWindow();
	this.createPluginsWindow();
	this.createContactWindow();
};

Scene_DKUpdates.prototype.createTitleWindow = function() {
	this.title_window = new Window_DKUpdates_Title();
	this.addWindow(this.title_window);
};

Scene_DKUpdates.prototype.createVersionWindow = function() {
	this.version_window = new Window_DKUpdates_Version(this.data);
	this.addWindow(this.version_window);
};

Scene_DKUpdates.prototype.createPluginsWindow = function() {
	this.plugins_window = new Window_DKUpdates_Plugins(this.data);
	this.plugins_window.setHandler('switch_mode', this.handlerPluginsSwitchMode.bind(this));
	this.plugins_window.setHandler('open_info', this.handlerPluginsOpenInfo.bind(this));
	this.plugins_window.setHandler('cancel', this.popScene.bind(this));
	this.addWindow(this.plugins_window);
};

Scene_DKUpdates.prototype.createContactWindow = function() {
	this.contact_window = new Window_DKUpdates_Contact(this.data, this.clickHandlerContact.bind(this));
	this.addWindow(this.contact_window);
};

Scene_DKUpdates.prototype.createInfoWindow = function() {
	this.removeInfoWindow();
	var plugin_index = this.plugins_window.index() - 1;
	var plugin = this.data[plugin_index];
	this.info_window = new Window_DKUpdates_Info(plugin);
	this.info_window.setHandler('open_changelog', this.handlerInfoOpenChangelog.bind(this, plugin));
	this.info_window.setHandler('open_site', this.handlerInfoOpenSite.bind(this));
	this.info_window.setHandler('cancel', this.handlerInfoCancel.bind(this));
	this.addWindow(this.info_window);
};

Scene_DKUpdates.prototype.createChangelogWindow = function(plugin) {
	this.removeChangelogWindow();
	this.changelog_window = new Window_DKUpdates_Changelog(plugin);
	this.changelog_window.setHandler('cancel', this.handlerChangelogCancel.bind(this));
	this.addWindow(this.changelog_window);
};

Scene_DKUpdates.prototype.removeInfoWindow = function() {
	if (this.info_window == null) {
		return;
	}
	this._windowLayer.removeChild(this.info_window);
	this.info_window = null;
};

Scene_DKUpdates.prototype.removeChangelogWindow = function() {
	if (this.changelog_window == null) {
		return;
	}
	this._windowLayer.removeChild(this.changelog_window);
	this.changelog_window = null;
};

Scene_DKUpdates.prototype.createLocaleButton = function() {
	var x = 18;
	var y = 18;
	var width = Graphics.boxWidth / 4;
	var height = Window_Base.prototype.lineHeight.call();
	this.locale_sprite = new Sprite_Button();
	this.locale_sprite.move(x, y);
	this.locale_sprite.bitmap = new Bitmap(width, height);
	this.locale_sprite.drawInfo = function() {
		this.bitmap.clear();
		var text = DKLocalizationManager.DKCore('#locale#: %1', [DKLocale]);
		this.bitmap.drawText(text, 0, 0, this.bitmap.width, this.bitmap.height);
	};
	this.locale_sprite.drawInfo();
	this.locale_sprite.setClickHandler(this.clickHandlerLocale.bind(this));
	this.addChild(this.locale_sprite);
};

// Locale handler

Scene_DKUpdates.prototype.clickHandlerLocale = function() {
	var new_locale = DKLocale === 'ru' ? 'en' : 'ru';
	DKLocalizationManager.setLocale(new_locale);
};

// Plugins handlers

Scene_DKUpdates.prototype.handlerPluginsSwitchMode = function() {
	this.plugins_window.switchMode();
	this.createData(this.plugins_window.mode);
	this.version_window.updateData(this.data);
	this.plugins_window.updateData(this.data);
	this.contact_window.updateData(this.data);
	this.plugins_window.activate();
};

Scene_DKUpdates.prototype.handlerPluginsOpenInfo = function() {
	this.createInfoWindow();
	this.contact_window.dk_plugins.visible = false;
};

// Info handlers

Scene_DKUpdates.prototype.handlerInfoOpenChangelog = function(plugin) {
	this.createChangelogWindow(plugin);
};

Scene_DKUpdates.prototype.handlerInfoOpenSite = function(site) {
	this.removeInfoWindow();
	this.plugins_window.activate();
	window.open(site);
};

Scene_DKUpdates.prototype.handlerInfoCancel = function() {
	this.removeInfoWindow();
	this.plugins_window.activate();
	this.contact_window.dk_plugins.visible = true;
};

// Changelog handler

Scene_DKUpdates.prototype.handlerChangelogCancel = function() {
	this.removeChangelogWindow();
	this.info_window.activate();
};

// Contact handler

Scene_DKUpdates.prototype.clickHandlerContact = function(site) {
	window.open(site);
};

// other

Scene_DKUpdates.prototype.onLocaleChange = function() {
	this.locale_sprite.drawInfo();
	this.title_window.drawInfo();
	this.version_window.drawInfo();
	this.plugins_window.refresh();
	this.contact_window.drawInfo();
	if (this.info_window) {
		this.info_window.refresh();
	}
	if (this.changelog_window) {
		this.changelog_window.refresh();
	}
};

Scene_DKUpdates.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	this.version_window.setIndex(this.plugins_window.index() - 1);
};

//===========================================================================
// Window DK Updates Title
//===========================================================================

function Window_DKUpdates_Title() {
	this.initialize.apply(this, arguments);
}

Window_DKUpdates_Title.prototype = Object.create(Window_Base.prototype);
Window_DKUpdates_Title.prototype.constructor = Window_DKUpdates_Title;

Window_DKUpdates_Title.prototype.initialize = function() {
	Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, this.lineHeight() * 2);
	this.drawInfo();
};

Window_DKUpdates_Title.prototype.drawInfo = function() {
	this.contents.clear();
	var text = DKLocalizationManager.DKCore('#checking_for_updates#');
	this.drawText(text, 0, 0, this.contentsWidth(), 'center');
};

//===========================================================================
// Window DK Updates Version
//===========================================================================

function Window_DKUpdates_Version() {
	this.initialize.apply(this, arguments);
}

Window_DKUpdates_Version.prototype = Object.create(Window_Base.prototype);
Window_DKUpdates_Version.prototype.constructor = Window_DKUpdates_Version;

Window_DKUpdates_Version.prototype.initialize = function(data) {
	Window_Base.prototype.initialize.call(this, 0, this.lineHeight() * 2, Graphics.boxWidth, this.lineHeight() * 2);
	this.data = data;
	this.index = -1;
	this.drawInfo();
};

Window_DKUpdates_Version.prototype.setIndex = function(index) {
	if (this.index === index) {
		return;
	}
	this.index = index;
	this.drawInfo();
};

Window_DKUpdates_Version.prototype.updateData = function(data) {
	this.data = data;
};

Window_DKUpdates_Version.prototype.pluginIsBeta = function(plugin) {
	var available_version = plugin.version;
	var beta_version = plugin.beta_version;
	var plugin_name = plugin.name;
	var installed_version = DKVersion[plugin_name];
	return available_version === installed_version && beta_version > installed_version ||
			available_version == null && beta_version != null;
};

Window_DKUpdates_Version.prototype.drawInfo = function() {
	this.contents.clear();
	if (this.index === -1) {
		return;
	}
	var object = this.data[this.index];
	var plugin_name = object.name;
	this.changeTextColor(this.normalColor());
	this.drawInstalledVersion(plugin_name);
	this.drawAvailableVersion(object);
	if (this.pluginIsBeta(object)) {
		this.drawBeta();
	}
};

Window_DKUpdates_Version.prototype.drawBeta = function() {
	var text = DKLocalizationManager.DKCore('#beta_version# !!!');
	this.changeTextColor(this.textColor(2));
	this.drawText(text, 0, 0, this.contentsWidth(), 'center');
};

Window_DKUpdates_Version.prototype.drawInstalledVersion = function(plugin_name) {
	var installed_version = Imported[plugin_name] ? DKVersion[plugin_name] : DKLocalizationManager.DKCore('#not_installed#');
	var text = DKLocalizationManager.DKCore('#installed_version#: %1', [installed_version]);
	this.drawText(text, 0, 0, this.contentsWidth(), 'left');
};

Window_DKUpdates_Version.prototype.drawAvailableVersion = function(plugin) {
	var available_version = plugin.version || 0;
	var beta_version = plugin.beta_version || 0;
	var max_version = Math.max(available_version, beta_version);
	var text = DKLocalizationManager.DKCore('#available_version#: %1', [max_version]);
	this.drawText(text, 0, 0, this.contentsWidth(), 'right');
};

Window_DKUpdates_Version.prototype.update = function() {
};

//===========================================================================
// Window DK Updates Plugins
//===========================================================================

function Window_DKUpdates_Plugins() {
	this.initialize.apply(this, arguments);
}

Window_DKUpdates_Plugins.prototype = Object.create(Window_Command.prototype);
Window_DKUpdates_Plugins.prototype.constructor = Window_DKUpdates_Plugins;

Window_DKUpdates_Plugins.prototype.initialize = function(data) {
	this.data = data;
	this.mode = 'installed';
	Window_Command.prototype.initialize.call(this, 0, this.lineHeight() * 4);
};

Window_DKUpdates_Plugins.prototype.windowWidth = function() {
	return Graphics.boxWidth;
};

Window_DKUpdates_Plugins.prototype.windowHeight = function() {
	return Graphics.boxHeight - this.lineHeight() * 6;
};

Window_DKUpdates_Plugins.prototype.standardPadding = function() {
	return 8;
};

Window_DKUpdates_Plugins.prototype.maxCols = function() {
	return 3;
};

Window_DKUpdates_Plugins.prototype.itemTextAlign = function() {
	return 'center';
};

Window_DKUpdates_Plugins.prototype.spacing = function() {
	return 4;
};

Window_DKUpdates_Plugins.prototype.pluginIsBeta = function(plugin) {
	var available_version = plugin.version;
	var beta_version = plugin.beta_version;
	var plugin_name = plugin.name;
	var installed_version = DKVersion[plugin_name];
	return available_version === installed_version && beta_version > installed_version ||
			available_version == null && beta_version != null;
};

Window_DKUpdates_Plugins.prototype.pluginColor = function(object, local_version) {
	var color = this.textColor(8);
	if (local_version < object.version || this.pluginIsBeta(object)) {
		color = this.textColor(14);
	}
	if (local_version >= object.version || local_version >= object.beta_version) {
		color = this.textColor(3);
	}
	return color;
};

Window_DKUpdates_Plugins.prototype.itemRect = function(index) {
	var rect = new Rectangle();
	var maxCols = this.maxCols();
	rect.width = this.itemWidth();
	rect.height = this.itemHeight();
	if (index === 0) {
		rect.width = this.contentsWidth();
	} else {
		rect.x = (index - 1) % maxCols * (rect.width + this.spacing());
		rect.y = (Math.floor((index - 1) / maxCols) + 1) * rect.height;
	}
	return rect;
};

Window_DKUpdates_Plugins.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var align = this.itemTextAlign();
	this.changeTextColor(this.normalColor());
	var command_enabled = this.isCommandEnabled(index);
	if (command_enabled && index > 0) {
		var object = this.data[index - 1];
		var local_version = DKVersion[object.name];
		var color = this.pluginColor(object, local_version);
		this.changeTextColor(color);
	}
	this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
};

Window_DKUpdates_Plugins.prototype.cursorDown = function(wrap) {
	var index = this.index();
	if (index === 0) {
		return this.select(1);
	}
	Window_Command.prototype.cursorDown.call(this, wrap);
};

Window_DKUpdates_Plugins.prototype.cursorUp = function(wrap) {
	var index = this.index();
	if (index > 0 && index < 4) {
		return this.select(0);
	}
	Window_Command.prototype.cursorUp.call(this, wrap);
};

Window_DKUpdates_Plugins.prototype.cursorRight = function(wrap) {
	var index = this.index();
	if (index === 0) {
		return;
	}
	Window_Command.prototype.cursorRight.call(this, wrap);
};

Window_DKUpdates_Plugins.prototype.cursorLeft = function(wrap) {
	var index = this.index();
	if (index === 1) {
		return;
	}
	Window_Command.prototype.cursorLeft.call(this, wrap);
};

Window_DKUpdates_Plugins.prototype.switchMode = function() {
	this.mode = (this.mode === 'all' ? 'installed' : 'all');
};

Window_DKUpdates_Plugins.prototype.updateData = function(data) {
	this.data = data;
	this.refresh();
};

Window_DKUpdates_Plugins.prototype.makeCommandList = function() {
	var command_name;
	if (this.mode === 'all') {
		command_name = DKLocalizationManager.DKCore('#all_plugins#');
	} else {
		command_name = DKLocalizationManager.DKCore('#installed#');
	}
	this.addCommand(command_name, 'switch_mode');
	for(var i = 0; i < this.data.length; i++) {
		var object = this.data[i];
		var plugin_name = object.name;
		var enabled = true;
		if (object.block) {
			enabled = false;
		}
		this.addCommand(plugin_name, 'open_info', enabled);
	}
};

//===========================================================================
// Window DK Updates Contact
//===========================================================================

function Window_DKUpdates_Contact() {
	this.initialize.apply(this, arguments);
}

Window_DKUpdates_Contact.prototype = Object.create(Window_Base.prototype);
Window_DKUpdates_Contact.prototype.constructor = Window_DKUpdates_Contact;

Window_DKUpdates_Contact.prototype.initialize = function(data, click_handler) {
	Window_Base.prototype.initialize.call(this, 0, Graphics.boxHeight - this.lineHeight() * 2, Graphics.boxWidth, this.lineHeight() * 2);
	this.data = data;
	this.click_handler = click_handler;
	this.drawInfo();
	this.createButton();
};

Window_DKUpdates_Contact.prototype.updateData = function(data) {
	this.data = data;
	this.drawInfo();
};

Window_DKUpdates_Contact.prototype.drawInfo = function() {
	this.contents.clear();
	var site = DKLocalizationManager.DKCore('#site#');
	this.drawTextEx('\\c[4]' + site + ':\\c[0] dk-plugins.ru', 0, 0);
	var amount = this.data.length;
	var text = DKLocalizationManager.DKCore('#plugin_count#: %1', [amount]);
	this.drawText(text, 0, 0, this.contentsWidth(), 'right');
};

Window_DKUpdates_Contact.prototype.createButton = function() {
	var dk_plugins_url = 'http://dk-plugins.ru';
	var x = this.standardPadding();
	var y = this.standardPadding();
	var width = this.contentsWidth();
	var height = this.contentsHeight();
	this.dk_plugins = new Sprite_Button();
	this.dk_plugins.move(x, y);
	this.dk_plugins.bitmap = new Bitmap(width, height);
	this.dk_plugins.setClickHandler(this.click_handler.bind(this, dk_plugins_url));
	this.addChild(this.dk_plugins);
};

//===========================================================================
// Window DK Updates Info
//===========================================================================

function Window_DKUpdates_Info() {
	this.initialize.apply(this, arguments);
}

Window_DKUpdates_Info.prototype = Object.create(Window_Command.prototype);
Window_DKUpdates_Info.prototype.constructor = Window_DKUpdates_Info;

Window_DKUpdates_Info.prototype.initialize = function(plugin, urls) {
	this.plugin = plugin;
	this.urls = this.getUrls();
	Window_Command.prototype.initialize.call(this, 0, 0);
};

Window_DKUpdates_Info.prototype.windowWidth = function() {
	return Graphics.boxWidth;
};

Window_DKUpdates_Info.prototype.windowHeight = function() {
	return Graphics.boxHeight;
};

Window_DKUpdates_Info.prototype.maxCols = function() {
	return 2;
};

Window_DKUpdates_Info.prototype.itemTextAlign = function() {
	return 'center';
};

Window_DKUpdates_Info.prototype.callHandler = function(symbol) {
	return this._handlers[symbol](this.urls[this.index() - 1]);
};

Window_DKUpdates_Info.prototype.itemRect = function(index) {
	var rect = Window_Command.prototype.itemRect.call(this, index);
	rect.y += this.itemHeight() * 9;
	return rect;
};

Window_DKUpdates_Info.prototype.getUrls = function() {
	var object = this.plugin;
	return [object.download_url, object.download_beta_url, object.site_url, object.vk_url, object.rpg_maker_web_url, object.academy_url, object.neutral_url];
};

Window_DKUpdates_Info.prototype.pluginIsBeta = function() {
	var plugin = this.plugin;
	var available_version = plugin.version;
	var beta_version = plugin.beta_version;
	var plugin_name = plugin.name;
	var installed_version = DKVersion[plugin_name];
	return available_version === installed_version && beta_version > installed_version ||
			available_version == null && beta_version != null;
};

Window_DKUpdates_Info.prototype.refresh = function() {
	Window_Command.prototype.refresh.call(this);
	var plugin_name = this.plugin.name;
	var installed_version = DKVersion[plugin_name];
	var available_version = this.plugin.version;
	this.changePaintOpacity(true);
	this.drawPluginName(plugin_name);
	this.drawLine(this.lineHeight());
	if (this.pluginIsBeta()) {
		this.drawBeta();
	}
	this.changeTextColor(this.normalColor());
	this.drawInstalledVersion(plugin_name);
	this.drawAvailableVersion();
	this.drawLine(this.lineHeight() * 2);
	if (installed_version < available_version) {
		this.drawIncorrectVersion();
	}
	if (installed_version === available_version) {
		this.drawCorrectVersion();
	}
	this.drawLine(this.lineHeight() * 3);
	if (this.plugin.description) {
		this.drawDescription();
		this.drawLine(this.lineHeight() * 6)
	}
	if (this.plugin.languages) {
		this.drawLanguages();
		this.drawLine(this.lineHeight() * 8);
	}
	this.drawLinks();
	if (this.plugin.settings) {
		this.drawLine(this.lineHeight() * 13);
		this.drawWarning();
	}
};

Window_DKUpdates_Info.prototype.drawPluginName = function(plugin_name) {
	this.changeTextColor(this.textColor(4));
	this.drawText(plugin_name, 0, 0, this.contentsWidth(), 'center');
};

Window_DKUpdates_Info.prototype.drawLine = function(y) {
	this.contents.fillRect(0, y, this.contentsWidth(), 1, '#ffffff');
};

Window_DKUpdates_Info.prototype.drawBeta = function() {
	var text = DKLocalizationManager.DKCore('#beta_version# !!!');
	this.changeTextColor(this.textColor(2));
	this.drawText(text, 0, this.lineHeight(), this.contentsWidth(), 'center');
};

Window_DKUpdates_Info.prototype.drawInstalledVersion = function(plugin_name) {
	var installed_version = Imported[plugin_name] ? DKVersion[plugin_name] : DKLocalizationManager.DKCore('#not_installed#');
	var text = DKLocalizationManager.DKCore('#installed_version#: %1', [installed_version]);
	this.drawText(text, 0, this.lineHeight(), this.contentsWidth(), 'left');
};

Window_DKUpdates_Info.prototype.drawAvailableVersion = function() {
	var available_version = this.plugin.version || 0;
	var beta_version = this.plugin.beta_version || 0;
	var max_version = Math.max(available_version, beta_version);
	var text = DKLocalizationManager.DKCore('#available_version#: %1', [max_version]);
	this.drawText(text, 0, this.lineHeight(), this.contentsWidth(), 'right');
};

Window_DKUpdates_Info.prototype.drawIncorrectVersion = function() {
	var text = DKLocalizationManager.DKCore('#incorrect_version#');
	this.changeTextColor(this.textColor(2));
	this.drawText(text, 0, this.lineHeight() * 2, this.contentsWidth(), 'center');
};

Window_DKUpdates_Info.prototype.drawCorrectVersion = function() {
	var text = DKLocalizationManager.DKCore('#correct_version#');
	this.changeTextColor(this.textColor(3));
	this.drawText(text, 0, this.lineHeight() * 2, this.contentsWidth(), 'center');
};

Window_DKUpdates_Info.prototype.drawDescription = function() {
	var text = DKLocalizationManager.DKCore('\\c[6]#description#:\\c[0]');
	this.drawTextEx(text, 0, this.lineHeight() * 3);
	var description = this.plugin.description[DKLocale];
	this.drawTextEx(description, 0, this.lineHeight() * 4);
};

Window_DKUpdates_Info.prototype.drawLanguages = function() {
	var text = DKLocalizationManager.DKCore('\\c[6]#supported_languages#:\\c[0]');
	this.drawTextEx(text, 0, this.lineHeight() * 6);
	var languages = this.plugin.languages[DKLocale];
	this.drawTextEx(languages, 0, this.lineHeight() * 7);
};

Window_DKUpdates_Info.prototype.drawLinks = function() {
	var text = DKLocalizationManager.DKCore('#urls#');
	this.changeTextColor(this.textColor(6));
	this.drawText(text, 0, this.lineHeight() * 8, this.contentsWidth(), 'center');
};

Window_DKUpdates_Info.prototype.drawWarning = function() {
	var text = DKLocalizationManager.DKCore('\\c[2]#warning#\\c[0]');
	this.drawTextEx(text, 0, this.lineHeight() * 13);
	text = DKLocalizationManager.DKCore('#settings#');
	this.drawTextEx(text, 0, this.lineHeight() * 14);
};

Window_DKUpdates_Info.prototype.urlEnabled = function(url) {
	return url != null && url != '';
};

Window_DKUpdates_Info.prototype.changelogEnabled = function() {
	return !!this.plugin.changelog;
};

Window_DKUpdates_Info.prototype.makeCommandList = function() {
	var available_version = this.plugin.version;
	var beta_version = this.plugin.beta_version;
	var download_index = 0;
	var download_beta_index = 1;
	var names = [DKLocalizationManager.DKCore('#download#'), DKLocalizationManager.DKCore('#download_beta#'), DKLocalizationManager.DKCore('#site# DK Plugins'),
		DKLocalizationManager.DKCore('#group_in_vk#'), 'RPG Maker Web', DKLocalizationManager.DKCore('#light_zone#'), DKLocalizationManager.DKCore('#neutral_zone#')];
	if (available_version != null) {
		names[download_index] += ' (%1)'.format(available_version);
	}
	if (this.urlEnabled(this.plugin.download_beta_url) && beta_version != null) {
		names[download_beta_index] += ' (%1)'.format(beta_version);
	}
	var changelog = DKLocalizationManager.DKCore('#changelog#');
	this.addCommand(changelog, 'open_changelog', this.changelogEnabled());
	for(var i = 0; i < this.urls.length; i++) {
		var url = this.urls[i];
		this.addCommand(names[i], 'open_site', this.urlEnabled(url));
	}
};

//===========================================================================
// Window DK Updates Changelog
//===========================================================================

function Window_DKUpdates_Changelog() {
	this.initialize.apply(this, arguments);
}

Window_DKUpdates_Changelog.prototype = Object.create(Window_Command.prototype);
Window_DKUpdates_Changelog.prototype.constructor = Window_DKUpdates_Changelog;

Window_DKUpdates_Changelog.prototype.initialize = function(plugin) {
	this.plugin = plugin;
	this.changelog = plugin.changelog;
	Window_Command.prototype.initialize.call(this, 0, 0);
};

Window_DKUpdates_Changelog.prototype.windowWidth = function() {
	return Graphics.boxWidth;
};

Window_DKUpdates_Changelog.prototype.windowHeight = function() {
	return Graphics.boxHeight;
};

Window_DKUpdates_Changelog.prototype.itemTextAlign = function() {
	return 'center';
};

Window_DKUpdates_Changelog.prototype.refresh = function() {
	Window_Command.prototype.refresh.call(this);
	this.drawInfo();
};

Window_DKUpdates_Changelog.prototype.drawInfo = function() {
	this.drawPluginName(this.plugin.name);
	this.drawLine();
	var text = DKLocalizationManager.DKCore('\\c[6]#changelog#:\\c[0]');
	this.drawTextEx(text, 0, this.lineHeight());
	var changelog = this.changelog[DKLocale];
	for(var i = 0; i < changelog.length; i++) {
		this.drawText(changelog[i], 0, this.lineHeight() * (i + 2));
	}
};

Window_DKUpdates_Changelog.prototype.drawPluginName = function(plugin_name) {
	this.changeTextColor(this.textColor(4));
	this.drawText(plugin_name, 0, 0, this.contentsWidth(), 'center');
};

Window_DKUpdates_Changelog.prototype.drawLine = function() {
	this.contents.fillRect(0, this.lineHeight(), this.contentsWidth(), 1, '#ffffff');
};

Window_DKUpdates_Changelog.prototype.itemRect = function(index) {
	var rect = 	Window_Command.prototype.itemRect.call(this, index);
	rect.y = this.contentsHeight() - rect.height;
	return rect;
};

Window_DKUpdates_Changelog.prototype.makeCommandList = function() {
	var command = DKLocalizationManager.DKCore('#cancel#');
	this.addCommand(command, 'cancel');
};

//===========================================================================
// Game Interpreter
//===========================================================================

var DKCore_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    DKCore_Game_Interpreter_pluginCommand.call(this, command, args);
	switch(command)
	{
		case 'DKUpdates': 	return DKUpdates.checkUpdates();
		case 'DKLocale': 	return DKLocalizationManager.setLocale(args[0]);
	}
};