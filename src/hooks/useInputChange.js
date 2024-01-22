import { useState } from 'react';

const cleanInput = (value, regex) => {
    if(regex) {
        const trimmedValue = value.trim();
    
        const sanitizedValue = trimmedValue.replace(regex, '');
      
        return sanitizedValue;
    }

    return value
  };

const useInputChange = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData || {});

  const handleInputChange = (field, value, regex) => {
    const cleanedValue = cleanInput(value, regex);
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