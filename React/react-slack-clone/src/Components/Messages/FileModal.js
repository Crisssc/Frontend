import { Button, Icon, Input, Modal } from 'semantic-ui-react';

import React from 'react';
import mime from 'mime-types';

class FileModal extends React.Component {
  state = {
    file: null,
    authorized: ['image/jpeg', 'image/png'],
  };

  addFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      // console.log(file);
      this.setState({ file: file });
    }
  };

  sendFile = () => {
    const { file } = this.state;
    const { uploadFile, closeModal } = this.props;
    if (file !== null) {
      if (this.isAuthorized(file.name)) {
        // send file...
        const metadata = { contentType: mime.lookup(file.name) };
        uploadFile(file, metadata);
        closeModal();
        this.clearFile();
      }
    }
  };

  isAuthorized = (filename) =>
    this.state.authorized.includes(mime.lookup(filename));

  clearFile = () => this.setState({ file: null });

  render() {
    const { modal, closeModal } = this.props;
    return (
      <Modal basic open={modal} onClose={closeModal}>
        <Modal.Header>Select an Image File</Modal.Header>
        <Modal.Content>
          <Input
            fluid
            label="File types: jpg, png"
            name="file"
            type="file"
            onChange={this.addFile}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.sendFile} inverted>
            <Icon name="checkmark" /> Send
          </Button>
          <Button color="red" inverted onClick={closeModal}>
            <Icon name="checkmark" /> Remove
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default FileModal;
