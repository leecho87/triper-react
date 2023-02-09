import styled from "@emotion/styled";
import { Transition } from 'react-transition-group';
import { useRef } from 'react';

const SearchWrap = styled.div`
  position:absolute;
  right:-100%;
  top:0;
  width:100%;
  height:calc(100% - 64px);
`

const SearchPage = () => {
    const nodeRef = useRef(null);
    return (
        <Transition nodeRef={nodeRef} in timeout={150} appear>
            {state => (
                <SearchWrap ref={nodeRef} className={`search-${state}`}>SearchPage</SearchWrap>
            )}
        </Transition>
    )
}

export default SearchPage;