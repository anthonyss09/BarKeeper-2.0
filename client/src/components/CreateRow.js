import Wrapper from "../assets/wrappers/CreateRow";

export default function CreateRow({ name, id, type, value, onChange }) {
  return (
    <Wrapper>
      <div className="create-row">
        <label htmlFor={name} className="create-label">
          {id || name}
        </label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="create-input"
        />
      </div>
    </Wrapper>
  );
}
