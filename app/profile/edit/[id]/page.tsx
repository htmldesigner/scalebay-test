'use client'
import { useAppSelector } from '@/libs/store/hooks'
import { IItem } from '@/types/IItem'
import { getItemByID } from '@/libs/store/slices/adsSlice/adsSlice'
import Ads from '@/components/adsForm/Ads'

export default function Edit({ params }: { params: { id: string } }) {
  const item = useAppSelector<IItem | undefined>(state => getItemByID(state, params.id))
  if (!item) return
  return <Ads item={item} actionType='update' />
}
