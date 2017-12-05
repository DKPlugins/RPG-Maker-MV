/*
Название: Уровни врагов (Enemy Levels)
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Группа ВК: http://vk.com/rpgmakervxaceandmv
Версия: 1.1
Релиз: 22.11.2015
Первый релиз: 30.10.2015
*/

//===========================================================================
// Настройка плагина
//===========================================================================
/*
 Если Вы указали настройки для врага в ENEMY_LEVELS, то ENEMY_BASIC_LEVELS не будет применено к нему!
 
 Если указать параметр 
 'blend_traits' : true 
 или 
 'blend_actions' : true 
 или 
 'blend_dropitems' : true
 то к текущим настройкам уровня врага будут добавлены настройки из Базы Данных
 
 Настройка уровней всех врагов
 параметры: 'mhp' (жизни), 'mmp' (мана), 'atk' (атака), 'def' (защита), 'mat' (маг. атака)
 'mdf' (маг. защита), 'agi' (проворство), 'luk' (удача), 'exp' (опыт), 'gold' (золото)
 'name' (имя врага), 'graphic' (название графики)
 'traits' (особенности), 'actions' (действия), 'dropItems' (награда за победу)
 
 Чтобы указать процентное увеличение параметра, укажите его в ковычках ''
 Пример: '20' - значение будет увеличено на 20% от значения Базы Данных
 -1 чтобы оставить один из параметров без изменений (будет значение из Базы Данных)
 'name' : 'Имя врага в ковычках'
 'graphic' : 'Название графики в ковычках'
 'traits' : [ номера параметров из таблицы ENEMY_LEVELS_TRAITS ]
 'actions' : [ номера действий из таблицы ENEMY_LEVELS_ACTIONS ]
 'dropItems' : [ номера наград из таблицы ENEMY_LEVELS_DROPITEMS ]
 уровень : { параметр : значение и т.д. }
*/
var ENEMY_BASIC_LEVELS = {
// уровень врага
	//1 : { 'name' : 'Оса', 'mhp' : 10, 'gold' : 100, 'exp' : 5000, 'actions' : [1, 2] }
};

/*
 Настройка уровней отдельных врагов
 номер_врага (ID из Базы Данных) : { уровень : { параметр : значение и т.д. } }
*/
var ENEMY_LEVELS = {
// номер_врага
	//1 : { 
	// 1 уровень врага
	// Значение mhp будет увеличено на 300 %
	// Помимо настроенных особенностей, также будут добавлены особенности из Базы данных
	//	1 : { 'name' : 'Пчела', 'mhp' : '300', 'graphic' : 'Fairy', 'blend_traits' : true, 'traits' : [1, 2], 'dropItems' : [1] },
	// 2 уровень врага
	//	2 : { 'name' : 'Супер пчела' }
	//}
};

/*
 Настройка особенностей врага
  'code' - код особенности
  'id' - ID особенности (номер из выпадающего списка)
  'value' - значение особенности
  code:
  11 - Скор. элемента
  12 - Скор. ослабления
  13 - Скор. состояния
  14 - Сопрот. состояния
  21 - Параметр
  22 - Ex-параметр
  23 - Sp-параметр
  31 - Элемент атаки
  32 - Состояние атаки
  33 - Скорость атаки
  34 - Количество атака
  41 - Доб. тип навыка
  42 - Блок. тип навыка
  43 - Добавить навык
  44 - Закрепить навык
  51 - Экипир. оружием
  52 - Экипир. броней
  53 - Зафикс. экип.
  54 - Блок. экипировку
  55 - Тип слота
  61 - Кол-во действий
  62 - Спец. филаг
  63 - Эфф. сильн. ослаб
  64 - Спос-ть стороны
  
  id:
  Начинается с 1, если это
  Тип элемента
  Тип умения
  Тип оружия
  Тип брони
  Тип экипировки
  Умение
  Оружие
  Броня
  Состояние
  Иначе начинается с 0
  
  value:
  Если указывается в процентах, то нужно поделить на 100
  Например, в Базе данных указано 99%
  Нужно написать 0.99
  
*/
var ENEMY_LEVELS_TRAITS = {
// номер особенности
	//1 : { 'code' : 11, 'id' : 1, 'value' : 1.5 }
};

/*
 Настройка действий врага
 'id' : ID навыка из Базы Данных
 'type' : тип условия
	1 - Всегда
	2 - Ход №
	3 - HP
	4 - MP
	5 - Состояние
	6 - Ур. партии
	7 - Переключатель
 'param1' : значение условия1
 'param2' : значение условия2
 Для типа 1 (Всегда): 'param1' : 0 и 'param2' : 0
 Для типа 2 (Ход №): 'param1' : Ход1 и 'param2' : Ход2
 Для типа 3 (HP): 'param1' : Процент1 и 'param2' : Процент2 (Проценты в пределах 0 - 1) Пример: 0.35 (35% HP)
 Для типа 4 (MP): 'param1' : Процент1 и 'param2' : Процент2 (Проценты в пределах 0 - 1) Пример: 0.1 (10% MP)
 Для типа 5 (Состояние): 'param1' : ID состояния и 'param2' : 0
 Для типа 6 (Ур. партии): 'param1' : Уровень партии и 'param2' : 0
 Дли типа 7 (Переключатель): 'param1' : ID переключателя и 'param2' : 0
 'priority' : приоритет действия
 номер : { 'id' : значение, 'type' : значение, 'param1' : значение, 'param2' : значение, 'priority' : значение }
*/
var ENEMY_LEVELS_ACTIONS = {
// номер действия
	//1 : { 'id' : 2, 'type' : 0, 'param1' : 0, 'param2' : 0, 'priority' : 6 }
};

/*
 Настройка награды за победу
 'type' : тип награды
 1 - вещь
 2 - оружие
 3 - броня
 'id' : ID предмета из Базы Данных
 'chance' : шанс добычи (1 / chance)
 номер : { 'type' : значение, 'id' : значение, 'chance' : значение }
*/
var ENEMY_LEVELS_DROPITEMS = {
// номер награды за победу
	// 1 : { 'type' : 1, 'id' : 1, 'chance' : 1 }
};

//===========================================================================
// Конец настройки плагина
//===========================================================================

/*:
 * @plugindesc Система уровней врагов
 * @author DK (Денис Кузнецов)
 * @help
 
 ### Информация о плагине ###
 Название: DKCore_Enemy_Levels
 Автор: DK
 Сайт: http://vk.com/rpgmakervxaceandmv
 Версия: 1.1
 Релиз: 22.11.2015
 Первый релиз: 30.10.2015
 
 ### Требования к плагину ###
 Наличие включенного плагина DKCore версии 1.3 или выше
 
 ### Инструкция ###
 Открыть js файл плагина и настроить уровни врагов
 
 Если у врага не будет настроек, то будет использоваться враг из Базы Данных
 Чтобы принудительно использовать стандартного врага из Базы Данных, установите ему 0 уровень
 По умолчанию каждый враг имеет 1 уровень
 Не используйте отрицательные уровни врагов
 
 Установить уровень врага:
 enemyId - ID врага из Базы Данных
 level - уровень врага
 this.setEnemyLevel(enemyId, level);

 Получить уровень врага:
 this.getEnemyLevel(enemyId);
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
 * @param Уровень врага в имени
 * @desc Отображать уровень врага в его имени ? true - да, false - нет
 * @default false
 
 * @param Отображение нулевого уровня
 * @desc Отображать нулевой уровень врага ? true - да, false - нет
 * @default false
 
 */
 
var Imported = Imported || {};
Imported.DKCore_Enemy_Levels = true;

if (!Imported.DKCore)
{
	alert('Отсутствует плагин DKCore! Плагин DKCore_Enemy_Levels не будет работать!');
	SceneManager.exit();
};

var ENEMY_LEVELS_SHOW_LEVEL = DKCore.toBool(PluginManager.parameters('DKCore_Enemy_Levels')['Уровень врага в имени']);
var ENEMY_LEVELS_SHOW_NULL_LEVEL = DKCore.toBool(PluginManager.parameters('DKCore_Enemy_Levels')['Отображение нулевого уровня']);

var $Enemy_Levels = null;
var $Enemy_Levels_Enemies = null;

//=============================================================================
// Enemy Levels Functions
//=============================================================================

function Enemy_Levels_Functions() {
	throw new Error('This is a static class (Это статический класс!)');
};

Enemy_Levels_Functions.getEnemy = function(enemyId) {
	var enemy_lvl = this.getEnemyLvl(enemyId);
	if ($Enemy_Levels_Enemies.hasOwnProperty(enemyId))
		if ($Enemy_Levels_Enemies[enemyId][1] === enemy_lvl)
			return $Enemy_Levels_Enemies[enemyId][0];
	var enemy = DKCore.CloneObject($dataEnemies[enemyId]);
	enemy.name = this.getEnemyName(enemyId);
	if (!this.checkEnemyLevelsSettings(enemyId))
	{
		$Enemy_Levels_Enemies[enemyId] = [enemy, enemy_lvl];
		return enemy;
	}
	var enemy_preset = this.getEnemyPreset(enemyId);
	var params = ['mhp', 'mmp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
	for(var i = 0; i < 8; i++)
	{
		var value = enemy_preset[params[i]];
		if (this.checkStandardValue(value))
			enemy.params[i] = this.getValue(value, enemy.params[i]);
	}
	enemy.battlerName = this.getEnemyBattlerName(enemyId);
	enemy.exp = this.getEnemyExp(enemyId);
	enemy.gold = this.getEnemyGold(enemyId);
	enemy.traits = this.getEnemyTraits(enemyId);
	enemy.actions = this.getEnemyActions(enemyId);
	enemy.dropItems = this.getEnemyDropItems(enemyId);
	$Enemy_Levels_Enemies[enemyId] = [enemy, enemy_lvl];
	return enemy;
};

Enemy_Levels_Functions.getEnemyPreset = function(enemyId) {
	var enemy_lvl = this.getEnemyLvl(enemyId);
	if (this.checkEnemyLevels(enemyId)) return ENEMY_LEVELS[enemyId][enemy_lvl];
	return ENEMY_BASIC_LEVELS[enemy_lvl];
};

Enemy_Levels_Functions.checkEnemyLevels = function(enemyId) {
	var enemy_lvl = this.getEnemyLvl(enemyId);
	if (!ENEMY_LEVELS.hasOwnProperty(enemyId)) return false;
	if (ENEMY_LEVELS[enemyId] === {}) return false;
	if (!ENEMY_LEVELS[enemyId].hasOwnProperty(enemy_lvl)) return false;
	if (ENEMY_LEVELS[enemyId][enemy_lvl] === {}) return false;
	return true;
};

Enemy_Levels_Functions.checkEnemyBasicLevels = function(enemyId) {
	var enemy_lvl = this.getEnemyLvl(enemyId)
	if (!ENEMY_BASIC_LEVELS.hasOwnProperty(enemy_lvl)) return false;
	if (ENEMY_BASIC_LEVELS[enemy_lvl] === {}) return false;
	return true;
};

Enemy_Levels_Functions.checkEnemyLevelsSettings = function(enemyId) {
	if (!this.checkEnemyLevels(enemyId) && !this.checkEnemyBasicLevels(enemyId)) return false;
	return true;
};

Enemy_Levels_Functions.checkStandardValue = function(value) {
	if (value == null) return false;
	if (value === '') return false;
	if (value === -1) return false;
	return true;
};

Enemy_Levels_Functions.getEnemyLvl = function(enemyId) {
	if (!$Enemy_Levels.hasOwnProperty(enemyId)) 
		$Enemy_Levels[enemyId] = 1;
	return $Enemy_Levels[enemyId];
};

Enemy_Levels_Functions.getEnemyLvlName = function(enemyId) {
	var lvl = this.getEnemyLvl(enemyId);
	if (lvl < 0) return '';
	if (!ENEMY_LEVELS_SHOW_NULL_LEVEL && lvl === 0) return '';
	if (!ENEMY_LEVELS_SHOW_LEVEL) return '';
	return ' Ур. ' + lvl + ' ';
};

Enemy_Levels_Functions.getEnemyName = function(enemyId) {
	var enemy = $dataEnemies[enemyId];
	var lvl = this.getEnemyLvlName(enemyId);
	if (!this.checkEnemyLevelsSettings(enemyId)) return enemy.name + lvl;
	var enemy_preset = this.getEnemyPreset(enemyId);
	if (enemy_preset.hasOwnProperty('name'))
	{
		var name = enemy_preset['name'];
		if (!this.checkStandardValue(name)) name = enemy.name;
	}
	return name + lvl;
};

Enemy_Levels_Functions.getEnemyBattlerName = function(enemyId) {
	var enemy = $dataEnemies[enemyId];
	if (!this.checkEnemyLevelsSettings(enemyId)) return enemy.battlerName;
	var enemy_preset = this.getEnemyPreset(enemyId);
	if (enemy_preset.hasOwnProperty('graphic'))
	{
		var graphic = enemy_preset['graphic'];
		if (this.checkStandardValue(graphic)) return graphic;
	}
	return enemy.battlerName;
};

Enemy_Levels_Functions.getEnemyTraits = function(enemyId) {
	var enemy = $dataEnemies[enemyId];
	if (!this.checkEnemyLevelsSettings(enemyId)) return enemy.traits;
	var enemy_preset = this.getEnemyPreset(enemyId);
	if (!enemy_preset.hasOwnProperty('traits')) return enemy.actions;
	var traits = [];
	if (enemy_preset['blend_traits'])
		traits = traits.concat(enemy.traits);
	for(var i = 0; i < enemy_preset['traits'].length; i++)
	{
		var value = enemy_preset['traits'][i];
		if (!this.checkStandardValue(value)) continue;
		var trait_preset = ENEMY_LEVELS_TRAITS[value];
		if (!trait_preset) continue;
		var trait = new Object();
		trait.code = trait_preset['code'];
		trait.dataId = trait_preset['id'];
		trait.value = trait_preset['value'];
		traits.push(trait);
	}
	return traits;
};

Enemy_Levels_Functions.getEnemyActions = function(enemyId) {
	var enemy = $dataEnemies[enemyId];
	if (!this.checkEnemyLevelsSettings(enemyId)) return enemy.actions;
	var enemy_preset = this.getEnemyPreset(enemyId);
	if (!enemy_preset.hasOwnProperty('actions')) return enemy.actions;
	var actions = [];
	if (enemy_preset['blend_actions'])
		actions = actions.concat(enemy.actions);
	for(var i = 0; i < enemy_preset['actions'].length; i++)
	{
		var value = enemy_preset['actions'][i];
		if (!this.checkStandardValue(value)) continue;
		if (!ENEMY_LEVELS_ACTIONS.hasOwnProperty(value)) continue;
		var action_preset = ENEMY_LEVELS_ACTIONS[value];
		if (!action_preset) continue;
		var action = new Object();
		action.skillId = action_preset['id'];
		action.conditionType = action_preset['type'];
		action.conditionParam1 = action_preset['param1'];
		action.conditionParam2 = action_preset['param2'];
		action.rating = action_preset['priority'];
		actions.push(action);
	}
	return actions;
};

Enemy_Levels_Functions.getEnemyDropItems = function(enemyId) {
	var enemy = $dataEnemies[enemyId];
	if (!this.checkEnemyLevelsSettings(enemyId)) return enemy.dropItems;
	var enemy_preset = this.getEnemyPreset(enemyId);
	if (!enemy_preset.hasOwnProperty('dropItems')) return enemy.dropItems;
	var dropItems = [];
	if (enemy_preset['blend_dropItems'])
		dropItems = dropItems.concat(enemy.dropItems);
	for (var i = 0; i < enemy_preset['dropItems'].length; i++)
	{
		var value = enemy_preset['dropItems'][i];
		if (!this.checkStandardValue(value)) continue;
		if (!ENEMY_LEVELS_DROPITEMS.hasOwnProperty(value)) continue;
		var dropItem_preset = ENEMY_LEVELS_DROPITEMS[value];
		if (!dropItem_preset) continue;
		var dropItem = new Object();
		dropItem.kind = dropItem_preset['type'];
		dropItem.dataId = dropItem_preset['id'];
		dropItem.denominator = dropItem_preset['chance'];
		dropItems.push(dropItem);
	}
	return dropItems;
};

Enemy_Levels_Functions.getValue = function(value, basic_value) {
	if (typeof(value) == 'number') return value;
	if (typeof(value) == 'string') return basic_value * ((100 + Number(value)) / 100);
};

Enemy_Levels_Functions.getEnemyExp = function(enemyId) {
	var enemy = $dataEnemies[enemyId];
	var enemy_preset = this.getEnemyPreset(enemyId);
	if (enemy_preset.hasOwnProperty('exp'))
		return this.getValue(enemy_preset['exp'], enemy.exp);
	else
		return enemy.exp;
};

Enemy_Levels_Functions.getEnemyGold = function(enemyId) {
	var enemy = $dataEnemies[enemyId];
	var enemy_preset = this.getEnemyPreset(enemyId);
	if (enemy_preset.hasOwnProperty('gold'))
		return this.getValue(enemy_preset['gold'], enemy.gold);
	else
		return enemy.gold;
};

//=============================================================================
// Game Enemy
//=============================================================================

Game_Enemy.prototype.enemy = function() {
    return Enemy_Levels_Functions.getEnemy(this._enemyId);
};

//=============================================================================
// Game Interpreter
//=============================================================================

Game_Interpreter.prototype.setEnemyLevel = function(enemyId, lvl) {
	$Enemy_Levels[enemyId] = lvl;
};

Game_Interpreter.prototype.getEnemyLevel = function(enemyId) {
	return Enemy_Levels_Functions.getEnemyLvl(enemyId);
};

//=============================================================================
// Data Manager
//=============================================================================

var Enemy_Levels_DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
	Enemy_Levels_DataManager_createGameObjects.call(this);
	$Enemy_Levels = {};
	$Enemy_Levels_Enemies = {};
};

var Enemy_Levels_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
	var contents = Enemy_Levels_DataManager_makeSaveContents.call(this);
	contents.Enemy_Levels = $Enemy_Levels;
	return contents;
};

var Enemy_Levels_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	Enemy_Levels_DataManager_extractSaveContents.call(this, contents);
	$Enemy_Levels = contents.Enemy_Levels;
};