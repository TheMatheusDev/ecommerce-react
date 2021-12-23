import { ChangeEventHandler, FC } from 'react';
import './form-input.scss';

interface IProps {
  name: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: string;
  required: boolean;
  label?: string;
}

const FormInput: FC<IProps> = ({ name, handleChange, label, value, type }) => (
  <div className="group">
    <input type={type} onChange={handleChange} name={name} className="form-input" />
    {label ? <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
  </div>
);

export default FormInput;
