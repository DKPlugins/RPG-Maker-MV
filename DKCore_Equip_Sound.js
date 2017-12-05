/*
#############################################################################
#                                                                           #
#       				Звук Экипировки (Equip Sound)	  			    	#
#                                                                           #
#############################################################################

Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Группа ВК: http://vk.com/rpgmakervxaceandmv
Версия: 1.21
Релиз: 22.11.2015
Первый релиз: 13.11.2015
*/

/*:
 * @plugindesc Звуки экипировки для каждого типа оружия и брони
 * @author DK (Денис Кузнецов)
 * @help
 
 ### Информация о плагине ###
 Название: DKCore_Equip_Sound
 Автор: DK
 Сайт: http://vk.com/rpgmakervxaceandmv
 Версия: 1.21
 Релиз: 22.11.2015
 Первый релиз: 13.11.2015
 
 ### Что нового ###
 -Добавлены настройки громкости, тона и панорамы
 -Теперь можно указать настройки для типов оружия и брони, а также звук снятия экипировки
 
 ### Требования к плагину ###
 Наличие включенного плагина DKCore версии 1.3 или выше
 
 ### Инструкция ###
 В параметрах укажите через запятую названия файлов, находящихся в папке audio/se
 -1 вместо названия, чтобы проигрывался стандартный звук экипировки для слота
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
 * @param Звук оружия
 * @desc Укажите через запятую названия звуковых файлов для каждого типа оружия. -1 чтобы использовать стандартный звук
 * @default -1
 
 * @param Звук брони
 * @desc Укажите через запятую названия звуковых файлов для каждого типа брони. -1 чтобы использовать стандартный звук
 * @default -1
 
 * @param Звук снятия экипировки
 * @desc Название звукового файла снятия экипировки. 
Стандартно: -1
 * @default -1
 
 * @param Громкость звука
 * @desc Громкость звука экипировки
Стандартно: 100
 * @default 100
 
 * @param Тон звука
 * @desc Тон звука экипировки
Стандартно: 100
 * @default 100
 
 * @param Панорама звука
 * @desc Панорама звука экипировки
Стандартно: 0
 * @default 0
 
 */

var Imported = Imported || {};
Imported.DKCore_Equip_Sound = true;

if (!Imported.DKCore)
{
	alert('Отсутствует плагин DKCore! Плагин DKCore_Equip_Sound не будет работать!');
	SceneManager.exit();
}

var SoundEquipParam 	= {};
SoundEquipParam.param 	= PluginManager.parameters('DKCore_Equip_Sound');
SoundEquipParam.weapons = DKCore.SplitString(SoundEquipParam.param['Звук оружия']);
SoundEquipParam.armors 	= DKCore.SplitString(SoundEquipParam.param['Звук брони']);
SoundEquipParam.null	= SoundEquipParam.param['Звук снятия экипировки'];
SoundEquipParam.volume 	= Number(SoundEquipParam.param['Громкость звука']);
SoundEquipParam.pitch 	= Number(SoundEquipParam.param['Тон звука']);
SoundEquipParam.pan 	= Number(SoundEquipParam.param['Панорама звука']);

Scene_Equip.prototype.playEquip = function() {
	var slot = this._slotWindow.index();
	var item = this._itemWindow.item();
	var name = '';
	if (DataManager.isWeapon(item))
	{
		if (SoundEquipParam.weapons.length <= item.wtypeId - 1)
			return SoundManager.playEquip();
		if (SoundEquipParam.weapons[item.wtypeId - 1] === '-1')
			return SoundManager.playEquip();
		name = SoundEquipParam.weapons[item.wtypeId - 1];
	}
	else if (DataManager.isArmor(item))
	{
		if (SoundEquipParam.armors.length <= item.atypeId - 1)
			return SoundManager.playEquip();
		if (SoundEquipParam.armors[item.atypeId - 1] === '-1')
			return SoundManager.playEquip();
		name = SoundEquipParam.armors[item.atypeId - 1];
	}
	else if (item == null)
	{
		if (SoundEquipParam.null === '-1')
			return SoundManager.playEquip();
		name = SoundEquipParam.null;
	}
	AudioManager.playSe(DKCore.Sound(name, SoundEquipParam.volume, SoundEquipParam.pitch, SoundEquipParam.pan));
};

Scene_Equip.prototype.onItemOk = function() {
	this.playEquip();
    this.actor().changeEquip(this._slotWindow.index(), this._itemWindow.item());
    this._slotWindow.activate();
    this._slotWindow.refresh();
    this._itemWindow.deselect();
    this._itemWindow.refresh();
    this._statusWindow.refresh();
};