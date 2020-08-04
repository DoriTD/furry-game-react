

function App() {
  const [state, setState] = React.useState({
    // key: value
    grid: {
      width: 10,
      height: 10,
    },
    furry: {
      x: 0,
      y: 0,
    },
    coin: {
      x: Math.round(Math.random() * (10 - 1)),
      y: Math.round(Math.random() * (10 - 1)),
    },
    direction: "right",
    score: 0,
    isGameOver: false,
    speed: 1000,
  });
  const handleClick = () => {
    window.location.reload();
  };
  React.useEffect(() => {
    window.onkeydown = (e) => {
      e = e || window.event;
      if (e.keyCode === 38) {
        // up arrow
        state.direction = "up";
      } else if (e.keyCode === 40) {
        // down arrow
        state.direction = "down";
      } else if (e.keyCode === 37) {
        // left arrow
        state.direction = "left";
      } else if (e.keyCode === 39) {
        // right arrow
        state.direction = "right";
      }
      setState({ ...state });
    };
    const timer = () => {
      if (state.direction === "right") {
        state.furry.x++;
      }
      if (state.direction === "down") {
        state.furry.y++;
      }
      if (state.direction === "left") {
        state.furry.x--;
      }
      if (state.direction === "up") {
        state.furry.y--;
      }

      if (state.furry.x === state.coin.x && state.furry.y === state.coin.y) {
        state.score++;
        if (state.speed != 100) {
          state.speed -= 100;
        }
        state.coin.x = Math.round(Math.random() * (state.grid.width - 1));
        state.coin.y = Math.round(Math.random() * (state.grid.height - 1));
      }
      if (
        state.furry.x >= state.grid.width ||
        state.furry.x < 0 ||
        state.furry.y >= state.grid.height ||
        state.furry.y < 0
      ) {
        state.isGameOver = true;
      }

      setState({ ...state });
      clearInterval(interval);
      if (!state.isGameOver) interval = setInterval(timer, state.speed);
    };
    var interval = setInterval(timer, state.speed);
  }, []);

  return (
    <div className="App">
      <div className="score">Score : {state.score}</div>
      <div className="grid">
        {[...Array(state.grid.width)].map((x, i) => (
          <div className="row" key={i}>
            {[...Array(state.grid.height)].map((x, j) => (
              <div className="cell" key={j}>
                {state.furry.x === j && state.furry.y === i && (
                  <img src="images/furry.svg" alt="furry"></img>
                )}
                {state.coin.x === j && state.coin.y === i && (
                  <img src="images/coin.svg" alt="coin"></img>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {state.isGameOver && (
        <div className="game-over">
          <div> GAME OVER!! </div>
          <div className="button" onClick={handleClick}>
            {" "}
            Click here to play again
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("App"));
