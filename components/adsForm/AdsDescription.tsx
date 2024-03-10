import { Flex, Form, Input, Radio, RadioChangeEvent, Select, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useAppSelector } from '@/libs/store/hooks'
import { selectManufacturer, selectMaterial, selectScale } from '@/libs/store/slices/adsSlice/adsSlice'

export default function AdsDescription() {
  const [status, setStatus] = useState<Number>(1)

  const scale = useAppSelector(selectScale)
  const material = useAppSelector(selectMaterial)
  const manufacturer = useAppSelector(selectManufacturer)

  const statusOptions = [
    { label: 'Новый', value: 1 },
    { label: 'Б/У', value: 2 },
  ]

  const statusChange = (e: RadioChangeEvent) => {
    setStatus(e.target.value)
    console.log(e.target.value)
  }

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  return (
    <React.Fragment>
      <div className='ads__section'>
        <div className='ads__section-name'>
          <h2>Описание публикации</h2>
        </div>

        <div className='ads__section-container'>
          <Form.Item name='adsName' label='Название лота' rules={[{ required: true }]}>
            <Input showCount maxLength={100} style={{ width: 610 }} />
          </Form.Item>
          <Flex gap='middle'>
            <Form.Item name='articul' label='Артикул'>
              <Input placeholder='Артикул' style={{ width: 150 }} />
            </Form.Item>

            <Form.Item name='status' label='Состояние'>
              <Radio.Group
                options={statusOptions}
                buttonStyle='solid'
                onChange={statusChange}
                value={status}
                optionType='button'
              />
            </Form.Item>

            <Form.Item name='manufacturer' label='Производитель' rules={[{ required: true }]}>
              <Select placeholder='Производитель' style={{ width: 300 }} options={manufacturer} />
            </Form.Item>
          </Flex>

          <Flex gap='middle'>
            <Form.Item name='scale' label='Масштаб' rules={[{ required: true }]}>
              <Select placeholder='Масштаб' style={{ width: 150 }} options={scale} />
            </Form.Item>

            <Form.Item name='material' label='Материал' rules={[{ required: true }]}>
              <Select placeholder='Материал' style={{ width: 450 }} options={material} />
            </Form.Item>
          </Flex>

          <Form.Item name='description' label='Описание' rules={[{ required: true, message: 'Необходимо добавить' }]}>
            <TextArea rows={8} showCount maxLength={1000} style={{ width: 620 }} />
          </Form.Item>

          <Form.Item
            name='upload'
            label='Загрузить'
            valuePropName='fileList'
            getValueFromEvent={normFile}
            rules={[{ required: true, message: 'Необходимо добавить фото' }]}
          >
            <Upload listType='picture-card'>
              <button style={{ border: 0, background: 'none' }} type='button'>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Загрузить</div>
              </button>
            </Upload>
          </Form.Item>
        </div>
      </div>
    </React.Fragment>
  )
}
