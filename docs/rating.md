# Rating

A visual representation of rating x out of y possible, like 3 out of 5 stars. Renders an `.is-full` or `.is-half` class on the shapes that are full or half-full, for easier styling.

Inline-style: 
![Star Rating Example](https://github.com/vineyard-bloom/bloom-layout/blob/master/docs/star-rating.png)

## Example Usage:
```
// 4 out of 10 triangles:

import { Rating } from 'bloom-layout'
import triangle from 'images/triangle.svg'

...

  <Rating
    currentRating={4}
    shapeSVG={triangle}
    total={10}
  />
```

## Required Props:
- `currentRating`:
  The current rating to fill out of the total. Must be a number, ideally in whole or half numbers (i.e. 4 or 2.5).

## Optional Props:
- `shapeSVG`:
  An svg image to represent the rating. Must be an outline of the shape that is fillable. By default, it uses a star shape.
- `total`:
  The highest possible rating achievable. Must be a whole number. Defaults to 5.
