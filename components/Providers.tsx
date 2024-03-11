'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import StoreProvider from '@/libs/StoreProvider'
import { ConfigProvider } from 'antd'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 16,
          borderRadius: 0,
        },
      }}
    >
      <SessionProvider>
        <StoreProvider>{children}</StoreProvider>
      </SessionProvider>
    </ConfigProvider>
  )
}
