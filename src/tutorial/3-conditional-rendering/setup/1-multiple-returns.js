import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [users, setUsers] = useState([])
  const getUser = async () => {
    const response = await fetch(url)
    const users = await response.json()
    if (response.status >= 200 && response.status <= 299) {
      setLoading(false)
      setUsers(users)
    } else {
      setLoading(false)
      setError(true)
      throw new Error(response.statusText)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  if (isLoading) {
    return <h1>Loading..</h1>
  }
  if (isError) {
    return <h1>Error..</h1>
  }

  return (
    <>
      <h3>{users.login}</h3>
    </>
  )
}

export default MultipleReturns
