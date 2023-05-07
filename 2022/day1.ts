import input from "./day1-input"

const calorieSums = input.split("\n\n").map((group) =>
  group
    .split("\n")
    .map(Number)
    .reduce((a, b) => a + b, 0)
)

const sortedCalorieSums = [...calorieSums].sort((a, b) => a - b)

const part1 = sortedCalorieSums[sortedCalorieSums.length - 1]

const part2 = sortedCalorieSums.slice(-3).reduce((a, b) => a + b, 0)
