// This script is used for filtering public only endpoints.
// This does not remove unused models yet.
// In the future, this will be done in CI in imx-engine

const paths = spec.paths

// Destruct paths to an array
let pathsList = []
for (const k in paths) {
    for (const k2 in paths[k]) {
         pathsList.push([k, k2, spec.paths[k][k2]])
    }
}
// Filter ones with public tag
const filteredPaths = pathsList.filter(path => path[2]?.tags?.includes("public"))

// Re-construct object
const newObj = {}
for (var i=0; i < filteredPaths.length; i++) {
    const p = filteredPaths[i][0]
    const method = filteredPaths[i][1]
    const desc = filteredPaths[i][2]

    if (newObj[p] === undefined) {
          newObj[p] = {}
    }
    newObj[p][method] = desc
}
spec.paths = newObj