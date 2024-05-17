import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log('Error:', error.message);
    throw error;
  }
};

getAllContacts()
  .then((data) => console.log(data))
  .catch((error) => console.log('Error:', error.message));
