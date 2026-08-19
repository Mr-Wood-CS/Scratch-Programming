# Lesson 1: Hero Controls

## Mission

Make a hero who can run left, run right, jump, and land on platforms. This is the part that makes the game feel like an arcade platformer.

<div class="mission-card">
Goal: by the end of this lesson, your player should move smoothly and jump only when standing on the ground.
</div>

## Build Tasks

1. Choose or draw a hero sprite. Rename it `Player`.
2. Draw a backdrop with a clear ground color. Use one solid color for platforms, such as green.
3. Create a variable called `y speed` for the player only.
4. Add left and right movement.
5. Add gravity and jumping.
6. Test every platform by jumping onto it and trying to walk off it.

## Example Ideas: Player Sprite

Your hero should be simple enough to redraw in Scratch. Good choices have a clear shape, a face or feature that shows which way they are facing, and one or two bold colours.

![Four example platform game hero sprite ideas: adventurer, star explorer, robot, and blob](../assets/examples/hero-sprite-ideas.png){ .example-image }

Try one of these ideas, or invent your own:

- A tiny runner with a bright hat.
- A star explorer with boots.
- A friendly robot with glowing eyes.
- A bouncing blob with a simple face.

## Example Ideas: Platform Background

The backdrop should make the game easy to read. Use one clear colour for ground and platforms so your collision code can check that colour.

![Example Scratch platform game background with green ground, platforms, coins, and finish flag](../assets/examples/platform-background-example.png){ .example-image }

Helpful backdrop ingredients:

- Flat ground along the bottom.
- Floating platforms with the same top colour.
- Coins above safe jumps.
- A finish flag at the far right.
- Empty sky space so sprites are easy to see.

## Code Image: Run Left And Right

![Scratch blocks for moving the player left and right](../assets/scratchblocks/player-move.png){ .scratch-image }

## Code Image: Jump And Gravity

![Scratch blocks for jump and gravity](../assets/scratchblocks/player-jump.png){ .scratch-image }

## Checkpoint

<div class="checkpoint">
Press the green flag. Your hero should run both ways, face the correct direction, fall down, and jump from the ground.
</div>

## Level-Up Ideas

- Change the speed from `6` to `4` or `8`. Which feels best?
- Add a running costume when an arrow key is pressed.
- Add a jump sound when the space key starts a jump.

## Boss Key

<div class="boss-key">
If your hero gets stuck inside the ground, check that the platform color in your code exactly matches the platform color on the backdrop.
</div>
