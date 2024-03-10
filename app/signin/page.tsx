'use client'
import { Button, Form, Input } from 'antd'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function Registration() {
  const [form] = Form.useForm()
  const router = useRouter()
  const onFinish = async (values: { email: string; password: string }) => {
    const res = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    })

    if (res && res.ok) {
      router.push('/profile')
    }
  }

  return (
    <div className='register'>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item label='E-mail' name='email' rules={[{ type: 'email', required: true, message: 'Введите E-mail!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='Пароль' name='password' rules={[{ required: true, message: 'Введите пароль' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
