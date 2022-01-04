# Block reload in react.js

To achieve this function, use the effect hook to execute the beforeunload event. To use this function, just import the Lockreload.jsx component into its main component or app.js.

## Details to take into account.

- Displaying a custom message in the dialog box is no longer allowed for this event.

> You can check it here. https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event

## Use

Although browsers don't display a custom message, you can try including one. This is not a guarantee that it will be displayed.

`` ''
<Lockreload msg = "someone" />
`` ''
