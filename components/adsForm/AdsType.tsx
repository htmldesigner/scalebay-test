import { Form, Radio } from 'antd'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/libs/store/hooks'
import { selectType, setAdsType } from '@/libs/store/slices/adsSlice/adsSlice'

export default function AdsType() {
  const options = useAppSelector(selectType)
  const dispatch = useAppDispatch()
  return (
    <React.Fragment>
      <div className='ads__section'>
        <div className='ads__section-name'>
          <h2>Тип публикации</h2>
        </div>

        <div className='ads__section-container'>
          <Form.Item name='type'>
            <Radio.Group
              options={options?.options}
              buttonStyle='solid'
              optionType='button'
              onChange={e => dispatch(setAdsType(e.target.value))}
            />
          </Form.Item>
        </div>
      </div>
    </React.Fragment>
  )
}
