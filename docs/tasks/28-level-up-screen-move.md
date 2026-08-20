# Level Up: Make The Screen Move

## Goal

Make the level move sideways when the player walks right.

## What This Means

The Scratch Stage does not really move.

Instead, the `Player` stays near the middle of the screen, and the level sprites move left.

## Before You Start

Make a new scene for this Level Up.

1. Click the **Stage** thumbnail.
2. Click **Backdrops**.
3. Click **Choose a Backdrop**.
4. Click **Paint**.
5. Rename the new backdrop `Scrolling Level`.
6. Draw the sky and background.
7. Do not draw platforms on this backdrop.

For this Level Up, the platforms must be sprites so they can move.

1. Click **Choose a Sprite**.
2. Click **Paint**.
3. Draw one green rectangle platform.
4. Rename it `Platform 1`.
5. Right-click `Platform 1`.
6. Click **duplicate**.
7. Rename the copy `Platform 2`.
8. Right-click `Platform 2`.
9. Click **duplicate**.
10. Rename the copy `Platform 3`.
11. Put the three platforms across the new scene.

## Do This

1. Click **Variables**.
2. Click **Make a Variable**.
3. Name the variable `scroll x`.
4. Click **OK**.
5. In the sprite list below the Stage, click the `Player` sprite. (If you cannot remember where the sprite list is, go back to [Start Here: Where To Click Sprites](../index.md#where-to-click-sprites).)
6. Add `switch backdrop to Scrolling Level` under the green flag block.
7. Build the rest of this code.

![Scratch blocks for making the screen scroll sideways](../assets/scratchblocks/scroll-camera.png){ .scratch-image }

## Move The Level Sprites

Build this code on `Platform 1`.

1. In the sprite list below the Stage, click `Platform 1`. (If you cannot remember where the sprite list is, go back to [Start Here: Where To Click Sprites](../index.md#where-to-click-sprites).)
2. Build this code.

![Scratch blocks for moving a level sprite with scroll x](../assets/scratchblocks/scroll-level-sprite.png){ .scratch-image }

## Change The Number

The code image uses `0`.

For each sprite, change the `0` to the number below:

- `Platform 1`: use `0`
- `Platform 2`: use `240`
- `Platform 3`: use `480`
- Coin: use `300`
- Enemy: use `520`
- Flag: use `700`

Build the same code on `Platform 2`, `Platform 3`, `Coin`, `Enemy`, and `Flag`.

## Check

When the player walks right, the platforms, coins, enemy, and flag should move left.

The player should look like they are travelling through a longer level.
