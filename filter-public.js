/**
 * Filter public endpoints.
 *
 * 1. Get Open API spec from Public API
 * 2. Run this script to:
 *    - Filter endpoints with `public` tag
 *    - Update tags to include only 1 tag (to avoid duplicate code on generated client)
 * 3. Save the output
 * 4. Use the output file with `go-swagger` to remove any unused models.
 *    - Ensure `go-swagger` is installed
 *      - https://goswagger.io/install.html
 *    - Run `swagger flatten input.json --with-flatten=remove-unused --with-flatten=full > output.json`
 *    - Run `swagger flatten open-api-processed.json --with-flatten=remove-unused --with-flatten=full > open-api-processed-output.json`
 * 5. Save the last file as `open-api-processed.json` and use this file to generate client
 *
 * Run this file with `node filter-public.js` command.
 *
 * This will be done CICD in near future.
 */

const fs = require('fs');
let file = fs.readFileSync('openapi.json');
let spec = JSON.parse(file);

const paths = spec.paths;

// Destruct paths to an array
// Ex: [["/v1/assets", "get", {..details}]]
let pathsList = [];
for (const p1 in paths) {
  for (const p2 in paths[p1]) {
    pathsList.push([p1, p2, paths[p1][p2]]);
  }
}

// Filter ones with public tag
const filteredPaths = pathsList.filter(path => path[2].tags.includes('public'));

// Keep only one tag
const mappedTags = filteredPaths.map(([path, method, details]) => {
  // Use a tag other than public if found one
  const otherTags = details.tags.filter(tag => tag !== 'public');
  let selectedTag = otherTags.length === 0 ? 'public' : otherTags[0];
  return [path, method, { ...details, tags: [selectedTag] }];
});

// Re-construct open api object
const newObj = {};
for (let i = 0; i < mappedTags.length; i++) {
  const path = mappedTags[i][0];
  const method = mappedTags[i][1];
  const description = mappedTags[i][2];

  if (newObj[path] === undefined) {
    newObj[path] = {};
  }
  newObj[path][method] = description;
}
spec.paths = newObj;

let data = JSON.stringify(spec, null, 2);
fs.writeFileSync('open-api-processed.json', data);
