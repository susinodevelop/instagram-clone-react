import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    // Define la ruta al archivo JSON en la carpeta public
    const filePath = path.join(process.cwd(), 'public', 'users.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(fileContents);

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
