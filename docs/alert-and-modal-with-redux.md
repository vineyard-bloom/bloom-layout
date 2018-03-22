# Integrating Bloom-Layout's Alert and Modal into Bloom-Starter and Redux

### Bloom-layout provides unopinionated, accessible components with hooks to control their behavior. However, this is the recommended set up for using them:

### Alerts
Alerts function similarly to modals, except they close after a few seconds' timeout, and you can add several in a row, which appear in succession.

Similarly to Modals, there should be one Alert component in your highest-level app file that receives messages in the format:
```
{ message: string, style: one of 'warning', 'success', 'danger' }
```

The alert methods available through bloom-starter's redux actions are `addAlert`, `expireAlert`, and `hardDeleteAlert`.

`addAlert` takes two parameters: the alert message, and the style, which should be one of three strings: 'success', 'status', and 'warning'. (After grabbing via mapDispatchToProps), it's used like:
```
this.props.addAlert('I am an alert', 'success')
```

`expireAlert` times out the first alert in your array of alerts. For example, you might have two alerts pop up in succession: 'Server Error, please try again.' and 'You are not authorized to do this action.'
The 'Server Error' alert will show up first. By default it will stay on screen for a few seconds and then disappear, revealing the second, but you may expire it early by calling
```
this.props.expireAlert()
```

`hardDeleteAlert` allows you to immediately delete any message in your alerts queue. Say you want to remove the second alert in the queue before it appears on screen. You can delete it immediately by
```
this.props.hardDeleteAlert('You are not authorized to do this action.')
```

If you make `closeAlert={() => hardDeleteAlert(alertMessaage)}`, the alert will render with an 'x' button and will handle manual alert closing.

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)

### Modals
There should always be a modal rendered to the screen, but it appears/disappears depending on if it's given any content to display. All modal methods are available in the redux store via `openModal` and `closeModal`.  Without `modalContents`, the modal is hidden. Every modal renders the same `x` button to close.

Modal should be rendered once at your highest level app component and receive `modalContents` and `modalTriggerId` (id of button that opened it) as props, likely via redux. It should also be given a `closeModal` prop.

`openModal` takes three parameters, the `event` that triggered it opening, `modalContents`, which should be a self-contained component holding any modal headers, body, forms, etc., and the ID of the button or anchor tag that triggered the modal. This third parameter is necessary for accessibility.

To use, grab `openModal` and `closeModal` with mapDispatchToProps.
```
const mapDispatchToProps = (dispatch) => {
  return {
    ...
    closeModal: () => {
      dispatch(closeModal())
    },
    openModal: (e, modalContents, triggerId) => {
      dispatch(openModal(e, modalContents, triggerId))
    }
    ...
  }
}
```
And trigger it like so:
```
this.props.openModal(e, <div>I am an example modal.</div>, 'example-button-trigger')
```
or
```
this.props.closeModal()
```

** All focusable elements inside the modal MUST have ids. There are several diffing event handlers that trap tab focus for accessibility, and it uses ids of those elements **

You should not have more than one modal open at a time.

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)
