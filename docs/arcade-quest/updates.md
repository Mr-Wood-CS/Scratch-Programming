# Project Updates

!!! info "Arcade Quest updates"
    <div class="arcade-updates" markdown="1">

    <span class="arcade-update-date">28 August 2026</span>

    Floating platforms are now made as a sprite instead of being painted on the backdrop.

    - The ground is part of the backdrop and the boundary script keeps the player at ground level.
    - The floating platforms belong in one `Platforms` sprite.
    - The player now lands by detecting the `Platforms` sprite while falling.
    - Platform colour sensing is no longer needed.

    If you have already drawn floating platforms on the backdrop, follow **Create Platforms** in Part 1 to move them into a `Platforms` sprite, then replace the player code using **Add Platform Collision**, **Check Stage Edges**, **Move Vertically**, **Add Gravity**, and **Jump With Space**.

    ---

    <span class="arcade-update-date">27 August 2026</span>

    The instructions and code pictures have been improved after pupil testing.

    - The player now starts safely on screen.
    - Left and right movement now keeps the player upright.
    - Jumping and gravity have been corrected so the player falls back down.
    - Collectables must be separate sprites, not drawings on the backdrop.
    - Completed collectable sprites can be duplicated to make several working collectables.

    If you have already started Arcade Quest, check your project against **Create Collectables**, **Set Your Player’s Start Position**, **Move Left And Right**, the **Jump And Fall** pages, **Collect The First Collectable**, and **Add Collectable Sound** before continuing.

    </div>

