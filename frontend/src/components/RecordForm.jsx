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
    con
}