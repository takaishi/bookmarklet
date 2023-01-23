import * as fs from "fs"

const result = {
  bookmarklets: [],
}

fs.readdir("./dist", (err, files) => {
  for (const file of files) {
    const text = fs.readFileSync(`./dist/${file}`)
    const bookmarklet = {
      url: text.toString(),
      title: file,
    }
    // console.log(bookmarklet)
    result.bookmarklets.push(bookmarklet)
  }
  console.log(result)
  fs.writeFileSync("./tmp/bookmarklets.json", JSON.stringify(result))
})
