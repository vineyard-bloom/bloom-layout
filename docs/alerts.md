# Alerts

Alerts require specific markup to ensure that they are detected by screen readers and announced properly. Additionally, they tend need some animations as they enter and exit for good user experience. This component handles that for you.

Alert should be rendered once to the screen, ideally having its contents and closing functionality handled via Redux. All accessibility (aria, role, semantics) are handled for you.

For recommended usage, see [docs related to integrating with redux](https://github.com/vineyard-bloom/bloom-layout/blob/master/docs/alert-and-modal-with-redux.md).

The Alert does not time out by default, but is rendered statically. You will need to control any timeout behavior.

Styling of Alert is through the `.Alert` class. You can control its transition behavior through `.Alert.descend-entering`, `.Alert.descend-entered`, `.Alert.descend-exiting`, and `.Alert.descend-exiting`.

### Optional Props
- `currentAlert`:
    Object of type { message: string, style: one of 'warning', 'success', 'danger' } or null

- `hidden`:
    boolean showing or hiding the Alert, including its background. Ideally, it should detect whether your currentAlert variable has content.

- `closeAlert`:
    function that triggers the deletion of the Alert's `currentAlert`

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)
