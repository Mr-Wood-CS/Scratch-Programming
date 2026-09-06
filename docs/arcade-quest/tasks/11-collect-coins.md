# Collect The First Collectable { .arcade-task }

## Goal

Make the first collectable add one point and disappear when it touches the player.

## Do This

Make sure you have completed [Add The Scoring](08-score-variable.md) before building the collection code.

1. Click the first `Collectable` sprite, then **Code**.

    ![Where to select the Collectable sprite](<../assets/collectable location.png>){ .example-image }

2. Attach a `forever` block below your previous code.
3. Inside `forever`, add `if then`. Put the **Sensing** `touching` block into its condition and choose `Player` from the dropdown.
4. Inside the `if`, add **Variables** `change score by 1`, then **Looks** `hide`, then **Control** `stop this script`.

Your one collectable script should now look like this. Keep your own `x` and `y` numbers.

![Scratch blocks for the collectable's position, touching check, score and hiding](../assets/scratchblocks/coin-collect.png){ .scratch-image }

`change score by 1` adds to the shared total. `hide` hides this collectable. `stop this script` stops it adding more points until the game restarts.

## Check

1. Press the green flag. The score should be `0` and the collectable should appear in its saved place.
2. Drag `Player` onto the collectable and release it. You will add keyboard controls in Part 5.
3. Check that the collectable disappears and the score becomes `1`, then stays at `1`.
4. Press the green flag again. The collectable should reappear and the score should reset.

Keep just this first collectable. Add its sound in the next task before duplicating it.
