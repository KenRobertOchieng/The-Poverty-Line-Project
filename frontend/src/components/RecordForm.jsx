import Rect, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addRecord, updateRecord} from '../features/records/recordSlice';

const RecordForm = ({ editMode = false, recordToEdit}) => {
    const dispatch = useDispatch();

    // local state for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    // when a record is chosen, update the form fields
    useEffect(() => {
        if (selectedRecord){
            setFormData(selectedRecord);
        }

    }, [selectedRecord]);

    // handling input changes
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // handling form submission
    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (selectedRecord) {
            //updating an existing record
            dispatch(updateRecord(formData));
        } else{
            //adding a new record 
            dispatch(addRecord(formData));
        }
        // reset form after submission
        setFormData({ name:'', email: '', phone: ''});
        setSelectedRecord(null);
    };
    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">
                {selectedRecord ? 'Edit Record' : 'Add New Record'}
            </h2>

            {/* Name Input */}
            <div className="mb-4">
                <label
            </div>
        </form>
    )
}