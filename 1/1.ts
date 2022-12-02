const sum = (x: number, y: number) => x + y
const isSmaller = (a: number, b: number) => a < b
  ? 1
  : a > b
    ? -1
    : 0

const result =
  (await Deno.readTextFile("1.txt"))
  .split("\n\n")
  .map(
    lines => lines.split("\n")
      .map(Number)
      .reduce(sum, 0)
  )
  .sort(isSmaller)
  .slice(0, 3)
  .reduce(sum)

console.log(result)
