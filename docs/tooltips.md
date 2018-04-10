# Tooltips

Tooltip is hidden by default and opens on click. It can be used like:

```
<Tooltip contents='Tooltip contents' header='Example header' direction='left' id='auth-header-tooltip' />
```

Where `direction` is the side of the trigger button that the tooltip renders on.

Optional props:
- `direction`:
  A string indicating which side of the trigger button the tooltip renders on. Must be: `right`, `left`, or `top`.
- `header`:
  A string or element.