import React from 'react'
import Link from 'next/link'
const Dashboard = () => {
  return (
   <>
    <div>Dashboard</div>
    <Link href="/dashboard/report">
    click to view report
    </Link>

    <Link href="/profile">
    click to view Profile
    </Link>
   </>
  )
}

export default Dashboard