import styled from 'styled-components';

interface NavStyledProps {
    isOpen: boolean;
}

export const Nav = styled.nav`
    display: flex;
    transform: ${(props: NavStyledProps) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    height: 5rem;
    background-color: #fff; 
    color: #000;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 150px;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    transition: transform 0.3s ease-in-out;
`;
export const NavBrand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 0
`;
