import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useState } from 'react';
import Julekule from './Julekule';
import { getRandomFromArray, isOdd } from '../utils';



const StyledLuke = styled.div`
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
   
`;

export const ÅpenLuketekst = styled.span`
    color: white;
    font-size: 1.25rem;
`;

export const StengtLuketekst = styled.span<{nummer: number}>`
    color: white;
    font-size: 1rem;
    
    padding: 2rem 1rem 1rem;
    text-align: center;
    transform: ${props => isOdd(props.nummer) ? 'rotate( 5deg )' :'rotate( -5deg )' };
     
`;


const StyledLink = styled(Link)`
    text-decoration: none;
    transition: .3s;
    &:hover {
      transform: scale(1.1);
      
      ${ÅpenLuketekst} {
         transition-duration: 2s;
         transition-property: transform;
         transform: rotate(360deg);  
      }
    }
`;


const straffer = [
    'knebøy',
    'pushups',
    'situps', 'utfall', 'burpees',
    'spensthopp'
]

const Luke = (props: { nummer: number}) => {

    const [lukeErÅpen, setLukeErÅpen] = useState(true)

    const onLukeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const currentDate = new Date();
        const openDate = new Date(2020, 10, props.nummer);
        if(openDate > currentDate) {
            setLukeErÅpen(false);
            e.preventDefault();
        }
    }
    return (
        <StyledLink onClick={(e) => onLukeClick(e)} to={props.nummer.toString()}>
            <Julekule nummer={props.nummer}>
                {lukeErÅpen ?
                    <ÅpenLuketekst>
                        Luke {props.nummer}
                    </ÅpenLuketekst> :
                    <StengtLuketekst nummer={props.nummer}>
                        Nå var du litt tidlig ute! 10 straffe-{straffer[getRandomFromArray( straffer.length)]} mens du venter til {props.nummer}. desember
                    </StengtLuketekst>
                }
            </Julekule>
        </StyledLink>
    );
}
export default Luke;
