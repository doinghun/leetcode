"use strict"

const fs = require("fs")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const filename = "README.md"

const question1 = () => {
  return new Promise((res, rej) => {
    rl.question(`Leetcode Question No.? `, ans => {
      fs.appendFile(filename, `\n|${ans}|`, err => {
        if (err) return console.log(err)
      })
      res()
    })
  })
}

const question2 = () => {
  return new Promise((res, rej) => {
    rl.question(`Leetcode Title? `, ans => {
      let temp = ans.replace(/\s+/g, "-").toLowerCase()
      let url = `https://leetcode.com/problems/${temp}/`
      fs.appendFile(filename, `[${ans}](${url})|[JavaScript]()|`, err => {
        if (err) return console.log(err)
      })
      res()
    })
  })
}

const question3 = () => {
  return new Promise((res, rej) => {
    rl.question(`Leetcode Difficulty [Easy/Medium/Hard]? `, ans => {
      let badge = ""

      if (ans == "Easy") {
        badge = "![Easy](https://img.shields.io/badge/-Easy-brightgreen)"
      } else if (ans == "Medium") {
        badge = "![Medium](https://img.shields.io/badge/-Medium-orange)"
      } else if (ans == "Hard") {
        badge = "![Hard](https://img.shields.io/badge/-Hard-red)"
      }

      fs.appendFile(filename, `${badge}|✔️|`, err => {
        if (err) return console.log(err)
      })
      res()
    })
  })
}

const question4 = () => {
  return new Promise((res, rej) => {
    rl.question(`Topic? `, ans => {
      fs.appendFile(filename, `${ans}|`, err => {
        if (err) return console.log(err)
      })
      res()
    })
  })
}

const compile = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  console.log("Successfully Added!")
  rl.close()
}

compile()
