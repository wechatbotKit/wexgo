import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

/**
 * 根节点，一些通用逻辑可以放在这里
 * @returns
 */
const Root = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/abc')
  }, [])

  return <Outlet></Outlet>
}

export default Root
