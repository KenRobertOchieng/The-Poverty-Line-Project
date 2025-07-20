import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecords } from '../features/records/recordSlice'
import RecordForm from '../components/RecordForm'
import RecordList from '../components/RecordList'

export default function RecordsPage() {
  const dispatch = useDispatch()
  const { records, status, error } = useSelector(s => s.records)
  const [toEdit, setToEdit] = useState(null)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchRecords())
  }, [status, dispatch])

  return (
    <div className="p-8 space-y-6">
      {status === 'loading' && <p>Loading…</p>}
      {status === 'failed'  && <p className="text-red-600">Error: {error}</p>}
      {status === 'succeeded' && (
        <>
          <RecordForm
            editMode={!!toEdit}
            recordToEdit={toEdit}
            onEditClear={() => setToEdit(null)}
          />
          <RecordList
            records={records}
            onEdit={r => setToEdit(r)}
          />
        </>
      )}
    </div>
  )
}
