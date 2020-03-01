const fs = require("fs")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const filename = "README.md"

rl.question(`Leetcode Question No.? `, num => {
  rl.question(`Leetcode Title? `, title => {
    let temp = title.replace(/\s+/g, "-").toLowerCase()
    let url = `https://leetcode.com/problems/${temp}/`
    rl.question(`Leetcode Difficulty [Easy/Medium/Hard]? `, difficulty => {
      let badge = ""
      if (difficulty == "Easy") {
        badge = "![Easy](https://img.shields.io/badge/-Easy-brightgreen)"
      } else if (difficulty == "Medium") {
        badge = "![Medium](https://img.shields.io/badge/-Medium-orange)"
      } else if (difficulty == "Hard") {
        badge = "![Hard](https://img.shields.io/badge/-Hard-red)"
      }
      rl.question(`Topic? `, topic => {
        let newPath = topic.replace(/ /g, "%20")
        let newFile = `${num}_${temp}.md`
        fs.appendFile(
          filename,
          `\n|${num}|[${title}](${url})|[JavaScript](./${newPath}/${newFile})|${badge}|✔️|${topic}|`,
          err => {
            if (err) return console.log(err)
            console.log("Successfully Added!")
          }
        )
        rl.close()
      })
    })
  })
})
