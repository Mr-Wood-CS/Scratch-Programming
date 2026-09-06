# Game Over { .arcade-task }

## Goal

End the game when the player has no lives left.

## Do This

1. Look at the code from Lose A Life.
2. Find the `if lives = 0 then` block.
3. Make sure it broadcasts `game over`.
4. Add `when I receive game over` to enemies and collectables.
5. Add `hide` under that message if you want them to disappear.

## Check

When `lives` reaches `0`, the game should clearly stop or show that it is over.
