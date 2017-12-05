/*
Название: Игровая Валюта (Game Currency)
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Группа ВК: http://vk.com/rpgmakervxaceandmv
Сайт: http://dk-plugins.ru/
Версия: 1.3
Релиз: 21.02.2016
Первый релиз: 07.11.2015
*/

/*:
 * @plugindesc v.1.3 Система игровых валют. Добавляет в игру несколько валют.
 * @author DK (Денис Кузнецов)
 * @help
 
 ### Информация о плагине ###
 Название: DKCore_Game_Currency
 Автор: DK
 Группа ВК: http://vk.com/rpgmakervxaceandmv
 Сайт: http://dk-plugins.ru/
 Версия: 1.3
 Релиз: 21.02.2016
 Первый релиз: 07.11.2015
 
 ### Требования к плагину ###
 Наличие включенного плагина DKCore версии 1.61 или выше
 
 ### Инструкция ###
 Чтобы установить предмету цену определенной валюты, используйте заметки
 <price type: X>
 где type - тип валюты (начиная с 0)
 X - цена для данной валюты
 Пример для 3 валют:
 <price 0: 1000>
 <price 1: 100>
 <price 2: 20>
 
 Чтобы установить предмету только одну валюту, за которую он покупается/продается
 Напишите в заметках предмета
 <only type currency>
 где type - тип валюты (начиная с 0)
 
 Вы можете не указывать type, если хотите применить действие вызова скрипта к действующей валюте
 
 Чтобы узнать тип действующей валюты
 this.getGameCurrencyType();
 
 Чтобы узнать тип валюты, использованной ранее
 this.getLastCurrencyType();
 
 Чтобы получить значение валюты
 this.getCurrencyValue(type);
 
 Чтобы получить название валюты
 this.getCurrencyName(type);
 
 Чтобы получить номер иконки валюты
 this.getCurrencyIcon(type);
 
 Чтобы получить информацию о доступности валюты
 this.getCurrencyAccess(type);
 
 Чтобы установить значение валюте
 this.setCurrencyValue(value, type);
 
 Чтобы выбрать ранее использованную валюту
 this.selectLastCurrency();
 
 Чтобы выбрать валюту
 this.selectCurrency(type);
 
 Чтобы перенести средства с валюты type1 на валюту type2 с рейтингом rate
 type2 можно не указывать (по умолчанию действующая валюта)
 rate можно не указывать (по умолчанию равен 1)
 this.exchangeGameCurrency(type1, type2, rate);
 
 Дать партии валюту в количестве amount
 this.gainCurrency(amount, type);
 
 Отнять у партии валюту в количестве amount
 this.loseCurrency(amount, type);
 
 Разблокировать валюту
 this.unlockCurrency(type);
 
 Заблокировать валюту
 Последняя доступная валюта не блокируется
 this.lockCurrency(type);
 
 Установить доступ валюты
 this.setCurrencyAccess(access, type);
 
 Выбрать тип валюты на 1 меньше, чем сейчас
 Не тоже самое, что выбрать ранее использованную валюту
 this.prevCurrency();
 
 Выбрать тип валюты на 1 больше, чем сейчас
 this.nextCurrency();
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
 * @param Основные настройки
 * @default ---------------------------------
 
 * @param Названия валют
 * @desc Укажите через запятую названия валют
 * @default Gil, $, €
 
 * @param Стартовые значения валют
 * @desc Укажите через запятую стартовые значения валют
 * @default 100000, 5000, 2000
 
 * @param Иконки валют
 * @desc Укажите номера иконок валют через запятую. -1 чтобы не использовать
 * @default -1, 313, 314
 
 * @param Стартовая доступность валют
 * @desc Укажите через запятую стартовую доступность валют. true - да, false - нет
 * @default true, true, true
 
 * @param Шрифт окна золота
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Цвета названий валют
 * @desc Укажите номера цветов через запятую
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Цвета значений валют
 * @desc Укажите номера цветов через запятую
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Стартовый тип валюты
 * @desc Какой тип валюты используется в начале игры ?
Стандартно: 0
 * @default 0
 
 * @param Настройки окна золота
 * @default ---------------------------------
 
 * @param Обложка окна золота
 * @desc Обложка окна золота
Стандартно: -1
 * @default -1
 
 * @param Прозрачность окна золота
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна золота
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Настройки сцены меню
 * @default ---------------------------------
 
 * @param Отображение команды в меню
 * @desc Отображать команду смены валюты в меню ? true - да, false - нет
 * @default true
 
 * @param Название команды в меню
 * @desc Название команды смены валюты в меню
 * @default Валюта
 
 * @param Переключение валюты по нажатию на окно
 * @desc Переключать валюты по нажатию на окно ? true - да, false - нет
 * @default true
 
 * @param Доступ смены валют по переключателю
 * @desc Укажите номер переключателя, который будет отвечать за доступность смены валют. -1 чтобы отключить
 * @default -1
 
 */

var Imported = Imported || {};
Imported.DKCore_Game_Currency = true;

var DKVersion = DKVersion || {};
DKVersion.DKCore_Game_Currency = 1.3;

var DKCoreVersion = DKCoreVersion || {};
DKCoreVersion.DKCore_Game_Currency = 1.61;

if (Imported.DKCore)
	DKCore.checkVersion();
else
{
	alert('Отсутствует плагин DKCore! Плагин DKCore_Game_Currency не будет работать!');
	SceneManager.exit();
};

var GameCurrencyParam = {};
GameCurrencyParam.param = PluginManager.parameters('DKCore_Game_Currency');

GameCurrencyParam.currency					= {};
GameCurrencyParam.currency.name 			= DKCore.SplitString(GameCurrencyParam.param['Названия валют']);
GameCurrencyParam.currency.value 			= DKCore.StringToNumberArray(GameCurrencyParam.param['Стартовые значения валют']);
GameCurrencyParam.currency.icon				= DKCore.StringToNumberArray(GameCurrencyParam.param['Иконки валют']);
GameCurrencyParam.currency.access			= DKCore.StringToBoolArray(GameCurrencyParam.param['Стартовая доступность валют']);
GameCurrencyParam.currency.font				= DKCore.StringToFontArray(GameCurrencyParam.param['Шрифт окна золота']);
GameCurrencyParam.currency.color			= {};
GameCurrencyParam.currency.color['name']	= DKCore.StringToNumberArray(GameCurrencyParam.param['Цвета названий валют']);
GameCurrencyParam.currency.color['value']	= DKCore.StringToNumberArray(GameCurrencyParam.param['Цвета значений валют']);
GameCurrencyParam.currency.currency_type 	= Number(GameCurrencyParam.param['Стартовый тип валюты']);

GameCurrencyParam.gold_window				= {};
GameCurrencyParam.gold_window.windowskin	= GameCurrencyParam.param['Обложка окна золота'];
GameCurrencyParam.gold_window.opacity		= DKCore.StringToNumberArray(GameCurrencyParam.param['Прозрачность окна золота']);
GameCurrencyParam.gold_window.tone			= DKCore.StringToNumberArray(GameCurrencyParam.param['Тон окна золота']);

GameCurrencyParam.scene_menu				= {};
GameCurrencyParam.scene_menu.show_command	= DKCore.toBool(GameCurrencyParam.param['Отображение команды в меню']);
GameCurrencyParam.scene_menu.command_name 	= GameCurrencyParam.param['Название команды в меню'];
GameCurrencyParam.scene_menu.touch			= DKCore.toBool(GameCurrencyParam.param['Переключение валюты по нажатию на окно']);
GameCurrencyParam.scene_menu.switch			= Number(GameCurrencyParam.param['Доступ смены валют по переключателю']);

//===========================================================================
// Game Party
//===========================================================================

var Game_Currency_Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function() {
	Game_Currency_Game_Party_initialize.call(this);
	this.last_currency_type = GameCurrencyParam.currency.currency_type;
	this.currency_type = GameCurrencyParam.currency.currency_type;
	this.initCurrency();
};

Game_Party.prototype.initCurrency = function() {
	this.currency = [];
	for(var i = 0; i < GameCurrencyParam.currency.name.length; i++)
		this.currency[i] = { 'name' : GameCurrencyParam.currency.name[i], 'value' : GameCurrencyParam.currency.value[i], 'icon' : GameCurrencyParam.currency.icon[i], 'access' : GameCurrencyParam.currency.access[i] };
};

Game_Party.prototype.getCorrectCurrencyType = function(type) {
	if (type === undefined || this.currency.length <= type)
		return this.currency_type;
	return type;
};

Game_Party.prototype.gold = function(type) {
	type = this.getCorrectCurrencyType(type);
	return this.currency[type].value;
};

Game_Party.prototype.gainGold = function(amount, type) {
	type = this.getCorrectCurrencyType(type);
	this.currency[type].value = DKCore.MinMaxValue(0, this.maxGold(), this.gold(type) + amount);
};

Game_Party.prototype.loseGold = function(amount, type) {
	this.gainGold(-amount, type);
};

Game_Party.prototype.currencyName = function(type) {
	type = this.getCorrectCurrencyType(type);
	return this.currency[type].name;
};

Game_Party.prototype.currencyIcon = function(type) {
	type = this.getCorrectCurrencyType(type);
	return this.currency[type].icon;
};

Game_Party.prototype.currencyAccess = function(type) {
	type = this.getCorrectCurrencyType(type);
	return this.currency[type].access;
};

Game_Party.prototype.prevCurrency = function() {
	this.last_currency_type = this.currency_type;
	this.currency_type--;
	if (this.currency_type === -1) this.currency_type = this.currency.length - 1;
	if (!this.currencyAccess()) this.prevCurrency();
};

Game_Party.prototype.nextCurrency = function() {
	this.last_currency_type = this.currency_type;
	this.currency_type++;
	this.currency_type = this.currency_type % this.currency.length;
	if (!this.currencyAccess()) this.nextCurrency();
};

Game_Party.prototype.selectLastCurrency = function() {
	var type = this.last_currency_type;
	this.last_currency_type = this.currency_type; 
	this.currency_type = type;
};

Game_Party.prototype.selectCurrency = function(type) {
	type = this.getCorrectCurrencyType(type);
	this.last_currency_type = this.currency_type;
	this.currency_type = type;
};

Game_Party.prototype.setCurrencyValue = function(value, type) {
	if (type === undefined) type = this.currency_type;
	if (this.currency.length <= type) return;
	this.currency[type].value = DKCore.MinMaxValue(0, this.maxGold(), value);
};

Game_Party.prototype.checkAllCurrencyAccess = function() {
	for(var i = 0; i < this.currency.length; i++)
		if (this.currency[i].access)
			return true;
	return false;
};

Game_Party.prototype.unlockCurrency = function(type) {
	if (type === undefined) type = this.currency_type;
	if (this.currency.length <= type) return;
	this.currency[type].access = true;
};

Game_Party.prototype.lockCurrency = function(type) {
	if (type === undefined) type = this.currency_type;
	if (this.currency.length <= type) return;
	this.currency[type].access = false;
	if (!this.checkAllCurrencyAccess())
		return this.unlockCurrency(type);
	if (this.currency_type === type) this.nextCurrency();
};

Game_Party.prototype.exchangeCurrency = function(type1, type2, rate) {
	if (type2 === undefined) type2 = this.currency_type;
	if (rate === undefined) rate = 1;
	var gold = this.currency[type2].value;
	this.currency[type2].value = DKCore.MinMaxValue(0, this.maxGold(), gold + this.currency[type1]['value'] * rate);
	this.currency[type1].value = 0;
};

//===========================================================================
// Game Interpreter
//===========================================================================

Game_Interpreter.prototype.getCurrencyType = function() {
	return $gameParty.currency_type;
};

Game_Interpreter.prototype.getLastCurrencyType = function() {
	return $gameParty.last_currency_type;
};

Game_Interpreter.prototype.getCurrencyValue = function(type) {
	return $gameParty.gold(type);
};

Game_Interpreter.prototype.getCurrencyName = function(type) {
	return $gameParty.currencyName(type);
};

Game_Interpreter.prototype.getCurrencyIcon = function(type) {
	return $gameParty.currencyIcon(type);
};

Game_Interpreter.prototype.getCurrencyAccess = function(type) {
	return $gameParty.currencyAccess(type);
};

Game_Interpreter.prototype.setCurrencyValue = function(value, type) {
	$gameParty.setCurrencyValue(value, type);
};

Game_Interpreter.prototype.selectLastCurrency = function() {
	$gameParty.selectLastCurrency();
};

Game_Interpreter.prototype.selectCurrency = function(type) {
	$gameParty.selectCurrency(type);
};

Game_Interpreter.prototype.exchangeCurrency = function(type1, type2, rate) {
	$gameParty.exchangeCurrency(type1, type2, rate);
};

Game_Interpreter.prototype.gainCurrency = function(amount, type) {
	$gameParty.gainGold(amount, type);
};

Game_Interpreter.prototype.loseCurrency = function(amount, type) {
	this.gainCurrency(-amount, type);
};

Game_Interpreter.prototype.unlockCurrency = function(type) {
	$gameParty.unlockCurrency(type);
};

Game_Interpreter.prototype.lockCurrency = function(type) {
	$gameParty.lockCurrency(type);
};

Game_Interpreter.prototype.setCurrencyAccess = function(access, type) {
	if (access)
		this.unlockCurrency(type);
	else
		this.lockCurrency(type);
};

Game_Interpreter.prototype.prevCurrency = function() {
	$gameParty.prevCurrency();
};

Game_Interpreter.prototype.nextCurrency = function() {
	$gameParty.nextCurrency();
};

//===========================================================================
// Window Base
//===========================================================================

Window_Base.prototype.currencyValueColor = function() {
	var type = $gameParty.currency_type;
	if (GameCurrencyParam.currency.color.value.length <= type) return this.normalColor();
	if (GameCurrencyParam.currency.color.value[type] === -1) return this.normalColor();
	return this.textColor(GameCurrencyParam.currency.color.value[type]);
};

Window_Base.prototype.currencyNameColor = function() {
	var type = $gameParty.currency_type;
	if (GameCurrencyParam.currency.color.name.length <= type) return this.systemColor();
	if (GameCurrencyParam.currency.color.name[type] === -1) return this.systemColor();
	return this.textColor(GameCurrencyParam.currency.color.name[type]);
};

Window_Base.prototype.drawCurrencyValue = function(value, unit, x, y, width, currency_type) {
    var unitWidth = Math.min(80, this.textWidth(unit));
	var icon = $gameParty.currencyIcon(currency_type);
	var padding = 6;
	DKCore.setupFont(this, GameCurrencyParam.currency.font);
	this.changeTextColor(this.currencyValueColor());
	if (icon !== -1)
	{
		this.drawText(value, x, y, width - padding - Window_Base._iconWidth, 'right');
		this.drawIcon(icon, x + width - Window_Base._iconWidth, y);	
	}
	else
	{
		this.drawText(value, x, y, width - unitWidth - 6, 'right');
		this.changeTextColor(this.currencyNameColor());
		this.drawText(unit, x + width - unitWidth, y, unitWidth, 'right');
	}
};

//===========================================================================
// Window Menu Command
//===========================================================================

var Game_Currency_Window_MenuCommand_addMainCommands = Window_MenuCommand.prototype.addMainCommands;
Window_MenuCommand.prototype.addMainCommands = function() {
	Game_Currency_Window_MenuCommand_addMainCommands.call(this);
	if (GameCurrencyParam.scene_menu.show_command)
		this.addCommand(GameCurrencyParam.scene_menu.command_name, 'game_currency', GameCurrencyParam.scene_menu.switch === -1 ? true : $gameSwitches.value(GameCurrencyParam.scene_menu.switch));
};

//===========================================================================
// Window Gold
//===========================================================================

var Game_Currency_Window_Gold_initialize = Window_Gold.prototype.initialize;
Window_Gold.prototype.initialize = function(x, y) {
	this.currency_type = $gameParty.currency_type;
	Game_Currency_Window_Gold_initialize.call(this, x, y);
	DKCore.setupWindow(this, GameCurrencyParam.gold_window);
};

Window_Gold.prototype.createButton = function(click_handler) {
	var button = new Sprite_Button();
	button.bitmap = new Bitmap(this.width, this.height);
	button.setClickHandler(click_handler.bind(this));
	this.addChild(button);
};

Window_Gold.prototype.setCurrencyType = function(type) {
	if (this.currency_type === type) return;
	this.currency_type = type;
	this.refresh();
};

Window_Gold.prototype.resetCurrencyType = function() {
	this.setCurrencyType($gameParty.currency_type);
};

Window_Gold.prototype.updateTone = function() {
};

Window_Gold.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
    this.drawCurrencyValue(this.value(), this.currencyUnit(), x, 0, width, this.currency_type);
};

Window_Gold.prototype.currencyType = function() {
	return this.currency_type;
};

Window_Gold.prototype.value = function() {
    return $gameParty.gold(this.currency_type);
};

Window_Gold.prototype.currencyUnit = function() {
	return $gameParty.currencyName(this.currency_type);
};

//===========================================================================
// Window Shop Buy
//===========================================================================

Window_ShopBuy.prototype.maxItems = function() {
    return this.data ? this.data.length : 1;
};

Window_ShopBuy.prototype.getDataIndex = function() {
	return this.data[this.index()];
};

Window_ShopBuy.prototype.item = function() {
    return this.getDataIndex().item;
};

Window_ShopBuy.prototype.getCurrencyTypeIndex = function() {
	return this.getDataIndex().currency_type;
};

Window_ShopBuy.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this.item());
};

Window_ShopBuy.prototype.getItemIndex = function(item) {
	for(var i = 0; i < this.data.length; i++)
		if (this.data[i].item === item)
			return i;
	return -1;
};

Window_ShopBuy.prototype.getItem = function(item) {
	return this.data[this.getItemIndex(item)];
};

Window_ShopBuy.prototype.getMoney = function(item) {
	return $gameParty.gold(this.getItem(item).currency_type);
};

Window_ShopBuy.prototype.price = function(item) {
	return this.getItem(item).price || 0;
};

Window_ShopBuy.prototype.isEnabled = function(item) {
    return (item && this.price(item) <= this.getMoney(item) &&
            !$gameParty.hasMaxItems(item));
};

Window_ShopBuy.prototype.makeItemList = function() {
	this.data = [];
	this._shopGoods.forEach(function(goods) {
		var item = null;
        switch (goods[0])
		{
        case 0:
            item = $dataItems[goods[1]];
            break;
        case 1:
            item = $dataWeapons[goods[1]];
            break;
        case 2:
            item = $dataArmors[goods[1]];
            break;
        }
		if (item)
		{
			var currency_type = Scene_Base.prototype.processGameCurrencyTypeNotetags.call(this, item);
			var price = goods[2] === 0 ? Scene_Base.prototype.processGameCurrencyPriceNotetags.call(this, item, currency_type) : goods[3];
			this.data.push({ 'item': item, 'currency_type': currency_type, 'price': price });
		}
	}, this);
};

Window_ShopBuy.prototype.drawItem = function(index) {
	var data = this.data[index];
    var item = data.item;
    var rect = this.itemRect(index);
	var currency_type = data.currency_type;
	var unit = $gameParty.currencyName(currency_type);
    var priceWidth = 128;
    rect.width -= this.textPadding();
    this.changePaintOpacity(this.isEnabled(item));
    this.drawItemName(item, rect.x, rect.y, rect.width - priceWidth);
	this.drawCurrencyValue(this.price(item), unit, rect.x + rect.width - priceWidth, rect.y, priceWidth, currency_type);
    this.changePaintOpacity(true);
};

Window_ShopBuy.prototype.setGoldWindow = function(gold_window) {
	this.gold_window = gold_window;
};

var Game_Currency_Window_ShopBuy_updateHelp = Window_ShopBuy.prototype.updateHelp;
Window_ShopBuy.prototype.updateHelp = function() {
	Game_Currency_Window_ShopBuy_updateHelp.call(this);
	if (this.gold_window)
		this.gold_window.setCurrencyType(this.getCurrencyTypeIndex());
};

//===========================================================================
// Window Shop Number
//===========================================================================

Window_ShopNumber.prototype.setCurrencyType = function(currency_type) {
	this.currency_type = currency_type;
    this.refresh();
};

Window_ShopNumber.prototype.drawTotalPrice = function() {
    var total = this._price * this._number;
    var width = this.contentsWidth() - this.textPadding();
    this.drawCurrencyValue(total, this._currencyUnit, 0, this.priceY(), width, this.currency_type);
};

//===========================================================================
// Scene Base
//===========================================================================

Scene_Base.prototype.processGameCurrencyTypeNotetags = function(item) {
	var regexp = /<[\s]*only[\s]*(\d+)[\s]*currency[\s]*>/i;
	var note = item.note.split(/[\r\n]+/);
	for (var i = 0; i < note.length; i++) 
	{
		var line = note[i];
		if (line.match(regexp))
			return Number(RegExp.$1);
	}
	return $gameParty.currency_type;
};

Scene_Base.prototype.processGameCurrencyPriceNotetags = function(item, currency_type) {
	var regexp = /<[\s]*price[\s]*(\d+)[\s]*:[\s]*(\d+)[\s]*>/i;
	var note = item.note.split(/[\r\n]+/);
	for (var i = 0; i < note.length; i++) 
	{
		var line = note[i];
		if (line.match(regexp))
			if (currency_type === Number(RegExp.$1))
				return Number(RegExp.$2);
	}
	return item.price;
};

//===========================================================================
// Scene Menu
//===========================================================================

var Game_Currency_Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	Game_Currency_Scene_Menu_createCommandWindow.call(this);
	this._commandWindow.setHandler('game_currency', this.handlerCommandGameCurrency.bind(this));
};

var Game_Currency_Scene_Menu_createGoldWindow = Scene_Menu.prototype.createGoldWindow;
Scene_Menu.prototype.createGoldWindow = function() {
	Game_Currency_Scene_Menu_createGoldWindow.call(this);
	if (GameCurrencyParam.scene_menu.touch)
		this._goldWindow.createButton(this.clickHandlerGoldButton.bind(this));
};

Scene_Menu.prototype.clickHandlerGoldButton = function() {
	if (GameCurrencyParam.scene_menu.switch !== -1 && !$gameSwitches.value(GameCurrencyParam.scene_menu.switch)) return;
	this.handlerCommandGameCurrency();
};

Scene_Menu.prototype.handlerCommandGameCurrency = function() {
	$gameParty.nextCurrency();
	this._commandWindow.activate();
	this._goldWindow.resetCurrencyType();
	this._goldWindow.refresh();
};

//===========================================================================
// Scene Shop
//===========================================================================

var Game_Currency_Scene_Shop_createBuyWindow = Scene_Shop.prototype.createBuyWindow;
Scene_Shop.prototype.createBuyWindow = function() {
	Game_Currency_Scene_Shop_createBuyWindow.call(this);
	this._buyWindow.setGoldWindow(this._goldWindow);
};

Scene_Shop.prototype.currencyType = function() {
	return this.processGameCurrencyTypeNotetags(this._item);
};

var Game_Currency_Scene_Shop_onBuyOk = Scene_Shop.prototype.onBuyOk;
Scene_Shop.prototype.onBuyOk = function() {
	Game_Currency_Scene_Shop_onBuyOk.call(this);
	var currency_type = this.currencyType()
	this._goldWindow.setCurrencyType(currency_type);
    this._numberWindow.setCurrencyType(currency_type);
	this._numberWindow.setCurrencyUnit(this.currencyUnit());
};

var Game_Currency_Scene_Shop_onSellOk = Scene_Shop.prototype.onSellOk;
Scene_Shop.prototype.onSellOk = function() {
	Game_Currency_Scene_Shop_onSellOk.call(this);
	var currency_type = this.currencyType();
	this._goldWindow.setCurrencyType(currency_type);
    this._numberWindow.setCurrencyType(currency_type);
	this._numberWindow.setCurrencyUnit(this.currencyUnit());
};

Scene_Shop.prototype.doBuy = function(number) {
    $gameParty.loseGold(number * this.buyingPrice(), this.currencyType());
    $gameParty.gainItem(this._item, number);
};

Scene_Shop.prototype.doSell = function(number) {
    $gameParty.gainGold(number * this.sellingPrice(), this.currencyType());
    $gameParty.loseItem(this._item, number);
};

Scene_Shop.prototype.sellingPrice = function() {
	return this.processGameCurrencyPriceNotetags(this._item, this.currencyType()) / 2;
};