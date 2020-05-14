import React  from 'react';
import './style.css'
const Profile = () => {
    return (
        <div class="profile_skills">
        <div class="container">
            <div class="profile">
                <h2 class="profile-title"><span>My </span>Profile</h2>
                <ul class="profile-list">
                    <li class="profile-item">
                        <span>Name</span>
                        Mohammed Salah
                    </li>
                    <li class="profile-item">
                        <span>Birthday</span>
                        1/7/1996
                    </li>
                    <li class="profile-item">
                        <span>Address</span>
                        Gaza
                    </li>
                    <li class="profile-item">
                        <span>Phone</span>
                        +970 597690750
                    </li>
                    <li class="profile-item">
                        <span>Email</span>
                        mohmsal96@gmail.com
                    </li>
                    <li class="profile-item">
                        <span>Website</span>
                        <span class="web">Soon</span>
                    </li>
                </ul>
            </div>
            
            <div class="skills">
                <h2 class="skills-title"><span> Some skills</span></h2>
                <p class="skills-desc">
                This is a some of my skills in   a Web Developer and Front-End
                </p>
                <div class="bar">
                    <span class="title">Html/CSS</span>
                    <span class="perc">100%</span>
                    <div class="parent">
                        <span class="sp1"></span>
                    </div>
                </div>
                
                <div class="bar">
                    <span class="title">React Js</span>
                    <span class="perc">90%</span>
                    <div class="parent">
                        <span class="sp2"></span>
                    </div>
                </div>
                
                <div class="bar">
                    <span class="title">Photoshop</span>
                    <span class="perc">50%</span>
                    <div class="parent">
                        <span class="sp3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Profile;