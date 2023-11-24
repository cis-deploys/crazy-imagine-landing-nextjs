import React from "react"
import { ValidationError } from "@formspree/react"
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  TextField,
  Button
} from "@mui/material"

const ProductsServicesDialog = ({
  classes,
  open,
  handleClose,
  handleSubmit,
  state,
  title
}) => {

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className={classes.dialog}
    >
      <DialogTitle id="form-dialog-title">Buy Plan</DialogTitle>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xzbyobpo">
        <DialogContent>
          <DialogContentText>
            To buy this plan, please enter your email address here. We will
            answer you as soon as possible.
          </DialogContentText>
          <TextField
            margin="dense"
            id="email"
            type="email"
            name="email"
            label="Email Address"
            required
            fullWidth
          />
          <ValidationError
            prefix="Email Address"
            field="email"
            errors={state.errors}
          />
          <TextField
            margin="dense"
            id="message"
            type="text"
            name="message"
            label="Message(optional)"
            fullWidth
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <TextField
            margin="dense"
            id="plan"
            type="text"
            name="plan"
            label="Plan"
            value={title}
            fullWidth
          />
          <ValidationError prefix="Plan" field="plan" errors={state.errors} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={state.submitting}
            onClick={handleClose}
          >
            Sumbit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default ProductsServicesDialog
