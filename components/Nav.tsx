'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'

export default function Nav() {
  const session = useSession()
  return (
    <React.Fragment>
      <header className='header'>
        <Link className='navigation_link' href='/'>
          На главную
        </Link>
        <nav className='navigation'>
          {session?.data && (
            <React.Fragment>
              <Link className='navigation_link' href='/profile'>
                Мои объявления
              </Link>
              <Link className='navigation_link' href='/profile/create'>
                Создание лота
              </Link>
            </React.Fragment>
          )}
          {session?.data ? (
            <Link className='navigation_link' href='#' onClick={() => signOut({ callbackUrl: '/' })}>
              Выход
            </Link>
          ) : (
            <Link className='navigation_link' href={'#'} onClick={() => signIn('credentials')}>
              Вход
            </Link>
          )}
        </nav>
      </header>
    </React.Fragment>
  )
}
