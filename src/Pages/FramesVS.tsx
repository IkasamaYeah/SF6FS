/** @jsxImportSource @emotion/react */

import { rashidDetails , rashidMoves } from '../Components/CharacterData/Rashid/RashidData'
import { cammyDetails , cammyMoves } from '../Components/CharacterData/Cammy/CammyData'
import { lilyDetails , lilyMoves } from '../Components/CharacterData/Lily/LilyData'
import { zangiefDetails , zangiefMoves } from '../Components/CharacterData/Zangief/ZangiefData'
import { jpDetails , jpMoves } from '../Components/CharacterData/JP/JPData'
import { marisaDetails , marisaMoves } from '../Components/CharacterData/Marisa/MarisaData'
import { manonDetails , manonMoves } from '../Components/CharacterData/Manon/ManonData'
import { deejayDetails , deejayMoves } from '../Components/CharacterData/DeeJay/DeeJayData'
import { ehondaDetails , ehondaMoves } from '../Components/CharacterData/E.Honda/E.HondaData'
import { dhalsimDetails , dhalsimMoves } from '../Components/CharacterData/Dhalsim/DhalsimData'
import { blankaDetails , blankaMoves } from '../Components/CharacterData/Blanka/BlankaData'
import { kenDetails, kenMoves } from '../Components/CharacterData/Ken/KenData'
import { juriDetails, juriMoves } from '../Components/CharacterData/Juri/JuriData'
import { kimberlyDetails , kimberlyMoves } from '../Components/CharacterData/Kimberly/KimberlyData'
import { guileDetails , guileMoves } from '../Components/CharacterData/Guile/GuileData'
import { chunliDetails , chunliMoves } from '../Components/CharacterData/Chun-Li/ChunLiData'
import { jamieDetails , jamieMoves } from '../Components/CharacterData/Jamie/JamieData'
import { lukeDetails , lukeMoves } from '../Components/CharacterData/Luke/LukeData'
import { ryuDetails , ryuMoves } from '../Components/CharacterData/Ryu/RyuData'
import styled from '@emotion/styled'
import { useState } from 'react'
import { VSImageWrapper } from '../Components/FramesVS/VSImageWrapper'
import { ChooseCondition } from '../Components/FramesVS/ChooseCondition'
import Arrow from '../Components/CharacterData/CommandImages/hold-left-icon.png'
import { css } from '@emotion/react'

const StyledFramesVS = styled.div`
`

const StyledArrow = css`
`

const ReversedAttacker = css`
  rotate: 180deg;
`

const StyledP1ConditionWrapper = styled.div`
`

const StyledP2ConditionWrapper = styled.div`
`

export default function FramesVS(){
  const [p1Character ,setP1Character] = useState("Rashid")
  const p1CharacterHandler = (e:React.ChangeEvent<HTMLSelectElement>) => setP1Character(e.target.value)
  const [p2Character , setP2Character ] = useState("Rashid")
  const p2CharacterHandler = (e:React.ChangeEvent<HTMLSelectElement>) => setP2Character(e.target.value)
  const [reverseAttacker , setReverseAttacker] = useState(false)
  const toggleReverse = () => setReverseAttacker(!reverseAttacker)
  const [ p1Condition , setP1Condition] = useState("block")
  const p1ConditionHandler = (e:React.ChangeEvent<HTMLSelectElement>) => setP1Condition(e.target.value)
  const [ p2Condition , setP2Condition] = useState("block")
  const p2ConditionHandler = (e:React.ChangeEvent<HTMLSelectElement>) => setP2Condition(e.target.value)
  const [ p1Moves , setP1Moves ] = useState(["通常技","特殊技","必殺技","スーパーアーツ","投げ"])
  const p1MovesHandler = (e:React.ChangeEvent<HTMLInputElement>) => e.target.checked? setP1Moves([...p1Moves,e.target.value]) : setP1Moves(p1Moves.filter(p1Move => p1Move.match(e.target.value) === null))
  const [ p2Moves , setP2Moves ] = useState(["通常技","特殊技","必殺技","スーパーアーツ","投げ"])
  const P2MovesHandler = (e:React.ChangeEvent<HTMLInputElement>) => e.target.checked? setP2Moves([...p2Moves , e.target.value]) : setP2Moves(p2Moves.filter(p2Move => p2Move.match(e.target.value) === null))
  
  type CharacterData = {
    details:{
      name:string;
      strongpoints:string[];
      weakpoints:string[];
      topImage:string;
      p1Image:string;
      p2Image:string;
    }
    moves:{
      [key:string]: string|string[]|number|number[],
      type:string
      commands:string[]
      movesName:string
      movesCondition:string
      startup:any
      active:any
      recovery:any
      hit:any
      block:any
      cancel:any
      tips:string[]
      hitboxImage:string 
    }[]
  }

  const characterDataMap:Record<string , CharacterData> = {
    juri: { details: juriDetails, moves: juriMoves },
    ken: { details: kenDetails, moves: kenMoves },
    cammy: { details: cammyDetails, moves: cammyMoves },
    jp: { details: jpDetails, moves: jpMoves },
    zangief: { details: zangiefDetails, moves: zangiefMoves },
    lily: { details: lilyDetails, moves: lilyMoves },
    manon: { details: manonDetails, moves: manonMoves },
    marisa: { details: marisaDetails, moves: marisaMoves },
    deejay: { details: deejayDetails, moves: deejayMoves },
    honda: { details: ehondaDetails, moves: ehondaMoves },
    dhalsim: { details: dhalsimDetails, moves: dhalsimMoves },
    blanka: { details: blankaDetails, moves: blankaMoves },
    kimberly: { details: kimberlyDetails, moves: kimberlyMoves },
    guile: { details: guileDetails, moves: guileMoves },
    chunli: { details: chunliDetails, moves: chunliMoves },
    jamie: { details: jamieDetails, moves: jamieMoves },
    luke: { details: lukeDetails, moves: lukeMoves },
    ryu: { details: ryuDetails, moves: ryuMoves },
    rashid: { details: rashidDetails, moves: rashidMoves },
  }

  const selectedP1CharacterData = characterDataMap[p1Character.toLowerCase()]
  const selectedP2CharacterData = characterDataMap[p2Character.toLocaleLowerCase()]

  const pickedP1Details = selectedP1CharacterData.details
  const pickedP1Moves = selectedP1CharacterData.moves

  const pickedP2Details = selectedP2CharacterData.details
  const pickedP2Moves = selectedP2CharacterData.moves

  return(<>
    <StyledFramesVS>
      {pickedP1Details&&pickedP2Details&&
      <VSImageWrapper pickedP1Details={pickedP1Details}
                      pickedP2Details={pickedP2Details}/>}
      {p1CharacterHandler&&p2CharacterHandler&&pickedP1Moves&&pickedP2Moves&&
      <ChooseCondition  pickedP1Moves={pickedP1Moves}
                        pickedP2Moves={pickedP2Moves}
                        p1CharacterHandler={p1CharacterHandler}
                        p2CharacterHandler={p2CharacterHandler}/>}
      <p>which one is attacking?</p>
      <img src={Arrow} alt="" onClick={toggleReverse} css={[StyledArrow , reverseAttacker&&ReversedAttacker]}/>
      <StyledP1ConditionWrapper>
        <select onChange={p1ConditionHandler}>
          <option value="block">ガード</option>
          <option value="hit">ヒット</option>
          <option value="chit">カウンターヒット</option>
          <option value="pchit">パニッシュカウンター</option>
        </select>
      </StyledP1ConditionWrapper>
      <StyledP2ConditionWrapper>
        <input type='checkbox' value='通常技' id='normal' onChange={P2MovesHandler} defaultChecked/>
          <label htmlFor='normal'>通常技</label>
        <input type='checkbox' value='特殊技' id='unique' onChange={P2MovesHandler} defaultChecked/>
          <label htmlFor='unique'>特殊技</label>
        <input type='checkbox' value='必殺技' id='special' onChange={P2MovesHandler} defaultChecked/>
          <label htmlFor='special'>必殺技</label>
        <input type='checkbox' value='スーパーアーツ' id='sa' onChange={P2MovesHandler} defaultChecked/>
          <label htmlFor='sa'>スーパーアーツ</label>
        <input type='checkbox' value='投げ' id='throw' onChange={P2MovesHandler} defaultChecked/>
          <label htmlFor='throw'>投げ</label>
        <select>
          {pickedP2Moves?.filter(pickedP2Move => p2Moves.includes(pickedP2Move.type))
          .map(pickedP2Move =>
            <option value={pickedP2Move.movesName}>{pickedP2Move.movesName}</option>
            )}
        </select>
      </StyledP2ConditionWrapper>
    </StyledFramesVS>
  </>)
}