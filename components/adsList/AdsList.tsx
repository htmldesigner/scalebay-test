'use client'
import React from 'react'
import { List } from 'antd'
import { IItem } from '@/types/IItem'
import Link from 'next/link'

interface AdsListProps {
  list: IItem[]
}
export default function AdsList({ list }: AdsListProps) {
  return (
    <React.Fragment>
      <List
        itemLayout='vertical'
        size='small'
        dataSource={list}
        renderItem={item => (
          <List.Item
            key={item.adsName}
            actions={[
              <Link href={`/profile/edit/${item.postId}`} key={item.postId}>
                Редактировать
              </Link>,
            ]}
            extra={<img width={272} alt='logo' src={item.upload[0].thumbUrl} />}
          >
            <List.Item.Meta title={item.adsName} />
            {item.description}
          </List.Item>
        )}
      />
    </React.Fragment>
  )
}
