'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import StoreProvider from '@/libs/StoreProvider'
import { ConfigProvider } from 'antd'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
          },
        }}
      >
        <StoreProvider>{children}</StoreProvider>
      </ConfigProvider>
    </SessionProvider>
  )
}
