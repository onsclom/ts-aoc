import day2 from "./day2-input"

const possibilities = {
  A: {
    X: 1 + 3,
    Y: 2 + 6,
    Z: 3,
  },
  B: {
    X: 1,
    Y: 2 + 3,
    Z: 3 + 6,
  },
  C: {
    X: 1 + 6,
    Y: 2,
    Z: 3 + 3,
  },
}

const parsedInput = day2.split("\n").map((line) => line.split(" "))

const part1 = parsedInput
  .map(([p1, p2]) => possibilities[p1][p2])
  .reduce((a, b) => a + b, 0)

const possibilities2 = {
  A: {
    X: 0 + 3,
    Y: 3 + 1,
    Z: 6 + 2,
  },
  B: {
    X: 0 + 1,
    Y: 3 + 2,
    Z: 6 + 3,
  },
  C: {
    X: 0 + 2,
    Y: 3 + 3,
    Z: 6 + 1,
  },
}

const part2 = parsedInput
  .map(([p1, p2]) => possibilities2[p1][p2])
  .reduce((a, b) => a + b, 0)
