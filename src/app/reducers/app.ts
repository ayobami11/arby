interface AppState {
    isMenuOpen: boolean
}

interface AppAction {
    type: 'OPEN_MENU' | 'CLOSE_MENU'
};

export interface AppContextType {
    state: AppState,
    dispatch: React.Dispatch<any>
}

export const initialState: AppState = {
    isMenuOpen: false
}

export const reducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case 'OPEN_MENU': {
            return {
                ...state,
                isMenuOpen: true
            }
        }

        case 'CLOSE_MENU': {
            return {
                ...state,
                isMenuOpen: false
            }
        }

        default:
            return state;
    }
}