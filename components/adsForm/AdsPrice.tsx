import { Flex, Form, InputNumber, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/libs/store/hooks'

export default function AdsPrice() {
  const currentAdsType = useAppSelector(state => state.adsSlice.currentAdsType)
  const [value, setValue] = useState<string>('₽')
  const selectDefaultCurrency = useAppSelector(state => state.adsSlice.adsData?.currency)
  const { Option } = Select

  const onSelect = (e: string) => {
    const result = selectDefaultCurrency.options.find(el => el.value === e)
    setValue(result!.label)
  }

  const suffixSelector = (
    <Form.Item name='currency' noStyle>
      <Select style={{ width: 70 }} onSelect={e => onSelect(e)}>
        {selectDefaultCurrency?.options.map(el => (
          <Option key={el.value} value={el.value}>
            {el.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  )

  return (
    <React.Fragment>
      <div className='ads__section'>
        <div className='ads__section-name'>
          <h2>Цена</h2>
        </div>

        <div className='ads__section-container'>
          <Flex gap='middle'>
            <Form.Item name='price' label='Цена' rules={[{ required: true, message: 'Необходимо заполнить' }]}>
              <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              name='minPrice'
              label='Минимальная сумма предложения'
              rules={[{ required: true, message: 'Необходимо заполнить' }]}
            >
              <InputNumber addonAfter={value} />
            </Form.Item>
          </Flex>

          {currentAdsType === 2 && (
            <Flex gap='middle'>
              <Form.Item name='blitzPrice' label='Блиц-цена'>
                <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item name='reservePrice' label='Резервная цена'>
                <InputNumber addonAfter={value} />
              </Form.Item>
            </Flex>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
