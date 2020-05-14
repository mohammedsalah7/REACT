import styled from 'styled-components'
export const AboutSection = styled.div`
    height: 600px;
    background-image: url('images/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed
`

export const AboutInfo = styled.div`
    padding-top: 100px;
    padding-left:1px;
    width: 50%;
    float: left;
`

export const InfoTitle = styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin:15px 0;
    color:#fff;
`

export const Span = styled.span`
    font-weight: normal;
    color:#fff;
`

export const InfoDir = styled.h4`
    font-size: 40px;
    color:#fff;
    margin-top:15px;
    margin-bottom: 20px
`

export const InfoDesc = styled.p`
    color: #fff;
    margin-bottom: 15px;
    line-height: 1.8
`

export const Anchor = styled.a`
    text-decoration: none
`