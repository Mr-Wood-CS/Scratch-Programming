# Add Platform Collision { .arcade-task }

## Goal

Stop the player falling through platforms.

## Do This

Select the `Player` sprite, then follow these steps.

1. Click **My Blocks**.
2. Click **Make a Block**.
3. Name it `collision`.
4. Tick **Run without screen refresh**.
5. Click **OK**.
6. Put this code under `define collision`.

In each `touching` block, choose the sprite containing your platforms.

![Scratch blocks defining platform collision](../assets/scratchblocks/collision-definition.png){ .scratch-image }

Now run the collision block continuously:

![Scratch blocks running collision in a loop](../assets/scratchblocks/collision-loop.png){ .scratch-image }

## Check

Press the green flag. Drag the player just above a platform and release it. It should fall onto the platform and stop.
