// DataEditor.js
import React, { useState, useEffect } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

const DataEditor = () => {
  const [data, setData] = useState(null);
  const [editor, setEditor] = useState(null);
  const api = "https://abohassan.vercel.app"
  useEffect(() => {
    fetch(`${api}/api/getTranslations`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (data) {
      const container = document.getElementById('jsoneditor');
      const options = {
        mode: 'tree',
        onChange: () => {
          setData(editor.get());
        }
      };
      const jsonEditor = new JSONEditor(container, options);
      jsonEditor.set(data);
      setEditor(jsonEditor);
    }
  }, [data]);

  const handleSave = () => {
    if (editor) {
      const updatedData = editor.get();
      fetch(`${api}/api/saveTranslations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Data saved successfully:', data);
          // Optionally, show a success message
        })
        .catch(error => console.error('Error saving data:', error));
    }
  };

  return (
    <div>
      <div id="jsoneditor" style={{ height: '600px' }}></div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default DataEditor;
