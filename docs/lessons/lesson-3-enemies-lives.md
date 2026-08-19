# Lesson 3: Enemies And Lives

## Mission

Add enemies that patrol platforms and take away lives when the player touches them. The level now has risk, which makes every jump matter.

<div class="mission-card">
Goal: by the end of this lesson, your game should have patrolling enemies, a lives counter, and a game over broadcast.
</div>

## Build Tasks

1. Add an enemy sprite. Rename it `Enemy`.
2. Create a variable called `lives` for all sprites. Use the [variable instructions from Lesson 1](lesson-1-hero-controls.md#how-to-create-a-variable) if you need a reminder.
3. Set `lives` to `3` when the green flag is clicked.
4. Make the enemy patrol using `move` and `if on edge, bounce`.

    ![Scratch blocks for enemy patrol](../assets/scratchblocks/enemy-patrol.png){ .scratch-image }

5. Broadcast `ouch` when the enemy touches the player.
6. Make the player lose a life and return to the start.

    ![Scratch blocks for losing a life](../assets/scratchblocks/lose-life.png){ .scratch-image }

7. Broadcast `game over` when lives reaches `0`.

## Checkpoint

<div class="checkpoint">
Touch the enemy on purpose. You should lose one life, return to the start, and not instantly lose every life at once.
</div>

## Independent Challenge

Create two enemy types:

- A slow enemy that patrols a small platform.
- A fast enemy that guards the final stretch.

Give each enemy a different costume or color so players can read the danger quickly.

## Boss Key

<div class="boss-key">
If touching one enemy removes several lives, add a short wait after broadcasting `ouch`, or make the player briefly invincible with a variable called `safe`.
</div>
