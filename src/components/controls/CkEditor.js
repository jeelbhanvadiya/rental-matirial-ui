import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CkEeditor(props) {
  const { description, setDescription} = props;

  const handleInputDescription = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  return (
    <CKEditor
    editor={ClassicEditor}
    onChange={handleInputDescription}
    data={description}
    config={{
      toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'bulletedList',
        'numberedList',
      ],
    }}
  />
  );
}


