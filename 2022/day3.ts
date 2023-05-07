import input from "./day3-input"

const alphabet = "abcdefghijklmnopqrstuvwxyz"

const part1 = input
  .split("\n")
  .map(
    (line) =>
      [
        new Set(line.slice(0, line.length / 2)),
        line.slice(-line.length / 2),
      ] as const
  )
  .map(([seen, line]) => line.split("").filter((char) => seen.has(char))[0])
  .map(
    (char) =>
      alphabet.indexOf(char.toLowerCase()) +
      (char === char.toUpperCase() ? 27 : 1)
  )
  .reduce((a, b) => a + b, 0)

const part2 = input
  .split("\n")
  .reduce(
    ({ cur, groups }, line) =>
      cur.length === 2
        ? {
            cur: [],
            groups: [...groups, [...cur, line]],
          }
        : {
            cur: [...cur, line],
            groups,
          },
    { cur: [] as string[], groups: [] as string[][] }
  )
  .groups.map(
    (group) => [new Set(group[0]), new Set(group[1]), group[2]] as const
  )
  .map(
    ([seen1, seen2, line]) =>
      line.split("").filter((char) => seen1.has(char) && seen2.has(char))[0]
  )
  .map(
    (char) =>
      alphabet.indexOf(char.toLowerCase()) +
      (char === char.toUpperCase() ? 27 : 1)
  )
  .reduce((a, b) => a + b, 0)
