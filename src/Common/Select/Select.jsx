import React from 'react'

const Select = ({ label, option }) => {
  return (
    <div>
        <label className="block text-blue font-semibold text-[16px]">
        {label}
      </label>
      <select
        // value={regFormData.track}
        // onChange={(e) => setRegFormData({...regFormData, track: e.target.value})}
        className="w-full outine-[1.5px] outline-primary border-[1.5px] border-[black] px-3 py-1 mt-1 rounded-sm " 
      >
        {option.map(( options ) => (
            <option value="Blockchain Development">{options}</option>
        ))}
      </select>
    </div>
  )
}

export default Select