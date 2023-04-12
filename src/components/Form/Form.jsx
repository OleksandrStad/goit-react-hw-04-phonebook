import { useState } from 'react';
import ProTypes from 'prop-types';
import { nanoid } from "nanoid";
import { Btn, Form } from "./Form.styled"

export function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault()

        const contact = {
            id: nanoid(),
            name: name,
            number: number,
        }

        onSubmit(contact)

        setName('');
        setNumber('');

    };

    return (
        < div >
            <Form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    <p>Name</p>
                    <input
                        type="text"
                        name='name'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian,
               Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                        value={name}
                    />
                </label>
                <label htmlFor="">
                    <p>Number</p>
                    <input
                        type="tel"
                        name='number'
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                        value={number}
                    />
                </label>
                <Btn type="submit" >add contact</Btn >
            </Form>
        </div >
    )

};

ContactForm.ProTypes = {
    onSubmit: ProTypes.func.isRequired,
}

