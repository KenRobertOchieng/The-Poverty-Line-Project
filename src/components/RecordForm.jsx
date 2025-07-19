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
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            {/* Email Input */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            {/* Phone Input */}
            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            {/* Submit Button */}
            <button
            type="Submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md"
            >
                {selectedRecord ? 'Update' : 'Add'} Record
            </button>
        </form>
    );
};

export default RecordForm;