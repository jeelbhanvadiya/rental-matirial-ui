import React, { useEffect } from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import { useDropzone } from "react-dropzone";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid black",
  marginBottom: 8,
  marginRight: 8,
  width: 120,
  height: 120,
  padding: 4,
  boxSizing: "border-box",
  position: "relative",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const deleteIcon = {
  backgroundColor: 'white',
  cursor: "pointer",
  position: "absolute",
  top: 0,
  right: 0,
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const Dropzone = React.memo(
// const Dropzone = 

  ({ files, setFiles}) => {

    //Delete image from file privew
    const HandleFileDelete = (name) => {
      setFiles(files.filter((file) => file.name != name));
    };

    //DropZone
    const { getRootProps, getInputProps} = useDropzone({
      accept: "image/jpeg, image/png",
      multiple: true,
      maxFiles: 3,
      onDrop: (acceptedFiles) => {
        if (acceptedFiles.length === 0) return;

        acceptedFiles.map((file) => {
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        });
        // on drop we add to the existing files
        const newFiles = files.concat(acceptedFiles);

        //remove duplicate files
        const uniqueFiles = newFiles.reduce((unique, o) => {
          if (!unique.some((obj) => obj.path === o.path)) {
            unique.push(o);
          }
          return unique;
        }, []);

        setFiles(uniqueFiles);
      },
    });

    const thumbs = files.map((file) => (
      <div style={thumb} key={file.name}>
        <CancelIcon
          onClick={(name) => HandleFileDelete(file.name)}
          fontSize="default"
          
          style={deleteIcon}
        />
        <div style={thumbInner}>
          <img src={file.preview} style={img} />
        </div>
      </div>
    ));

    useEffect(
      () => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      },
      [files]
    );

    return (
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <em>(Only *.jpeg and *.png images will be accepted)</em>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
        {(files.length > 3) && <p style={{ color: "red", fontSize: "0.8rem" }}>Maximum 3 images are allowed</p>}
      </section>
    );
  }
  ,
  (currentProps, nextProps) => {
    if (currentProps.files.length == nextProps.files.length) return true;
    return false;
  }
);

export default Dropzone;
