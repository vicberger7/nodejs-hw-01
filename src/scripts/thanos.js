import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  const newData = data.filter(() => Math.random() > 0.5);
  await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2));
};

await thanos();
