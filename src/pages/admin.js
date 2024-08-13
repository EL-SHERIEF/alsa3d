import React, { useState, useEffect, useRef } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.min.css'; // Import JSONEditor CSS

const AdminPage = () => {
  const [jsonData, setJsonData] = useState({});
  const editorRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getTranslation');
        
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
      await fetch('http://localhost:3000/api/saveTranslation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
      alert('Changes saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save changes');
    }
  };

  return (
    <div className='w-[95%] mx-[2.5%] flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold my-5'>Admin - Edit Translations</h1>
      <div id="json-editor" className='w-full' style={{ height: '70vh' }}></div>
      <button onClick={handleSave} className='w-[90%] flex-1 flex justify-center items-center py-5 px-0 my-5 rounded-lg bg-violet-700 hover:bg-violet-800 transition-colors text-white font-bold'>Save Changes</button>
    </div>
  );
};

export default AdminPage;
