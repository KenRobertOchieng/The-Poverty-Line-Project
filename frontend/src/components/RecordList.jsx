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
                        <li k
                    )}
                </ul>
            )
            )}
        </div>
    )
}