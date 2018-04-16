# Modals

Modal is a fully accessible dialog that announces itself to the screen, traps tab focus (and shift+tab), and resets focus on open and close to ensure that keyboard users can't access content behind it. It closes on 'x', 'ESC' key, and clicking on the gray semi-opaque background.

Modal should be rendered once to the screen, ideally having its contents and closing functionality handled via Redux.

For recommended implementation, see [docs related to integrating with redux](https://github.com/vineyard-bloom/bloom-layout/blob/master/docs/alert-and-modal-with-redux.md).

Every modal renders the same `x` button to close, but this can be styled via the `Modal-close` class in CSS.

** All focusable elements inside the modal MUST have ids. There are several diffing event handlers that trap tab focus for accessibility, and it uses ids of those elements **

You shouldn't have more than one modal open at a time. This is why it's recommended to render it to the DOM once and update its content via Redux ([recommended method](https://github.com/vineyard-bloom/bloom-layout/blob/master/docs/Modal-and-modal-with-redux.md)).

Styling of Modal is through the `.Modal` class.

### Required Props:
- `closeModal`:
    function that deletes the `modalContents`

- `modalContents`:
    either: a React Element to fill the modal or `null`
    * the modal will hide if it has no contents

- `modalTriggerId`:
    a string that maps to an id of the button that opened the modal
    * must be defined if you have modalContents
    * used to refocus the document activeElement after closing the modal
    * if you triggered a modal programmatically, and no button triggered its opening, choose a focusable element in the content behind the modal

### Example:
```
import { Modal } from 'bloom-layout'

...
state = {
  modal: {
    contents: null,
    triggerId: null
  }
}

...

closeModal = (e) => {
  if (e) {
    e.preventDefault()
  }

  this.setState({
    modal: {
      contents: null,
      triggerId: null
    }
  })
}

openModal = (e, contents, triggerId) => {
  if (e) {
    e.preventDefault()
  }

  this.setState({
    modal: {
      contents,
      triggerId
    }
  })
}


return (
  const { modal } = this.state

  ...

  <Modal
    modalContents={modal && modal.contents}
    modalTriggerId={modal && modal.triggerId}
    closeModal={this.closeModal}
  />

  ...

  <Button
    id='modal-opener'
    onClick={(e) => this.openModal(e, <ModalContentComponent />, e.target.id)}
  />
)
```

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)
