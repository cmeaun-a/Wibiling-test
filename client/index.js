import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import styled from 'styled-components'

import Select from './components/Select'
import Input from './components/Input'
import Image from './components/Image'

const Wrapper = styled.div`
  text-align: center;
`

const App = () => {
  const [animal, setAnimal] = useState('animals')
  const [count, setCount] = useState(1)
  const [response, setResponse] = useState()
  const [errors, setErrors] = useState()

  useEffect(() => {
    const res = async () => {
      try {
        const { data } = await axios.get(`/${animal}`, {
          params: { protocol: 'https', count, url: true },
        })
        if (data.code === 200) setResponse(data.data)
        setErrors(null)
      } catch (err) {
        setErrors(err.response.data.errors)
        setResponse(null)
      }
    }
    res()
  }, [animal, count])
  return (
    <>
      <Select
        value={animal}
        onChange={e => setAnimal(e.target.value)}
        options={[
          { value: 'animals', label: 'Animals' },
          { value: 'shibes', label: 'Shibes' },
          { value: 'cats', label: 'Cats' },
          { value: 'birds', label: 'Birds' },
        ]}
      />
      <Input
        onChange={e => setCount(e.target.value)}
        placeholder="Number of images per animal"
      />
      {errors && errors.map(err => <p key={err.message}>{err.message}</p>)}
      {response &&
        Object.entries(response).map(elem => (
          <Wrapper key={elem[0]}>
            <h2>{elem[0].toUpperCase()}</h2>
            {elem[1].map(({ url }) => (
              <Image key={url} src={url} alt="animals" />
            ))}
          </Wrapper>
        ))}
    </>
  )
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
