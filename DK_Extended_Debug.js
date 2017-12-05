/*
Title: Extended Debug
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.0
Release: 10.11.2017
First release: 10.11.2017
Supported languages: Russian, English
*/

/*ru
Название: Расширенная Отладка
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.0
Релиз: 10.11.2017
Первый релиз: 10.11.2017
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.1.0 Добавляет возможность изменять локальные переключатели в отладке игры (F9)
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DK_Extended_Debug
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 1.0
 Релиз: 10.11.2017
 Первый релиз: 10.11.2017
 Поддерживаемые языки: Русский, Английский

 ### Лицензия и правила использования плагина ###

 Актуальная информация о правилах использования: https://dk-plugins.ru/terms-of-use

 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

*/

'use strict';

var Imported = Imported || {};
Imported.DK_Extended_Debug = 1.0;

//===========================================================================
// Scene_Debug
//===========================================================================

Scene_Debug.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCategoryWindow();
    this.createRangeWindow();
    this.createEditWindow();
    this.createDebugHelpWindow();
};

Scene_Debug.prototype.createCategoryWindow = function() {
    this._categoryWindow = new Window_DebugCategory(0, 0);
    this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._categoryWindow);
};

Scene_Debug.prototype.createRangeWindow = function() {
    this._rangeWindow = new Window_DebugRange(0, this._categoryWindow.height, this._categoryWindow);
    this._rangeWindow.setHandler('ok', this.onRangeOk.bind(this));
    this._rangeWindow.setHandler('cancel', this.onRangeCancel.bind(this));
    this.addWindow(this._rangeWindow);
};

Scene_Debug.prototype.onCategoryOk = function() {
    this._rangeWindow.activate();
};

Scene_Debug.prototype.onRangeCancel = function() {
    this._categoryWindow.activate();
};

Scene_Debug.prototype.helpText = function() {
    switch (this._rangeWindow.mode()) {
        case 'switches': return 'Enter : Вкл / Выкл';
        case 'variables': {
            return ('Left     :  -1\n' +
                'Right    :  +1\n' +
                'Pageup   : -10\n' +
                'Pagedown : +10');
        }
        case 'self_switches': {
            const selfSwitches = ['A', 'B', 'C', 'D'];
            const selfSwitch = selfSwitches[this._editWindow._selfSwitchIndex || 0];
            return ('Локальный переключатель: ' + selfSwitch + '\n' +
                'Left   : Предыдущий переключатель\n' +
                'Right  : Следующий переключатель\n' +
                'Enter  : Вкл / Выкл'
            );
        }
    }
};

//===========================================================================
// Window_DebugCategory
//===========================================================================

function Window_DebugCategory() {
    this.initialize.apply(this, arguments);
}

Window_DebugCategory.prototype = Object.create(Window_Command.prototype);
Window_DebugCategory.prototype.constructor = Window_DebugCategory;

Window_DebugCategory.prototype.windowWidth = function() {
    return 246;
};

Window_DebugCategory.prototype.windowHeight = function() {
    return this.standardPadding() * 2 + this.lineHeight() * 3;
};

Window_DebugCategory.prototype.makeCommandList = function() {
    this.addCommand('Переключатели', 'switches');
    this.addCommand('Переменные', 'variables');
    this.addCommand('Лок. переключатели', 'self_switches');
};

Window_DebugCategory.prototype.isCancelTriggered = function() {
    return (Window_Selectable.prototype.isCancelTriggered() ||
        Input.isTriggered('debug'));
};

//===========================================================================
// Window_DebugRange
//===========================================================================

const ExtendedDebug_Window_DebugRange_initialize = Window_DebugRange.prototype.initialize;
Window_DebugRange.prototype.initialize = function(x, y, categoryWindow) {
    this._categoryWindow = categoryWindow;
    this._maxEvents = Math.ceil($gameMap.events().length / 10);
    ExtendedDebug_Window_DebugRange_initialize.call(this, x, y);
    this.deactivate();
};

Window_DebugRange.prototype.windowHeight = function() {
    return Graphics.boxHeight - this._categoryWindow.height;
};

Window_DebugRange.prototype.maxItems = function() {
    switch (this.mode()) {
        case 'switches': return this._maxSwitches;
        case 'variables': return this._maxVariables;
        case 'self_switches': return this._maxEvents;
    }
};

const ExtendedDebug_Window_DebugRange_update = Window_DebugRange.prototype.update;
Window_DebugRange.prototype.update = function() {
    const mode = this.mode();
    if (this._mode !== mode) {
        this._mode = mode;
        this.refresh();
    }
    const index = this.index();
    if (index >= this.maxItems()) {
        this.select(this.maxItems() - 1);
    }
    ExtendedDebug_Window_DebugRange_update.call(this);
};

Window_DebugRange.prototype.mode = function() {
    return this._categoryWindow.currentSymbol();
};

Window_DebugRange.prototype.topId = function() {
    return this.index() * 10 + 1;
};

Window_DebugRange.prototype.drawItem = function(index) {
    const rect = this.itemRectForText(index);
    const start = index * 10 + 1;
    let text;
    switch (this.mode()) {
        case 'switches': {
            text = 'S';
            break;
        }
        case 'variables': {
            text = 'V';
            break;
        }
        case 'self_switches': {
            text = 'E';
            break;
        }
    }
    const end = start + 9;
    text += ' [' + start.padZero(4) + '-' + end.padZero(4) + ']';
    this.drawText(text, rect.x, rect.y, rect.width);
};

Window_DebugRange.prototype.isCancelTriggered = Window_Selectable.prototype.isCancelTriggered;

Window_DebugRange.prototype.processCancel = Window_Selectable.prototype.processCancel;

//===========================================================================
// Window_DebugEdit
//===========================================================================

Window_DebugEdit.prototype.itemName = function(dataId) {
    switch (this._mode) {
        case 'switches': return $dataSystem.switches[dataId];
        case 'variables': return $dataSystem.variables[dataId];
        case 'self_switches': return $dataMap.events[dataId] ? $dataMap.events[dataId].name : '';
    }
};

Window_DebugEdit.prototype.itemStatus = function(dataId) {
    switch (this._mode) {
        case 'switches': return $gameSwitches.value(dataId) ? '[ON]' : '[OFF]';
        case 'variables': return String($gameVariables.value(dataId));
        case 'self_switches': {
            let status = '[%1]';
            let result = '';
            const event = $gameMap.event(dataId);
            if (event) {
                const selfSwitches = ['A', 'B', 'C', 'D'];
                for(let i = 0; i < selfSwitches.length; i++) {
                    const selfSwitch = selfSwitches[i];
                    const key = [$gameMap.mapId(), dataId, selfSwitch];
                    if ($gameSelfSwitches.value(key)) {
                        if (result && selfSwitch !== 'A') {
                            result += ', ';
                        }
                        result += selfSwitch;
                    }
                }
            }
            return status.format(result);
        }
    }
};

const ExtendedDebug_Window_DebugEdit_update = Window_DebugEdit.prototype.update;
Window_DebugEdit.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
    if (this.active) {
        switch (this._mode) {
            case 'switches': {
                this.updateSwitch();
                break;
            }
            case 'variables': {
                this.updateVariable();
                break;
            }
            case 'self_switches': {
                this.updateEvent();
                break;
            }
        }
    }
};

Window_DebugEdit.prototype.updateEvent = function() {
    const selfSwitches = ['A', 'B', 'C', 'D'];
    let needsRefresh = false;
    this._selfSwitchIndex = this._selfSwitchIndex || 0;
    if (Input.isRepeated('right')) {
        this._selfSwitchIndex = ++this._selfSwitchIndex % 4;
        needsRefresh = true;
    }
    if (Input.isRepeated('left')) {
        this._selfSwitchIndex--;
        if (this._selfSwitchIndex < 0) {
            this._selfSwitchIndex = 3;
        }
        needsRefresh = true;
    }
    if (Input.isRepeated('ok')) {
        const selfSwitch = selfSwitches[this._selfSwitchIndex];
        const key = [$gameMap.mapId(), this._topId + this.index(), selfSwitch];
        const lastValue = $gameSelfSwitches.value(key);
        $gameSelfSwitches.setValue(key, !lastValue);
        needsRefresh = true;
    }
    if (needsRefresh) {
        SoundManager.playCursor();
        this.redrawCurrentItem();
        SceneManager._scene.refreshHelpWindow();
    }
};