import React, { useState } from 'react';

const BirthdayReminder = () => {
  const [birthdays, setBirthdays] = useState([
    { id: 1, name: 'Ranjana R Shetty', dob: '06-10-2002' },
    { id: 2, name: 'Ramesh Shetty', dob: '01-12-1973' },
  ]);
  const [newName, setNewName] = useState('');
  const [newDOB, setNewDOB] = useState('');

  const handleAddBirthday = () => {
    if (newName && newDOB) {
      const newBirthday = {
        id: birthdays.length + 1,
        name: newName,
        dob: newDOB
      };
      setBirthdays([...birthdays, newBirthday]);
      setNewName('');
      setNewDOB('');
    }
  };

  const handleRemoveBirthday = (id) => {
    const updatedBirthdays = birthdays.filter(birthday => birthday.id !== id);
    setBirthdays(updatedBirthdays);
  };

  return (
    <div className="birthday-list">
      <h2>Upcoming Birthdays:</h2>
      <ul>
        {birthdays.map(birthday => (
          <li key={birthday.id}>
            {birthday.name} - {birthday.dob}
            <button onClick={() => handleRemoveBirthday(birthday.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input 
          type="text" 
          placeholder="Name" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Date of Birth" 
          value={newDOB} 
          onChange={(e) => setNewDOB(e.target.value)} 
        />
        <button onClick={handleAddBirthday}>Add Birthday</button>
      </div>
    </div>
  );
};

export default BirthdayReminder;
