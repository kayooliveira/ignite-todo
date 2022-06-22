interface StoreParams {
  key: string
  value: unknown
}

export function store({ key, value }: StoreParams) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getItemFromStore({ key }: Omit<StoreParams, 'value'>) {
  const value = localStorage.getItem(key)
  if (value) return JSON.parse(value)
  return null
}
