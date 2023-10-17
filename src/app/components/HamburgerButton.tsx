'use client'

import { useAppContext } from "@/contexts/app";

const HamburgerButton = () => {
    const { state, dispatch } = useAppContext();

    const toggleHamBtn = () => {
        state.isMenuOpen ?
            dispatch({ type: 'CLOSE_MENU' }) :
            dispatch({ type: 'OPEN_MENU' });
    }

    return (
        <button
            className='flex flex-col justify-around w-6 h-6 bg-transparent z-10 sm:hidden'
            onClick={toggleHamBtn}
        >
            <span  className={`w-6 h-0.5 bg-white/[64] relative origin-[1px] transition-transform duration-300 ease-linear rotate-0 ${state.isMenuOpen && 'rotate-45'}`} />
            <span  className={`w-6 h-0.5 bg-white/[64] relative origin-[1px] transition duration-300 ease-linear opacity-100 translate-x-0 ${state.isMenuOpen && 'opacity-0 translate-x-4'}`} />
            <span  className={`w-6 h-0.5 bg-white/[64] relative origin-[1px] transition-transform duration-300 ease-linear rotate-0 ${state.isMenuOpen && '-rotate-45'}`} />
        </button>
    )
}

export default HamburgerButton;