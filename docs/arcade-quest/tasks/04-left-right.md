# Move Left And Right { .arcade-task }

## Goal

Make the player move with the arrow keys and stop against the sides of platforms.

## Do This

1. In the sprite list below the Stage, click the `Player` sprite. (If you cannot remember where the sprite list is, go back to [Scratch Help: Where To Click Sprites](../scratch-help.md#where-to-click-sprites).)
2. Build this code. If you already have an arrow-key movement script, update it to match instead of adding another one.
3. Make sure `set rotation style` says **left-right**. This stops the player turning upside down.
4. In both `touching` blocks, choose your platform sprite. The image uses `Platforms`; choose `Platform` if that is what yours is called.
5. Put each `if touching Platforms` check inside its arrow-key `if`, immediately after `change x by`.
6. Press the green flag and test the left and right arrow keys.

![Scratch blocks for moving left and right and undoing a move when touching Platforms](../assets/scratchblocks/left-right-movement.png){ .scratch-image }

Moving right changes `x` by `6`. If that move makes the player touch a platform, changing `x` by `-6` undoes it. Moving left uses the opposite numbers: `-6`, then `6` to undo the move.

This stops the player entering a platform from the side. In Part 6, you will add vertical collision for landing on platforms and hitting their undersides. Without these sideways checks, the vertical collision code can push the player up onto a platform when they walk into its side.

## Check

- The player moves left and right and faces the direction it is moving.
- Place the player beside a platform at the same height, then hold the arrow key towards it. The player should stop at its side. Test both sides.
- After adding jumping in Part 6, check that you can still jump onto a platform from above, while walking into its side stops sideways movement.
