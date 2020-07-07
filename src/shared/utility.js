export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidity = (value, rules) => {

    let isValid = true

    if (rules.required) {
        isValid = value.trim() !== '' && isValid
    }
    return isValid

}