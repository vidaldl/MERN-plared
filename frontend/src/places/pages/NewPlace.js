import React, { useCallback } from "react";
import Input from "../../shared/components/FormElments/Input";

import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validator";
import './NewPlace.css';
const NewPlace = () => {
    const titleInputHandler = useCallback((id, value, isValid) => {}, []);
    const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

    return (
        <form className="place-form">
            <Input
                id="title"
                type="text"
                label="Title"
                element="input"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title"
                onInput = {titleInputHandler}
            />
            <Input
                id="description"
                type="textarea"
                label="Description"
                element="input"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min. 5 chars)"
                onInput = {titleInputHandler}
            />
        </form>
    );
};

export default NewPlace;