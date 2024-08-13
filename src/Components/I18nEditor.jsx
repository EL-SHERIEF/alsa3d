import React, { useState, useEffect } from 'react';
import JSONEditor from 'react-json-editor-ajrm';

function I18nEditor({ lang }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, [lang]);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/i18n/${lang}`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSave = async () => {
    try {
      await fetch(`/api/i18n/${lang}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      alert('Saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save. Please try again.');
    }
  };

  const handleChange = ({ jsObject }) => {
    if (jsObject) {
      setData(jsObject);
    }
  };

  return (
    <div>
      <h2>Editing {lang} translations</h2>
      <JSONEditor
        placeholder={data}
        onChange={handleChange}
        height="300px"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default I18nEditor;
