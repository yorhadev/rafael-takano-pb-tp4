import classes from "./TextField.module.css";

export default function TextField({ labelName, ...props }) {
  return (
    <label className={classes.text_field}>
      <span>{labelName}</span>
      <input {...props} />
    </label>
  );
}
