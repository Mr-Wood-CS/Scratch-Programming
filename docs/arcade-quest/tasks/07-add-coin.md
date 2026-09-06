# Add A Collectable { .arcade-task }

## Goal

Create a separate collectable sprite for the player to grab.

## Watch First

Watch the sprite-making video in [Draw Your Player](01-draw-hero.md#watch-first). Then come back to this task.

## Do This

1. Make sure you are looking at the sprite list, not painting the backdrop.
2. Click **Choose a Sprite** below the Stage.
3. Click **Paint**.
4. Draw a small coin, gem, star, or piece of fruit.
5. Rename the new sprite `Collectable`.
6. Put it above a platform.

!!! warning "The collectable must be a sprite"
    Do not paint the collectable onto the backdrop. Backdrop drawings cannot detect the `Player`, hide, play their own sound, or increase the score.

## Check

Your sprite list should contain separate `Player` and `Collectable` sprites.
