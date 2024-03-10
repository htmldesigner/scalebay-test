import React, { useEffect, useState } from 'react'
import { Checkbox, DatePicker, Flex, Form, FormInstance, Input, InputNumber, Radio, RadioChangeEvent } from 'antd'
import locale from 'antd/es/date-picker/locale/ru_RU'
import { useAppSelector } from '@/libs/store/hooks'

interface IAdsSettingsProps {
  form: FormInstance
}

export default function AdsSettings({ form }: IAdsSettingsProps) {
  const currentAdsType = useAppSelector(state => state.adsSlice.currentAdsType)
  const [startTime, setStartTime] = useState<Number>(0)

  const startTimeOptions = [
    { label: 'Сейчас', value: 1 },
    { label: 'Выбрать', value: 2 },
  ]

  const timeSelectChange = (e: RadioChangeEvent) => {
    setStartTime(e.target.value)
  }

  useEffect(() => {
    setStartTime(form.getFieldValue('startTime'))
  }, [])

  const showDataPicker = () => {
    return (
      <Form.Item
        name='time'
        label='Выбрать время начала'
        rules={[{ required: true, message: 'Выбрать время начала' }]}
        hidden={startTime !== 2}
      >
        <DatePicker locale={locale} showTime />
      </Form.Item>
    )
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
              name='startTime'
              label='Время начала торгов'
              rules={[{ required: true, message: 'Указать начала торгов' }]}
            >
              <Radio.Group
                options={startTimeOptions}
                buttonStyle='solid'
                optionType='button'
                onChange={timeSelectChange}
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
                <InputNumber placeholder='Дней до поступления' style={{ width: 150 }} />
              </Form.Item>

              <Form.Item name='autoDetect' valuePropName='checked'>
                <Checkbox>Включить автопродление</Checkbox>
              </Form.Item>

              <Form.Item
                name='numberRepeats'
                label='Количество повторов'
                rules={[{ required: true, message: 'Необходимо заполнить' }]}
              >
                <InputNumber placeholder='Количество повторов' style={{ width: 150 }} />
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
