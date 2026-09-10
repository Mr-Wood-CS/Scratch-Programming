# Jump With Space { .arcade-task }

## Goal

Make the player jump from the ground or a platform, once for each press of the space bar.

## Do This

1. Click the `Player` sprite.
2. Build the script below.
3. Keep the starting-position and movement scripts, plus the gravity script and all three custom blocks from the previous tasks. Do not add a separate collision loop.
4. Use `on ground` from **Add Platform Collision** to allow a jump only while standing on a platform or the ground. Set it to `0` immediately when jumping.
5. Press the green flag, then tap **space**.

![Scratch blocks for jumping with the space bar](../assets/scratchblocks/space-bar-jump.png){ .scratch-image }

## Check

- The player jumps when you press **space**.
- Holding space does not keep starting new jumps.
- Releasing space lets you press it again for another jump after landing.
- Press space repeatedly while in the air. It must not restart the jump.
- Jump underneath a platform. The player should hit its underside and fall back down.
- Land on a platform, release space, then press it again. The player should jump up from the platform without falling through it.
- The player falls back down and stops on a platform or at ground level.
