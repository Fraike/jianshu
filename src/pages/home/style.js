import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;

`
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    margin-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }

`
export const HomeRight = styled.div`
    width: 280px;
    float: right;

`


export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    backdround: #f7f7f7;
    line-height: 32px;
    margin-left:18px;
    margin-bottom: 18px;
    padding-right: 10px;
    height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        
    }


`;
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;
export const ListInfo = styled.div`
    width: 490px;
    float: left;
    padding-right: 10px;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333
    }
    .desc {
        color: #999;
        line-height: 24px;
        font-size: 13px;
        margin: 0 0 8px;
    }
`;

export const RecommedWrapper = styled.div`
    margin-top: 30px;
    width:280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
    background: url(${(props)=> props.imgUrl});
    background-size: contain;
`;

export const LoadMore =styled.div`
    width: 100%;
    height:40px;
    margin: 30px 0;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;
export const BackTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;

`