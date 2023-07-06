const board = (function (doc) {
  let boardState;
  let boardColumns = 3;
  let boardRows = 3;
  let xMove = true;

  function _setBoardState() {
    const boardArr = new Array(boardRows).fill(null).map(() => {
      return new Array(boardColumns).fill(null);
    })

    boardState = boardArr;
  }
  _setBoardState();

  function _renderBoardState() {
    const board = doc.createElement("ul");
    board.classList.add("board")
    let row = 0;
    boardState.forEach(arrRow => {
      const listItemRow = doc.createElement("li");
      const boardRow = doc.createElement("ul");
      boardRow.classList.add("board-row")
      let col = 0;
      arrRow.forEach(boardCell => {
        const listItemCell = doc.createElement("li");
        listItemCell.id = `cell-${row}-${col}`;
        boardRow.appendChild(listItemCell);
        col++;
      })
      listItemRow.appendChild(boardRow);
      board.appendChild(listItemRow);
      row++;
    });

    const boardArea = doc.querySelector('.board-area');
    boardArea.textContent = "";
    boardArea.appendChild(board);
  }
  _renderBoardState();

  /* Dynamically set width and height of each cell*/
  function _setSizeToCells() {
    const x_o_Cells = document.querySelectorAll('.board-row > li');
    const board = document.querySelector('.board');
    const boardWidth = parseInt(window.getComputedStyle(board).width);
    const boardHeight = parseInt(window.getComputedStyle(board).height);
    x_o_Cells.forEach(cell => {
      cell.style.height = `${boardHeight / boardRows}px`;
      cell.style.width = `${boardWidth / boardColumns}px`;
    });
  }
  _setSizeToCells();

  function _addXO() {
    const board = doc.querySelector('.board');
    board.addEventListener('click', (event) => {
      const boardCell = event.target;
      if (!(boardCell.textContent === "")) {
        return;
      }

      const currMove = _getCurrMove();
      boardCell.textContent = currMove;
      _updateBoardData(boardCell, currMove);
    });
  }

  function _updateBoardData(boardCell, currMove) {
    let [x, y] = boardCell.id.split('-').slice(1);
    boardState[x][y] = currMove;
  }

  function _getCurrMove() {
    let currMove = "X";
    if (!xMove) {
      currMove = "O";
      xMove = true;
    } else {
      xMove = false;
    }
    return currMove;
  }
  _addXO();

  return {};
})(document);
