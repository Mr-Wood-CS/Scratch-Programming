# Scratch Arcade Quest

Build a bright, fast little Scratch platform game over four lessons. The style is inspired by classic 16-bit arcade platformers: a hero runs, jumps, grabs coins, dodges enemies, and reaches a flag at the end of the level.

<div class="arcade-brief">
Each lesson is designed for independent work. Start at Lesson 1 and continue to work through the lessons.
</div>

!!! info "Arcade Quest updates"
    <div class="arcade-updates" markdown="1">

    <span class="arcade-update-date">28 August 2026</span>

    Platforms are now made as a sprite instead of being painted on the backdrop.

    - The ground and floating platforms belong in one `Platforms` sprite.
    - The player now lands by detecting the `Platforms` sprite while falling.
    - Platform colour sensing is no longer needed.

    If you have already drawn platforms on the backdrop, follow **Task 2** to move them into a `Platforms` sprite, then replace the player code using **Task 5**.

    ---

    <span class="arcade-update-date">27 August 2026</span>

    The instructions and code pictures have been improved after pupil testing.

    - The player now starts safely on screen.
    - Left and right movement now keeps the player upright.
    - Jumping and gravity have been corrected so the player falls back down.
    - Coins must be separate sprites, not drawings on the backdrop.
    - Completed coin sprites can be duplicated to make several working collectables.

    If you have already started Arcade Quest, check your project against **Tasks 4, 5, and 7–12** before continuing.

    </div>

## What You Will Make

By the end, your game will include:

- A controllable hero sprite.
- Platforms and jump physics.
- Coins, score, and sound effects.
- Enemies, lives, and a game over moment.
- A finish flag, timer, and win screen.

## Level 3 Learning Grid

Arcade Quest helps you work towards the following **Curriculum for Excellence Computing Science Level 3** standards.

| Experience and Outcome | Level 3 benchmark | What you will do in Arcade Quest | Evidence of success |
| --- | --- | --- | --- |
| **TCH 3-13a** — I can describe different fundamental information processes and how they communicate and can identify their use in solving different problems. | Explains the difference between parallel processes and those that communicate with each other. | Run scripts for the player, coins, enemy, timer, flag, and Stage at the same time. Use broadcasts such as `ouch`, `game over`, and `you win` so these processes communicate. | You can explain which scripts run independently and how a broadcast changes what another sprite or the Stage does. |
| **TCH 3-14a** — I understand language constructs for representing structured information. | Reads and explains code extracts including those with variables and data structures. | Read, build, and test Scratch code that uses the variables `y speed`, `score`, `lives`, and `time`, together with events, loops, selection, operators, sensing, and broadcasts. | You can trace a script and explain how its blocks and variables control movement, scoring, lives, the timer, and game states. |
| **TCH 3-15a** — I can select appropriate development tools to design, build, evaluate and refine computing solutions based on requirements. | Designs and builds a program using a visual language combining constructs and using multiple variables. | Use Scratch to design and build a platform game that combines movement, gravity, collision detection, collection, enemy behaviour, scoring, lives, timing, and win/lose conditions. Test each feature and correct problems before adding the next one. | Your finished game meets the project requirements, uses several programming constructs and multiple variables, and behaves correctly when tested. |

!!! note "Assessment note"
    Completing the project can provide evidence towards these benchmarks. You should also be able to explain your code, demonstrate that it meets the requirements, and describe improvements made after testing.

## What You Need

- Scratch open in the desktop app.
- A new project named `Arcade Quest`.
- A hero sprite, a platforms sprite, a coin sprite, an enemy sprite, and a flag sprite.
- A simple backdrop for the sky and scenery.

## How To Use The Code Images

Scratch code examples are shown as block images. Copy the blocks into Scratch one at a time.

## Where To Click Sprites

When a task says **In the sprite list below the Stage**, use the area in the red box.

![Scratch editor with the sprite list below the Stage highlighted in red](assets/examples/scratch-sprite-list-area.png){ .example-image }

<p class="image-credit">Screenshot adapted from Wikimedia Commons, CC BY-SA 2.0.</p>

## Start

[Start Lesson 1, Task 1: Draw Your Hero](tasks/01-draw-hero.md)
