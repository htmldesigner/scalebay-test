import { Form, Select } from 'antd'
import React from 'react'

interface IFilter {
  filter: { sort: string; query: number }
  setFilter: React.Dispatch<React.SetStateAction<{ sort: string; query: number }>>
}

export default function Sort({ filter, setFilter }: IFilter) {
  const handleChange = (selectedSort: string) => {
    setFilter({ ...filter, sort: selectedSort })
  }
  return (
    <React.Fragment>
      <Form.Item label='Сортировка'>
        <Select
          placeholder='Сотрировка'
          style={{ width: 250 }}
          onChange={handleChange}
          value={filter.sort}
          options={[
            { value: 0, label: 'По умолчанию' },
            { value: 'time', label: 'Дата публикации' },
          ]}
        />
      </Form.Item>
    </React.Fragment>
  )
}
