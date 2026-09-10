# Add Platform Collision { .arcade-task }

## Goal

Stop the player falling through platforms.

## Do This

Select the `Player` sprite. Create a variable named `on ground` **for this sprite only**. Use `1` for standing on a platform or the ground, and `0` for being in the air.

Then follow these steps.

1. Click **My Blocks**.
2. Click **Make a Block**.
3. Name it `collision`.
4. Tick **Run without screen refresh**.
5. Click **OK**.
6. Put this code under `define collision`.

In each `touching` block, choose the sprite containing your platforms.

![Scratch blocks defining platform collision](../assets/scratchblocks/collision-definition.png){ .scratch-image }

## Check

Your `collision` definition should match the picture. Check that each `touching` block uses your platform sprite.

We will use this block in **Move Vertically**, then run it when we build **Add Gravity**.

Next: [Check Stage Edges](check-stage-edges.md).
