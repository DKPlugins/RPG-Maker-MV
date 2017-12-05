/*
Title: Game Modes
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.0
Release: 10.10.2017
First release: 10.10.2017
Supported languages: Russian, English
*/

/*ru
Название: Игровые Режимы
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.0
Релиз: 10.10.2017
Первый релиз: 10.10.2017
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.1.0 Game modes
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools_Game_Modes
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 1.0
 Release: 10.10.2017
 First release: 10.10.2017
 Supported languages: Russian, English

 ### Requirements and dependencies ###
 Availability of working plugin DKTools version 0.99 or above
 Version of RPG Maker 1.5+

 ### License and terms of use ###

 Recent information about the terms of use: https://dk-plugins.ru/terms-of-use

 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

 * @param Modes
 * @text Game modes
 * @desc Game modes
 * @type struct<Mode>[]

 * @param Text Align
 * @desc Text Align
 * @type select
 * @option left
 * @option center
 * @option right
 * @default left

 * @param Use Mouse Hover
 * @text Mouse Hover
 * @desc Use mouse hover to select a mode?
 * @type boolean
 * @default false

 * @param Use Wheel Scroll
 * @text Wheel Scroll
 * @desc Use wheel scroll to select a mode?
 * @type boolean
 * @default false

 */

/*:ru
 * @plugindesc v.1.0 Игровые режимы
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKTools_Game_Modes
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 1.0
 Релиз: 10.10.2017
 Первый релиз: 10.10.2017
 Поддерживаемые языки: Русский, Английский

 ### Требования и зависимости ###
 Наличие включенного плагина DKTools версии 0.99 или выше
 Версия мейкера 1.5+

 ### Лицензия и правила использования плагина ###

 Актуальная информация о правилах использования: https://dk-plugins.ru/terms-of-use

 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

 * @param Modes
 * @text Режимы игры
 * @desc Режимы игры
 * @type struct<Mode>[]

 * @param Text Align
 * @text Выравнивание текста
 * @desc Выравнивание текста
 * @type select
 * @option left
 * @option center
 * @option right
 * @default left

 * @param Use Mouse Hover
 * @text Наведение мыши
 * @desc Использовать наведение мыши для выбора режима ?
 * @type boolean
 * @default false

 * @param Use Wheel Scroll
 * @text Прокрутка мышью
 * @desc Использовать прокрутку мышью для выбора режима ?
 * @type boolean
 * @default false

 */

/*~struct~Mode:

 * @param Text
 * @desc Name of the mode for each language
 * @type struct<ModeLocalization>[]

 * @param Switch
 * @desc Switch that turns on when selecting a mode
 * @type switch
 * @default 0

 * @param Map Id
 * @text Map
 * @desc Map number to which the player is transferred when selecting a mode
 * @type number
 * @min 1
 * @default 1

 * @param Map X
 * @text Coordinate X
 * @desc Coordinate X on the map where the player is transferred
 * @type number
 * @min 0
 * @default 0

 * @param Map Y
 * @text Coordinate Y
 * @desc Coordinate Y on the map where the player is transferred
 * @type number
 * @min 0
 * @default 0

 */

/*~struct~Mode:ru

 * @param Text
 * @text Название
 * @desc Название режима для каждого языка
 * @type struct<ModeLocalization>[]

 * @param Switch
 * @text Переключатель
 * @desc Переключатель, который включается при выборе режима
 * @type switch
 * @default 0

 * @param Map Id
 * @text Карта
 * @desc Номер карты, на которую переносится игрок при выборе режима
 * @type number
 * @min 1
 * @default 1

 * @param Map X
 * @text Координата X
 * @desc Координата X на карте, куда переносится игрок
 * @type number
 * @min 0
 * @default 0

 * @param Map Y
 * @text Координата Y
 * @desc Координата Y на карте, куда переносится игрок
 * @type number
 * @min 0
 * @default 0

 */

/*~struct~ModeLocalization:

 * @param Locale
 * @desc Game locale

 * @param Data
 * @desc Data

 */

/*~struct~ModeLocalization:ru

 * @param Locale
 * @text Локаль
 * @desc Локаль игры

 * @param Data
 * @text Данные
 * @desc Данные

 */

var Imported = Imported || {};
Imported.DKTools_Game_Modes = 1.0;

if (Imported.DKTools) {
    DKTools.PluginManager.requirePlugin('DKTools', 0.99);
} else {
    throw new Error('No plugin "DKTools"! Plugin "DKTools_Game_Modes" will not work!');
}

var GameModesParam = new DKTools.ParameterManager('DKTools_Game_Modes', [
    {
        parameter: 'Modes',
        property: 'Text'
    }
]);

GameModesParam.getGameModeText = function(index) {
    return this.get('Modes', index).Text[DKTools.Localization.locale];
};

//===========================================================================
// Scene_Title
//===========================================================================

var Game_Modes_Scene_Title_commandNewGame = Scene_Title.prototype.commandNewGame;
Scene_Title.prototype.commandNewGame = function() {
    var modes = GameModesParam.get('Modes');
    if (modes.length === 0) {
        Game_Modes_Scene_Title_commandNewGame.call(this);
    } else {
        DataManager.setupNewGame();
        this._commandWindow.close();
        this._commandWindow.hide();
        this.createGameModesWindow(modes);
    }
};

Scene_Title.prototype.createGameModesWindow = function(choices) {
    var width = this._commandWindow.width;
    var height = this._commandWindow.height;
    var x = this._commandWindow.x;
    var y = this._commandWindow.y;
    this._gameModeWindow = new DKTools.Window.Selectable(x, y, width, height);
    this._gameModeWindow.openness = 0;
    var contentsSprite = this._gameModeWindow.contentsSprite;
    var items = [];
    var align = GameModesParam.get('Text Align');
    _.forEach(choices, function(modeObj) {
        var command = {
            name: modeObj.Text[DKTools.Localization.locale],
            symbol: 'ok',
            handler: function(index) {
                var ext = contentsSprite.getItemExt(index);
                var switchId = ext.Switch;
                if (switchId > 0) {
                    $gameSwitches.setValue(switchId, true);
                }
                $gamePlayer.reserveTransfer(ext['Map Id'], ext['Map X'], ext['Map Y']);
                this._gameModeWindow.close();
            }.bind(this),
            align: align,
            ext: modeObj
        };
        items.push(command);
    }.bind(this));
    contentsSprite.setupIndex(0);
    contentsSprite.setupItems(items);
    contentsSprite.setHandler('cancel', function() {
        this._gameModeWindow.close();
        this._commandWindow.openness = 0;
        this._commandWindow.show();
        this._commandWindow.open();
        this._commandWindow.activate();
        this._windowLayer.removeChild(this._gameModeWindow);
        this._gameModeWindow = null;
    }.bind(this));
    contentsSprite.enableOption('mouseEnter');
    if (GameModesParam.get('Use Mouse Hover')) {
        contentsSprite.enableOption('mouseHover');
    }
    if (GameModesParam.get('Use Wheel Scroll')) {
        contentsSprite.enableOption('wheelScroll');
    }
    this._gameModeWindow.start(true);
    this._gameModeWindow.addEvent({
        type: 'close',
        onUpdate: function() {
            this.fadeOutAll();
            SceneManager.goto(Scene_Map);
        }.bind(this)
    });
    this._gameModeWindow.open();
    this.addWindow(this._gameModeWindow);
};