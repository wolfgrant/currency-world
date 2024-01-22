import { useState } from 'react';

const useInputChange = (initialFormData) => {

    const [formData, setFormData] = useState(initialFormData || {})

    const handleInputChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    }

    return { 
        handleInputChange,
        formData};
};

export default useInputChange;