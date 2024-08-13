import React, { useState, useEffect, useRef } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.min.css'; // Import JSONEditor CSS

const AdminPage = () => {
  const [jsonData, setJsonData] = useState({});
  const editorRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getTranslation');
        
        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Check if the content type is JSON
        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Expected JSON, but received something else');
        }

        // Attempt to parse the JSON
        const data = await response.json();
        console.log('Fetched JSON data:', data);
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (jsonData && Object.keys(jsonData).length > 0) {
      const container = document.getElementById('json-editor');
      const options = {
        mode: 'code',
        onChange: function () {
          // Update local state when JSON is edited
          const updatedJson = editorRef.current.get();
          setJsonData(updatedJson);
        },
      };
      const editor = new JSONEditor(container, options);
      editor.set(jsonData);
      editorRef.current = editor;
      
      // Clean up editor on component unmount
      return () => {
        editor.destroy();
      };
    }
  }, [jsonData]);

  const handleSave = async () => {
    try {
      const response = await fetch('/api/saveTranslation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.error || 'Unknown error'}`);
      }
  
      const result = await response.json();
      alert('Changes saved successfully: ' + result.message);
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save changes: ' + error.message);
    }
  };
  

  return (
    <div>
      <h1>Admin - Edit Translations</h1>
      <div id="json-editor" style={{ height: '500px' }}></div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default AdminPage;
