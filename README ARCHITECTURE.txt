Game {
	rounds: Array<Rounds>
}

Round {
	fields: Array<Array<'x' | 'o'>>
	currentPlayer: 'x' | 'o'
	winner: 'x' | 'o'
}

GameLogic {
	/**
	 * берем последний раунд в игре, там берем текущего игрока и проставляем в (x, y) его значек, 
	 * после этого проверяем на завершенность и если раунд завершен то проставляем в winner значек текущего игрока (ну или выигравшего), затем добавлеем новый раунд,
	 * если раунд не завершен то меняем текущего игрока
	 */
	makeMove(game: Game, cellX: number, cellY: number) 

	/**
	 * возвращает игрока выигравшего указанный раунд, если такого игрока нет то возвращает null
	 */
	getWinner(round: Round)

	/**
	 * Вычисляет счет указанной игры
	 */
	getGameScore(game)
}

GameController {
	/**
	 * обработчик клика мышкой по клетке поля, его подписываем на события.
	 * 1) определяет координаты клетки
	 * 2) вызывает gameLogic.makeMove(game, x, y)
	 * 3) обновляет интерфейс:
	 * 		3.1) updateGameField(game)
	 * 		3.2) updateCurrentPlayer(game)
	 * 		3.2) updateGameScore(game)
	 */
	onCellClick(event: MouseEvent)

	/**
	 * Определяет координаты клетки по элементу, по которому кликнул юзер
	 * @returns {x: number, y: number}
	 */
	getCellByElement(element: HtmlElement)

	/**
	 * Обновляет игровое поле на экране
	 */
	updateGameField(game)

	/**
	 * Обновляет текущего игрока на экране
	 */
	updateCurrentPlayer(game)

	/**
	 * Обновляет счет игры на экране
	 */
	updateGameScore(game)
}
