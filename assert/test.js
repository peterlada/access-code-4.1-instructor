const max = (x, y) => x > y ? x : x

try {
    console.assert(max(2,3) === 3, "max(2,3) should return 3")
} catch (error) {
    console.log(error)
}
