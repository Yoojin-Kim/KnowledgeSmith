import React, { useState } from "react";
import "../../App.css";
import Text from "../../components/Text";

import * as colors from '../../data/constants';

import './landing.css';

const LandingPage = ({history}) => {
  const [language, setLanguage] = useState('ko');


  return (
    <div style={{display: 'flex', flex: 1}}>
        <div className="background" style={{marginBottom: 200}}>
            <Text size={40} bold color={'pink'}>
                Knowledgesmith
            </Text>
            <div style={{display: "flex", width: '100%', justifyContent: 'space-between'}} >
                <Text size={12} color={'pink'}>
                지식 세공사:
                </Text>
                <Text size={12} color={'pink'}>
                분류의 기술
                </Text>
            </div>
            <div className="line" style={{marginTop: 12}} />

            <div className="landing-content">
                <Text size={24} bold color={'pink'}>
                    About
                </Text>

                <div className="landing-text">
                    <div className="ko">
                        <Text size={12} bold color={'pink'}>
                            분류의 게임을 디자인해보았다. 분류의 제목을 보고 내용을 예상하는 것, 
                            계획적으로 분류에 분류를 더해 정교한 검색 결과를 의도하는 것, 
                            의도 속에서 발생하는 선택과 폐기라는 것이 게임 속에서 반복된다. 
                        </Text>
                        <Text size={12} bold color={'pink'} style={{marginTop: 20}}>
                            당신은 분류의 기술로 정보와 지식을 다듬는 세공사가 된다. 
                            지식 세공사로서 당신의 목표는 단 하나의 검색 결과를 표시하는 5개의 분류를 선정하는 것이다. 
                            뻔하디뻔한 위키피디아지만, 연습하다 보면 당신도 지식정보사회 속에서 필요한 어떤 지혜를 얻을 수 있지 않을까? 
                        </Text>
                    </div>

                    <div className="en">
                        <Text size={12} bold color={'pink'}>
                           Here is a classification game. 
                           Expecting from the title of the classification, 
                           intentionally adding classification to the classification and intending a sophisticated result, 
                           and the choices and discards that occur within the intention are repeated in this play.
                        </Text>
                        <Text size={12} bold color={'pink'} style={{marginTop: 20}}>
                            You become a craftsman who refines information and knowledge with the art of classification. 
                           As a knowledgesmith, your goal is to select 5 categories that display only one search result. 
                           It's obvious Wikipedia, but if you practice, you might get a kind-of wisdom you can use in the knowledge and information society?
                        </Text>
                    </div>
                </div>
                <Text size={24} bold color={'pink'} style={{marginTop: 16}}>
                    Credit
                </Text>
                <div className="landing-text">
                    <div className="role">
                        <Text size={12} bold color={'pink'}>기획</Text>
                        <Text size={12} bold color={'pink'}>Game Design</Text>

                        <Text size={12} bold color={'pink'} style={{marginTop: 20}}>디자인</Text>
                        <Text size={12} bold color={'pink'}>UI Design</Text>

                        <Text size={12} bold color={'pink'} style={{marginTop: 20}}>개발</Text>
                        <Text size={12} bold color={'pink'}>Web Dev</Text>
                    </div>

                    <div className="name">
                        <Text size={12} bold color={'pink'}>정승기</Text>
                        <Text size={12} bold color={'pink'}>Seungki</Text>

                        <Text size={12} bold color={'pink'} style={{marginTop: 20}}>이찬우</Text>
                        <Text size={12} bold color={'pink'}>Chanu</Text>

                        <Text size={12} bold color={'pink'} style={{marginTop: 20}}>김유진</Text>
                        <Text size={12} bold color={'pink'}>Yoojin</Text>
                    </div>
                </div>

            </div>

            
        </div>

        <div className="landing-pc-floating">
             <div className="landing-floating language" style={{justifyContent: 'space-between'}}>
                <div className="styled-btn" 
                onClick={()=>setLanguage('en')}
                style={{height: 32, backgroundColor: language === 'en' ? colors.pink : colors.green}}>
                <Text size={12} bold color={language === 'en' ? 'green' : 'pink'}>English</Text>
                </div>
                <div className="styled-btn"
                onClick={()=>setLanguage('ko')}
                style={{height: 32, backgroundColor: language === 'ko' ? colors.pink : colors.green}}>
                <Text size={12} bold color={language === 'ko' ? 'green' : 'pink'}>한국어</Text>
                </div>
            </div>

            <div className="landing-floating">
                <div className="styled-btn" onClick={() => {history.push(`/game/${language}`)}}>
                <Text size={24} bold color={'pink'}>Start Crafting</Text>
                </div>
            </div>
        </div>


    </div>
  )
}

export default LandingPage;