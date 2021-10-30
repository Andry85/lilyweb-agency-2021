import { useState } from 'react';
import styles from './AddTitle.module.scss'


function AddTitle() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    
    // reset error and message
    setError('');
  
    // fields check
    if (!title) return setError('All fields are required');
  };

  return (
    <div className={styles.addTitle}>
      <form onSubmit={handlePost}>
          <label>Title</label>
          <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="title"
          />
          <button type="button">{'Add title'}</button>
      </form>
    </div>
  )
}
export default AddTitle