/*
Title: Custom Vehicles
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.1
Release: 18.10.2017
First release: 23.08.2016
Supported languages: Russian, English
*/

/*ru
Название: Транспорт
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.1
Релиз: 18.10.2017
Первый релиз: 23.08.2016
Поддерживаемые языки: Русский, Английский
*/

/*:
 * @plugindesc v.1.1 Adds land vehicles
 * @author DK (Denis Kuznetsov)
 * @help

 ### Info about plugin ###
 Title: DKTools_Custom_Vehicles
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 1.1
 Release: 18.10.2017
 First release: 23.08.2016
 Supported languages: Russian, English

 ### Requirements and dependencies ###
 The presence of the included plugin DKTools version 0.992 or higher
 Version of RPG Maker 1.5+

 ### Instruction ###
 Plugin commands:
 1. Change Vehicle BGM
 ChangeVehicleBGM [TYPE] [NAME] [VOLUME] [PITCH] [PAN]
 TYPE - Type of vehicle
 NAME - BGM name
 VOLUME - Volume
 PITCH - Pitch
 PAN - Panorama
 Example: ChangeVehicleBGM bike Ship1 100 100 0

 2. Set Vehicle Location
 SetVehicleLocation [TYPE] [MAP ID] [X] [Y]
 TYPE - Type of vehicle
 MAP ID - Map id
 X - The X coordinate
 Y - The Y coordinate
 Example: SetVehicleLocation bike 2 1 1

 3. Change Vehicle Image
 ChangeVehicleImage [TYPE] [NAME] [INDEX]
 TYPE - Type of vehicle
 NAME - Image name
 INDEX - Image index
 Example: ChangeVehicleImage car Vehicle 0

 4. Set Vehicle Speed
 SetVehicleMoveSpeed [TYPE] [SPEED]
 TYPE - Type of vehicle
 SPEED - Speed
 Example: SetVehicleMoveSpeed car 4

 ### License and terms of use ###

 Recent information about the terms of use: https://dk-plugins.ru/terms-of-use

 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

 * @param Vehicles
 * @desc List of vehicles
 * @type struct<Vehicle>[]
 * @default []

*/

/*:ru
 * @plugindesc v.1.1 Добавляет наземный транспорт
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKTools_Custom_Vehicles
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 1.1
 Релиз: 18.10.2017
 Первый релиз: 23.08.2016
 Поддерживаемые языки: Русский, Английский

 ### Требования и зависимости ###
 Наличие включенного плагина DKTools версии 0.99 или выше
 Версия мейкера 1.5+

 ### Инструкция ###
 Команды плагина:
 1. Изменить BGM транспорта
 ChangeVehicleBGM [TYPE] [NAME] [VOLUME] [PITCH] [PAN]
 TYPE - Тип транспорта
 NAME - Название BGM
 VOLUME - Громкость
 PITCH - Тон
 PAN - Панорама
 Пример: ChangeVehicleBGM bike Ship1 100 100 0

 2. Переместить транспорт
 SetVehicleLocation [TYPE] [MAP ID] [X] [Y]
 TYPE - Тип транспорта
 MAP ID - Номер карты
 X - Координата X
 Y - Координата Y
 Пример: SetVehicleLocation bike 2 1 1

 3. Изменить изображение транспорта
 ChangeVehicleImage [TYPE] [NAME] [INDEX]
 TYPE - Тип транспорта
 NAME - Название изображения
 INDEX - Индекс изображения
 Пример: ChangeVehicleImage car Vehicle 0

 4. Изменить скорость транспорта
 SetVehicleMoveSpeed [TYPE] [SPEED]
 TYPE - Тип транспорта
 SPEED - Скорость
 Пример: SetVehicleMoveSpeed car 4

 ### Лицензия и правила использования плагина ###

 Актуальная информация о правилах использования: https://dk-plugins.ru/terms-of-use

 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

 * @param Vehicles
 * @text Транспорт
 * @desc Список транспортных средств
 * @type struct<Vehicle>[]
 * @default []

*/

/*~struct~Vehicle:

 * @param Type
 * @desc Type of transport

 * @param Map Id
 * @text Map Id
 * @desc Start map id
 * @type number
 * @min 1
 * @default 1

 * @param X
 * @desc Start coordinate X
 * @type number
 * @min 0
 * @default 0

 * @param Y
 * @desc Start coordinate Y
 * @type number
 * @min 0
 * @default 0

 * @param Switch
 * @desc A switch that turns on when the player is using transport
 * @type switch
 * @default 0

 * @param BGM
 * @desc Background music
 * @type struct<VehicleBGM>

 * @param Speed
 * @desc Speed of transport
 * @type number
 * @min 1
 * @default 1
 *
 * @param Character Name
 * @desc Character name
 * @type file
 * @dir img/characters

 * @param Character Index
 * @desc Character index
 * @type number
 * @min 0
 * @default 0

 * @param Regions
 * @desc Regions where transport can move. 0 - All Regions permitted
 * @type number[]
 * @default ["0"]

 * @param Visibility Switch
 * @desc Vehicle visibility switch
 * @type switch
 * @default 0

 */

/*~struct~Vehicle:ru

 * @param Type
 * @text Тип транспорта
 * @desc Тип транспорта

 * @param Map Id
 * @text Номер карты
 * @desc Стартовый номер карты
 * @type number
 * @min 1
 * @default 1

 * @param X
 * @text Координата X
 * @desc Стартовая координата X
 * @type number
 * @min 0
 * @default 0

 * @param Y
 * @text Координата Y
 * @desc Стартовая координата Y
 * @type number
 * @min 0
 * @default 0

 * @param Switch
 * @text Переключатель
 * @desc Переключатель, который включается, когда персонаж использует транспорт
 * @type switch
 * @default 0

 * @param BGM
 * @text Фоновая музыка
 * @desc Фоновая музыка
 * @type struct<VehicleBGM>

 * @param Speed
 * @text Скорость
 * @desc Скорость транспорта
 * @type number
 * @min 1
 * @default 1
 *
 * @param Character Name
 * @text Название графики
 * @desc Название графики
 * @type file
 * @dir img/characters

 * @param Character Index
 * @text Индекс графики
 * @desc Индекс графики
 * @type number
 * @min 0
 * @default 0

 * @param Regions
 * @text Регионы
 * @desc Регионы, где транспорт может двигаться. 0 - Все регионы разрешены
 * @type number[]
 * @default ["0"]

 * @param Visibility Switch
 * @text Переключатель видимости
 * @desc Переключатель видимости транспорта
 * @type switch
 * @default 0

 */

/*~struct~VehicleBGM:

 * @param File
 * @desc File
 * @type file
 * @dir audio/bgm/

 * @param Volume
 * @desc Volume
 * @type number
 * @min 0
 * @max 100
 * @default 90

 * @param Pitch
 * @desc Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100

 * @param Pan
 * @text Panorama
 * @desc Panorama
 * @type number
 * @min -100
 * @max 100
 * @default 0

 */

/*~struct~VehicleBGM:ru

 * @param File
 * @text Файл
 * @desc Файл
 * @type file
 * @dir audio/bgm/

 * @param Volume
 * @text Громкость
 * @desc Громкость
 * @type number
 * @min 0
 * @max 100
 * @default 90

 * @param Pitch
 * @text Темп
 * @desc Темп
 * @type number
 * @min 50
 * @max 150
 * @default 100

 * @param Pan
 * @text Панорама
 * @desc Панорама
 * @type number
 * @min -100
 * @max 100
 * @default 0

 */

'use strict';

var Imported = Imported || {};
Imported.DKTools_Custom_Vehicles = 1.1;

if (Imported.DKTools) {
    DKTools.PluginManager.requirePlugin('DKTools', 0.99);
} else {
    throw new Error('No plugin "DKTools"! Plugin "DKTools_Custom_Vehicles" will not work!');
}

var CustomVehiclesParam = new DKTools.ParameterManager('DKTools_Custom_Vehicles');

CustomVehiclesParam.getVehicle = function(type) {
    return _.find(this.get('Vehicles'), { Type: type });
};

//===========================================================================
// Game Character Base
//===========================================================================

Game_CharacterBase.prototype.isCollidedWithVehicles = function(x, y) {
    const vehicles = $gameMap.vehicles();
    for(let i = 0; i < vehicles.length; i++) {
        const vehicle = vehicles[i];
        if (vehicle._type !== 'airship' && vehicle.opacity() > 0 && vehicle.posNt(x, y)) {
            return true;
        }
    }
    return false;
};

//===========================================================================
// Game Map
//===========================================================================

const Custom_Vehicles_Game_Map_createVehicles = Game_Map.prototype.createVehicles;
Game_Map.prototype.createVehicles = function() {
    Custom_Vehicles_Game_Map_createVehicles.call(this);
    _.forEach(CustomVehiclesParam.get('Vehicles'), function(vehicle) {
        this._vehicles.push(new Game_Vehicle(vehicle.Type));
    }.bind(this));
};

Game_Map.prototype.customVehicleType = function(x, y) {
    const vehicles = this.vehicles();
    for(let i = 0; i < vehicles.length; i++) {
        const vehicle = vehicles[i];
        if (vehicle.opacity() > 0 && vehicle.posNt(x, y)) {
            return vehicle._type;
        }
    }
    return null;
};

Game_Map.prototype.vehicle = function(type) {
    const vehicles = this.vehicles();
    if (_.isFinite(type)) {
        return vehicles[type];
    }
    return _.find(vehicles, { _type: type }) || null;
};

//===========================================================================
// Game Player
//===========================================================================

Game_Player.prototype.triggerTouchActionD2 = function(x2, y2) {
    if (this.isCollidedWithVehicles(x2, y2)) {
        if (TouchInput.isTriggered() && this.getOnVehicle()) {
            return true;
        }
    }
    if (this.isInBoat() || this.isInShip() || this.isInCustomVehicle()) {
        if (TouchInput.isTriggered() && this.getOffVehicle()) {
            return true;
        }
    }
    this.checkEventTriggerThere([0, 1, 2]);
    return $gameMap.setupStartingEvent();
};

Game_Player.prototype.isInCustomVehicle = function() {
    return !this.isInBoat() && !this.isInShip() && !this.isInAirship() && this._vehicleType !== 'walk' && !this.isMoveRouteForcing();
};

const Custom_Vehicles_Game_Player_isInVehicle = Game_Player.prototype.isInVehicle;
Game_Player.prototype.isInVehicle = function() {
    return Custom_Vehicles_Game_Player_isInVehicle.call(this) || this.isInCustomVehicle();
};

Game_Player.prototype.getOnVehicle = function() {
    const direction = this.direction();
    const x1 = this.x;
    const y1 = this.y;
    const x2 = $gameMap.roundXWithDirection(x1, direction);
    const y2 = $gameMap.roundYWithDirection(y1, direction);
    if ($gameMap.airship().pos(x1, y1)) {
        this._vehicleType = 'airship';
    } else if ($gameMap.ship().pos(x2, y2)) {
        this._vehicleType = 'ship';
    } else if ($gameMap.boat().pos(x2, y2)) {
        this._vehicleType = 'boat';
    } else {
        const type = $gameMap.customVehicleType(x2, y2);
        if (type) {
            this._vehicleType = type;
        }
    }
    if (this.isInVehicle()) {
        this._vehicleGettingOn = true;
        if (!this.isInAirship()) {
            this.forceMoveForward();
        }
        this.gatherFollowers();
    }
    return this._vehicleGettingOn;
};

//===========================================================================
// Game Vehicle
//===========================================================================

Game_Vehicle.prototype.isCustomVehicle = function() {
    return !this.isBoat() && !this.isShip() && !this.isAirship();
};

Game_Vehicle.prototype.initMoveSpeed = function() {
    if (this.isBoat()) {
        this.setMoveSpeed(4);
    } else if (this.isShip()) {
        this.setMoveSpeed(5);
    } else if (this.isAirship()) {
        this.setMoveSpeed(6);
    } else if (this.isCustomVehicle()) {
        this.setMoveSpeed(this.vehicle().Speed);
    }
};

Game_Vehicle.prototype.vehicle = function() {
    if (this.isBoat()) {
        return $dataSystem.boat;
    } else if (this.isShip()) {
        return $dataSystem.ship;
    } else if (this.isAirship()) {
        return $dataSystem.airship;
    }
    return CustomVehiclesParam.getVehicle(this._type);
};

const Custom_Vehicles_Game_Vehicle_loadSystemSettings = Game_Vehicle.prototype.loadSystemSettings;
Game_Vehicle.prototype.loadSystemSettings = function() {
    if (!this.isCustomVehicle()) {
        return Custom_Vehicles_Game_Vehicle_loadSystemSettings.call(this);
    }
    const vehicle = this.vehicle();
    this._mapId = vehicle['Map Id'];
    this.setPosition(vehicle.X, vehicle.Y);
    this.setImage(vehicle['Character Name'], vehicle['Character Index']);
};

Game_Vehicle.prototype.playBgm = function() {
    let bgm = this._bgm;
    if (!bgm && this.isCustomVehicle()) {
        const _bgm = this.vehicle().BGM;
        if (!_bgm.File) {
            return;
        }
        bgm = {
            name: _bgm.File,
            volume: _bgm.Volume,
            pitch: _bgm.Pitch,
            pan: _bgm.Pan
        };
    }
    AudioManager.playBgm(bgm);
};

const Custom_Vehicles_Game_Vehicle_update = Game_Vehicle.prototype.update;
Game_Vehicle.prototype.update = function() {
    Custom_Vehicles_Game_Vehicle_update.call(this);
    const vehicle = this.vehicle();
    if (vehicle && vehicle['Visibility Switch'] > 0) {
        if ($gameSwitches.value(vehicle['Visibility Switch'])) {
            this.setOpacity(255);
        } else {
            this.setOpacity(0);
        }
    }
};

Game_Vehicle.prototype.isMapPassable = function(x, y, d) {
    const x2 = $gameMap.roundXWithDirection(x, d);
    const y2 = $gameMap.roundYWithDirection(y, d);
    if (this.isBoat()) {
        return $gameMap.isBoatPassable(x2, y2);
    } else if (this.isShip()) {
        return $gameMap.isShipPassable(x2, y2);
    } else if (this.isAirship()) {
        return true;
    } else if (this.isCustomVehicle()) {
        const regions = this.vehicle().Regions || [0];
        if (_.isFinite(regions)) {
            return $gameMap.isPassable(x2, y2) && $gameMap.regionId(x2, y2) === regions;
        } else {
            return $gameMap.isPassable(x2, y2) && (regions.contains($gameMap.regionId(x2, y2)) || regions.contains(0));
        }
    }
    return false;
};

const Custom_Vehicles_Game_Vehicle_getOn = Game_Vehicle.prototype.getOn;
Game_Vehicle.prototype.getOn = function() {
    Custom_Vehicles_Game_Vehicle_getOn.call(this);
    const vehicle = this.vehicle();
    if (vehicle && vehicle.Switch > 0) {
        $gameSwitches.setValue(vehicle.Switch, true);
    }
};

const Custom_Vehicles_Game_Vehicle_getOff = Game_Vehicle.prototype.getOff;
Game_Vehicle.prototype.getOff = function() {
    Custom_Vehicles_Game_Vehicle_getOff.call(this);
    const vehicle = this.vehicle();
    if (vehicle && vehicle.Switch > 0) {
        $gameSwitches.setValue(vehicle.Switch, false);
    }
};

//===========================================================================
// Game Interpreter
//===========================================================================

const Custom_Vehicles_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Custom_Vehicles_Game_Interpreter_pluginCommand.call(this, command, args);
    switch(command) {
        case 'ChangeVehicleBGM': {
            const type = args[0];
            const vehicle = $gameMap.vehicle(type);
            const bgm = { name: args[1], volume: Number(args[2]) || 90, pitch: Number(args[3]) || 100, pan: Number(args[4]) || 0 };
            if (vehicle) {
                vehicle.setBgm(bgm);
            }
            break;
        }
        case 'SetVehicleLocation': {
            const type = args[0];
            const mapId = Number(args[1]);
            const x = Number(args[2]);
            const y = Number(args[3]);
            const vehicle = $gameMap.vehicle(type);
            if (vehicle) {
                vehicle.setLocation(mapId, x, y);
            }
            break;
        }
        case 'ChangeVehicleImage': {
            const type = args[0];
            const name = args[1];
            const index = Number(args[2]);
            const vehicle = $gameMap.vehicle(type);
            if (vehicle) {
                vehicle.setImage(name, index);
            }
            break;
        }
        case 'SetVehicleMoveSpeed': {
            const type = args[0];
            const speed = Number(args[1]);
            const vehicle = $gameMap.vehicle(type);
            if (vehicle) {
                vehicle.setMoveSpeed(speed);
            }
            break;
        }
    }
};