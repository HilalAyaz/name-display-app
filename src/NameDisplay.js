import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

const NameDisplay = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [inputName, setInputName] = useState('')

  useEffect(() => {
    setInputName(name || '')
  }, [name])

  const handleNameChange = e => {
    setInputName(e.target.value)
  }

  const updateNameInUrl = () => {
    if (inputName) {
      navigate(`/?name=${inputName}`)
    }
  }

  return (
    <div>
      <header>
        <h1 className='text-center p-4'>Change Your Name in the URL</h1>
      </header>
      <main>
        <Container className='mt-5 bg-light border rounded'>
          <div className='text-center p-4'>
            <h1
              className='mb-4'
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                lineHeight: '1.2'
              }}
            >
              Hello, {inputName || 'Stranger!'}
            </h1>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='text'
                  placeholder='Enter your name'
                  value={inputName}
                  onChange={handleNameChange}
                  style={{ border: '1px solid #ccc', padding: '10px' }}
                  aria-label='Enter your name'
                />
              </Form.Group>
              <Button
                variant='secondary'
                onClick={updateNameInUrl}
                className='btn-transition'
                style={{ backgroundColor: 'green', border: 'none' }}
                aria-label='Update Name'
              >
                Update Name
              </Button>
            </Form>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default NameDisplay
