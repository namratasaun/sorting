let makeBoard = (noOfTiles) => {
  let snakes = getSnakes(Math.floor(noOfTiles / 12));
  let ladders = getLadders(Math.floor(noOfTiles / 12), snakes);
  let temp = [];
  for (let i = 0; i < noOfTiles; i++) {
    let toBePushedvalue = { value: i };
    let snakeStart = snakes.findIndex((val) => val.start === i);
    if (snakeStart !== -1) {
      toBePushedvalue['snakeEnds'] = snakes[snakeStart].end;
    }

    let ladderStart = ladders.findIndex((val) => val.start === i);
    if (ladderStart !== -1) {
      toBePushedvalue['ladderEnds'] = ladders[ladderStart].end;
    }

    temp.push(toBePushedvalue);
  }

  return { board: temp, snakes, ladders };
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let getSnakes = (numberOfSnakes) => {
  let temp = [];
  let i = 0;
  while (i < numberOfSnakes) {
    let start = getRandomIntInclusive(1, 99);
    if (temp.findIndex((val) => val.start === start) !== -1) {
      continue;
    }
    let end = getRandomIntInclusive(1, start - 1);
    temp.push({ start, end });
    i++;
  }
  return temp;
};

let getLadders = (numberOfLadders, snakes) => {
  let temp = [];
  let i = 0;
  while (i < numberOfLadders) {
    let start = getRandomIntInclusive(1, 99);
    if (temp.findIndex((val) => val.start === start) !== -1) {
      continue;
    }
    if (snakes.findIndex((val) => val.start === start) !== -1) {
      continue;
    }
    let end = getRandomIntInclusive(start + 1, 99);
    temp.push({ start, end });
    i++;
  }
  return temp;
};

export default makeBoard;
