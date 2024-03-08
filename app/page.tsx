import {nanoid} from 'nanoid';
import { revalidatePath } from 'next/cache';
import { getItems, addItem } from '@/db/db';

async function addItemAction(formData: FormData): Promise<void> {
  'use server'

  console.log('logging add item action');
  console.warn('warning add item action');
  console.error('erroring add item action');
  const item = {
    id: nanoid(),
    name: formData.get('name') as string ?? 'default name',
    description: formData.get('description') as string ?? 'default description',
  };

  await addItem(item);
  revalidatePath('/');
}


export default function Home() {
  return (
    <div>
      <h1>Test app</h1>

      <form action={addItemAction} className="p-4 flex flex-col gap-2 border border-gray-500">
        <input type="text" name="name" className="border border-gray-200" />
        <textarea name="description" className="border border-gray-200"></textarea>
        <div>
          <button type="submit" className="bg-black text-white p-2">Add item</button>
        </div>
      </form>

      <h3>Items</h3>
      <ul>
        {getItems().map(item => {
          return (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
