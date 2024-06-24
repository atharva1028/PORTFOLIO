import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Atharva",
    lastName: "Satankar",
    initials: "as", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Front End Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Indore, M.P'
        },
        // {
        //     emoji: "💼",
        //     text: "Systems Engineer at Google"
        // },
        {
            emoji: "📧",
            text: "satankaratharva@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://github.com/atharva1028",
        //     icon: "fa fa-file",
        //     label: 'github'
        // },
        {
            link: "https://github.com/atharva1028",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/atharva-satankar-a4a3b9225/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Atharva Satankar. a dedicated Front-End Developer with a passion for creating visually stunning and highly functional websites. With a strong foundation in HTML, CSS, Bootstrap and JavaScript, along with expertise in frameworks like React-Js, I specialize in crafting responsive, user-friendly interfaces that provide seamless experiences across all devices. My approach combines technical excellence with a keen eye for design, ensuring every project I work on not only meets but exceeds client expectations. Let's connect and bring your digital vision to life!",
    skills:
        {
            proficientWith: ['javascript', 'react-js', 'git', 'github', 'bootstrap-5', 'html-5', 'css-3', 'figma'],
            exposedTo: ['next-js', 'python', 'my-sql','c']
        }
    ,
    hobbies: [
        {
            label: 'Chess',
            emoji: '♟️'
        },
        {
            label: 'blogging',
            emoji: '🎥'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "EyeBeam",
            live: "https://eyebeambyatharva.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
         
            image: mock1
        },
        {
            title: "KBC",
            live: "https://kbcbyatharva.netlify.app/",
          
            image: mock2
        },
        {
            title: "DreamsCricket",
            live: "https://dreamscricketbyatharva.netlify.app/",
           
            image: mock3
        },
        {
            title: "Consulting",
            live: "https://consultingbyatharva.netlify.app/",
            image: mock4
        },
       
    ]
}