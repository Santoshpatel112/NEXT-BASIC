import React from 'react'
import Link from 'next/link'
const DashBoardPage = () => {
  return (
    <div>DashBoardPage Main
    <Link href={'/dashboard-main/tab1'}> click to mive tab1</Link>
    <Link href={'/dashboard-main/tab2'}> click to mive tab2</Link>
    </div>
  )
}

export default DashBoardPage