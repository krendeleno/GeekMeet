export const validateEmail = (input) => {
    const emailRe = /^\S+@\S+\.\S+$/;
    return emailRe.test(input);
}

export const validateDescription = (input) => {
    return (input.trim().split(' ').length >= 3);
}

export const validateTags = (input) => {
    return input.length >= 1;
}