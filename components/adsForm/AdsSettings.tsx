import React, { useState } from 'react'
import { Checkbox, DatePicker, type DatePickerProps, Flex, Form, Input, Radio, RadioChangeEvent } from 'antd'
import locale from 'antd/es/date-picker/locale/ru_RU'
import dayjs from 'dayjs'
import { useAppSelector } from '@/libs/store/hooks'

export default function AdsSettings() {
  const currentAdsType = useAppSelector(state => state.adsSlice.currentAdsType)
  const [startTime, setStartTime] = useState<Number>(1)
  const startTimeOptions = [
    { label: 'Сейчас', value: 1 },
    { label: 'Выбрать', value: 2 },
  ]

  const timeSelectChange = (e: RadioChangeEvent) => {
    setStartTime(e.target.value)
  }

  const timeChange: DatePickerProps['onChange'] = (_, dateStr) => {
    console.log('onChange:', dateStr)
  }

  const showDataPicker = () => {
    if (startTime !== 1) {
      return (
        <Form.Item
          name='time'
          label='Выбрать время начала'
          rules={[{ required: true, message: 'Выбрать время начала' }]}
        >
          <DatePicker locale={locale} showTime defaultValue={dayjs('2024-01-01', 'YYYY-MM-DD')} onChange={timeChange} />
        </Form.Item>
      )
    }
  }

  return (
    <React.Fragment>
      <div className='ads__section'>
        <div className='ads__section-name'>
          <h2>Настройки публикации</h2>
        </div>

        <div className='ads__section-container'>
          <Flex gap='middle'>
            <Form.Item name='count' label='Количество' rules={[{ required: true, message: 'Необходимо заполнить' }]}>
              <Input placeholder='Артикул' style={{ width: 150 }} />
            </Form.Item>
            <Form.Item
              name='starTime'
              label='Время начала торгов'
              rules={[{ required: true, message: 'Указать начала торгов' }]}
            >
              <Radio.Group
                options={startTimeOptions}
                buttonStyle='solid'
                onChange={timeSelectChange}
                value={startTime}
                optionType='button'
              />
            </Form.Item>
            {showDataPicker()}
          </Flex>

          {currentAdsType === 1 ? (
            <Flex gap='middle' align={'baseline'}>
              <Form.Item name='productToOrder' valuePropName='checked'>
                <Checkbox>Товар под заказ</Checkbox>
              </Form.Item>

              <Form.Item
                name='daysBeforeAdmission'
                label='Дней до поступления'
                rules={[{ required: true, message: 'Необходимо заполнить' }]}
              >
                <Input placeholder='Артикул' style={{ width: 150 }} />
              </Form.Item>

              <Form.Item name='autoDetect' valuePropName='checked'>
                <Checkbox>Включить автопродление</Checkbox>
              </Form.Item>

              <Form.Item
                name='numberRepeats'
                label='Количество повторов'
                rules={[{ required: true, message: 'Необходимо заполнить' }]}
              >
                <Input placeholder='Артикул' style={{ width: 150 }} />
              </Form.Item>
            </Flex>
          ) : (
            <React.Fragment>
              <Flex gap='middle'>
                <Form.Item name='sniper' valuePropName='checked'>
                  <Checkbox>Отключить возможность снайпинга</Checkbox>
                </Form.Item>
                <Form.Item name='autoDetect' valuePropName='checked'>
                  <Checkbox>Включить автопродление</Checkbox>
                </Form.Item>
              </Flex>
              <Flex>
                <Form.Item name='privateAuction' valuePropName='checked'>
                  <Checkbox>Приватный аукцион</Checkbox>
                </Form.Item>
              </Flex>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
