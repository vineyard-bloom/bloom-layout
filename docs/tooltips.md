# Tooltips

Tooltip is a fully accessible and responsive tip. The aria and role markup is handled for you, and any click off / focus off behavior is also handled for you.

By default, the Tooltip's content is hidden and opens on click on the question mark button. It can be used like:

```
<Tooltip contents='Tooltip contents' header='Example header' direction='left' id='auth-header-tooltip' />
```

Where `direction` is the side of the trigger button that the tooltip renders on. The options are left, right, and top, but you can create custom styles for other directions.

Tooltip renders its arrow using the `::before` and `::after` pseudo-selectors in CSS. You can customize its styles via `.Tooltip-contents::before` and `.Tooltip-contents::after`.

The circle with question-mark trigger button is fully styled in CSS, including the question mark inside. You can restyle this via `.Tooltip-icon`.

### Required Props:
- `contents`:
    A string or element that fills the main area of the tooltip.

- `id`:
    A unique string to give the tooltip an ID. Allows for the tooltip to detect click offs properly.

### Optional Props:
- `direction`:
  A string indicating which side of the trigger button the tooltip renders on. Must be: `right`, `left`, or `top`.

- `header`:
  A string or element.

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)
