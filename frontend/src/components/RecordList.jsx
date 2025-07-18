import React from 'react';
import { useDispatch} from 'react-redux';
import { deleteRecord} from '../features/records/recordSlice';

const RecordList = ({ records, onEdit}) => {
    const dispatch = useDispatch();

    // function for handling record deletion
    const handleDelete =(id) => {
        if (window.confirm('Are you sure you want to delete this record?')) {
      dispatch(deleteRecord(id));
        }
    };
    return (
        <div className="p-4 bg-white shadow rounded-xl">
            <h2 className="text-xl font-bold mb-4">Record List</h2>
            {records.length === 0 ? (
                <p className="text-gray-600">No records found. </p>
            ):(
                <ul className="space-y-4">
                    {records.map((record)) => (
                        <li key={record.id} clasName="border p-4 rounded-xl bg-gray-50 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold">{record.title}</h3>
                                <p className="text-gray-700">{record.description}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button 
                                onClick={() => onEdit(record)}
                                className="px-3 py"
                            </div>
                        </li>
                    )}
                </ul>
            )
            )}
        </div>
    )
}