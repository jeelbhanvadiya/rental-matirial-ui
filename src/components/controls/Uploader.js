export default function Uploader(props) {
  const { lable, value, name, onChange} = props;

  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <label>
      {lable}
      <input
        id="fileInput"
        name={name}
        value={value}
        type="file"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={(e) => onChange(convertToDefaultPara(name, e.target.files))}
      />
    </label>
  );
}
