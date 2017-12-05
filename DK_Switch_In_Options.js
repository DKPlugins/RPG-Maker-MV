/*
Название: Переключатель в Настройках (Switch In Options)
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Группа ВК: http://vk.com/rpgmakervxaceandmv
Сайт: http://dk-plugins.ru/
Версия: 1.0
Релиз: 09.04.2016
Первый релиз: 09.04.2016
*/

/*:ru
 * @plugindesc v.1.0 Добавляет переключатель в настройки
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DK_Switch_In_Options
 Автор: DK
 Группа ВК: http://vk.com/rpgmakervxaceandmv
 Сайт: http://dk-plugins.ru/
 Версия: 1.0
 Релиз: 09.04.2016
 Первый релиз: 09.04.2016
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
 * @param Switch command text
 * @desc Название команды переключателя
 * @default
 
 * @param Switch ID
 * @desc Номер переключателя
 * @default
 
*/

var Imported = Imported || {};
Imported.DK_Switch_In_Options = true;

var DKVersion = DKVersion || {};
DKVersion.DK_Switch_In_Options = 1.0;

var DKSwitchInOptionsSettings = {};
DKSwitchInOptionsSettings.param = PluginManager.parameters('DK_Switch_In_Options');

DKSwitchInOptionsSettings.switch_command_text = DKSwitchInOptionsSettings.param['Switch command text'] || '';
DKSwitchInOptionsSettings.switch_id = Number(DKSwitchInOptionsSettings.param['Switch ID']) || 0;

//===========================================================================
// Window Options
//===========================================================================

var Switch_In_Options_Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
   this.addSwitch();
   Switch_In_Options_Window_Options_makeCommandList.call(this);
};

Window_Options.prototype.addSwitch = function() {
	if (DKSwitchInOptionsSettings.switch_id === 0) return;
	this.addCommand(DKSwitchInOptionsSettings.switch_command_text, 'switch_in_options');
};

var Switch_In_Options_Window_Options_booleanStatusText = Window_Options.prototype.booleanStatusText;
Window_Options.prototype.booleanStatusText = function(value) {
	if ($gameSystem.isRussian())
		return value ? 'ВКЛ' : 'ВЫКЛ';
	else
		return Switch_In_Options_Window_Options_booleanStatusText.call(this, value);
};

var Switch_In_Options_Window_Options_getConfigValue = Window_Options.prototype.getConfigValue;
Window_Options.prototype.getConfigValue = function(symbol) {
	var volume = Switch_In_Options_Window_Options_getConfigValue.call(this, symbol);
	if (DKSwitchInOptionsSettings.switch_id === 0) return volume;
	if (symbol !== 'switch_in_options') return volume;
	return $gameSwitches.value(DKSwitchInOptionsSettings.switch_id);
};

var Switch_In_Options_Window_Options_setConfigValue = Window_Options.prototype.setConfigValue;
Window_Options.prototype.setConfigValue = function(symbol, volume) {
	Switch_In_Options_Window_Options_setConfigValue.call(this, symbol, volume);
	if (DKSwitchInOptionsSettings.switch_id === 0) return;
	if (symbol !== 'switch_in_options') return;
	$gameSwitches.setValue(DKSwitchInOptionsSettings.switch_id, volume);
};

//===========================================================================
// DataManager Manager
//===========================================================================

var Switch_In_Options_DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
	Switch_In_Options_DataManager_createGameObjects.call(this);
	if (DKSwitchInOptionsSettings.switch_id === 0) return;
	ConfigManager.load();
};

//===========================================================================
// Config Manager
//===========================================================================

var Switch_In_Options_ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
    var config = Switch_In_Options_ConfigManager_makeData.call(this);
	if (DKSwitchInOptionsSettings.switch_id === 0) return config;
	config.switch_in_options = $gameSwitches.value(DKSwitchInOptionsSettings.switch_id);
    return config;
};

var Switch_In_Options_ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	Switch_In_Options_ConfigManager_applyData.call(this, config);
	if (DKSwitchInOptionsSettings.switch_id === 0 || !$gameSwitches) return;
	$gameSwitches.setValue(DKSwitchInOptionsSettings.switch_id, this.readFlag(config, 'switch_in_options'));
};