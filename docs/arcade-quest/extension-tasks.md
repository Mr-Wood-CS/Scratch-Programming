# Extension Tasks { .arcade-task }

## Goal

Choose a challenge and make your game more interesting to play. These are optional tasks, so you do not need to complete every one.

## Before You Start

1. Save a copy of your working project called `Arcade Quest Extensions`.
2. Choose one challenge. Read its goal and checks before changing your code.
3. Build and test one change at a time. Open the hint if you need help.

You can start these challenges after **Part 8: Finish The Game**. Scrolling is optional. If you have completed Part 9, give any new level sprites the same scrolling behaviour as your existing collectables.

## 1. Add A Bonus Collectable

**Level: Getting started**

### Your Task

Add a special collectable worth **5 points**. Make it look different from the ordinary collectables and place it somewhere harder to reach.

??? tip "Need a hint?"

    Duplicate a working `Collectable` sprite and rename it `Bonus`. Change its costume and saved starting position. In its collection script, change the points added to `score` from `1` to `5`.

    Keep the existing `hide` and `stop this script` blocks so the bonus can only be collected once per game. Keep the score reset on the Stage.

### Check

- Ordinary collectables still add 1 point each.
- Collecting the bonus adds exactly 5 points, plays its sound, and hides it.
- Staying in the same spot does not keep adding points.
- Restarting brings the bonus back and resets the score to 0.

## 2. Animate Your Player

**Level: Getting started**

### Your Task

Give `Player` at least two walking costumes. Animate the player while moving and make them face the direction they are travelling.

??? tip "Need a hint?"

    Duplicate the player's costume and change the position of the arms or legs. Keep both costumes the same size, with their feet and costume centres lined up.

    Use `set rotation style left-right`. Point in direction `90` when moving right and `-90` when moving left.

    Use a separate animation loop to check whether an arrow key is pressed. Switch costumes with a short wait between changes, then return to a standing costume when neither key is pressed. Keep animation waits out of your movement and gravity scripts.

### Check

- The player faces left and right correctly without turning upside down.
- Walking costumes change while moving and stop changing when standing still.
- Jumping and landing still work, including near platform edges.
- In a scrolling level, animation still works while the scenery moves.

## 3. Add A Time Pickup

**Level: Building confidence**

### Your Task

Create a clock collectable that gives the player **10 extra seconds**, once per game.

??? tip "Need a hint?"

    Duplicate a working collectable, rename it `Time Pickup`, and give it a clock costume. Replace its score-changing block with `change time by 10`. Use the existing shared `time` variable.

    Keep its starting position, `show`, touching check, `hide`, sound, and `stop this script`. The original countdown script should keep running; the clock does not need another countdown loop.

### Check

- The timer gains 10 seconds when the clock is collected. If a countdown tick happens at the same moment, the displayed increase may be 9.
- The score does not change when collecting the clock.
- The clock cannot give more time until the game restarts.
- The timer continues counting down, and running out of time still ends the game.

## 4. Unlock The Finish Flag

**Level: Building confidence**

### Your Task

Make the player find a key before they can win at the flag. Give the player a clear message explaining what they need to do.

??? tip "Need a hint?"

    Create a `Key` sprite and a variable called `has key` **for all sprites**. Set `has key` to `0` at the start of each game. When the player collects the key, set it to `1` and hide the key.

    Edit the existing flag-winning check so it requires both `touching Flag` and `has key = 1`. Use the green `and` operator to combine the conditions. Replace the old check rather than leaving another script that still allows an immediate win.

    Make the key show again when the green flag is clicked. Add instructions to the backdrop or use a speech bubble at the locked flag.

### Check

- Touching the flag without the key does not win the game.
- Collecting the key alone does not win the game.
- Touching the flag after collecting the key wins the game.
- Restarting brings the key back and locks the flag again.

## 5. Add A Checkpoint

**Level: Stretch yourself**

### Your Task

Add a checkpoint halfway through the level. After reaching it, the player should return there when they lose a life.

??? tip "Need a hint?"

    Start with a level that does not scroll. Create `respawn x` and `respawn y` variables for the player. At the start of a game, set them to the player's original starting coordinates.

    Add a `Checkpoint` sprite. In a player script, detect touching it and save a safe standing position in the two variables. Change the checkpoint's appearance so the player knows it is active.

    In the existing `when I receive ouch` script, replace the fixed return position with the saved coordinates. Keep the life deduction and reset `y speed` to `0`. Choose a respawn position away from the enemy.

    For a scrolling level, also save and restore `scroll x`. The checkpoint must represent the same place in the level after respawning, even if the camera has moved. Test the simpler version first.

### Check

- Before reaching the checkpoint, losing a life returns the player to the original start.
- After reaching it, losing a life returns the player safely to the checkpoint.
- Each hit still costs one life, and reaching 0 lives still ends the game.
- Restarting clears the checkpoint and restores the original starting position.

## 6. Choose A Difficulty

**Level: Stretch yourself**

### Your Task

Let the player choose **Easy** or **Hard** before the game begins. Easy should give more time and lives than Hard.

??? tip "Need a hint?"

    Use `ask [Choose Easy or Hard] and wait` on the Stage. Use an `if else` block and the `answer` reporter to choose starting values. For example, Easy could give 5 lives and 90 seconds; Hard could give 3 lives and 45 seconds. Tell the player what happens if they enter another answer, such as using Easy by default.

    Create a `start game` broadcast. Set the chosen lives and time first, then broadcast `start game`.

    Move gameplay scripts that currently begin on the green flag to `when I receive start game` so movement, enemies, collection, and the countdown wait for the choice. Keep the setup and question on the green flag. Remove or change old resets that would overwrite the chosen lives and time.

### Check

- The player cannot move, collect items, or lose lives while choosing.
- The countdown starts only after the choice is made.
- Easy and Hard use the intended starting values.
- An unexpected answer still starts a playable game.
- Restarting lets the player choose again and resets the whole game.

## Share And Evaluate

Ask a partner to play without explaining your new feature first.

1. Can they work out what the feature does from the game itself?
2. Does your game still let them move, jump, collect items, lose lives, win, and lose?
3. What did you change after watching them play?

Save your finished project. Be ready to show the blocks you changed, explain how they work, and describe one bug you found and fixed.
