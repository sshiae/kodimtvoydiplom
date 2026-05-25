import fs from 'fs';
import path from 'path';

export type Review = {
  firstName: string;
  lastName: string;
  text: string;
};

const REVIEWS_PATH = path.join(process.cwd(), 'data', 'reviews.csv');

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result.map((value) => value.replace(/^"|"$/g, '').trim());
}

export function getReviews(): Review[] {
  if (!fs.existsSync(REVIEWS_PATH)) {
    return [];
  }

  const raw = fs.readFileSync(REVIEWS_PATH, 'utf-8').replace(/^\uFEFF/, '');
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return [];
  }

  const header = parseCsvLine(lines[0]).map((col) => col.toLowerCase());
  const firstNameIdx = header.indexOf('first_name');
  const lastNameIdx = header.indexOf('last_name');
  const reviewIdx = header.indexOf('review');

  if (firstNameIdx === -1 || lastNameIdx === -1 || reviewIdx === -1) {
    return [];
  }

  return lines.slice(1).flatMap((line) => {
    const cols = parseCsvLine(line);
    const firstName = cols[firstNameIdx] ?? '';
    const lastName = cols[lastNameIdx] ?? '';
    const text = cols[reviewIdx] ?? '';

    if (!firstName || !lastName || !text) {
      return [];
    }

    return [{ firstName, lastName, text }];
  });
}
