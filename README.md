# Bloom Layout
### Reusable presentational components in React

## Contents
- [Accordions](https://github.com/vineyard-bloom/bloom-layout#accordions)
- [Alerts](https://github.com/vineyard-bloom/bloom-layout#alerts)
- [Banner Alerts]()
- [Modals](https://github.com/vineyard-bloom/bloom-layout#modals)
- [Tables](https://github.com/vineyard-bloom/bloom-layout#tables)
- [Tooltips](https://github.com/vineyard-bloom/bloom-layout#tooltips)
- [Using Alert and Modal with Redux](https://github.com/vineyard-bloom/bloom-layout/blob/master/docs/alert-and-modal-with-redux.md)


## Usage

### Accordions
Accordions are great UX elements for hiding needed content when it's not relevant, but they can be difficult to build with accessibility and good CSS in mind. The `<Accordion />` component tries to solve this.

Accordions only need one property: an array of sections. Each section should be an object with a header, child (a React element of the contents inside that accordion), and a boolean isValid for styling that section of the accordion.

```
const sections = [
  {
    header: 'User Data',
    contents: <UserDataSection />,
    isValid: props.userValid
  },
  {
    header: 'Pet Data',
    contents: <PetDataSection />,
    isValid: props.user.pets && !!props.user.pets.length
  }
]

...

<Accordion className='special-class' sections={ sections } />
```

By default, `Accordion`s have index 0 open on mounting. If you want a different section set as the default, use the `defaultOpenSection`, which requires a number.

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)

### Alerts
Alert should be rendered once to the screen, ideally having its contents and closing functionality handled via redux. See [docs related to integrating with redux](https://github.com/vineyard-bloom/bloom-layout/blob/master/docs/alert-and-modal-with-redux.md).

Alerts require two props:
```
currentAlert:
Object of type { message: string, style: one of 'warning', 'success', 'danger' }

hidden:
boolean
```

Additionally, you can make the alert closable by passing in a
```
closeAlert: function
```

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)

### Banner Alerts
A full-width banner notification that must be closed manually. Required props are:
```
closeBanner: function

currentBanner: either a string or an element
```
Optionally, you can pass in a className to add to the BannerAlert.

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)

### Modals
Modal should be rendered once to the screen, ideally having its contents and closing functionality handled via redux. See [docs related to integrating with redux](https://github.com/vineyard-bloom/bloom-layout/blob/master/docs/alert-and-modal-with-redux.md). Every modal renders the same `x` button to close.

Modal requires three props to be defined:
```
closeModal: function

modalContents: a React Element to fill the modal
  * may be null
  * modal will be hidden if modalContents is null

modalTriggerId: a string that maps to an id of the button that opened the modal
  * must be defined if you have modalContents
  * used to refocus the document activeElement after closing the modal
  * if you triggered a modal programmatically, and no button triggered its opening, choose a focusable element in the content behind the modal
```

** All focusable elements inside the modal MUST have ids. There are several diffing event handlers that trap tab focus for accessibility, and it uses ids of those elements **

You shouldn't have more than one modal open at a time.

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)

### Tables
Required Props:
- `headers`:
   an array of objects that look like:
  ```
  {
    displayValue: string (optional),
    title: string,
    sortable: boolean,
    sortValue: string
  }
  ```
  This populates your header row and allows for sorting of the table based on that row. `sortValue` is passed into the `changeActiveSort` function. `displayValue` is only used if you want to sort that row by one field, but present another, like if you wanted to sort by `'created'` key, but you wanted to display `'formattedDate'` key.
- `query`:
  an object that initializes pagination, sorting, and sets up whether to use client or server-side querying. It looks like:
  ```
  {
    useServer: boolean,
    pagination: {
      limit: number,
      offset: number
    },
    sort: {
      activeField: string, (must match one of your header's `sortValue`s)
      reverse: boolean (for ascending/descending sort of the same field)
    }
  }
  ```

`<Table />` supports both server-side and client-side querying for sorting, filtering, and pagination. To use server-side querying, make sure your `query.useServer` is set to `true` and you pass in `requestData` (see optional below) as a prop.

Optional, but helpful props are:
- `data`:
  An array of objects representing your table data. Object keys should all match your headers' `sortValue`s. (Why is this optional? Because sometimes there is no data to show.)
- `linkFields`:
  An object that turns data cells into links. The keys must match header `sortValue`s. For example:
```
{ 'id': '/product/:id', 'name': '/organization/:name' }
```
  would make any names and ids link to '/organization/<NAME>' and '/product/<ID>' respectively.
- `loading`:
  A boolean that shows a spinner while data is loading.
- `requestData`:
  A function needed to trigger server-side querying. It will receive a an object like your `query` prop. 

** A note on Table css: By default, the table will flip the headers and data vertically with an x-axis scroll when viewed on mobile and smaller screens. **

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)

### Tooltips
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

