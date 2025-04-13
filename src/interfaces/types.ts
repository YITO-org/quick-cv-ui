
export interface siderbarIcon {
    icon: {} | any
    selected: Boolean
}


export interface sidebarReduxProps {
    mobileSidebarOpenAndClose: boolean
    selectedIndex: Number
}

export interface siderbarProps {
    screenSize: String
    sidebarData?: sidebarReduxProps
}

export interface CreateAndLoginProps {
    headerName: string
    buttonName: string
    redirectionScreen: string
    forgetPasswordScreen?: string
    createAccountAcreen?: string
    loginScreen?: string
    storeUsers?: any
    dispatch?: any
}

export interface CreateAndLoginRequestObj {
    name?: string | null
    email: string | null
    password: string | null
}

export interface AuthContextType {
    isAuthenticated: boolean
    tokken: string
    login: () => void // Function to change the state to authenticated
    logout: () => void
    storeTokken: (value: string) => void
}

export interface headertypes {
    tokken: string | null
}




