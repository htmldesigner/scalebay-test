'use client'
import { Button, Form } from 'antd'
import React, { useEffect } from 'react'
import { useAppDispatch } from '@/libs/store/hooks'
import { addAds, loadData, updateAds } from '@/libs/store/slices/adsSlice/adsSlice'
import AdsSelectCategory from '@/components/adsForm/AdsSelectCategory'
import AdsDescription from '@/components/adsForm/AdsDescription'
import AdsSettings from '@/components/adsForm/AdsSettings'
import AdsPrice from '@/components/adsForm/AdsPrice'
import { v4 as uuidv4 } from 'uuid'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { IItem } from '@/types/IItem'
import AdsType from '@/components/adsForm/AdsType'
import dayjs from 'dayjs'

interface IAdsItemProps {
  item: IItem | null
  actionType: 'create' | 'update'
}

export default function Ads({ item, actionType }: IAdsItemProps) {
  const dispatch = useAppDispatch()
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    dispatch(loadData())
  }, [])

  const handleSubmit = (values: IItem) => {
    if (!session.data) return
    if (actionType === 'create') {
      values['postId'] = uuidv4()
      values['userId'] = session.data.user.id
      dispatch(addAds(values))
    } else {
      dispatch(updateAds({ ...item, ...values }))
    }
    router.push('/profile')
  }

  const [form] = Form.useForm()

  return (
    <React.Fragment>
      <div className='ads__page-title'>
        <h1>Создание лота</h1>
      </div>

      <Form
        form={form}
        name='validateOnly'
        layout='vertical'
        autoComplete='off'
        onFinish={handleSubmit}
        initialValues={item ? { ...item } : { currency: 'RUB', type: 1, status: 1, time: dayjs(), startTime: '' }} // startTime по умолчанию не выбран
      >
        {AdsType()}

        {AdsSelectCategory()}

        {AdsDescription()}

        {AdsSettings({ form })}

        {AdsPrice()}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            {actionType === 'create' ? 'Сохранить' : 'Изменить'}
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  )
}
