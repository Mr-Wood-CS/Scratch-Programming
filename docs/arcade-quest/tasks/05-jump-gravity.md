# Add Gravity { .arcade-task }

## Goal

Use your custom blocks to make the player fall and land on platforms.

## Do This

1. Click the `Player` sprite.
2. Keep your starting-position and left-and-right movement scripts.
3. Check that you have built `collision`, `check stage edges`, and `move vertically` from the last three tasks.
4. Build this new script. Find `move vertically` in **My Blocks**.

![Scratch gravity loop calling move vertically](../assets/scratchblocks/collision-loop.png){ .scratch-image }

`change y speed by -1` makes the player fall. `move vertically` moves the player and uses your other blocks to check platforms and stage edges.

## Check

Press the green flag. Drag the player above a platform and release it. It should fall onto the platform and stop.

Try dropping the player where there is no platform. It should stop at ground level, `y: -130`.

Next: [Jump With Space](space-bar-jump.md).
