import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/react';
import Navegacion from './Navegacion';

const Header = () => {

    //consulta para mostrar el logo
    const {logo} = useStaticQuery(graphql`
        query{
            logo: file(relativePath: {eq: "logo.svg"}, extension: {eq: "svg"}) {
                publicURL
                size
            }
        }
      
    `);
    console.log(logo);

    return ( 
        <header
            css={css`
                background-color: #3c6886;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    nax-width: 120rem;
                    margin: 0 auto;
                    text-align: center;

                    @media (min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Link to={'/'}>
                    <img src={logo.publicURL} alt="logotipo hotel"/>
                </Link>

                <Navegacion/>
            </div>
        </header>
     );
}
 
export default Header;