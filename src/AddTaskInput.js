import { useState } from 'react'
import { mdiPlusThick } from '@mdi/js'
import Icon from '@mdi/react'

export default function AddTaskInput({ createTaskHandler }) {
  const [value, setValue] = useState('')

  const onClickHandler = () => {
    value !== '' && createTaskHandler(value)
    setValue('')
  }

  return (
    <div className="input-container">
      <input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder="Add a task"
      ></input>
      <div
        className="input-end-icon"
        style={{
          transform: `translateY(calc(-50% - 0.25em))`
        }}
      >
        <Icon
          className="icon"
          path={mdiPlusThick}
          size={1}
          color="rgba(31, 31, 31, 0.1)"
          onClick={onClickHandler}
        />
      </div>
    </div>
  )
}
