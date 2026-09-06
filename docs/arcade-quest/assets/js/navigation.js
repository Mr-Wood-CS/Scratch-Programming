// Expand only Help And Reference whenever a page is loaded.
function expandArcadeReference() {
  document.querySelectorAll('.md-nav__item--nested').forEach((item) => {
    const label = item.querySelector(':scope > label.md-nav__link');
    if (label?.textContent.trim() !== 'Help And Reference') return;

    const toggle = item.querySelector(':scope > input.md-nav__toggle');
    const navigation = item.querySelector(':scope > nav.md-nav');
    if (toggle) toggle.checked = true;
    navigation?.setAttribute('aria-expanded', 'true');
  });
}

if (typeof document$ !== 'undefined') {
  document$.subscribe(expandArcadeReference);
} else if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', expandArcadeReference);
} else {
  expandArcadeReference();
}
