import { useState } from 'react';

const cleanInput = (value) => {
    const trimmedValue = value.trim();
  
    const sanitizedValue = trimmedValue.replace(/['";()]/g, '');
  
    return sanitizedValue;
  };

const useInputChange = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData || {});

  const handleInputChange = (field, value) => {
    const cleanedValue = cleanInput(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: cleanedValue,
    }));
  };

  return {
    handleInputChange,
    formData,
  };
};

export default useInputChange;