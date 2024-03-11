'use client'
import { useAppSelector } from '@/libs/store/hooks'
import { IItem } from '@/types/IItem'
import AdsList from '@/components/adsList/AdsList'
import React, { useState } from 'react'
import Sort from '@/components/Sort'
import { useItems } from '@/hooks/useSorted'
import Filter from '@/components/Filter'
import { Flex } from 'antd'

export default function Home() {
  let list = useAppSelector<IItem[]>(state => state.adsSlice.publishedAds)
  const [filter, setFilter] = useState({ sort: '', query: 0 })
  const sortedAndSearchedPosts = useItems(list, filter.sort, filter.query)
  return (
    <React.Fragment>
      <div className='sort'>
        <Flex gap='middle'>
          <Sort filter={filter} setFilter={setFilter} />
          <Filter filter={filter} setFilter={setFilter}></Filter>
        </Flex>
      </div>
      <AdsList list={sortedAndSearchedPosts} edit={false} />
    </React.Fragment>
  )
}
