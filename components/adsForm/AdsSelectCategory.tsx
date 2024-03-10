import React from 'react'
import { Flex, Form, Select } from 'antd'
import { useAppSelector } from '@/libs/store/hooks'
import { additionalCategory, selectAllCategory } from '@/libs/store/slices/adsSlice/adsSlice'

export default function AdsSelectCategory() {
  const additional = useAppSelector(additionalCategory)
  const category = useAppSelector(selectAllCategory)

  return (
    <React.Fragment>
      <div className='ads__section'>
        <div className='ads__section-name'>
          <h2>Категория</h2>
        </div>
        <div className='ads__section-container'>
          <Flex gap='large'>
            <Form.Item name='category' label='Категория' rules={[{ required: true }]}>
              <Select placeholder='Выбирите категорию' style={{ width: 300 }} options={category} />
            </Form.Item>

            <Form.Item name='additionalCategory' label='Дополнительная категория' rules={[{ required: true }]}>
              <Select style={{ width: 300 }} options={additional} />
            </Form.Item>
          </Flex>
        </div>
      </div>
    </React.Fragment>
  )
}
