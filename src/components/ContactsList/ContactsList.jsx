import ProTypes from 'prop-types';
import { DeleteBtn, ContactItem } from "./ContactsList.styled";


export const ContactsList = ({ filterContacts, onDeletContact }) => (
    <ul >
        {filterContacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
                <p>{name}: {number} </p>
                <DeleteBtn type='button ' onClick={() => onDeletContact(id)}>
                    Delete
                </DeleteBtn >
            </ContactItem>
        ))}
    </ul >
);

ContactsList.ProTypes = {
    filterContacts: ProTypes.arrayOf(ProTypes.object).isRequired,
    onDeletContact: ProTypes.func.isRequired,
};

