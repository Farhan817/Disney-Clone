import styled from 'styled-components';

const  Login = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoone src="/images/cta-logo-one.svg"/>
                    <SignUp>Get All</SignUp>
                    <Description>
                        Est sunt sit mollit sunt aliqua nisi fugiat in velit minim ea mollit sint. Exercitation duis quis velit esse sunt enim ipsum pariatur eiusmod laborum reprehenderit amet excepteur. Cupidatat non commodo officia consequat do deserunt. 
                    </Description>
                    <CTALogotwo src ='/images/cta-logo-two.png'/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    )
};

    const Container =  styled.section`
        overflow:hidden;
        display:flex;
        flex-direction:column;
        text-align:center;
        height:100vh;
        `;
    const Content =  styled.div`
        margin-bottom:10vw;
        width:100%;
        position:relative;
        min-height:100vh;
        box-sizing:border-box;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding:80px 40px;
        height:100%;
    `;
    const BgImage= styled.div`
    height:100%;
    background-size:cover;
    background-image:url("/images/login-background.jpg");
    position:absolute;
    top:0;
    left:0;
    right:0;
    z-index:-1;
    `;

    const CTALogoone = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;
    flex-direction:column;
    `;
    const CTA = styled.div`
    margin-bottom:2vw;
    max-width:650px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:0;
    align-items:center;
    text-align:center;
    margin-right:auto;
    flex-wrap:wrap;
    margin-left:auto;
    transition-timing-function:ease-out;
    transition:opacity 0.2s;
    width:100%;
    `;
    const SignUp = styled.a`
        font-weight:bold;
        color:#f9f9f9;
        background-color: #0063e5;
        margin-bottom :12px;
        width:100%;
        letter-spacing:1.5px;
        font-size:18px;
        padding:16.5px;
        border:1px solid transparent;
        border-radius:4px;
        cursor: pointer;
        
        &:hover{
            background-color:#0483ee;
        }
    `;
    const Description=styled.p`
    color:hsla(0,0%,95.3%,1);
    font-size:11px;
    margin:0 0 24px;
    line-height:1.5;
    letter-spacing:1.5px;
    `;
    const CTALogotwo = styled.img`
    max-width:600px;
    margin-bottom:20px;
    dispaly:inline-block;
    vertical-align:center;
    width:100%;
    `;
    
export default Login;