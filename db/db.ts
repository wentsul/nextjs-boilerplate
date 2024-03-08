type Item = {
  id: string;
  name: string;
  description: string;
}

const items: Item[] = [];

export function getItems(): Item[] {
  return items;
}

export async function addItem(item: Item): Promise<void> {
  items.push(item);
  return Promise.resolve();
}