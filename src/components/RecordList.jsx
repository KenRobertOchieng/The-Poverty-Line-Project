import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecord } from '../features/records/recordSlice'

const RecordList = ({
  records = [],   // ← default to an empty array
  onEdit
}) => {
    
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      dispatch(deleteRecord(id))
    }
  }

  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4">Poverty Records</h2>

      {records.length === 0 ? (
        <p className="text-gray-600">No records found.</p>
      ) : (
        <ul className="space-y-4">
          {records.map((record) => (
            <li
              key={record.id}
              className="border p-4 rounded-xl bg-gray-50 flex justify-between items-center"
            >
              <div>
                {/* Show the fields from your Record model */}
                <p className="font-semibold">
                  Income: <span className="text-blue-600">{record.income}</span>
                </p>
                <p>
                  Classification:{' '}
                  <span className="text-red-500">
                    {record.poverty_classification}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  Recorded on:{' '}
                  {new Date(record.timestamp).toLocaleDateString()}
                </p>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(record)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(record.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RecordList
