# Banner Alerts

A full-width banner notification that must be closed manually. All accessibility (announcing, etc.) is handled for you.

By default, the BannerAlert fills the width of its parent container, plus a small margin. These styles can be tweaked via `.BannerAlert` class.

### Required Props:
- `closeBanner`:
    function that deletes the `currentBanner` variable

- `currentBanner`:
    either a string or an element to fill the banner

### Optional Props:
- `className`:
    a string to style the outermost `<div>` of the banner

### Example:
```
import { BannerAlert } from 'bloom-layout'

...

  return (
    ...

    <BannerAlert
      closeBanner={props.closeBanner}
      currentBanner={props.activeBanner}
    />

    ...
  )

```

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)
