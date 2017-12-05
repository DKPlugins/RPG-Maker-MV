/*
Title: Show Invisible Objects On Map
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.0
Release: 12.11.2017
First release: 12.11.2017
Supported languages: Russian, English
*/

/*ru
Название: Отображение Невидимых Объектов На Карте
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.0
Релиз: 12.11.2017
Первый релиз: 12.11.2017
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.1.0 When testing the game allows you to see the hidden objects on the map (when you press control)
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DK_Show_Invisible_Objects_On_Map
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 1.0
 Release: 12.11.2017
 First release: 12.11.2017
 Supported languages: Russian, English

 ### License and terms of use ###

 Recent information about the terms of use: https://dk-plugins.ru/terms-of-use

 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

 * @param Color
 * @desc Color of the identifier in hex format
 * @default #ff0000

 * @param Opacity
 * @desc Identifier opacity
 * @type number
 * @min 0
 * @max 255
 * @default 160

*/

/*:ru
* @plugindesc v.1.0 При тестировании игры позволяет увидеть скрытые объекты на карте (при нажатии control)
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DK_Show_Invisible_Objects_On_Map
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 1.0
 Релиз: 12.11.2017
 Первый релиз: 12.11.2017
 Поддерживаемые языки: Русский, Английский

 ### Лицензия и правила использования плагина ###

 Актуальная информация о правилах использования: https://dk-plugins.ru/terms-of-use

 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

 * @param Color
 * @text Цвет
 * @desc Цвет идентификатора в hex формате
 * @default #ff0000

 * @param Opacity
 * @text Прозрачность
 * @desc Прозрачность идентификатора
 * @type number
 * @min 0
 * @max 255
 * @default 160

*/

'use strict';

var Imported = Imported || {};
Imported.DK_Show_Invisible_Objects_On_Map = 1.0;

var ShowInvisibleObjectsOnMapParam = (function() {
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

    const params = PluginManager.parameters('DK_Show_Invisible_Objects_On_Map');

    return {
        Color: parse(params['Color']),
        Opacity: parse(params['Opacity'])
    };
})();

Sprite_Character.prototype.createInvisibleObjectIdentifier = function() {
    if (!$gameTemp.isPlaytest()) {
        return;
    }
    if (this._invisibleObjectIdentifier) {
        this.removeChild(this._invisibleObjectIdentifier);
        this._invisibleObjectIdentifier = null;
    }
    let width = this.patternWidth();
    if (width <= 1) {
        width = $gameMap.tileWidth();
    }
    let height = this.patternHeight();
    if (height <= 1) {
        height = $gameMap.tileHeight();
    }
    const bitmap = new Bitmap(width, height);
    bitmap.fillAll(ShowInvisibleObjectsOnMapParam.Color);
    this._invisibleObjectIdentifier = new Sprite(bitmap);
    this._invisibleObjectIdentifier.visible = false;
    this._invisibleObjectIdentifier.anchor.x = 0.5;
    this._invisibleObjectIdentifier.anchor.y = 1;
    this._invisibleObjectIdentifier.opacity = ShowInvisibleObjectsOnMapParam.Opacity;
    this.addChild(this._invisibleObjectIdentifier);
};

const ShowInvisibleObjectsOnMap_Sprite_Character_updateBitmap = Sprite_Character.prototype.updateBitmap;
Sprite_Character.prototype.updateBitmap = function() {
    if (this.isImageChanged()) {
        ShowInvisibleObjectsOnMap_Sprite_Character_updateBitmap.call(this);
        this.createInvisibleObjectIdentifier();
    }
};

const ShowInvisibleObjectsOnMap_Sprite_Character_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function() {
    ShowInvisibleObjectsOnMap_Sprite_Character_update.call(this);
    if ($gameTemp.isPlaytest()) {
        if (!this._invisibleObjectIdentifier || this._invisibleObjectIdentifier.bitmap.width === 1 || this._invisibleObjectIdentifier.bitmap.height === 1) {
            this.createInvisibleObjectIdentifier();
        } else {
            if (!(this._character instanceof Game_Follower)) {
                this._invisibleObjectIdentifier.visible = Input.isPressed('control') && !this._characterName && !this._tileId;
            }
        }
    }
};