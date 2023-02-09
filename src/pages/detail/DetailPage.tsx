import styled from "@emotion/styled";
import { Transition } from 'react-transition-group';
import { useRef } from 'react';

const DetailWrap = styled.div`
    position:absolute;
    left:0;
    right:0;
    bottom:-100%;
    height:calc(100% - 64px);
`

const DetailPage = () => {
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in timeout={150} appear>
            {(state) => (
                <DetailWrap ref={nodeRef} className={`detail-${state}`}>DetailPage</DetailWrap>
            )}
        </Transition>
    )
}

export default DetailPage;