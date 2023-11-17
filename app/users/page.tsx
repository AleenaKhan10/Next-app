import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'


const UserPage = async () => {
  return (
    <>
        <h1>Users</h1>
        <Link href='/users/new' className='btn'>New User</Link>
        {/* <Suspense fallback={<p>Loading...</p>}>
        </Suspense> */}
        <UserTable/>
    </>
  )
}
export default UserPage