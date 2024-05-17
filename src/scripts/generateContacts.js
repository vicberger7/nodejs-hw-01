import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  for (let i = 0; i < number; i += 1) {
    data.push(createFakeContact());
  }
  await fs.writeFile(PATH_DB, JSON.stringify(data));
};

await generateContacts(5);
