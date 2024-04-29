import React from 'react';
import Checkbox from './elements/checkbox';
import Select from './elements/select';
import Input from './elements/input';
import Email from './elements/email';
import Number from './elements/number';
import Range from './elements/range';

const Element = ({field: {field_type , field_id, field_label , field_placeholder, field_value, field_options}}) => {
    switch (field_type){
        case 'text':
            return (<Input
                field_id = {field_id}
                field_label  = {field_label}
                field_placeholder = {field_placeholder}
                field_value = {field_value}
                />)
        case 'select':
            return (<Select
                field_id = {field_id}
                field_label  = {field_label}
                field_value = {field_value}
                field_options = {field_options}
            />)
        case 'range':
            return (<Range
                field_id = {field_id}
                field_label  = {field_label}
                field_value = {field_value}
            />)
        case 'email':
            return (<Email
                field_id = {field_id}
                field_label  = {field_label}
                field_placeholder = {field_placeholder}
                field_value = {field_value}
                />)
        case 'number':
            return (<Number
                field_id = {field_id}
                field_label  = {field_label}
                field_placeholder = {field_placeholder}
                field_value = {field_value}
                />)
        case 'checkbox':
            return (<Checkbox
                field_id = {field_id}
                field_label  = {field_label}
                field_value = {field_value}
                />)

        default:
            return null;
    }

}

export default Element