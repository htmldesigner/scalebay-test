'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import AdsList from '@/components/adsList/AdsList'
import { useAppSelector } from '@/libs/store/hooks'
import { IItem } from '@/types/IItem'

export default function ProfileAds() {
  let list = useAppSelector<IItem[]>(state => state.adsSlice.publishedAds)
  const session = useSession()

  if (session.data?.user.id) {
    list = list.filter((el: IItem) => {
      return el.userId === session.data?.user.id
    })
  }
  return <AdsList list={list} edit={true} />
}
