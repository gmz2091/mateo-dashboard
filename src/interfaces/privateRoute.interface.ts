/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export interface PrivateRouteProps {
    user: boolean
    children: JSX.Element
}

export interface LoginProp {
    user: boolean
    handleSession: (session: boolean) => void
}
