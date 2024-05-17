import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  const fakeContact = createFakeContact();
  const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  data.push(fakeContact);
  await fs.writeFile(PATH_DB, JSON.stringify(data));
};

await addOneContact();
