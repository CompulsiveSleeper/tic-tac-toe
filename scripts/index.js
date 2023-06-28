const board = (function (doc) {
  let boardState;
  let boardWidth = 5;
  let boardHeight = 5;

  function _setBoardState() {
    const boardArr = new Array(boardHeight).fill(null).map(() => {
      return new Array(boardWidth).fill(null);
    })

    boardState = boardArr;
  }
  _setBoardState();

  function _renderBoardState() {
    const board = doc.createElement("ul");
    board.classList.add("board")
    boardState.forEach(arrRow => {
      const listItemRow = doc.createElement("li");
      const boardRow = doc.createElement("ul");
      boardRow.classList.add("board-row")
      arrRow.forEach(boardSpot => {
        const listItemSpot = doc.createElement("li");
        boardRow.appendChild(listItemSpot);
      })
      listItemRow.appendChild(boardRow);
      board.appendChild(listItemRow);
    });

    const boardArea = doc.querySelector('.board-area');
    console.log(boardArea);

    boardArea.textContent = "";
    boardArea.appendChild(board);
  }
  _renderBoardState();

  return {};
})(document);
