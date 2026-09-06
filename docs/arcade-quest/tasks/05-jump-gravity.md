# Add Gravity { .arcade-task }

## Goal

Make the player fall and stay between the top and bottom of the Stage.

## Do This

1. Click the `Player` sprite.
2. Keep the starting-position script from [Set Your Player's Start Position](set-start-position.md) on the sprite.
3. Build the script below, with both boundary checks inside the same `forever` loop.

![Scratch blocks for gravity with the top and bottom boundary checks in one loop](../assets/scratchblocks/gravity-and-top-boundary.png){ .scratch-image }

## Check

Press the green flag. Drag the player above ground level and release it. It should fall and stop at `y: -130`.

You will add platform collision and jumping in the next tasks.
