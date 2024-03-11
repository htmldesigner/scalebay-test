import { useMemo } from 'react'
import { IItem } from '@/types/IItem'

export const useSorted = (items: IItem[], sort: string) => {
  return useMemo(() => {
    if (sort) {
      return [...items].sort((a, b) => new Date(b[sort]).valueOf() - new Date(a[sort]).valueOf())
    }
    return items
  }, [sort, items])
}

export const useItems = (items: IItem[], sort: string, query: number) => {
  const sortedPosts = useSorted(items, sort)

  return useMemo(() => (!query ? sortedPosts : sortedPosts.filter(item => item.type === query)), [query, sortedPosts])
}
