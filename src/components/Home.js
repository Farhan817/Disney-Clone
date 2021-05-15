import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney.';
import Orignals from './Orignals';
import Recomends from './Recomends';
import Trending from './Trending';
import Viewers from './Viewers';

const Home = (props) => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recomends />
            <NewDisney />
            <Orignals />
            <Trending/>
        </Container>)

}
const Container = styled.div`
position:relative;
min-height:calc(100vh - 250px);
background: url("/images/home-background.png") center center no-repeat fixed;
overflow-x:hidden;
display:block;
top:72px;
padding:0 calc(3.5vw + 5px);

&:after{
    position: absolute;
    inset:0px;
    opacity:1;
    z-index:-1;
    
}
`;




export default Home;