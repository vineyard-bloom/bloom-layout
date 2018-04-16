# Accordions

### Usage & Example
Accordions are great UX elements for hiding needed content when it's not relevant, but they can be difficult to build with accessibility and good CSS in mind. The `<Accordion />` component tries to solve this.

Accordions only need one property: an array of sections. Each section should be an object with a header, child (a React element of the contents inside that accordion), and a boolean isValid for styling that section of the accordion.

This is the only way to structure the Accordion.

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

### Optional Props
- `className`:
    A string to style the outermost `<div>` of the Accordion

- `defaultOpenSection`:
    A number for which index in the Accordion's sections that should be open first. By default, this is 0. If you want them all closed on initialization, use -1.


[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)
