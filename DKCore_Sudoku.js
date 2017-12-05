/*
Title: Sudoku
Author: DK (Denis Kuznetsov) (http://vk.com/id8137201)
Site: http://dk-plugins.ru/
Group in VK: http://vk.com/dkplugins
Version: 1.2
Release: 10.05.2016
First release: 26.02.2016
Supported languages: Russian, English
*/

/*ru
Название: Судоку
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Сайт: http://dk-plugins.ru/
Группа ВК: http://vk.com/dkplugins
Версия: 1.2
Релиз: 10.05.2016
Первый релиз: 26.02.2016
Поддерживаемые языки: Русский, Английский
*/

var DKLocalization = DKLocalization || {};
var Sudoku_Easy = [];
var Sudoku_Medium = [];
var Sudoku_Hard = [];

//===========================================================================
// Настройки плагина
// Plugin settings
//===========================================================================

// Настройки перевода
// Translation settings

// Инструкция
// Instruction

// Язык плагина: перевод
// Plugin language: translation

DKLocalization.DKCore_Sudoku = {
	DKCore_imported_error: {
		ru: 'Отсутствует плагин "DKCore"! Плагин "DKCore_Sudoku" не будет работать!',
		en: 'No plugin "DKCore"! Plugin "DKCore_Sudoku" will not work!'
	},
	new_game: {
		ru: 'Новая игра',
		en: 'New game'
	},
	continue: {
		ru: 'Продолжить',
		en: 'Continue'
	},
	statistics: {
		ru: 'Статистика',
		en: 'Statistics'
	},
	exit: {
		ru: 'Выход',
		en: 'Exit'
	},
	easy: {
		ru: 'Легкий уровень',
		en: 'Easy level'
	},
	medium: {
		ru: 'Средний уровень',
		en: 'Medium level'
	},
	hard: {
		ru: 'Тяжелый уровень',
		en: 'Hard level'
	},
	back: {
		ru: 'Назад',
		en: 'Back'
	},
	level: {
		ru: 'Уровень',
		en: 'Level'
	},
	start_new_game: {
		ru: 'Начните новую игру',
		en: 'Start new game'
	},
	not_completed: {
		ru: 'Не пройдено',
		en: 'Not completed'
	},
	pause: {
		ru: 'Пауза',
		en: 'Pause'
	},
	complete: {
		ru: 'Пройдено',
		en: 'Complete'
	},
	new_record: {
		ru: 'Новый рекорд',
		en: 'New record'
	},
	started_games: {
		ru: 'Начато игр',
		en: 'Started games'
	},
	completed_games: {
		ru: 'Завершено игр',
		en: 'Completed games'
	},
	total_time: {
		ru: 'Общее время игры',
		en: 'Total game time'
	},
	completed_levels: {
		ru: 'Пройдено уровней',
		en: 'Completed levels'
	},
	best_record: {
		ru: 'Лучший рекорд',
		en: 'Best record'
	},
	no: {
		ru: 'Нет',
		en: 'No'
	},
	clear: {
		ru: 'Очистить',
		en: 'Clear'
	}
};

// Настройка легких уровней
// 0 - отсутствие цифры в судоку
Sudoku_Easy[0] = [ 
[6, 7, 9, 0, 5, 8, 1, 2, 4],
[3, 5, 2, 4, 9, 1, 6, 0, 7],
[0, 8, 4, 2, 7, 6, 9, 5, 3],
[7, 2, 8, 1, 4, 3, 5, 9, 0],
[4, 6, 0, 7, 8, 9, 2, 3, 1],
[9, 3, 1, 6, 0, 5, 7, 4, 8],
[5, 0, 7, 8, 1, 4, 3, 6, 2],
[2, 4, 6, 5, 3, 0, 8, 1, 9],
[8, 1, 3, 9, 6, 2, 0, 7, 5]
];

Sudoku_Easy[1] = [
[7, 2, 1, 3, 4, 8, 0, 5, 9],
[0, 5, 9, 2, 1, 6, 7, 4, 3],
[6, 3, 4, 9, 0, 5, 1, 2, 8],
[3, 0, 7, 5, 2, 4, 0, 1, 6],
[4, 6, 2, 0, 8, 3, 5, 9, 7],
[1, 8, 5, 6, 9, 7, 4, 3, 2],
[9, 4, 0, 7, 6, 1, 2, 8, 0],
[2, 1, 6, 8, 5, 9, 3, 7, 4],
[5, 7, 8, 0, 3, 2, 9, 6, 1]
];

Sudoku_Easy[2] = [
[5, 7, 8, 2, 4, 3, 9, 6, 1],
[4, 0, 9, 6, 0, 5, 3, 0, 2],
[6, 2, 0, 7, 1, 9, 4, 8, 5],
[2, 6, 7, 1, 0, 8, 5, 9, 4],
[9, 0, 1, 5, 6, 2, 0, 3, 8],
[8, 3, 5, 9, 7, 4, 1, 2, 0],
[7, 8, 6, 4, 0, 1, 0, 5, 3],
[3, 0, 4, 8, 2, 7, 6, 1, 9],
[1, 9, 2, 3, 5, 6, 8, 4, 7]
];

Sudoku_Easy[3] = [
[3, 4, 9, 6, 8, 1, 5, 2, 7],
[8, 2, 5, 4, 0, 7, 3, 6, 0],
[7, 6, 0, 2, 3, 5, 4, 0, 9],
[5, 9, 0, 7, 4, 6, 0, 1, 8],
[6, 8, 2, 9, 1, 3, 0, 5, 4],
[1, 0, 4, 5, 0, 8, 6, 9, 3],
[2, 1, 7, 3, 6, 9, 8, 4, 0],
[9, 3, 0, 8, 5, 0, 1, 7, 2],
[4, 5, 8, 1, 7, 2, 9, 3, 6]
];

Sudoku_Easy[4] = [
[9, 4, 1, 2, 3, 0, 0, 5, 6],
[7, 0, 8, 5, 0, 1, 9, 2, 4],
[5, 2, 6, 7, 4, 9, 3, 1, 8],
[3, 7, 0, 4, 0, 6, 2, 8, 1],
[0, 1, 5, 8, 7, 3, 4, 0, 9],
[8, 6, 4, 9, 0, 2, 5, 3, 7],
[6, 9, 2, 3, 8, 4, 1, 7, 5],
[1, 5, 3, 6, 9, 7, 0, 4, 2],
[0, 8, 7, 1, 2, 0, 6, 0, 3]
];

Sudoku_Easy[5] = [
[5, 1, 0, 6, 4, 2, 7, 3, 8],
[3, 6, 4, 0, 1, 7, 0, 2, 9],
[8, 2, 7, 5, 0, 3, 6, 1, 4],
[2, 0, 3, 0, 6, 9, 8, 7, 5],
[1, 8, 5, 7, 3, 4, 9, 0, 2],
[7, 0, 6, 2, 0, 8, 1, 4, 3],
[9, 7, 0, 4, 0, 6, 3, 5, 1],
[6, 5, 2, 3, 8, 1, 4, 9, 0],
[4, 0, 1, 9, 7, 0, 2, 8, 6]
];

Sudoku_Easy[6] = [
[6, 9, 0, 3, 2, 4, 7, 8, 5],
[5, 3, 7, 0, 8, 6, 4, 0, 1],
[0, 8, 4, 5, 1, 7, 6, 9, 3],
[8, 0, 6, 0, 0, 9, 1, 3, 2],
[1, 4, 0, 8, 6, 2, 9, 0, 7],
[9, 0, 2, 1, 7, 0, 8, 6, 4],
[4, 2, 8, 0, 3, 1, 5, 7, 9],
[3, 1, 5, 7, 9, 8, 0, 4, 6],
[0, 6, 9, 2, 4, 5, 3, 1, 0]
];

Sudoku_Easy[7] = [
[0, 4, 6, 7, 0, 8, 2, 1, 9],
[3, 1, 7, 2, 6, 9, 8, 5, 4],
[2, 0, 9, 0, 5, 0, 6, 7, 0],
[4, 5, 3, 0, 8, 7, 9, 6, 2],
[9, 7, 1, 6, 2, 3, 4, 0, 5],
[6, 0, 8, 0, 9, 4, 0, 3, 1],
[1, 0, 4, 8, 0, 5, 3, 2, 0],
[8, 3, 2, 9, 1, 6, 5, 4, 7],
[7, 6, 0, 3, 4, 0, 1, 9, 8]
];

Sudoku_Easy[8] = [
[8, 0, 2, 3, 4, 0, 9, 1, 0],
[4, 3, 9, 0, 1, 7, 2, 6, 5],
[7, 0, 5, 6, 9, 2, 0, 8, 4],
[3, 0, 8, 0, 6, 9, 5, 4, 2],
[0, 9, 1, 0, 5, 0, 6, 0, 8],
[6, 5, 4, 2, 3, 8, 1, 7, 9],
[1, 2, 7, 0, 8, 3, 0, 9, 6],
[0, 8, 3, 4, 2, 0, 7, 5, 1],
[5, 0, 6, 9, 7, 1, 8, 2, 3]
];

Sudoku_Easy[9] = [
[6, 9, 0, 0, 8, 1, 7, 3, 2],
[4, 2, 3, 7, 0, 9, 8, 0, 1],
[8, 0, 7, 5, 0, 3, 9, 0, 4],
[2, 7, 4, 8, 3, 0, 5, 1, 0],
[5, 3, 0, 0, 9, 7, 6, 4, 8],
[9, 0, 6, 1, 4, 5, 0, 2, 7],
[0, 5, 2, 6, 1, 8, 0, 9, 3],
[1, 6, 9, 0, 7, 4, 2, 8, 5],
[3, 4, 0, 9, 5, 2, 1, 0, 6]
];

// Настройка средних уровней
Sudoku_Medium[0] = [
[0, 9, 6, 0, 0, 5, 0, 0, 4],
[0, 7, 1, 0, 3, 4, 9, 6, 0],
[4, 0, 0, 9, 0, 2, 7, 3, 0],
[0, 2, 0, 0, 9, 0, 3, 4, 6],
[9, 0, 8, 3, 4, 0, 1, 2, 7],
[6, 3, 0, 2, 7, 0, 0, 0, 8],
[0, 4, 9, 1, 0, 0, 0, 0, 2],
[7, 0, 0, 0, 0, 0, 0, 5, 0],
[5, 6, 3, 4, 0, 7, 0, 0, 9]
];

Sudoku_Medium[1] = [
[0, 0, 9, 0, 0, 0, 2, 6, 5],
[2, 7, 4, 8, 5, 6, 9, 3, 0],
[1, 0, 0, 9, 0, 0, 0, 7, 0],
[9, 0, 6, 0, 8, 0, 1, 5, 3],
[0, 0, 8, 0, 1, 0, 0, 4, 9],
[4, 0, 3, 6, 0, 0, 0, 0, 8],
[8, 3, 2, 5, 7, 0, 4, 1, 0],
[6, 0, 0, 0, 2, 8, 0, 9, 0],
[0, 0, 0, 1, 6, 4, 0, 8, 2]
];

Sudoku_Medium[2] = [
[0, 0, 8, 1, 0, 4, 0, 5, 3],
[0, 0, 4, 0, 5, 0, 0, 8, 9],
[0, 0, 0, 8, 3, 0, 0, 2, 4],
[0, 4, 5, 3, 9, 1, 0, 6, 7],
[0, 1, 3, 5, 6, 8, 0, 0, 2],
[8, 0, 6, 0, 7, 2, 5, 3, 1],
[0, 0, 0, 2, 0, 0, 0, 9, 0],
[0, 8, 0, 0, 1, 3, 4, 0, 5],
[0, 0, 9, 6, 4, 0, 2, 1, 0]
];

Sudoku_Medium[3] = [
[5, 0, 2, 9, 0, 0, 1, 8, 4],
[3, 4, 0, 0, 2, 6, 0, 9, 0],
[0, 1, 0, 0, 4, 0, 0, 2, 0],
[1, 8, 0, 0, 6, 0, 0, 7, 5],
[0, 2, 0, 0, 0, 1, 9, 4, 0],
[6, 0, 0, 0, 0, 9, 8, 1, 2],
[0, 7, 0, 3, 1, 2, 4, 0, 0],
[2, 9, 0, 4, 0, 0, 7, 0, 1],
[4, 5, 0, 0, 0, 0, 2, 3, 8]
];

Sudoku_Medium[4] = [
[5, 3, 0, 8, 6, 2, 7, 4, 0],
[1, 0, 0, 9, 0, 4, 2, 0, 3],
[2, 6, 4, 0, 0, 0, 0, 0, 0],
[0, 2, 5, 6, 4, 1, 8, 9, 7],
[8, 1, 6, 0, 0, 9, 0, 0, 2],
[0, 4, 0, 2, 3, 8, 1, 0, 6],
[4, 8, 0, 3, 2, 6, 5, 0, 0],
[0, 9, 0, 0, 8, 0, 0, 0, 4],
[0, 0, 0, 0, 0, 7, 3, 0, 8]
];

Sudoku_Medium[5] = [
[9, 3, 0, 1, 6, 0, 8, 4, 5],
[8, 6, 2, 0, 5, 0, 0, 1, 0],
[0, 0, 1, 8, 0, 3, 0, 0, 0],
[2, 7, 4, 0, 1, 0, 6, 0, 8],
[6, 0, 0, 4, 0, 8, 0, 7, 2],
[0, 0, 8, 0, 0, 0, 4, 5, 1],
[0, 0, 6, 0, 2, 1, 5, 0, 0],
[1, 0, 3, 9, 0, 5, 0, 0, 0],
[5, 0, 0, 6, 8, 0, 1, 2, 3]
];

Sudoku_Medium[6] = [
[2, 8, 9, 5, 3, 0, 0, 1, 0],
[0, 5, 4, 1, 0, 7, 0, 0, 8],
[0, 7, 0, 0, 9, 0, 5, 2, 3],
[0, 0, 0, 0, 1, 2, 0, 5, 0],
[1, 9, 0, 7, 0, 4, 3, 6, 2],
[7, 0, 0, 3, 0, 9, 0, 0, 1],
[5, 3, 8, 0, 4, 1, 9, 0, 6],
[4, 2, 7, 9, 0, 3, 1, 0, 0],
[9, 0, 0, 0, 0, 5, 2, 0, 0]
];

Sudoku_Medium[7] = [
[0, 8, 0, 0, 0, 0, 6, 5, 0],
[5, 0, 3, 7, 0, 8, 0, 0, 0],
[0, 0, 9, 5, 6, 3, 0, 0, 0],
[0, 9, 2, 8, 3, 0, 0, 7, 4],
[7, 3, 4, 6, 0, 2, 8, 9, 5],
[0, 5, 1, 4, 7, 0, 0, 6, 2],
[0, 2, 0, 9, 0, 6, 7, 4, 1],
[9, 7, 0, 1, 0, 0, 0, 0, 6],
[1, 0, 0, 0, 0, 0, 9, 0, 0]
];

Sudoku_Medium[8] = [
[5, 3, 6, 8, 7, 0, 0, 0, 0],
[0, 0, 4, 5, 9, 3, 0, 6, 0],
[0, 0, 9, 4, 2, 0, 7, 5, 0],
[1, 8, 0, 7, 0, 5, 9, 3, 0],
[0, 0, 3, 2, 1, 4, 8, 0, 0],
[0, 0, 0, 3, 8, 9, 0, 1, 6],
[3, 0, 0, 0, 0, 7, 5, 8, 2],
[9, 0, 0, 0, 3, 8, 6, 4, 7],
[0, 4, 0, 6, 0, 0, 3, 9, 0]
];

Sudoku_Medium[9] = [
[7, 9, 3, 0, 4, 2, 0, 0, 8],
[1, 4, 6, 8, 0, 0, 2, 0, 7],
[8, 2, 0, 3, 0, 6, 9, 0, 1],
[6, 5, 8, 0, 2, 7, 0, 0, 0],
[4, 0, 0, 6, 0, 8, 7, 0, 0],
[0, 0, 7, 0, 3, 0, 0, 9, 6],
[3, 0, 0, 7, 0, 0, 0, 2, 9],
[5, 0, 4, 2, 9, 1, 6, 7, 0],
[0, 0, 2, 0, 6, 0, 0, 0, 5]
];

// Настройка тяжелых уровней
Sudoku_Hard[0] = [
[0, 0, 8, 0, 0, 0, 0, 9, 4],
[0, 4, 1, 9, 2, 7, 0, 0, 0],
[3, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 9, 3, 0, 6, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 3, 2],
[4, 0, 2, 1, 0, 0, 0, 5, 8],
[0, 5, 0, 3, 7, 6, 0, 0, 0],
[2, 0, 6, 0, 8, 0, 0, 0, 0],
[0, 0, 7, 0, 0, 0, 5, 0, 0]
];

Sudoku_Hard[1] = [
[1, 3, 0, 8, 0, 7, 2, 0, 0],
[0, 4, 8, 0, 0, 0, 7, 1, 0],
[0, 0, 7, 0, 2, 0, 3, 0, 0],
[0, 0, 9, 7, 5, 0, 0, 0, 0],
[5, 2, 6, 0, 0, 9, 0, 0, 0],
[0, 0, 0, 0, 0, 3, 0, 0, 0],
[0, 5, 0, 0, 8, 0, 0, 7, 4],
[0, 0, 0, 0, 0, 2, 6, 0, 0],
[0, 0, 0, 0, 1, 4, 5, 0, 0]
];

Sudoku_Hard[2] = [
[0, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 3, 9, 0, 0, 0, 0, 0, 4],
[4, 0, 1, 0, 0, 0, 2, 0, 3],
[5, 0, 0, 8, 0, 1, 0, 0, 2],
[0, 0, 0, 0, 0, 0, 0, 3, 8],
[0, 0, 2, 0, 7, 0, 4, 0, 1],
[6, 0, 0, 0, 5, 7, 0, 0, 0],
[0, 0, 4, 3, 6, 2, 0, 1, 7],
[7, 0, 0, 0, 0, 0, 0, 0, 5]
];

Sudoku_Hard[3] = [
[0, 0, 9, 0, 0, 0, 0, 2, 5],
[7, 0, 5, 6, 0, 0, 3, 9, 0],
[0, 0, 0, 2, 0, 9, 0, 0, 7],
[0, 0, 0, 0, 0, 6, 0, 0, 0],
[0, 3, 0, 0, 0, 0, 0, 0, 6],
[0, 0, 0, 1, 3, 7, 9, 0, 8],
[0, 4, 0, 0, 0, 0, 8, 5, 0],
[0, 8, 0, 0, 0, 3, 0, 0, 4],
[0, 0, 1, 8, 4, 0, 0, 6, 3]
];

Sudoku_Hard[4] = [
[3, 0, 0, 0, 0, 0, 0, 5, 7],
[0, 0, 0, 0, 8, 5, 2, 0, 6],
[5, 0, 0, 9, 0, 0, 3, 0, 4],
[0, 3, 0, 6, 0, 0, 0, 0, 0],
[0, 0, 5, 0, 0, 0, 4, 0, 0],
[8, 6, 1, 0, 7, 2, 0, 0, 0],
[9, 7, 0, 8, 0, 0, 0, 1, 5],
[0, 0, 8, 0, 9, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 3, 0, 4, 0]
];

Sudoku_Hard[5] = [
[0, 7, 0, 6, 0, 2, 0, 8, 0],
[0, 0, 2, 0, 9, 0, 0, 0, 0],
[3, 5, 6, 7, 0, 0, 0, 9, 0],
[0, 2, 1, 4, 3, 0, 0, 0, 0],
[4, 0, 0, 0, 6, 0, 8, 0, 0],
[8, 6, 0, 2, 0, 5, 0, 0, 1],
[0, 0, 0, 0, 0, 7, 0, 0, 9],
[6, 0, 0, 0, 4, 0, 0, 0, 0],
[0, 0, 7, 0, 0, 0, 0, 5, 8]
];

Sudoku_Hard[6] = [
[0, 5, 8, 1, 9, 0, 0, 6, 7],
[0, 0, 0, 0, 4, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 4, 0, 1],
[8, 0, 0, 0, 0, 0, 0, 0, 4],
[3, 0, 5, 0, 0, 0, 0, 1, 0],
[0, 0, 1, 0, 7, 4, 0, 3, 0],
[0, 0, 0, 0, 5, 0, 0, 7, 2],
[9, 8, 2, 0, 1, 0, 6, 0, 0],
[0, 0, 0, 6, 0, 0, 0, 0, 9]
];

Sudoku_Hard[7] = [
[0, 0, 0, 0, 0, 2, 0, 0, 3],
[0, 2, 0, 0, 6, 7, 0, 0, 4],
[9, 0, 8, 0, 0, 3, 7, 2, 0],
[6, 0, 4, 0, 0, 0, 5, 9, 0],
[0, 0, 2, 9, 4, 1, 3, 0, 0],
[0, 0, 0, 6, 0, 0, 0, 0, 0],
[5, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 3, 0, 0, 0, 6],
[3, 9, 0, 0, 0, 0, 0, 0, 8]
];

Sudoku_Hard[8] = [
[0, 0, 2, 0, 1, 0, 6, 0, 0],
[3, 1, 0, 0, 0, 0, 9, 0, 7],
[0, 6, 8, 0, 2, 4, 0, 0, 0],
[0, 0, 9, 0, 8, 0, 0, 4, 0],
[0, 0, 6, 0, 0, 3, 0, 0, 0],
[0, 3, 0, 0, 0, 7, 0, 0, 8],
[0, 8, 0, 4, 5, 0, 0, 0, 3],
[0, 0, 0, 0, 3, 0, 8, 0, 6],
[2, 0, 3, 8, 0, 0, 0, 0, 0]
];

Sudoku_Hard[9] = [
[1, 0, 0, 0, 0, 9, 0, 4, 0],
[9, 0, 0, 0, 0, 4, 0, 3, 0],
[0, 0, 0, 5, 0, 0, 0, 0, 2],
[4, 0, 8, 0, 0, 3, 0, 0, 9],
[0, 0, 0, 0, 0, 0, 0, 6, 8],
[0, 0, 9, 8, 4, 6, 1, 0, 0],
[0, 8, 0, 0, 7, 0, 0, 0, 1],
[0, 4, 1, 3, 0, 8, 0, 0, 5],
[0, 0, 5, 0, 0, 0, 0, 0, 0]
];

//===========================================================================
// Конец настройки плагина
// End of plugin settings
//===========================================================================

/*:
 * @plugindesc v.1.2 Добавляет в игру Судоку
 * @author DK (Денис Кузнецов)
 * @help
 
 ### Информация о плагине ###
 Название: DKCore_Sudoku
 Автор: DK
 Группа ВК: http://vk.com/rpgmakervxaceandmv
 Сайт: http://dk-plugins.ru/
 Версия: 1.2
 Релиз: 05.05.2016
 Первый релиз: 26.02.2016
 
 ### Требования к плагину ###
 Наличие включенного плагина DKCore версии 1.71 или выше
 
 ### Инструкция ###
 Плагин поддерживает ввод с клавиатуры с помощью плагина Полный Ввод (Full Input)
 Открыть js файл плагина и настроить уровни судоку
 Чтобы открыть судоку, вызовите из события this.openSudoku();
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
 * @param Общие настройки
 * @default ---------------------------------
 
 * @param Plugin Language
 * @desc Язык плагина (ru - русский, en - английский)
 * @default ru
 
 * @param Обложка окон
 * @desc Название обложки для всех окон
Стандартно: -1
 * @default -1
 
 * @param Настройки окна статуса
 * @default ---------------------------------
 
 * @param Шрифт окна статуса
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Прозрачность окна статуса
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна статуса
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Окно статуса без рамки
 * @desc Отображать окно без рамки ? true - да, false - нет
Стандартно: false
 * @default false
 
 * @param Цвет текста окна статуса
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Настройки окна судоку
 * @default ---------------------------------
 
 * @param Шрифт окна судоку
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Прозрачность окна судоку
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна судоку
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Окно судоку без рамки
 * @desc Отображать окно без рамки ? true - да, false - нет
Стандартно: false
 * @default false
 
 * @param Цвет линий
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Цвет толстых линий
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Цвет текста окна судоку
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Цвет правильного значения ячейки
 * @desc Цвет в hex формате
Стандартно: #ffff00
 * @default #ffff00
 
 * @param Цвет неправильного значения ячейки
 * @desc Цвет в hex формате
Стандартно: #ff0000
 * @default #ff0000
 
 * @param Цвет фона текущей ячейки
 * @desc Цвет в hex формате
Стандартно: #ffcc33
 * @default #ffcc33
 
 * @param Цвет фона остальных ячеек
 * @desc Цвет в hex формате
Стандартно: #33ccff
 * @default #33ccff
 
 * @param Прозрачность фона ячеек
 * @desс Прозрачность фона от 0 до 255
Стандартно: 100
 * @default 100
 
 * @param Настройки окна меню
 * @default ---------------------------------
 
 * @param Шрифт окна меню
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Прозрачность окна меню
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна меню
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Окно меню без рамки
 * @desc Отображать окно без рамки ? true - да, false - нет
Стандартно: false
 * @default false
 
 * @param Цвет текста окна меню
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Настройки окна уровней
 * @default ---------------------------------
 
 * @param Шрифт окна уровней
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Прозрачность окна уровней
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна уровней
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Окно уровней без рамки
 * @desc Отображать окно без рамки ? true - да, false - нет
Стандартно: false
 * @default false
 
 * @param Цвет текста окна уровней
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Настройки окна ввода
 * @default ---------------------------------
 
 * @param Шрифт окна ввода
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Прозрачность окна ввода
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна ввода
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Окно ввода без рамки
 * @desc Отображать окно без рамки ? true - да, false - нет
Стандартно: false
 * @default false
 
 * @param Цвет текста окна ввода
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Настройки окна статистики
 * @default ---------------------------------
 
 * @param Шрифт окна статистики
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Прозрачность окна статистики
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна статистики
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Окно статистики без рамки
 * @desc Отображать окно без рамки ? true - да, false - нет
Стандартно: false
 * @default false
 
 * @param Цвет текста окна статистики
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 */
 
 var Imported = Imported || {};
Imported.DKCore_Sudoku = true;

var DKVersion = DKVersion || {};
DKVersion.DKCore_Sudoku = 1.2;

var DKCoreVersion = DKCoreVersion || {};
DKCoreVersion.DKCore_Sudoku = 1.71;

var DKLocale = DKLocale || {};

var SudokuParam = {};
SudokuParam.param = PluginManager.parameters('DKCore_Sudoku');

DKLocale.DKCore_Sudoku = SudokuParam.param['Plugin Language'];

if (!Imported.DKCore)
	throw new Error(DKLocalization['DKCore_Sudoku']['DKCore_imported_error'][DKLocale.DKCore_Sudoku]);

// Инициализация общих настроек
SudokuParam.windowskin = SudokuParam.param['Windowskins'];

// Инициализация настроек окна статуса
SudokuParam.status_window = {};
SudokuParam.status_window.font = DKCore.StringToFontArray(SudokuParam.param['Шрифт окна статуса']);
SudokuParam.status_window.opacity = DKCore.StringToNumberArray(SudokuParam.param['Прозрачность окна статуса']);
SudokuParam.status_window.tone = DKCore.StringToNumberArray(SudokuParam.param['Тон окна статуса']);
SudokuParam.status_window.frameless = DKCore.toBool(SudokuParam.param['Окно статуса без рамки']);
SudokuParam.status_window.text_color = SudokuParam.param['Цвет текста окна статуса'];

// Инициализация настроек окна судоку
SudokuParam.sudoku_window = {};
SudokuParam.sudoku_window.font = DKCore.StringToFontArray(SudokuParam.param['Шрифт окна судоку']);
SudokuParam.sudoku_window.opacity = DKCore.StringToNumberArray(SudokuParam.param['Прозрачность окна судоку']);
SudokuParam.sudoku_window.tone = DKCore.StringToNumberArray(SudokuParam.param['Тон окна судоку']);
SudokuParam.sudoku_window.frameless = DKCore.toBool(SudokuParam.param['Окно судоку без рамки']);
SudokuParam.sudoku_window.color = {};
SudokuParam.sudoku_window.color['line_color'] = SudokuParam.param['Цвет линий'];
SudokuParam.sudoku_window.color['bold_line_color'] = SudokuParam.param['Цвет толстых линий'];
SudokuParam.sudoku_window.color['text_color'] = SudokuParam.param['Цвет текста окна судоку'];
SudokuParam.sudoku_window.color['correct_value'] = SudokuParam.param['Цвет правильного значения ячейки'];
SudokuParam.sudoku_window.color['incorrect_value'] = SudokuParam.param['Цвет неправильного значения ячейки'];
SudokuParam.sudoku_window.color['current_background'] = SudokuParam.param['Цвет фона текущей ячейки'];
SudokuParam.sudoku_window.color['other_background'] = SudokuParam.param['Цвет фона остальных ячеек'];
SudokuParam.sudoku_window.background_opacity = Number(SudokuParam.param['Прозрачность фона ячеек']);

// Инициализация настроек окна меню
SudokuParam.menu_window = {};
SudokuParam.menu_window.font = DKCore.StringToFontArray(SudokuParam.param['Шрифт окна меню']);
SudokuParam.menu_window.opacity = DKCore.StringToNumberArray(SudokuParam.param['Прозрачность окна меню']);
SudokuParam.menu_window.tone = DKCore.StringToNumberArray(SudokuParam.param['Тон окна меню']);
SudokuParam.menu_window.frameless = DKCore.toBool(SudokuParam.param['Окно меню без рамки']);
SudokuParam.menu_window.text_color = SudokuParam.param['Цвет текста окна меню'];

// Инициализация настроек окна уровней
SudokuParam.levels_window = {};
SudokuParam.levels_window.font = DKCore.StringToFontArray(SudokuParam.param['Шрифт окна уровней']);
SudokuParam.levels_window.opacity = DKCore.StringToNumberArray(SudokuParam.param['Прозрачность окна уровней']);
SudokuParam.levels_window.tone = DKCore.StringToNumberArray(SudokuParam.param['Тон окна уровней']);
SudokuParam.levels_window.frameless = DKCore.toBool(SudokuParam.param['Окно уровней без рамки']);
SudokuParam.levels_window.text_color = SudokuParam.param['Цвет текста окна уровней'];

// Инициализация настроек окна ввода
SudokuParam.input_window = {};
SudokuParam.input_window.font = DKCore.StringToFontArray(SudokuParam.param['Шрифт окна ввода']);
SudokuParam.input_window.opacity = DKCore.StringToNumberArray(SudokuParam.param['Прозрачность окна ввода']);
SudokuParam.input_window.tone = DKCore.StringToNumberArray(SudokuParam.param['Тон окна ввода']);
SudokuParam.input_window.frameless = DKCore.toBool(SudokuParam.param['Окно ввода без рамки']);
SudokuParam.input_window.text_color = SudokuParam.param['Цвет текста окна ввода'];

// Инициализация настроек окна статистики
SudokuParam.statistics_window = {};
SudokuParam.statistics_window.font = DKCore.StringToFontArray(SudokuParam.param['Шрифт окна статистики']);
SudokuParam.statistics_window.opacity = DKCore.StringToNumberArray(SudokuParam.param['Прозрачность окна статистики']);
SudokuParam.statistics_window.tone = DKCore.StringToNumberArray(SudokuParam.param['Тон окна статистики']);
SudokuParam.statistics_window.frameless = DKCore.toBool(SudokuParam.param['Окно статистики без рамки']);
SudokuParam.statistics_window.text_color = SudokuParam.param['Цвет текста окна статистики'];

//===========================================================================
// DK Localization Manager
//===========================================================================

DKLocalizationManager.DKCore_Sudoku = function(string, params) {
	var plugin = 'DKCore_Sudoku';
	string = string.replace(/#([^#]+)#/g, this.parser.bind(this, plugin));
	return this.format(string, params);
};

//===========================================================================
// Scene Sudoku
//===========================================================================

function Scene_Sudoku() {
	this.initialize.apply(this, arguments);
};

Scene_Sudoku.prototype = Object.create(Scene_Base.prototype);
Scene_Sudoku.prototype.constructor = Scene_Base;

Scene_Sudoku.prototype.create = function() {
	SudokuManager.clear();
	this.createWindowLayer();
	this.createAllWindows();
	this.activateMenuWindow();
};

Scene_Sudoku.prototype.playBgm = function() {
	
};

Scene_Sudoku.prototype.playMe = function() {
	
};

Scene_Sudoku.prototype.createAllWindows = function() {
	this.createStatusWindow();
	this.createSudokuWindow();
	this.createMenuWindow();
	this.createLevelsWindow();
	this.createInputWindow();
	this.createStatisticsWindow();
};

// Windows

Scene_Sudoku.prototype.createStatusWindow = function() {
	var x = 0;
	var y = 0;
	this.status_window = new Window_Sudoku_Status(x, y, this.clickHandlerStatusTimer.bind(this));
	this.addWindow(this.status_window);
};

Scene_Sudoku.prototype.createSudokuWindow = function() {
	var x = 0;
	var y = this.status_window.height;
	this.sudoku_window = new Window_Sudoku(x, y, this.inputHandlerSudoku.bind(this));
	this.sudoku_window.setHandler('ok', this.handlerSudokuOk.bind(this));
	this.sudoku_window.setHandler('activate', this.handlerSudokuActivate.bind(this));
	this.sudoku_window.setHandler('cancel', this.handlerSudokuCancel.bind(this));
	this.addWindow(this.sudoku_window);
};

Scene_Sudoku.prototype.createMenuWindow = function() {
	var x = this.sudoku_window.width;
	var y = this.status_window.height;
	var width = Graphics.boxWidth - x;
	this.menu_window = new Window_Sudoku_Menu(x, y, width);
	this.menu_window.setHandler('new_game', this.handlerMenuNewGame.bind(this));
	this.menu_window.setHandler('continue', this.handlerMenuContinue.bind(this));
	this.menu_window.setHandler('statistics', this.handlerMenuStatistics.bind(this));
	this.menu_window.setHandler('exit', this.handlerMenuExit.bind(this));
	this.menu_window.setHandler('level', this.handlerMenuLevel.bind(this));
	this.menu_window.setHandler('activate', this.handlerMenuActivate.bind(this));
	this.menu_window.setHandler('cancel', this.handlerMenuCancel.bind(this));
	this.addWindow(this.menu_window);
};

Scene_Sudoku.prototype.createLevelsWindow = function() {
	var x = this.sudoku_window.width;
	var y = this.status_window.height + this.menu_window.height;
	var width = Graphics.boxWidth - x;
	this.levels_window = new Window_Sudoku_Levels(x, y, width);
	this.levels_window.setHandler('ok', this.handlerLevelsOk.bind(this));
	this.levels_window.setHandler('activate', this.handlerLevelsActivate.bind(this));
	this.levels_window.setHandler('cancel', this.handlerLevelsCancel.bind(this));
	this.addWindow(this.levels_window);
};

Scene_Sudoku.prototype.createInputWindow = function() {
	var x = this.sudoku_window.width;
	var y = this.status_window.height + this.menu_window.height + this.levels_window.height;
	var width = Graphics.boxWidth - x;
	this.input_window = new Window_Sudoku_Input(x, y, width);
	this.input_window.setHandler('ok', this.handlerInputOk.bind(this));
	this.input_window.setHandler('activate', this.handlerInputActivate.bind(this));
	this.input_window.setHandler('cancel', this.handlerInputCancel.bind(this));
	this.addWindow(this.input_window);
};

Scene_Sudoku.prototype.createStatisticsWindow = function() {
	var x = this.sudoku_window.x;
	var y = this.sudoku_window.y;
	var width = this.sudoku_window.width;
	var height = this.sudoku_window.height;
	this.statistics_window = new Window_Sudoku_Statistics(x, y, width, height);
	this.statistics_window.hide();
	this.addWindow(this.statistics_window);
};

// Status Window click handler

Scene_Sudoku.prototype.clickHandlerStatusTimer = function() {
	var paused = SudokuManager.paused;
	if (paused)
		this.continueGame();
	else
		this.pauseGame();
};

// Sudoku Window handlers

Scene_Sudoku.prototype.inputHandlerSudoku = function() {
	this.checkCompleteGame();
};

Scene_Sudoku.prototype.handlerSudokuOk = function() {
	if (!this.sudoku_window.canSetValue()) return this.sudoku_window.activate();
	var command = this.sudoku_window.indexValue();
	if (command !== 0) command -= 11;
	this.activateInputWindow(command);
};

Scene_Sudoku.prototype.handlerSudokuActivate = function(index) {
	if (!SudokuManager.started) return;
	SoundManager.playCursor();
	this.continueGame(index);
	this.menu_window.command_layer = 0;
	this.menu_window.refresh();
	this.levels_window.setDifficulty(-1);
};

Scene_Sudoku.prototype.handlerSudokuCancel = function() {
	this.pauseGame(1); // выбрать продолжить
};

// Menu Window handlers

Scene_Sudoku.prototype.handlerMenuNewGame = function() {
	this.menu_window.command_layer = 1;
	this.menu_window.refresh();
	this.levels_window.refresh();
	this.activateMenuWindow();
};

Scene_Sudoku.prototype.handlerMenuContinue = function() {
	this.continueGame();
};

Scene_Sudoku.prototype.handlerMenuStatistics = function() {
	this.activateMenuWindow();
};

Scene_Sudoku.prototype.handlerMenuExit = function() {
	this.popScene();
};

Scene_Sudoku.prototype.handlerMenuLevel = function() {
	this.activateLevelsWindow();
};

Scene_Sudoku.prototype.handlerMenuActivate = function(index) {
	if (SudokuManager.started) this.pauseGame();
	SoundManager.playCursor();
	if (SudokuManager.paused)
		this.status_window.drawPauseInfo();
	else
		this.status_window.drawNewGameInfo();
	this.activateMenuWindow(index);
};

Scene_Sudoku.prototype.handlerMenuCancel = function() {
	if (this.menu_window.command_layer === 0) return;
	this.menu_window.command_layer = 0;
	this.menu_window.refresh();
	this.levels_window.setDifficulty(-1);
	this.activateMenuWindow(0);
};

// Levels Window handlers

Scene_Sudoku.prototype.handlerLevelsOk = function() {
	this.startNewGame();
};

Scene_Sudoku.prototype.handlerLevelsActivate = function(index) {
	if (this.menu_window.command_layer === 0) return;
	if (this.menu_window.index() === 3) return;
	SoundManager.playCursor();
	this.activateLevelsWindow(index);
};

Scene_Sudoku.prototype.handlerLevelsCancel = function() {
	if (SudokuManager.paused)
		this.status_window.drawPauseInfo();
	else
		this.status_window.drawNewGameInfo();
	this.activateMenuWindow();
};

// Input Window handlers

Scene_Sudoku.prototype.handlerInputOk = function() {
	var commands = [11, 12, 13, 14, 15, 16, 17, 18, 19, 0];
	var row = this.sudoku_window.row();
	var col = this.sudoku_window.col();
	var index = this.input_window.index();
	this.sudoku_window.setValue(commands[index]);
	this.activateSudokuWindow();
	this.checkCompleteGame();
};

Scene_Sudoku.prototype.handlerInputActivate = function(index) {
	if (!SudokuManager.started || SudokuManager.paused) return;
	if (!this.sudoku_window.canSetValue()) return;
	SoundManager.playCursor();
	this.activateInputWindow(index);
};

Scene_Sudoku.prototype.handlerInputCancel = function() {
	this.activateSudokuWindow();
};

// Activate Windows

Scene_Sudoku.prototype.activateSudokuWindow = function(index) {
	this.sudoku_window.activate();
	if (index !== undefined)
		this.sudoku_window.select(index);
	else
		this.sudoku_window.refresh();
	this.menu_window.deactivate();
	this.levels_window.deactivate();
	this.input_window.deactivate();
};

Scene_Sudoku.prototype.activateMenuWindow = function(index) {
	this.sudoku_window.deactivate();
	this.sudoku_window.hideCursor();
	this.menu_window.activate();
	if (index !== undefined)
		this.menu_window.select(index);
	this.levels_window.deactivate();
	this.input_window.deactivate();
};

Scene_Sudoku.prototype.activateLevelsWindow = function(index) {
	if (index === undefined) index = 0;
	this.sudoku_window.deactivate();
	this.sudoku_window.hideCursor();
	this.menu_window.deactivate();
	this.levels_window.setDifficulty(this.menu_window.index());
	this.levels_window.activate();
	this.levels_window.select(index);
	this.input_window.deactivate();
};

Scene_Sudoku.prototype.activateInputWindow = function(index) {
	if (index === undefined) index = 0;
	this.sudoku_window.deactivate();
	this.menu_window.deactivate();
	this.levels_window.deactivate();
	this.input_window.activate();
	this.input_window.select(index);
};

// Other

Scene_Sudoku.prototype.checkCompleteGame = function() {
	if (this.sudoku_window.checkCompleteGame()) this.completeGame();
};

Scene_Sudoku.prototype.startNewGame = function() {
	SudokuManager.startNewGame(this.levels_window.difficulty, this.levels_window.index());
	var sudoku = SudokuManager.getSudoku();
	this.status_window.startNewGame();
	this.sudoku_window.setSudoku(sudoku);
	this.menu_window.startNewGame();
	this.levels_window.setDifficulty(-1);
	this.activateSudokuWindow(0);
};

Scene_Sudoku.prototype.pauseGame = function(index) {
	SudokuManager.pauseGame();
	this.status_window.pauseGame();
	this.sudoku_window.contents.clear();
	this.activateMenuWindow(index);
};

Scene_Sudoku.prototype.continueGame = function(index) {
	SudokuManager.continueGame();
	this.status_window.continueGame();
	this.sudoku_window.refresh();
	this.activateSudokuWindow(index);
};

Scene_Sudoku.prototype.completeGame = function() {
	SudokuManager.pauseGame();
	this.status_window.completeGame();
	var record = this.status_window.timer;
	SudokuManager.completeGame(record);
	this.menu_window.refresh();
	this.activateMenuWindow(0);
};

Scene_Sudoku.prototype.processMenuCursorMove = function() {
	if (!this.menu_window.isOpenAndActive()) return;
	var index = this.menu_window.index();
	if (this.menu_window.command_layer === 0)
	{
		if (!this.statistics_window.visible && index === 2)
		{
			this.statistics_window.drawInfo();
			this.statistics_window.show();
		}
		if (this.statistics_window.visible && index !== 2)
			this.statistics_window.hide();
	}
	else
		if (index !== 3)
			this.levels_window.setDifficulty(index);
};

Scene_Sudoku.prototype.processLevelsCursorMove = function() {
	if (!this.levels_window.isOpenAndActive()) return;
	var difficulty = this.levels_window.difficulty;
	var level = this.levels_window.index();
	this.status_window.drawRecord(difficulty, level);
};

Scene_Sudoku.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	this.processMenuCursorMove();
	this.processLevelsCursorMove();
};

//===========================================================================
// Window Sudoku Status
//===========================================================================

function Window_Sudoku_Status() {
	this.initialize.apply(this, arguments);
};

Window_Sudoku_Status.prototype = Object.create(Window_Base.prototype);
Window_Sudoku_Status.prototype.constructor = Window_Sudoku_Status;

Window_Sudoku_Status.prototype.initialize = function(x, y, click_handler) {
	Window_Base.prototype.initialize.call(this, x, y, Graphics.boxWidth, this.standardPadding() * 2 + this.lineHeight());
	DKCore.setupWindow(this, SudokuParam.status_window, SudokuParam.windowskin);
	DKCore.setupFont(this, SudokuParam.status_window.font);
	this.changeTextColor(SudokuParam.status_window.text_color);
	this.click_handler = click_handler;
	this.drawNewGameInfo();
};

Window_Sudoku_Status.prototype.standardPadding = function() {
	return 15;
};

Window_Sudoku_Status.prototype.createTimer = function() {
	this.removeTimer();
	this.timer = new Sprite_Sudoku_Timer(this.width, this.standardPadding());
	this.timer.setClickHandler(this.click_handler.bind(this));
	this.addChild(this.timer);
};

Window_Sudoku_Status.prototype.removeTimer = function() {
	if (this.timer == null) return;
	this.removeChild(this.timer);
	this.timer = null;
};

Window_Sudoku_Status.prototype.startNewGame = function() {
	this.createTimer();
	this.drawGameInfo();
};

Window_Sudoku_Status.prototype.pauseGame = function() {
	this.timer.pauseGame();
	this.drawPauseInfo();
};

Window_Sudoku_Status.prototype.continueGame = function() {
	this.timer.continueGame();
	this.drawGameInfo();
};

Window_Sudoku_Status.prototype.completeGame = function() {
	this.timer.completeGame();
	this.drawCompleteInfo();
};

Window_Sudoku_Status.prototype.drawRecord = function(difficulty, level) {
	this.contents.clear();
	var text = 'Рекорд: ';
	var record = SudokuManager.getRecord(difficulty, level);
	if (!record) return this.drawText('Не пройдено', 0, 0, this.contentsWidth());
	this.drawText(text + SudokuManager.getTime(record), 0, 0, this.contentsWidth());
};

Window_Sudoku_Status.prototype.drawNewGameInfo = function() {
	this.contents.clear();
	this.drawText('Начните новую игру', 0, 0, this.contentsWidth());
};

Window_Sudoku_Status.prototype.drawGameInfo = function() {
	this.contents.clear();
	var difficulty = SudokuManager.difficulty;
	var level = SudokuManager.level;
	if (difficulty === 0)
		var text = 'Легкий уровень';
	else if (difficulty === 1)
		var text = 'Средний уровень';
	else
		var text = 'Тяжелый уровень';
	text += ' ' + (level + 1);
	this.drawText(text, 0, 0, this.contentsWidth());
	var record = SudokuManager.getRecord();
	if (!record) return;
	var text_width = this.textWidth(text);
	this.drawText('. Рекорд: ' + SudokuManager.getTime(record), text_width, 0, this.contentsWidth());
};

Window_Sudoku_Status.prototype.drawPauseInfo = function() {
	this.contents.clear();
	this.drawText(DKLocalizationManager.DKCore_Sudoku('#pause#'), 0, 0, this.contentsWidth());
};

Window_Sudoku_Status.prototype.drawCompleteInfo = function() {
	this.contents.clear();
	var last_record = SudokuManager.getRecord();
	var new_record = this.timer;
	if (SudokuManager.checkRecord(last_record, new_record))
		var text = '. Новый рекорд: ' + SudokuManager.getTime(new_record);
	else
		var text = '';
	this.drawText('Пройдено' + text, 0, 0, this.contentsWidth());
};

Window_Sudoku_Status.prototype.update = function() {
	Window.prototype.update.call(this);
};

//===========================================================================
// Window Sudoku
//===========================================================================

function Window_Sudoku() {
	this.initialize.apply(this, arguments);
};

Window_Sudoku.prototype = Object.create(Window_DKCore_Command.prototype);
Window_Sudoku.prototype.constructor = Window_Sudoku;

Window_Sudoku.prototype.initialize = function(x, y, input_handler) {
	this.input_handler = input_handler;
	this.sudoku = null;
	this.line_width = 1;
	this.bold_line_width = 3;
	Window_Command.prototype.initialize.call(this, x, y);
	DKCore.setupWindow(this, SudokuParam.sudoku_window, SudokuParam.windowskin);
	this.createField();
};

Window_Sudoku.prototype.windowWidth = function() {
	return this.standardPadding() * 2 + this.bold_line_width * 4 + this.line_width * 6 + this.itemWidth() * 9;
};

Window_Sudoku.prototype.windowHeight = function() {
	return this.windowWidth();
};

Window_Sudoku.prototype.maxCols = function() {
	return 9;
};

Window_Sudoku.prototype.numVisibleRows = function() {
	return 9;
};

Window_Sudoku.prototype.itemWidth = function() {
	return 56;
};

Window_Sudoku.prototype.itemHeight = function() {
	return this.itemWidth();
};

Window_Sudoku.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    var maxCols = this.maxCols();
	var col = index % maxCols;
	var row = Math.floor(index / maxCols);
    rect.width = this.itemWidth();
    rect.height = this.itemHeight();
	rect.x = this.bold_line_width + col * rect.width + col * this.line_width  + (this.bold_line_width * Math.floor(col / 3));
	if (col >= 3 && col < 6)
		rect.x -= this.line_width;
	if (col >= 6)
		rect.x -= this.line_width * 2;
    rect.y = this.bold_line_width + row * rect.height + row * this.line_width + (this.bold_line_width * Math.floor(row / 3));
	if (row >= 3 && row < 6)
		rect.y -= this.line_width;
	if (row >= 6)
		rect.y -= this.line_width * 2;
    return rect;
};

Window_Sudoku.prototype.hideCursor = function() {
	this.setCursorRect(0, 0, 0, 0);
};

Window_Sudoku.prototype.itemRectForText = function(index) {
    var rect = this.itemRect(index);
    rect.x += this.textPadding();
	rect.y += (this.itemHeight() - this.lineHeight()) / 2;
    rect.width -= this.textPadding() * 2;
    return rect;
};

Window_Sudoku.prototype.createField = function() {
	this.sprite_field = new Sprite_Sudoku_Field(this);
	this.addChild(this.sprite_field);
};

Window_Sudoku.prototype.setSudoku = function(sudoku) {
	this.sudoku = DKCore.CloneObject(sudoku);
	this.makeCommandList();
	this.refresh();
};

Window_Sudoku.prototype.checkFill = function() {
	for(var i = 0; i < this.sudoku.length; i++)
		if (this.sudoku[i].contains(0))
			return false;
	return true;
};

Window_Sudoku.prototype.checkCompleteGame = function() {
	if (this.sudoku == null) return false;
	if (!this.checkFill()) return false;
	for(var i = 0; i < this.sudoku.length; i++)
		for(var j = 0; j < this.sudoku[i].length; j++)
		{
			var value = this.sudoku[i][j];
			if (!this.checkValue(i, j, value))
				return false;
		}
	return true;
};

Window_Sudoku.prototype.indexValue = function() {
	return this.sudoku[this.row()][this.col()];
};

Window_Sudoku.prototype.valueCount = function(array, value) {
	var count = 0;
	for(var i = 0; i < array.length; i++)
	{
		var val = array[i];
		if (val === value || val === value - 10)
			count++;
	}
	return count;
};

Window_Sudoku.prototype.getGroupInfo = function(row, col) {
	var start_row;
	var start_col;
	if (row < 3)
		start_row = 0;
	if (row >= 3 && row < 6)
		start_row = 3;
	if (row >= 6)
		start_row = 6;
	if (col < 3)
		start_col = 0;
	if (col >= 3 && col < 6)
		start_col = 3;
	if (col >= 6)
		start_col = 6;
	return [start_row, start_col];
};

Window_Sudoku.prototype.checkRow = function(row, value) {
	return this.valueCount(this.sudoku[row], value) === 1;
};

Window_Sudoku.prototype.checkCol = function(col, value) {
	var column = [];
	for(var row = 0; row < this.sudoku.length; row++)
		column.push(this.sudoku[row][col]);
	return this.valueCount(column, value) === 1;
};

Window_Sudoku.prototype.checkGroup = function(row, col, value) {
	var group_value = [];
	var group_info = this.getGroupInfo(row, col);
	var start_row = group_info[0];
	var start_col = group_info[1];
	for(var i = start_row; i < start_row + 3; i++)
		for(var j = start_col; j < start_col + 3; j++)
			group_value.push(this.sudoku[i][j]);
	return this.valueCount(group_value, value) === 1;
};

Window_Sudoku.prototype.checkValue = function(row, col, value) {
	return this.checkRow(row, value) && this.checkCol(col, value) && this.checkGroup(row, col, value);
};

Window_Sudoku.prototype.drawItem = function(index) {
	DKCore.setupFont(this, SudokuParam.sudoku_window.font);
    var rect = this.itemRectForText(index);
    var align = this.itemTextAlign();
	var max_cols = this.maxCols();
	var row = Math.floor(index / max_cols);
	var col = index % max_cols;
	var value = this.sudoku[row][col];
	var index_value = this.indexValue();
	this.changeTextColor(SudokuParam.sudoku_window.color['text_color']);
	if (value > 10)
	{
		this.changeTextColor(SudokuParam.sudoku_window.color['incorrect_value']);
		if (this.checkValue(row, col, value))
			this.changeTextColor(SudokuParam.sudoku_window.color['correct_value']);
	}
	if (value !== 0 && (value === index_value || value === index_value - 10 || value === index_value + 10))
	{
		var color = SudokuParam.sudoku_window.color['other_background'];
		if (index === this.index())
			color = SudokuParam.sudoku_window.color['current_background'];
		var item_rect = this.itemRect(index);
		this.contents.paintOpacity = SudokuParam.sudoku_window.background_opacity;
		this.contents.fillRect(item_rect.x, item_rect.y, item_rect.width, item_rect.height, color);
	}
    this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
};

Window_Sudoku.prototype.getGroupIndexes = function(row, col) {
	var group_info = this.getGroupInfo(row, col);
	var start_row = group_info[0];
	var start_col = group_info[1];
	if (start_row === 0 && start_col === 0)
		return [0, 1, 2, 9, 10, 11, 18, 19, 20];
	if (start_row === 0 && start_col === 3)
		return [3, 4, 5, 12, 13, 14, 21, 22, 23];
	if (start_row === 0 && start_col === 6)
		return [6, 7, 8, 15, 16, 17, 24, 25, 26];
	if (start_row === 3 && start_col === 0)
		return [27, 28, 29, 36, 37, 38, 45, 46, 47];
	if (start_row === 3 && start_col === 3)
		return [30, 31, 32, 39, 40, 41, 48, 49, 50];
	if (start_row === 3 && start_col === 6)
		return [33, 34, 35, 42, 43, 44, 51, 52, 53];
	if (start_row === 6 && start_col === 0)
		return [54, 55, 56, 63, 64, 65, 72, 73, 74];
	if (start_row === 6 && start_col === 3)
		return [57, 58, 59, 66, 67, 68, 75, 76, 77];
	if (start_row === 6 && start_col === 6)
		return [60, 61, 62, 69, 70, 71, 78, 79, 80];
};

Window_Sudoku.prototype.getItemBackground = function() {
	var item_background = [];
	var row = this.row();
	var col = this.col();
	var max_cols = this.maxCols();
	var group_indexes = this.getGroupIndexes(row, col);
	for(var i = 0; i < max_cols; i++)
	{
		var row_index = row * max_cols + i;
		var col_index = col + max_cols * i;
		var group_index = group_indexes[i];
		if (!item_background.contains(row_index))
			item_background.push(row_index);
		if (!item_background.contains(col_index))
			item_background.push(col_index);
		if (!item_background.contains(group_index))
			item_background.push(group_index);
	}
	return item_background;
};

Window_Sudoku.prototype.drawItemBackground = function() {
	if (this.sudoku == null) return;
	if (this.indexValue() !== 0) return;
	var item_background = this.getItemBackground();
	for(var i = 0; i < item_background.length; i++)
	{
		var index = item_background[i];
		var item_rect = this.itemRect(index);
		var color = SudokuParam.sudoku_window.color['other_background'];
		if (index === this.index())
			color = SudokuParam.sudoku_window.color['current_background'];
		this.contents.paintOpacity = SudokuParam.sudoku_window.background_opacity;
		this.contents.fillRect(item_rect.x, item_rect.y, item_rect.width, item_rect.height, color);
	}
};

Window_Sudoku.prototype.col = function() {
	return this.index() % this.maxCols();
};

Window_Sudoku.prototype.deactivate = function() {
	Window_Command.prototype.deactivate.call(this);
};

Window_Sudoku.prototype.refresh = function() {
	this.contents.clear();
	this.drawItemBackground();
    this.drawAllItems();
};

Window_Sudoku.prototype.update = function() {
	Window_Command.prototype.update.call(this);
	this.processInput();
};

Window_Sudoku.prototype.select = function(index) {
	var last_index = this.index();
	Window_DKCore_Command.prototype.select.call(this, index);
	if (last_index !== this.index())
		this.refresh();
};

Window_Sudoku.prototype.canSetValue = function() {
	var value = this.indexValue();
	return value < 1 || value > 9;
};

Window_Sudoku.prototype.setValue = function(value, row, col) {
	if (row === undefined && col === undefined)
	{
		row = this.row();
		col = this.col();
	}
	this.sudoku[row][col] = value;
	if (value === 0)
		value = '';
	else
		value = value - 10 + '';
	this._list[this.index()].name = value;
	this.refresh();
};

Window_Sudoku.prototype.processInput = function() {
	if (!this.isOpenAndActive()) return;
	if (this.sudoku == null) return;
	if (!this.canSetValue()) return;
	var commands = '123456789';
	for(var i = 0; i < commands.length; i++)
	{
		var value = Number(commands[i]) + 10;
		if (Input.isTriggered(commands[i]) && value !== this.indexValue())
		{
			this.setValue(value);
			this.input_handler();
		}
	}
	if ((Input.isTriggered('backspace') || Input.isTriggered('0')) && this.indexValue() !== 0)
		this.setValue(0);
};

Window_Sudoku.prototype.makeCommandList = function() {
	if (this.sudoku == null) return;
	this.clearCommandList();
	for(var i = 0; i < this.sudoku.length; i++)
		for(var j = 0; j < this.sudoku[i].length; j++)
		{
			var command = this.sudoku[i][j];
			if (command > 0 && command < 10)
				this.addCommand(command, '');
			else if (command > 10)
				this.addCommand(command - 10, 'ok');
			else
				this.addCommand('', 'ok');
		}
};

//===========================================================================
// Window Sudoku Menu
//===========================================================================

function Window_Sudoku_Menu() {
	this.initialize.apply(this, arguments);
};

Window_Sudoku_Menu.prototype = Object.create(Window_DKCore_Command.prototype);
Window_Sudoku_Menu.prototype.constructor = Window_Sudoku_Menu;

Window_Sudoku_Menu.prototype.initialize = function(x, y, width) {
	this.window_width = width;
	this.command_layer = 0;
	Window_Command.prototype.initialize.call(this, x, y);
	DKCore.setupWindow(this, SudokuParam.menu_window, SudokuParam.windowskin);
};

Window_Sudoku_Menu.prototype.startNewGame = function() {
	this.command_layer = 0;
	this.refresh();
	this.select(0);
};

Window_Sudoku_Menu.prototype.windowWidth = function() {
	return this.window_width;
};

Window_Sudoku_Menu.prototype.processCancel = function() {
	if (this.command_layer === 0) return;
	Window_Command.prototype.processCancel.call(this);
};

Window_Sudoku_Menu.prototype.resetTextColor = function() {
	this.changeTextColor(SudokuParam.menu_window.text_color);
};

Window_Sudoku_Menu.prototype.drawItem = function(index) {
	DKCore.setupFont(this, SudokuParam.menu_window.font);
	Window_DKCore_Command.prototype.drawItem.call(this, index);
};

Window_Sudoku_Menu.prototype.makeCommandList = function() {
	if (this.command_layer === 0)
	{
		var enable = SudokuManager.started;
		this.addCommand(DKLocalizationManager.DKCore_Sudoku('#new_game#'), 'new_game');
		this.addCommand(DKLocalizationManager.DKCore_Sudoku('#continue#'), 'continue', enable);
		this.addCommand(DKLocalizationManager.DKCore_Sudoku('#statistics#'), 'statistics');
		this.addCommand(DKLocalizationManager.DKCore_Sudoku('#exit#'), 'exit');
	}
	else
	{
		this.addCommand(DKLocalizationManager.DKCore_Sudoku('#easy#'), 'level');
		this.addCommand(DKLocalizationManager.DKCore_Sudoku('#medium#'), 'level');
		this.addCommand(DKLocalizationManager.DKCore_Sudoku('#hard#'), 'level');
		this.addCommand(DKLocalizationManager.DKCore_Sudoku('#back#'), 'cancel');
	}
};

//===========================================================================
// Window Sudoku Levels
//===========================================================================

function Window_Sudoku_Levels() {
	this.initialize.apply(this, arguments);
};

Window_Sudoku_Levels.prototype = Object.create(Window_DKCore_Command.prototype);
Window_Sudoku_Levels.prototype.constructor = Window_Sudoku_Levels;

Window_Sudoku_Levels.prototype.initialize = function(x, y, width) {
	this.window_width = width;
	this.difficulty = -1;
	Window_Command.prototype.initialize.call(this, x, y);
	DKCore.setupWindow(this, SudokuParam.levels_window, SudokuParam.windowskin);
};

Window_Sudoku_Levels.prototype.windowWidth = function() {
	return this.window_width;
};

Window_Sudoku_Levels.prototype.windowHeight = function() {
	return this.standardPadding() * 2 + this.lineHeight() * this.numVisibleRows();
};

Window_Sudoku_Levels.prototype.numVisibleRows = function() {
	return 3;
};

Window_Sudoku_Levels.prototype.lineHeight = function() {
	return 42;
};

Window_Sudoku_Levels.prototype.setDifficulty = function(difficulty) {
	if (this.difficulty === difficulty) return;
	this.difficulty = difficulty;
	this.refresh();
	this.select(0);
	this.deactivate();
};

Window_Sudoku_Levels.prototype.resetTextColor = function() {
	this.changeTextColor(SudokuParam.levels_window.text_color);
};

Window_Sudoku_Levels.prototype.drawItem = function(index) {
	DKCore.setupFont(this, SudokuParam.levels_window.font);
	Window_DKCore_Command.prototype.drawItem.call(this, index);
};

Window_Sudoku_Levels.prototype.makeCommandList = function() {
	if (this.difficulty === -1) return;
	var data = SudokuManager.getLevels(this.difficulty);
	for(var i = 0; i < data.length; i++)
		this.addCommand(DKLocalizationManager.DKCore_Sudoku('#level# %1', [i + 1]), 'ok');
};

//===========================================================================
// Window Sudoku Input
//===========================================================================

function Window_Sudoku_Input() {
	this.initialize.apply(this, arguments);
};

Window_Sudoku_Input.prototype = Object.create(Window_DKCore_Command.prototype);
Window_Sudoku_Input.prototype.constructor = Window_Sudoku_Input;

Window_Sudoku_Input.prototype.initialize = function(x, y, width) {
	this.window_width = width;
	Window_Command.prototype.initialize.call(this, x, y);
	DKCore.setupWindow(this, SudokuParam.input_window, SudokuParam.windowskin);
};

Window_Sudoku_Input.prototype.windowWidth = function() {
	return this.window_width;
};

Window_Sudoku_Input.prototype.windowHeight = function() {
	return this.standardPadding() * 2 + this.itemHeight() * this.numVisibleRows();
};

Window_Sudoku_Input.prototype.numVisibleRows = function() {
	return 4;
};

Window_Sudoku_Input.prototype.maxCols = function() {
	return 3;
};

Window_Sudoku_Input.prototype.cursorDown = function(wrap) {
	if (this.row() === 2)
		return this.select(this.maxItems() - 1);
	Window_Command.prototype.cursorDown.call(this, wrap);
};

Window_Sudoku_Input.prototype.itemHeight = function() {
	return 45;
};

Window_Sudoku_Input.prototype.itemRectForText = function(index) {
    var rect = this.itemRect(index);
    rect.x += this.textPadding();
	rect.y += (this.itemHeight() - this.lineHeight()) / 2;
    rect.width -= this.textPadding() * 2;
    return rect;
};

Window_Sudoku_Input.prototype.itemRect = function(index) {
	var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = this.itemWidth();
    rect.height = this.itemHeight();
    rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
    rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
	if (index === this.maxItems() - 1)
		rect.width = rect.width * 3 + this.spacing() * 2;
    return rect;
};

Window_Sudoku_Input.prototype.resetTextColor = function() {
	this.changeTextColor(SudokuParam.input_window.text_color);
};

Window_Sudoku_Input.prototype.drawItem = function(index) {
	DKCore.setupFont(this, SudokuParam.input_window.font);
	Window_DKCore_Command.prototype.drawItem.call(this, index);
};

Window_Sudoku_Input.prototype.makeCommandList = function() {
	var commands = '123456789';
	for(var i = 0; i < commands.length; i++)
		this.addCommand(commands[i], 'ok');
	this.addCommand(DKLocalizationManager.DKCore_Sudoku('#clear#'), '');
};

//===========================================================================
// Window Sudoku Statistics
//===========================================================================

function Window_Sudoku_Statistics() {
	this.initialize.apply(this, arguments);
};

Window_Sudoku_Statistics.prototype = Object.create(Window_Base.prototype);
Window_Sudoku_Statistics.prototype.constructor = Window_Sudoku_Statistics;

Window_Sudoku_Statistics.prototype.initialize = function(x, y, width, height) {
	Window_Base.prototype.initialize.call(this, x, y, width, height);
	DKCore.setupWindow(this, SudokuParam.statistics_window, SudokuParam.windowskin);
	DKCore.setupFont(this, SudokuParam.statistics_window.font);
	this.changeTextColor(SudokuParam.statistics_window.text_color);
	this.drawInfo();
};

Window_Sudoku_Statistics.prototype.drawLevelInfo = function(x, y, width, height, padding, level) {
	var levels = [DKLocalizationManager.DKCore_Sudoku('#easy#'), DKLocalizationManager.DKCore_Sudoku('#medium#'), DKLocalizationManager.DKCore_Sudoku('#hard#')];
	this.drawText(levels[level], x, y, width, 'center');
	y += height + padding;
	this.drawText(DKLocalizationManager.DKCore_Sudoku('#completed_levels#:'), x, y, width);
	this.drawText(SudokuManager.getCompletedLevels(level), x, y, width, 'right');
	y += height;
	this.drawText(DKLocalizationManager.DKCore_Sudoku('#best_record#:'), x, y, width);
	var record = SudokuManager.getBestLevelRecord(level);
	if (record)
		this.drawText(SudokuManager.getTime(record), x, y, width, 'right');
	else
		this.drawText(DKLocalizationManager.DKCore_Sudoku('#no#'), x, y, width, 'right');
};

Window_Sudoku_Statistics.prototype.drawInfo = function() {
	this.contents.clear();
	var x = 0;
	var y = 0;
	var width = this.contentsWidth() - (SudokuParam.statistics_window.font[1] ? 4 : 0);
	var height = this.lineHeight();
	var padding = 8;
	
	this.drawText(DKLocalizationManager.DKCore_Sudoku('#statistics#'), x, y, width, 'center');
	
	y += height + padding;
	this.drawText(DKLocalizationManager.DKCore_Sudoku('#started_games#:'), x, y, width);
	this.drawText(SudokuManager.getStartedGames(), x, y, width, 'right');
	
	y += height;
	this.drawText(DKLocalizationManager.DKCore_Sudoku('#completed_games#:'), x, y, width);
	this.drawText(SudokuManager.getCompletedGames(), x, y, width, 'right');
	
	y += height;
	this.drawText(DKLocalizationManager.DKCore_Sudoku('#total_time#:'), x, y, width);
	this.drawText(SudokuManager.getPlayingTime(), x, y, width, 'right');
	
	for(var i = 0; i < 3; i++)
	{
		y += height + padding;
		this.drawLevelInfo(x, y, width, height, padding, i);
		y += height * 2 + padding;
	}
};

Window_Sudoku_Statistics.prototype.update = function() {
};

//===========================================================================
// Sprite Sudoku Timer
//===========================================================================

function Sprite_Sudoku_Timer() {
    this.initialize.apply(this, arguments);
};

Sprite_Sudoku_Timer.prototype = Object.create(Sprite_Button.prototype);
Sprite_Sudoku_Timer.prototype.constructor = Sprite_Sudoku_Timer;

Sprite_Sudoku_Timer.prototype.initialize = function(window_width, padding) {
	Sprite_Button.prototype.initialize.call(this);
	this.sec = 0;
	this.min = 0;
	this.hour = 0;
	this.time_count = 0;
	this.paused = false;
	this.createBitmap();
	this.x = window_width - this.bitmap.width - padding;
	this.y = padding;
	this.drawTimer();
};

Sprite_Sudoku_Timer.prototype.createBitmap = function() {
	var bitmap = new Bitmap();
	var text_width = Math.max(bitmap.measureTextWidth('||'), bitmap.measureTextWidth('►'));
	var time = SudokuManager.getTime(this);
	var width = text_width + new Bitmap().measureTextWidth(' ' + time);
	this.bitmap = new Bitmap(width * 2 + 16, 36);
	this.bitmap.textColor = SudokuParam.status_window.text_color;
};

Sprite_Sudoku_Timer.prototype.drawTimer = function() {
	this.bitmap.clear();
	var paused = SudokuManager.paused;
	if (paused)
		var text = '||';
	else
		var text = '►';
	var time = SudokuManager.getTime(this);
	this.bitmap.drawText(text + ' ' + time, 0, 0, this.bitmap.width, this.bitmap.height, 'right');
};

Sprite_Sudoku_Timer.prototype.addSec = function() {
	this.sec++;
	SudokuManager.addPlayingSec();
	if (this.sec < 60) return;
	this.sec = 0;
	this.addMin();
};

Sprite_Sudoku_Timer.prototype.addMin = function() {
	this.min++;
	if (this.min < 60) return;
	this.min = 0;
	this.addHour();
};

Sprite_Sudoku_Timer.prototype.addHour = function() {
	this.hour++;
	if (this.hour < 24) return;
	this.hour = 0;
};

Sprite_Sudoku_Timer.prototype.pauseGame = function() {
	this.paused = true;
	this.drawTimer();
};

Sprite_Sudoku_Timer.prototype.continueGame = function() {
	this.paused = false;
	this.drawTimer();
};

Sprite_Sudoku_Timer.prototype.completeGame = function() {
	this.pauseGame();
};

Sprite_Sudoku_Timer.prototype.updateTimer = function() {
	this.addSec();
	this.drawTimer();
};

Sprite_Sudoku_Timer.prototype.update = function() {
	Sprite_Button.prototype.update.call(this);
	if (this.paused) return;
	this.time_count++;
	if (this.time_count % 60 === 0)
		this.updateTimer();
};

//===========================================================================
// Sprite Sudoku Field
//===========================================================================

function Sprite_Sudoku_Field() {
    this.initialize.apply(this, arguments);
};

Sprite_Sudoku_Field.prototype = Object.create(Sprite.prototype);
Sprite_Sudoku_Field.prototype.constructor = Sprite_Sudoku_Field;

Sprite_Sudoku_Field.prototype.initialize = function(sudoku_window) {
	Sprite.prototype.initialize.call(this);
	this.sudoku_window = sudoku_window;
	this.x = this.sudoku_window.standardPadding();
	this.y = this.sudoku_window.standardPadding();
	this.bitmap = new Bitmap(sudoku_window.contentsWidth(), sudoku_window.contentsHeight());
	this.drawField();
};

Sprite_Sudoku_Field.prototype.drawField = function() {
	var x = 0;
	var y = 0;
	var line_width = this.sudoku_window.line_width;
	var bold_line_width = this.sudoku_window.bold_line_width;
	var line_color = SudokuParam.sudoku_window.color['line_color'];
	var bold_line_color = SudokuParam.sudoku_window.color['bold_line_color'];
	var item_width = this.sudoku_window.itemWidth();
	var item_height = this.sudoku_window.itemHeight();
	var contents_width = this.sudoku_window.contentsWidth();
	var contents_height = this.sudoku_window.contentsHeight();
	
	// толстые линии 
	this.bitmap.fillRect(x, y, contents_width, bold_line_width, bold_line_color);
	this.bitmap.fillRect(x, y, bold_line_width, contents_height, bold_line_color);
	this.bitmap.fillRect(contents_width - bold_line_width, y, bold_line_width, contents_height, bold_line_color);
	this.bitmap.fillRect(x, contents_height - bold_line_width, contents_width, bold_line_width, bold_line_color);
	
	// толстые линии
	x = bold_line_width + item_width * 3 + line_width * 2;
	y = bold_line_width;
	this.bitmap.fillRect(x, y, bold_line_width, contents_height, bold_line_color);
	x *= 2;
	this.bitmap.fillRect(x, y, bold_line_width, contents_height, bold_line_color);
	
	// обычные линии
	x = bold_line_width + item_width;
	this.bitmap.fillRect(x, y, line_width, contents_height, line_color);
	x += item_width + line_width;
	this.bitmap.fillRect(x, y, line_width, contents_height, line_color);
	
	// обычные линии
	x = bold_line_width * 2 + item_width * 4 + line_width * 2;
	this.bitmap.fillRect(x, y, line_width, contents_height, line_color);
	x += item_width + line_width;
	this.bitmap.fillRect(x, y, line_width, contents_height, line_color);
	
	// обычные линии
	x = bold_line_width * 3 + item_width * 7 + line_width * 4;
	this.bitmap.fillRect(x, y, line_width, contents_height, line_color);
	x += item_width + line_width;
	this.bitmap.fillRect(x, y, line_width, contents_height, line_color);
	
	// толстые линии
	x = bold_line_width;
	y = bold_line_width + item_height * 3 + line_width * 2;
	this.bitmap.fillRect(x, y, contents_width, bold_line_width, bold_line_color);
	y *= 2;
	this.bitmap.fillRect(x, y, contents_width, bold_line_width, bold_line_color);
	
	// обычные линии
	y = bold_line_width + item_height;
	this.bitmap.fillRect(x, y, contents_width, line_width, line_color);
	y += item_height + line_width;
	this.bitmap.fillRect(x, y, contents_width, line_width, line_color);
	
	// обычные линии
	y = bold_line_width * 2 + item_height * 4 + line_width * 2;
	this.bitmap.fillRect(x, y, contents_width, line_width, line_color);
	y += item_height + line_width;
	this.bitmap.fillRect(x, y, contents_width, line_width, line_color);
	
	// обычные линии
	y = bold_line_width * 3 + item_height * 7 + line_width * 4;
	this.bitmap.fillRect(x, y, contents_width, line_width, line_color);
	y += item_height + line_width;
	this.bitmap.fillRect(x, y, contents_width, line_width, line_color);
};

Sprite_Sudoku_Field.prototype.update = function() {
};

//===========================================================================
// Sudoku Manager
//===========================================================================

function SudokuManager() {
	throw new Error('This is a static class (Это статический класс!)');
};

SudokuManager.data = [];
SudokuManager.record = [];
SudokuManager.statistics = {};

SudokuManager.initialize = function() {
	var sudoku = [Sudoku_Easy, Sudoku_Medium, Sudoku_Hard];
	for(var i = 0; i < 3; i++)
	{
		this.data[i] = DKCore.CloneObject(sudoku[i]);
		this.record[i] = new Array(sudoku[i].length);
	}
	this.statistics = { 'started_games': 0, 'completed_games': 0, 'playing_time': { 'sec': 0, 'min': 0, 'hour': 0 } };
	this.clear();
};

SudokuManager.clear = function() {
	this.difficulty = null;
	this.level = null;
	this.started = false;
	this.paused = false;
};

SudokuManager.startNewGame = function(difficulty, level) {
	this.difficulty = difficulty;
	this.level = level;
	this.started = true;
	this.paused = false;
	this.addStartedGames();
};

SudokuManager.getLevels = function(difficulty) {
	return this.data[difficulty];
};

SudokuManager.getSudoku = function() {
	return this.data[this.difficulty][this.level];
};

SudokuManager.getRecord = function(difficulty, level) {
	if (difficulty === undefined && level === undefined)
	{
		difficulty = this.difficulty;
		level = this.level;
	}
	return this.record[difficulty][level];
};

SudokuManager.getStartedGames = function() {
	return this.statistics.started_games;
};

SudokuManager.getCompletedGames = function() {
	return this.statistics.completed_games;
};

SudokuManager.getPlayingTime = function() {
	return this.getTime(this.statistics.playing_time);
};

SudokuManager.getCompletedLevels = function(difficulty) {
	var levels = this.getLevels(difficulty);
	var count = 0;
	for(var i = 0; i < levels.length; i++)
		if (this.getRecord(difficulty, i))
			count++;
	return count;
};

SudokuManager.getBestLevelRecord = function(difficulty) {
	var levels = this.getLevels(difficulty);
	var best_record = null;
	for(var i = 0; i < levels.length; i++)
	{
		var record = this.getRecord(difficulty, i);
		if (this.checkRecord(best_record, record))
			best_record = record;
	}
	return best_record;
};

SudokuManager.checkRecord = function(last_record, new_record) {
	if (last_record == null) return true;
	if (new_record == null) return false;
	if (new_record.hour < last_record.hour) return true;
	if (new_record.hour === last_record.hour && new_record.min < last_record.min) return true;
	if (new_record.hour === last_record.hour && new_record.min === last_record.min && new_record.sec < last_record.sec) return true;
	return false;
};

SudokuManager.setRecord = function(record) { 
	this.record[this.difficulty][this.level] = { 'sec': record.sec, 'min': record.min, 'hour': record.hour };
};

SudokuManager.addStartedGames = function() {
	this.statistics.started_games++;
};

SudokuManager.addCompletedGames = function() {
	this.statistics.completed_games++;
};

SudokuManager.addPlayingSec = function() {
	var time = this.statistics.playing_time;
	time.sec++;
	if (time.sec < 60) return;
	time.sec = 0;
	this.addPlayingMin();
};

SudokuManager.addPlayingMin = function() {
	var time = this.statistics.playing_time;
	time.min++;
	if (time.min < 60) return;
	time.min = 0;
	this.addPlayingHour();
};

SudokuManager.addPlayingHour = function() {
	this.statistics.playing_time.hour++;
};

SudokuManager.formatTime = function(time) {
	return time < 10 ? '0' + time : time;
};

SudokuManager.getTime = function(record) {
	return this.formatTime(record.hour) + ':' + this.formatTime(record.min) + ':' + this.formatTime(record.sec);
};

SudokuManager.pauseGame = function() {
	this.paused = true;
};

SudokuManager.continueGame = function() {
	this.paused = false;
};

SudokuManager.completeGame = function(record) {
	var last_record = this.getRecord();
	if (this.checkRecord(last_record, record))
		this.setRecord(record)
	this.addCompletedGames();
	this.clear();
};

//===========================================================================
// Game Interpreter
//===========================================================================

Game_Interpreter.prototype.openSudoku = function() {
	SceneManager.push(Scene_Sudoku);
};

//===========================================================================
// Data Manager
//===========================================================================

var Sudoku_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
	var contents = Sudoku_DataManager_makeSaveContents.call(this);
	contents.sudoku_record = SudokuManager.record;
	contents.sudoku_statistics = SudokuManager.statistics;
	return contents;
};

var Sudoku_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	Sudoku_DataManager_extractSaveContents.call(this, contents);
	if (!contents.sudoku_record && !contents.sudoku_statistics) return;
	SudokuManager.record = contents.sudoku_record;
	SudokuManager.statistics = contents.sudoku_statistics;
};

//===========================================================================
// Scene Manager
//===========================================================================

var Sudoku_SceneManager_initialize = SceneManager.initialize
SceneManager.initialize = function() {
	Sudoku_SceneManager_initialize.call(this);
	SudokuManager.initialize();
};