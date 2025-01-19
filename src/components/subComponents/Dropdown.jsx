import React from 'react'

const Dropdown = ({options, title}) => {
  return (
    <div>
      <div className="">
        <select
          name="dropdown"
          id="dropdown"
          className="flex border py-[0.4rem] px-3 rounded-2xl gap-5 font-semibold"
        >
          <option value="title">{title}</option>
          {options.map((item) => (
            <option value={item.items} key={item.id}>
              {item.items}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown