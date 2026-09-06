# Add More Than One Collectable { .arcade-task }

!!! warning "Only using one collectable?"
    ==You can skip this task if your game only has one collectable. Complete it only if you want to add more collectables.==

## Goal

Add more collectables by copying the completed collectable sprite, including its code and sound.

## Do This

Once the first collectable has its starting-position code, collection code, and sound, duplicate it to copy everything.

1. Complete [Collect Collectables](11-collect-coins.md) and [Add Collectable Sound](12-coin-sound.md) on the first `Collectable`. Test that collecting it adds exactly one point, hides it, and plays its sound before making any copies.
2. In the sprite list, right-click the `Collectable` sprite. On a tablet, press and hold it.
3. Choose **duplicate**.
4. Select the new copy and drag it above a different reachable platform.
5. Read the copy's **x** and **y** values below the Stage, then type those numbers into its `go to x: y:` block. Keep its copied collection code and sound.
6. Repeat **duplicate**, move, and update the coordinates for every extra collectable.

Each sprite needs different coordinates. Here are the starting blocks for three example collectables. Change the coordinates at the top of each existing script to give each collectable its own position. Keep the collection loop underneath; do not add another green-flag script:

![Scratch block stacks showing three different collectable starting positions](../assets/scratchblocks/three-coin-start-positions.png){ .scratch-image }

Use your own `x` and `y` numbers—the examples will not fit every level.

Each collectable must be a separate sprite. Do not paint several collectables in one costume or onto the backdrop: Scratch would treat them as one object.

You do not need to write new collection code for each copy. Every collectable runs its own copy of the same script: touching `Collectable2` hides only `Collectable2`, while the other collectables remain available to collect.

## Check

Every collectable should be a separate sprite. Each one should make a sound, add `1` to the score, disappear when collected, and reappear when the green flag is pressed.
