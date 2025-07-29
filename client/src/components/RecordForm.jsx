import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createRecord, updateRecord } from '../features/records/recordSlice'

const RecordForm = ({
  editMode = false,
  recordToEdit = null,
  onEditClear = () => {}
}) => {
  const dispatch = useDispatch()

  // local form state matching your Record model
  const [formData, setFormData] = useState({
    income: '',
    poverty_classification: ''
  })

  // when recordToEdit changes, populate the form
  useEffect(() => {
    if (editMode && recordToEdit) {
      setFormData({
        income: recordToEdit.income,
        poverty_classification: recordToEdit.poverty_classification
      })
    }
  }, [editMode, recordToEdit])

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(f => ({ ...f, [name]: value }))
  }

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault()

    if (editMode) {
      dispatch(updateRecord({ ...recordToEdit, ...formData }))
      onEditClear() // exit edit mode
    } else {
       dispatch(createRecord(formData))
    }

    // reset local form
    setFormData({ income: '', poverty_classification: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {editMode ? 'Edit Record' : 'Add New Record'}
      </h2>

      {/* Income Input */}
      <div className="mb-4">
        <label htmlFor="income" className="block text-gray-700 mb-2">
          Daily Income (Ksh)
        </label>
        <input
          type="text"
          id="income"
          name="income"
          value={formData.income}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="e.g. 180"
          required
        />
      </div>

      {/* Classification Input */}
      <div className="mb-4">
        <label
          htmlFor="poverty_classification"
          className="block text-gray-700 mb-2"
        >
          Poverty Classification
        </label>
        <select
          id="poverty_classification"
          name="poverty_classification"
          value={formData.poverty_classification}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        >
          <option value="" disabled>
            Select classification
          </option>
          <option value="extreme">Extreme Poverty (&lt;Ksh 190)</option>
          <option value="moderate">Moderate Poverty</option>
          <option value="above-line">Above Poverty Line</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md"
      >
        {editMode ? 'Update' : 'Add'} Record
      </button>
    </form>
  )
}

export default RecordForm
