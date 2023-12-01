/** @jsxImportSource @emotion/react */

import {useState} from "react"
import Logo from "./h_logo.png"
import styled from "@emotion/styled"
import {Link} from "react-router-dom"
import { css } from "@emotion/react"

const StyledHeader = styled.div `
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 60px;
  font-family: "Anton",sans-serif;
`

const StyledHeaderInner = styled.div`
  position: relative;
  display: flex;
  height :60px;
  background: linear-gradient(rgba(0,0,0,80%),rgba(0,0,0,50%));
  align-items: center;
  padding-left: 3vw;
  padding-right: 3vw;

  @media (max-width:900px){
    height: 100%;
    justify-content: space-between;
  }
`

const StyledHeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media(max-width:900){
    display: flex;
    align-items: center;
  }
`

const StyledHeaderLogo = styled.img`
  width:200px;
  align-items: center;
`
const StyledHumbergerWrapper = styled.div`
@media(max-width:900px){
  padding-top:12px;
}
`

const StyledToggleIcon = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
`

const StyledHumbergerButton = styled.span`
  background: #ddd;
  height: 3px;
  width: 40px;
  position: relative;
  transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
  display: none;

  @media(max-width:900px){
    display: block;
  }

  &:before {
    content: '';
    top:9px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    background: #ddd;
    transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
  }

  &:after {
    content: '';
    bottom:9px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    background: #ddd;
    transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
  }
`

const StyledToggleMenu = styled.input`
  display: none;
  &:checked ~ ${StyledToggleIcon} ${StyledHumbergerButton}:before{
    transform: rotate(-45deg);
  }
  &:checked ~ ${StyledToggleIcon} ${StyledHumbergerButton}:after{
    transform: rotate(45deg);
  }
  &:checked ~ ${StyledToggleIcon}:not(.steps) ${StyledHumbergerButton}:before{
    top: 0;
  }
  &:checked ~ ${StyledToggleIcon}:not(.steps) ${StyledHumbergerButton}:after{
    bottom: 0;
  }
  &:checked ~ ${StyledToggleIcon} ${StyledHumbergerButton} {
    background: rgba(0, 0, 0, 0);
    transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
  }
`

const StyledHeaderNav = css`
  @media(max-width:900px){
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background:linear-gradient(rgba(0,0,0,62%),rgba(0,0,0,50%));
    opacity: 0.8;
    padding-bottom: 20px;
    display: none
  }
`
const isShow = css`
  @media(max-width:900px){
    display: block;
  }
`

const StyledHeaderUl = styled.ul`
  display:flex;
  padding-top: 15px;

  @media(max-width:900px){
    display: block;
    text-align: center;
  }
`

const StyledHeaderLi = styled.li`
  font-size: 1vw;
  letter-spacing: 0.1vw;
  color: #fffb00;
  margin-left: 2vw;
  margin-right: 2vw;
  &:hover{
    color: #afac01;
  } 

  @media(max-width:900px){
    margin-top:10px;
    :first-child{
      margin-top: 0px;
    }
  }
`



export function Header () {
  const[open,setOpen] = useState(false)
  return (<>
    <StyledHeader>
      <StyledHeaderInner>
        <StyledHeaderContent>
          <Link to="/"><StyledHeaderLogo src={Logo} alt="SF6FS" /></Link>
          <StyledHumbergerWrapper>
            <StyledToggleMenu type="checkbox" id="open-menu" onClick={() => setOpen(!open)}/>
              <StyledToggleIcon htmlFor="open-menu"><StyledHumbergerButton></StyledHumbergerButton></StyledToggleIcon>
          </StyledHumbergerWrapper>
            <nav css={[StyledHeaderNav , open && isShow]}>
              <StyledHeaderUl>
                <StyledHeaderLi><Link to="/characters">Characters</Link></StyledHeaderLi>
                <StyledHeaderLi><Link to="/framesvs">FramesVS</Link></StyledHeaderLi>
                <StyledHeaderLi><Link to="/tier">Tier</Link></StyledHeaderLi>
                <StyledHeaderLi><Link to="/tips">Tips</Link></StyledHeaderLi>
              </StyledHeaderUl>
            </nav>
        </StyledHeaderContent>
      </StyledHeaderInner>
    </StyledHeader>
  </>)
}