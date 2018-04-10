# Alerts
Alert should be rendered once to the screen, ideally having its contents and closing functionality handled via Redux.

For recommended usage, see [docs related to integrating with redux](https://github.com/vineyard-bloom/bloom-layout/blob/master/docs/alert-and-modal-with-redux.md).

### Optional Props
- `currentAlert`:
    Object of type { message: string, style: one of 'warning', 'success', 'danger' } or null

- `hidden`:
    boolean showing or hiding the alert. Ideally, it should detect whether your currentAlert variable has content.

- `closeAlert`:
    function that triggers the deletion of the Alert's `currentAlert`

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)
