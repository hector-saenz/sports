const About = () => {
    const view = `
        <div class="about container">
            <h1 class="about__title">About</h1>
            <div class="about__content-wrapper">
                <p class="about__message">
                    <i>"Practice doesn't make perfect. Practice reduces the imperfection."</i> - <strong>Toba Beta</strong>
                    </br>
                    </br>
                    In the fast-changing environment of technology, it's extremely hard to keep up with all the existent technologies,
                    and even more master them all. Therefore, the only plausible solution to achieve a great level of understanding is nothing
                    more but practicing.
                    </br>
                    </br>
                    The purpose of this webpage is to help me practice the concepts I've learned about HTML, CSS and Javascript. In order to start
                    putting into practice my knowledge, I decided that a good option would be to make a Single Page Application without
                    frameworks, only vanilla Javascript. Additionally, to make the application more dynamic, I used the API from 
                    <a target="_blank" class="about__message-link" href="https://thesportsdb.com">The Sports DB</a>, which resulted extremely useful and easy to use. 
                    </br>
                    </br>
                    Hopefully, I would be adding features and fixing bugs, so the application won't be forgotten. 
                    </br>
                    </br>
                    - <a target="_blank" class="about__message-link" href="https://github.com/hector-saenz">Héctor Sáenz</a>
                </p>
            </div>
        </div>
    `
    return view
}

export default About