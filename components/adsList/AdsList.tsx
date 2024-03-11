import React from 'react'
import { Flex, List } from 'antd'
import { IItem } from '@/types/IItem'
import Link from 'next/link'
import dayjs from 'dayjs'

interface AdsListProps {
  list: IItem[]
  edit: boolean
}
export default function AdsList({ list, edit }: AdsListProps) {
  return (
    <React.Fragment>
      <List
        itemLayout='vertical'
        size='small'
        dataSource={list}
        renderItem={item => (
          <List.Item key={item.adsName} extra={<img width={272} alt='logo' src={item.upload[0].thumbUrl} />}>
            <List.Item.Meta title={item.adsName} description={dayjs(item.time).format('YYYY/MM/DD HH:mm')} />
            {item.description}
            {edit && (
              <Flex>
                <Link href={`/profile/edit/${item.postId}`} key={item.postId}>
                  Редактировать
                </Link>
              </Flex>
            )}
          </List.Item>
        )}
      />
    </React.Fragment>
  )
}
