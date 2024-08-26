import Dropzone from '@/components/Dropzone';
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const Dashboard = () => {
  const { userId } = auth();
  return (
    <div>
      <Dropzone />
    </div>
  )
}

export default Dashboard