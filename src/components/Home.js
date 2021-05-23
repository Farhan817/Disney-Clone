import styled from 'styled-components';
import firebase from "firebase";
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney.';
import Orignals from './Orignals';
import Recomends from './Recomends';
import Trending from './Trending';
import Viewers from './Viewers';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movies/moviesSlice";
import { selectUserName } from "../features/user/userSlice";


const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let orignals = [];
    let trendings = [];


    useEffect(() => {
        db.collection('movie').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case "recomend":
                        recommends = [...recommends, { id: doc.id, ...doc.data() }]
                        break;
                    case "new":
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
                        break;
                    case "orignal":
                        orignals = [...orignals, { id: doc.id, ...doc.data() }]
                        break;
                    case "trending":
                        trendings = [...trendings, { id: doc.id, ...doc.data() }]
                        break;
                }
            });
            dispatch(setMovies({
                recomend: recommends,
                newDisney: newDisneys,
                orignal: orignals,
                trending: trendings,
            }, [userName]));




        });




    })

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recomends />
            <NewDisney />
            <Orignals />
            <Trending />
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