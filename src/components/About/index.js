import React  from 'react';
import { AboutSection , AboutInfo , InfoTitle , InfoDir , InfoDesc , Span  } from './style.js'

const About = () => {
    return (
        <AboutSection>
            <div class="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                    I am Muhammad Salah Computer Systems Engineer Al-Azhar University,
                     I am 23 years old, I work as a web developer and  Fornt-End   
                                      </InfoDesc>
                    
                </AboutInfo>
            </div>
        </AboutSection>
    )
}

export default About;