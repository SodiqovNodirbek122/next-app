import axios from 'axios'

const request = (
    url,
    body,
    header,
    initFunc,
    successFunc,
    errorFunc,
    finalFunc,
) => {
    if (initFunc) {
        initFunc()
    }
    axios
        .post(url, body, header)
        .then((res) => {
            if (successFunc) {
                successFunc(res)
            }
        })
        .catch((err) => {
            if (errorFunc) {
                errorFunc(err)
            }
        })
        .finally(() => {
            if (finalFunc) {
                finalFunc()
            }
        })
}
export const checkCode = (
    initFunc,
    body,
    successFunc,
    errorFunc,
    finalFunc,
) => {
    request(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
        body,
        {},
        initFunc,
        successFunc,
        errorFunc,
        finalFunc,
    )
}
export const checkExistsAuth = (
    initFunc,
    body,
    successFunc,
    errorFunc,
    finalFunc,
) => {
    request(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/checkphone`,
        body,
        {},
        initFunc,
        successFunc,
        errorFunc,
        finalFunc,
    )
}
export const generateCode = (
    initFunc,
    body,
    successFunc,
    errorFunc,
    finalFunc,
) => {
    request(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/sendcode`,
        body,
        {},
        initFunc,
        successFunc,
        errorFunc,
        finalFunc,
    )
}
export const registerAuth = (
    initFunc,
    body,
    successFunc,
    errorFunc,
    finalFunc,
) => {
    request(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        body,
        {},
        initFunc,
        successFunc,
        errorFunc,
        finalFunc,
    )
}
export const registerUser = (
    initFunc,
    body,
    token,
    successFunc,
    errorFunc,
    finalFunc,
) => {
    request(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user`,
        body,
        {
            headers: {
                'platform-id': process.env.NEXT_PUBLIC_PLATFORM_ID,
                Authorization: `Bearer ${token}`,
            },
        },
        initFunc,
        successFunc,
        errorFunc,
        finalFunc,
    )
}
