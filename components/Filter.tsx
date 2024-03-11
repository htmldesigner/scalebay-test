import { Form, Select } from 'antd'
import React from 'react'

interface IFilter {
  filter: { sort: string; query: number }
  setFilter: React.Dispatch<React.SetStateAction<{ sort: string; query: number }>>
}

export default function Filter({ filter, setFilter }: IFilter) {
  const handleChange = (selectedFilter: number) => {
    setFilter({ ...filter, query: selectedFilter })
  }
  return (
    <React.Fragment>
      <Form.Item label='Фильтр'>
        <Select
          placeholder='Фильтр'
          style={{ width: 250 }}
          onChange={handleChange}
          options={[
            { value: 0, label: 'По умолчанию' },
            { value: 1, label: 'Лот' },
            { value: 2, label: 'Объявления' },
          ]}
        />
      </Form.Item>
    </React.Fragment>
  )
}
