import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import { InputContainer, InputLabel} from "../Input/styles";
import {TextAreaComponent} from "./styles";


const TextArea = ({
   onChange, id, value, maxlength, disabled, autoComplete, placeholder,
   onBlur, onFocus, type, className, error
 }) => {
  const handleChange = useCallback(({target: {value}}) => {
    onChange(value)
  }, [onChange]);
  return (
    <InputContainer error={error}  className={className}>
      <InputLabel>
        {placeholder}
      </InputLabel>
      <TextAreaComponent
        id={id}
        type={type}
        value={value}
        maxLength={maxlength}
        disabled={disabled}
        autoComplete={autoComplete}
        rows={4}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

TextArea.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  maxlength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  onKeyUp: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  ShowInputFillIndicator: PropTypes.bool,
  autoComplete: PropTypes.string,
};

TextArea.defaultProps = {
  value: "",
  autoComplete: "off",
  placeholder: "",
  className: "",
}

export default TextArea;