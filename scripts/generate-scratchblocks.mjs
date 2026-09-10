import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { JSDOM } from "jsdom"
import sharp from "sharp"
import scratchblocksFactory from "../node_modules/scratchblocks/index.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, "..")
const outputDir = path.join(projectRoot, "docs", "arcade-quest", "assets", "scratchblocks")

const blocks = [
  {
    file: "platforms-start-position",
    title: "Keep the platforms in their chosen position",
    script: `when green flag clicked
go to x: (0) y: (0)
show`,
  },
  {
    file: "collision-definition",
    title: "Collision definition",
    script: `define collision
if <touching [platform v] ?> then
if <(y speed) < (0)> then
repeat until <not <touching [platform v] ?>>
change y by (1)
end
set [on ground v] to (1)
else
repeat until <not <touching [platform v] ?>>
change y by (-1)
end
end
set [y speed v] to (0)
end`,
  },
  {
    file: "stage-edges-definition",
    title: "Keep the player inside the stage",
    script: `define check stage edges
if <(y position) > (170)> then
set y to (170)
set [y speed v] to (0)
end
if <(y position) < (-130)> then
set y to (-130)
set [y speed v] to (0)
set [on ground v] to (1)
end`,
  },
  {
    file: "move-vertically-definition",
    title: "Move vertically one pixel at a time",
    script: `define move vertically
set [on ground v] to (0)
repeat ([abs v] of (y speed))
if <(y speed) > (0)> then
change y by (1)
collision :: custom
check stage edges :: custom
else
if <(y speed) < (0)> then
change y by (-1)
collision :: custom
check stage edges :: custom
end
end
end`,
  },
  {
    file: "collision-loop",
    title: "Gravity with pixel-by-pixel collision",
    script: `when green flag clicked
set [y speed v] to (0)
set [on ground v] to (0)
forever
change [y speed v] by (-1)
move vertically :: custom
end`,
  },
  {
    file: "left-right-movement",
    title: "Left and right movement",
    script: `when green flag clicked
set rotation style [left-right v]
forever
if <key [right arrow v] pressed?> then
change x by (6)
point in direction (90)
end
if <key [left arrow v] pressed?> then
change x by (-6)
point in direction (-90)
end
end`,
  },
  {
    file: "start-and-bottom-boundary",
    title: "Starting position and bottom boundary",
    script: `when green flag clicked
go to x: (-180) y: (-130)
point in direction (90)
forever
if <(y position) < (-130)> then
set y to (-130)
set [y speed v] to (0)
end
end`,
  },
  {
    file: "start-position-only",
    title: "Starting position after moving the ground check into gravity",
    script: `when green flag clicked
go to x: (-180) y: (-130)
point in direction (90)`,
  },
  {
    file: "gravity-and-top-boundary",
    title: "Gravity with top and bottom boundaries",
    script: `when green flag clicked
forever
change [y speed v] by (-1)
change y by (y speed)
if <(y position) > (170)> then
set y to (170)
set [y speed v] to (0)
end
if <(y position) < (-130)> then
set y to (-130)
set [y speed v] to (0)
end
end`,
  },
  {
    file: "space-bar-jump",
    title: "Space bar jump",
    script: `when green flag clicked
forever
if <key [space v] pressed?> then
if <(on ground) = (1)> then
set [on ground v] to (0)
set [y speed v] to (14)
end
end
wait until <not <key [space v] pressed?>>
end`,
  },
  {
    file: "variable-example",
    title: "Example variable blocks",
    script: `set [my variable v] to [0]
change [my variable v] by (1)
(my variable)`,
  },
  {
    file: "player-move",
    title: "Player movement",
    script: `when green flag clicked
set rotation style [left-right v]
forever
if <key [right arrow v] pressed?> then
change x by (6)
point in direction (90)
end
if <key [left arrow v] pressed?> then
change x by (-6)
point in direction (-90)
end
end`,
  },
  {
    file: "player-jump",
    title: "Jump and gravity",
    script: `when green flag clicked
go to x: (-180) y: (0)
set [y speed v] to [0]
forever
change y by (y speed)
change [y speed v] by (-1)
if <<touching [Platforms v] ?> and <(y speed) < [0]>> then
repeat until <not <touching [Platforms v] ?>>
change y by (1)
end
set [y speed v] to [0]
if <key [space v] pressed?> then
set [y speed v] to [14]
end
end
end`,
  },
  {
    file: "score-start",
    title: "Reset score at the start",
    script: `when green flag clicked
set [score v] to [0]`,
  },
  {
    file: "coin-collect",
    title: "Position and collect the first collectable",
    script: `when green flag clicked
go to x: (-150) y: (-80)
show
forever
if <touching [Player v] ?> then
change [score v] by (1)
hide
stop [this script v]
end
end`,
  },
  {
    file: "coin-complete",
    title: "Complete first collectable with position, collection and sound",
    script: `when green flag clicked
go to x: (-150) y: (-80)
show
forever
if <touching [Player v] ?> then
change [score v] by (1)
hide
play sound [collectable v] until done
stop [this script v]
end
end`,
  },
  {
    file: "coin-start-position",
    title: "Set a collectable's starting position",
    script: `when green flag clicked
go to x: (-150) y: (-80)
show`,
  },
  {
    file: "three-coin-start-positions",
    title: "Three different collectable starting positions",
    script: `when green flag clicked
go to x: (-150) y: (-80)
show

when green flag clicked
go to x: (0) y: (20)
show

when green flag clicked
go to x: (145) y: (95)
show`,
  },
  {
    file: "enemy-patrol",
    title: "Enemy patrol",
    script: `when green flag clicked
forever
move (3) steps
if on edge, bounce
if <touching [Player v] ?> then
broadcast [ouch v]
wait (1) seconds
end
end`,
  },
  {
    file: "lose-life",
    title: "Lose a life",
    script: `when I receive [ouch v]
change [lives v] by (-1)
go to x: (-180) y: (-80)
if <(lives) = [0]> then
broadcast [game over v]
end`,
  },
  {
    file: "timer-and-finish",
    title: "Timer and finish flag",
    script: `when green flag clicked
set [time v] to [60]
forever
wait (1) seconds
change [time v] by (-1)
if <(time) = [0]> then
broadcast [game over v]
end
if <touching [Flag v] ?> then
broadcast [you win v]
end
end`,
  },
  {
    file: "scroll-camera",
    title: "Simple side-scrolling camera",
    script: `when green flag clicked
switch backdrop to [Scrolling Level v]
set [scroll x v] to [0]
forever
if <(x position) > [120]> then
change [scroll x v] by (-6)
set x to (120)
end
if <(x position) < [-120]> then
change [scroll x v] by (6)
set x to (-120)
end
end`,
  },
  {
    file: "scroll-level-sprite",
    title: "Move a level sprite with scroll x",
    script: `when green flag clicked
forever
set x to ((0) - (scroll x))
end`,
  },
]

const dom = new JSDOM("<!doctype html><html><head></head><body></body></html>")

dom.window.HTMLCanvasElement.prototype.getContext = () => ({
  font: "",
  measureText(text) {
    return { width: String(text).length * 7.2 }
  },
})

const scratchblocks = scratchblocksFactory(dom.window)
scratchblocks.appendStyles()
const embeddedStyles = [...dom.window.document.head.querySelectorAll("style")]
  .map(style => style.textContent)
  .join("\n")

await fs.mkdir(outputDir, { recursive: true })

for (const block of blocks) {
  const doc = scratchblocks.parse(block.script, { languages: ["en"] })
  const svg = scratchblocks.render(doc, { style: "scratch3", scale: 1 })
  svg.setAttribute("role", "img")
  svg.setAttribute("aria-label", block.title)
  const style = dom.window.document.createElementNS("http://www.w3.org/2000/svg", "style")
  style.textContent = embeddedStyles
  svg.insertBefore(style, svg.firstChild)
  const scratchUrl = `https://scratchblocks.github.io/#?style=scratch3&script=${encodeURIComponent(block.script)}`
  const content = `<!-- Generated by scripts/generate-scratchblocks.mjs
Source: ${scratchUrl}
-->
${svg.outerHTML}
`
  await sharp(Buffer.from(content)).png().toFile(path.join(outputDir, `${block.file}.png`))
}

console.log(`Generated ${blocks.length} Scratch block PNG images in ${path.relative(projectRoot, outputDir)}`)
