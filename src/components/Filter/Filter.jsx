import React from "react";
import ProTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled'

export const Filter = ({ value, onChange }) => (
    < FilterLabel htmlFor="" >
        Find contacts by name
        <FilterInput type="text" value={value}
            onChange={onChange} />
    </FilterLabel >
)

Filter.ProTypes = {
    value: ProTypes.string.isRequired,
    onChange: ProTypes.func.isRequired,
}
