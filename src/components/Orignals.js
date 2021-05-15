import styled from 'styled-components';
import { Link } from "react-router-dom";


const Orignals = (props) => {
    return (<Container>
        <h4>Orignals</h4>
        <Content>
            <Wrap>
                <Link to="/">
                    <img src="https://picsum.photos/300/300" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/">
                    <img src="https://picsum.photos/300/200" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/">
                    <img src="https://picsum.photos/300/300" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/">
                    <img src="https://picsum.photos/300/200" alt="" />
                </Link>
            </Wrap>
        </Content>
    </Container>
    );
}


const Container = styled.div`
padding: 0 0  26px;


`;
const Content = styled.div`
display:grid;
grid-gap:15px;
gap:25px;
grid-template-columns:repeat(4, minmax(0,1fr));

    @media(max-width:768px){
        grid-template-columns:repeat(2,minmax(0,1fr));
    }
`;
const Wrap = styled.div`
 padding-top:56%;
 border-radius:10px;
 box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 cursor: pointer;
 overflow:hidden;
 position:relative;
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s ;
 border:3px solid grey;
 img{
     inset:0px;
     display:block;
     height:100%;
     width:100%;
     opacity:1;
     object-fit:cover;
     position: absolute;
     transition:opacity 500ms ease-in-out 0s;
     width:100%;
     z-index:1;
     top:0;
 }
 &:hover{
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform:scale(1.05);
    border-color:white;
 }
`;
export default Orignals;