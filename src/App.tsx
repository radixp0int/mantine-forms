import React, { useState } from 'react';
import { Button, TextInput, Select } from '@mantine/core';
import './App.css'
import { Demo } from './Demo';

type FormData = {
  dropdown: string | null;
  field1: string | any;
  field2: string | any;
};

const App = () => {

  const [formData, setFormData] = useState<FormData>({
    field1: '',
    field2: '',
    dropdown: '',
  });

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Your logic for handling the form data goes here
    console.log(formData);
  };

  return (
    // <Demo />
    <form onSubmit={handleSubmit}>
      {/* Input Field 1 */}
      <TextInput
        label="Field 1"
        value={formData.field1}
        onChange={(value) => setFormData((prev) => ({ ...prev, field1: value }))}
      />

      {/* Input Field 2 */}
      <TextInput
        label="Field 2"
        value={formData.field2}
        onChange={(value) => setFormData((prev) => ({ ...prev, field2: value }))}
      />

      {/* Dropdown */}
      <Select
        label="Dropdown"
        data={['Option 1', 'Option 2', 'Option 3']}
        value={formData.dropdown}
        onChange={(value) => setFormData((prev) => ({ ...prev, dropdown: value }))}
      />

      {/* Submit Button */}
      <Button type="submit" style={{ marginTop: 10 }}>
        Submit
      </Button>
    </form>
  );
}

export default App
