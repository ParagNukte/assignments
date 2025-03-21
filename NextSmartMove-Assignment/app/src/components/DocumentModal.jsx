import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ConfidentialityAgreement from './ConfidentialityAgreement';

const DocumentModal = ({ isOpen, onClose, agreementData }) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    maxWidth="sm"
    fullWidth
    sx={{
      position: 'fixed',
      bottom: 16,
      right: 16,
      margin: 0,
      zIndex: 1300,
    }}
  >
    <DialogTitle>Confidentiality Agreement</DialogTitle>
    <DialogContent>
      <ConfidentialityAgreement agreementData={agreementData} />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">Close</Button>
    </DialogActions>
  </Dialog>
);

export default DocumentModal;
