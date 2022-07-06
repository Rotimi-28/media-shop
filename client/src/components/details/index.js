import styled, { css } from "styled-components"

function Detail(prop)
{
    const { image, title, price, decription} = prop;
    
    
    const Wrapper = styled.div`
    display: flex;
    flex-duration: column;
    justfy-content: center
    margin-top: 50px;
    `;
    
    const Container = styled.div`
    display: flex;
    flex-duration: column;
    justfy-content: center
    align-items: center;
    padding; 5px;
    border-bottom: 1px
    width: 50%;
    `;

    const CardBody = styled.div`
     display: flex;
    `;

    const Card = styled.div`
    display: flex;
    flex-duration: column;
    align-items: center;
    margin-left: 10px;
    margin-top: 30px;
    border-top: 5px solid #FD515;
    width: 80%;
    `;

    const H4  = styled.h4`
        margin- left: 30px;
    `;

    const H3  = styled.h3`
        margin- left: 30px;
    `;
    

    const BuyBtn = styled.button`
    font-size:16px;
    border-radius 20px;
    height: 20px;
    margin-left:5px;
    outline:none;
    cursor:pointer;
    background-color: #FDB515
    box-shadow: 3px 3px;
    color:#000;
    white-space: nowrap;
    `;

    const BidBtn = styled.button`
        font-size:16px;
        border-radius 20px;
        height: 20px;
        margin-left:5px;
        outline:none;
        cursor:pointer;
        background-color: #3B7EA1;
        box-shadow: 3px 3px;
        white-space: nowrap;
        `;

        const Input = styled.input.attrs({ type: "number" })`
        font-size:16px;
        border-radius 20px;
        height: 20px;
        margin-left:5px;
        margin-right;15px;
        outline:none;
        cursor:pointer;
        background-color: #3B7EA1;
        box-shadow: 3px 3px;
        text-align:center;
        `;

        return (
            <Wrapper>
                <Container>
                    <Image/>
                    <Card>
                        <CardHead>
                            <h3>{title}<h3>${price}</h3></h3><BuyBtn>Buy Now</BuyBtn>
                            <H4><span className="fa">&#xf201;</span> $20</H4><BidBtn>Bid</BidBtn><Input placeholder="$21" step="1" min="21"></Input> 
                        </CardHead>
                        <CardBody>
                            <p>{decription}</p>
                        </CardBody>
                    </Card>
                </Container>
            </Wrapper>
        )
}


export default Detail;