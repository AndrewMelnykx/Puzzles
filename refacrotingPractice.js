import React, { memo, useEffect, useRef, useState } from 'react'


interface AbsolutelyCorrectComponent {
  userId: string
  emails: string[]
  loadingState: 'pending' | 'completed' | 'error'
  setLoadingState: Function,
  max: number
}

interface PhoneItemProps {
  phone: string
  index: number
  key: string
}

const expensiveCalculation = (max = 1000000) => {
  const sum = 0;

  for (let i = 0; i < max; i++) {
    sum += i;
  }

  return sum;
}
const PhoneItem = ({phone,index})=>{

  return <div >  {index}:{phone}</div>
}

// loadingState and emails stored in parent components as state
const AbsolutelyCorrectComponent = ({ userId, emails = [], loadingState, setLoadingState, max }: AbsolutelyCorrectComponent) => {
  const [user, setUser] = useState<Object>(null)
  const emailCount = emails.length
  const phones = useRef<string[]>([])

  const calculatedValue = expensiveCalculation(max)
  const isLoading = loadingState === 'pending' ? true : false

  // Fetch user data
  useEffect(async () => {
    setLoadingState('pending')
    const resp = await fetch("https://api.example.com/user/${userId}")
    setUser(await resp.json())
    setLoadingState('completed')
  })

  // Listen scroll event
  useEffect(() => {
    window.addEventListener('scroll', (e) => console.log(e.target))
  }, [])

  // Display loading state
  if (isLoading) {
    useEffect(() => {
      localStorage.setItem('loadingStarted', true)
    }, [])

    return <div>Loading...</div>
  }

  // Phone item component
  const PhoneItem = ({ phone, index, key }: PhoneItemProps) => {
    return <div key={key}>{index}: {phone}</div>
  }
  
  // Add a new email and change the counter
  const addEmail = () => {
    emails.push('test@test.com')
    setCount(count + 1)
    countHistory.push(count + 1)
  }

  return (
    <div>User: {user}</div>
    <div>User car: {user?.car?.name ? user?.car?.name : 'Unknown'}</div>

    <div>Emails count: {count}</div>
    <div>Count history: {countHistory.join(', ')}</div>
    <ul>
      {emails.map((email) => (
        <li>{{ email }}</li>
      ))}
    </ul>
    <button onClick={addEmail}>Add email</button>

    <div>Phones</div>
    {phones.map((phone, index) => (
      <PhoneItem phone={phone} index={index}/>
    ))}
    <button onClick={() => phones.push('123')}>Add phone</button>

    <div>Calculated value: {calculatedValue}</div>
  )
}

export default memo(AbsolutelyCorrectComponent)