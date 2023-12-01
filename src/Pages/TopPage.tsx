import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import Top from '../images/sf6-recommended-pcs-kv.png'

const StyledTopPage = styled.div`
  padding-top: 80px;
  padding-bottom: 2.5vw;
  background-image: url(${Top});
  background-size: cover;
  color: #ffffff;
  text-shadow: 3px 3px 10px #000000;
`

const StyledColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 18vw 3vw;
  column-gap: 0.8vw;
  row-gap: 2vw;
  margin-left:2vw;
  margin-right: 2vw;
  margin-top: 5vw;
`

const StyledTopH1 = styled.h1`
  text-align: center;
  font-size: 3vw;
  font-family: "Anton",sans-serif;
`

const StyledTopH2 = styled.h2`
  text-align: center;
  font-size: 1.6vw;
  font-family: "Anton",sans-serif;
  padding-top: 1.5vw;
`

const StyledTopH3 = styled.h3`
position: relative;
font-family: "Anton",sans-serif;
letter-spacing: 0.3vw;
margin-bottom: 1vw;
font-size: 2vw;
&::first-letter{
  font-size:120%;
}
&:after{
  content: "";
  position: absolute;
  bottom: -0.4vw;
  left: 0px;
  width: 2.5vw;
  height: 0.3vw;
  border-radius: 3px;
  background: #ffffff;
}
`

const StyledTopP = styled.p`
text-align: center;
font-size: 0.8vw;
font-family: "Noto Sans JP",sans-serif;
padding-top: 1.2vw;
`

const StyledColumnP = styled.p`
line-height: 1.3em;
font-size: 1vw;
font-family: "Noto Sans JP",sans-serif;
margin-bottom: 1vw;

`

const StyledButton = styled.button`
  display: block;
  margin: auto;
  width: 5vw;
  height: 2vw;
  font-size: 0.8vw;
  font-family: "PT Sans",sans-serif;
  font-weight: bold;
  color: #000000;
  background-color: #b9b9b9;
  border:none;
  border-bottom: 5px solid #999999;
  &:hover{
  margin-top: 3px;
  color: #ffffff;
  background: #424242;
  border-bottom: 2px solid #6b6b6b;
}
`

const StyledSubheading = styled.div`
  position: relative;
  padding: 2em;
  background:rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  &::before,
  &:after{
    content: '';
    width: 20px;
    height: 30px;
    position: absolute;
    display: inline-block;
  }
  &::before{
    border-left: solid 1px #fffb0092;
    border-top: solid 1px #fffb0092;
    top: 0;
    left: 0;
  }
  &::after{
    border-right: solid 1px #fffb0092;
    border-bottom: solid 1px #fffb0092;
    bottom: 0;
    right: 0;
  }
`


function TopPage() {
  return (
    <StyledTopPage>
      <StyledSubheading>
        <StyledTopH1>Welocome to SF6FS</StyledTopH1>
        <StyledTopH2>About this website</StyledTopH2>
        <StyledTopP>SF6のフレームやヒットボックス等、確認が面倒だったりすぐに確認しづらいデータを簡略にまとめ閲覧することが可能な攻略系ウェブサイトです。</StyledTopP>
      </StyledSubheading>
      <StyledColumnWrapper>
        <StyledSubheading>
          <StyledTopH3>Characters</StyledTopH3>
          <StyledColumnP>キャラクターを一覧から選択し<br />通常技等のフレームデータを確認できます。<br />また、技名部分をクリックすることで<br />その技のヒットボックスの参照GIFを閲覧することも可能です。</StyledColumnP>
        </StyledSubheading>
        <StyledSubheading>
          <StyledTopH3>FramesVS</StyledTopH3>
          <StyledColumnP>防御側キャラクターと攻撃側キャラクターを選択し<br />攻撃側の行動(立ち弱P等)を選択することで<br />不利フレームから確定する技を一覧表示させることができます。</StyledColumnP>
        </StyledSubheading>
        <StyledSubheading>
          <StyledTopH3>Tier</StyledTopH3>
          <StyledColumnP>最新の情報を参考にTierランキングを表示します。</StyledColumnP>
        </StyledSubheading>
        <StyledSubheading>
          <StyledTopH3>Tips</StyledTopH3>
          <StyledColumnP>SF6をプレイするにあたって<br />便利な情報等を掲載していくページです。</StyledColumnP>
        </StyledSubheading>
        <Link to="/characters"><StyledButton>VIEW</StyledButton></Link>
        <Link to="/framesvs"><StyledButton>VIEW</StyledButton></Link>
        <Link to="/tier"><StyledButton>VIEW</StyledButton></Link>
        <Link to="/tips"><StyledButton>VIEW</StyledButton></Link>
      </StyledColumnWrapper>
    </StyledTopPage>
  );
}

export default TopPage;
