export const validateEmail = (input) => {
    const emailRe = /^\S+@\S+\.\S+$/;
    return emailRe.test(input);
}

export const validatePassword = (input) => {
    const passwordRe = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRe.test(input);
}

export const validateDescription = (input) => {
    const length = input.trim().split(' ').length
    return length >= 3 && length <= 50;
}

export const validateNick = (input) => {
    const length = input.trim().split('').length
    return length >= 3 && length <= 20;
}

export const validateTags = (input) => {
    return input.length >= 1;
}