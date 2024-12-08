import village from '../assets/pikatune/village.png';
import battle1 from '../assets/pikatune/battle1.png';
import battle2 from '../assets/pikatune/battle2.png';
import battle3 from '../assets/pikatune/battle3.png';
import building1 from '../assets/pikatune/building1.png';
import building2 from '../assets/pikatune/building2.png';
import building3 from '../assets/pikatune/building3.png';
import building4 from '../assets/pikatune/building4.png';
import friends from '../assets/pikatune/friends.png';
import friends2 from '../assets/pikatune/friends2.png';
import generate1 from '../assets/pikatune/generate1.png';
import pikatune1 from '../assets/pikatune/pikatune1.png';
import pikatune2 from '../assets/pikatune/pikatune2.png';
import playlist from '../assets/pikatune/playlist.png';
import predict1 from '../assets/AlphabetPrediction/predict1.png';
import predict2 from '../assets/AlphabetPrediction/predict2.png';
import predict3 from '../assets/AlphabetPrediction/predict3.png';
import predict4 from '../assets/AlphabetPrediction/predict4.png';
import dog1 from '../assets/bodypawsitive/dog1.png';
import dog2 from '../assets/bodypawsitive/dog2.png';
import dog3 from '../assets/bodypawsitive/dog3.png';
import dog4 from '../assets/bodypawsitive/dog4.png';
import dog5 from '../assets/bodypawsitive/dog5.png';
import dog6 from '../assets/bodypawsitive/dog6.png';
import dog7 from '../assets/bodypawsitive/dog7.png';
import dog8 from '../assets/bodypawsitive/dog8.png';
import dog11 from '../assets/bodypawsitive/dog11.png';
import trebuchet2 from  '../assets/terribletrebuchet/trebuchet2.png';
import trebuchet5 from  '../assets/terribletrebuchet/trebuchet5.png';
import trebuchet8 from  '../assets/terribletrebuchet/trebuchet8.png';
import trebuchet9 from  '../assets/terribletrebuchet/trebuchet9.png';
import robot1 from '../assets/linefollowingrobot/robot1.png';
import robot2 from '../assets/linefollowingrobot/robot2.png';
import robot3 from '../assets/linefollowingrobot/robot3.png';
import robot4 from '../assets/linefollowingrobot/robot4.png';
import robot6 from '../assets/linefollowingrobot/robot6.png';
import robot7 from '../assets/linefollowingrobot/robot7.png';
import circle4 from '../assets/circlemecircleyou/circle4.png';
import circle5 from '../assets/circlemecircleyou/circle5.png';
import circle6 from '../assets/circlemecircleyou/circle6.png';
import flappy2 from '../assets/flappybox/flappy2.png';
import flappy3 from '../assets/flappybox/flappy3.png';
import flappy4 from '../assets/flappybox/flappy4.jpg';
import flappyvid from '../assets/flappybox/flappyvid.mp4';
import box3 from '../assets/flappybox/box3.png';
import pokemon1 from '../assets/pokedex/pokemon1.png';
import pokemon2 from '../assets/pokedex/pokemon2.png';
import pokemon3 from '../assets/pokedex/pokemon3.png';
import pokemon4 from '../assets/pokedex/pokemon4.png';
import pokemon5 from '../assets/pokedex/pokemon5.png';
import pokedex1 from '../assets/pokedex/pokedex1.png';
import board5 from '../assets/designboard/board5.jpeg';
import board1 from '../assets/designboard/board1.png';
import board2 from '../assets/designboard/board2.jpeg';
import board3 from '../assets/designboard/board3.jpeg';
import board4 from '../assets/designboard/board4.jpg';
import ml1 from '../assets/objectdetection/ml1.jpeg';
import ml2 from '../assets/objectdetection/ml2.jpeg';
import objectvid from '../assets/objectdetection/objectvid.mp4';
import app1 from '../assets/bootlegspotify/app1.png';
import app2 from '../assets/bootlegspotify/app2.png';
import app3 from '../assets/bootlegspotify/app3.png';
import app4 from '../assets/bootlegspotify/app4.png';
import page1 from '../assets/wynnmodotcom/page1.png';
import page2 from '../assets/wynnmodotcom/page2.png';
import page3 from '../assets/wynnmodotcom/page3.png';
import juliavid from '../assets/juliafractals/juliavid.mp4';
import ripplesvid from '../assets/ripples/ripplesvid.mp4';
import trebuchetvid from '../assets/terribletrebuchet/trebuchetvid.mp4';
import sounds1 from '../assets/soundsihear/soundsihear1.png';
import sounds2 from '../assets/soundsihear/soundsihear2.png';
import sounds3 from '../assets/soundsihear/soundsihear3.png';
import sounds4 from '../assets/soundsihear/soundsihear4.png';
import argraphic from '../assets/HomeImages/argraphic.png';
import ARdemo from '../assets/HomeImages/ARdemo.png';
import arreality from '../assets/HomeImages/arreality.png';
import arremovetail from '../assets/HomeImages/arremovetail.mp4';
import arPoster from '../assets/HomeImages/arPoster.png';





const ProjectData = [

  {
    ProjectId: "artangible",
    video: arremovetail,
    images: [
      { src: argraphic},
      { src: arreality, caption: "Using the tool through the interfacing camera of an ipad"},
      { src: ARdemo},
      { src: arPoster, caption: "Presentation poster for project"}
    ],

          title: "Tangible AR for data structure learning",
    technologies: "Technologies: Unity, C#, AR Foundation, OpenCV, XCode",
    collab: "In collaboration with Danika Chhour",
    description: (
      <>
        <p>
        We get it - data structures is hard to understand, especially when reading off a textbook. That's why we created an augmented reality (AR) tool. This tool aims to reinforce students' mental models and facilitate their comprehension of data structure concepts by leveraging mobile AR. It allows users to interact with real-world representations of data structures while viewing virtual, abstract information overlaid on top. 
        This tool is developed using Unity Engine with C# and the AR Foundation Framework for mobile AR capabilities. It integrates the OpenCV library for hand and finger tracking, allowing users to interact with real-world objects and enabling the game to develop scenarios based on real-life interactions with the blocks. The game is deployed on iOS devices through XCode, utilizing an iPad Pro mounted on a stand. When users tap colored blocks, the game responds in real time, creating a smooth and interactive AR experience.</p>
      </>
    )
  },


    {
        ProjectId: "pikatune",
        images: [
          { src: village, caption: "Village and main navigation menu"},
          { src: pikatune1, caption: "Account creation starter pokemon selection"},
          { src: pikatune2, caption: "Account creation starter trainer selection"},
          { src: building1, caption: "Pokémart for playlist generation", summary: "POKÉMART: Visit Pokémart to generate your own playlist. You will be prompted to select a Pokemon type you are vibing with. Add up to five artists/songs you enjoy to customise your playlist further. Once the playlist is generated, you can swap and delete songs you dislike, name your playlist and then save it to your account. To view and download your playlist to your own Spotify, email 750@wexfordbedroom.com to get your Spotify account added to permissions!" },
          { src: building2, caption: "Pokémart for playlist management", summary: "POKÉCENTER: Visit the Pokémon Centre to view and edit your generated playlists." },
          { src: building3, caption: "Social tower for adding and managing friends", summary:"SOCIAL TOWER: Visit the Social Tower to view other trainers and add them to your friends list to track their levels!"},
          { src: building4, caption: "Pokémon gym to battle champion cynthia", summary: "POKÉMON GYM: Once you have generated at least one playlist, you can visit the gym to level up your Pokémon. Cynthia, the gym leader, will ask you five randomised questions to test how well you know your generated playlists. Level up before your friends for ultimate bragging rights." },
          { src: generate1, caption: "Selecting songs to base the playlist on"},
          { src: playlist, caption: "Overview of your generated playlist"},
          { src: battle1, caption: "Engaging in a pokémon battle"},
          { src: battle2, caption: "Answering album related questions"},
          { src: battle3, caption: "Quizzing with album covers"},
          { src: friends, caption: "Trainer cards of other players"},
          { src: friends2, caption: "Trainer card details"}
        ],
              title: "Pikatune",
        technologies: "Technologies: Mongo DB, Express, React, Node, Spotify API",
        collab: "In collaboration with Alan Lin, Danika Chhour, Saakshi Hedge, and May Sribunwongsa",
        description: (
          <>
            <p>
            Do you think you’ve caught them all? Well, YOU HAVEN’T! There are still so many tunes to catch out there. PikaTune is a Pokémon-themed playlist generator featuring quiz type pokemon battles and a level up system. 
            This game was built using a MERN stack, and I worked on front-end engineering and UX/UI design (heavily inspired by exisitng Pokémon games). This collaboration was such so fun!
            </p>
          </>
        )
      },

      {
        ProjectId: "bodypawsitive",
        images: [
          { src: dog1, caption: "Landing page for logging in", summary: "" },
          { src: dog2, caption: "Dashboard of pet with analytic information", summary: "" },
          { src: dog3, caption: "Profile of volunteer with dogs under their care", summary: "" },
          { src: dog4, caption: "Weighting system", summary: "" },
          { src: dog5, caption: "List of dogs in database", summary: "" },
          { src: dog6, caption: "List of active users", summary: "" },
          { src: dog7, caption: "Profile of a vet that manages volunteers", summary: "" },
          { src: dog8, caption: "Messaging system", summary: "" },
          { src: dog11, caption: "Software and hardware architecture / technology stack", summary: "" },
        ],
        title: "Body Pawsitive",
        technologies: "Technologies: Mongo DB, Express, React, Node, Raspberry Pico W, C/C++",
        collab: "In collaboration with Alexander Wiseman, Julie Kim, Kian Jazayeri, Lexin Lin, Owen Xu, and Violet Liu",
        description: (
          <>
            <p>
            This capstone project for my Computer Systems course involved a talented, multidisciplinary team comprising two electrical engineers, two software engineers, and three computer systems engineers. Together, we designed and developed a smart scale system specifically tailored for dogs. The system includes a scale equipped with a PCB housing weight sensors and signal conditioning. This PCB is connected to the Raspberry Pi Pico W, which efficiently handles tasks such as signal conversion, taring, stabilization, and power management. The weight data is then transmitted to the MERN stack frontend/backend, where it is displayed and logged on a web application.            </p>
            <p>
            I worked on the embedded software, specifically programming the Raspberry Pi Pico W, as well as the UX design and frontend development. Collaborating with such a diverse team was an incredible experience, and I made wonderful friends along the way!
            </p>
            <p>
            Give <a href="https://www.bodypawsitive.org/" target="_blank">Body Pawsitive</a> a visit! You can use my account: Username - Wynn, Password - 12345.           
            </p>

          </>
        )
    },

      {
        ProjectId: "soundsihear",
        images: [
          { src: sounds1, caption: "Floating lyric when hovered", summary: "Hovering over a lyric will display it largely in the center of the screen. These lyrics can be clicked to open a link to the full lyrics of the song." },
          { src: sounds2, caption: "", summary: "" },
          { src: sounds3, caption: "", summary: "" },
          { src: sounds4, caption: "", summary: "" },
        ],
        title: "sounds i hear",
        technologies: "Technologies: Mongo DB, Express, React, Node",
        description: (
          <>
            <p>
            I wanted to create a lyric bank that contains all my favourite lines.   
            </p>
            <p>
            <a href="https://www.soundsihear.com/" target="_blank">sounds i hear</a> 
            </p>
          </>
        )
    },


      {
        ProjectId: "handwriting-prediction",
        images: [
          { src: predict4, caption: "Using the canvas to predict a handrawn '7'", summary: "" },
          { src: predict3, caption: "Viewing the existing dataset that the model was trained on", summary: "" },
          { src: predict2, caption: "Parameter tuning before training the model", summary: "" },
          { src: predict1, caption: "Launch screen", summary: "" },
        ],
        title: "Handwritten Alphabet and Number Recognition",
        technologies: "Technologies: Python, Pytorch/Torchvision",
        collab: "In collaboration with May Sribunwongsa",
        description: (
          <>
            <p>
              We developed a user-friendly GUI program in Python to make it easy to work with handwritten letter and digit prediction. The program lets you do cool things like downloading the EMNIST dataset, checking out dataset images, choosing models for training, and predicting handwritten letters/digits. After training a model on a dataset, you can simply load that model in and start drawing on the built in canvas to start predicting! We learnt how to use Python's  multithreading, box layouts, and utilised pytorch/torchvision package to train models like LeNet5 and MLP and test different datasets.
            </p>
            <p>
              You can grab the EMNIST dataset and dive into exploring the dataset images. Pick your favorite models and train them on the dataset, which are provided by the pytorch/torchvision package. The program lets you play around with parameters like the percentage of the dataset used for training, the number of epochs, batch size, and whether to use an MLP or LeNet model. You can customize the settings to fit your specific needs and see how different configurations affect the results.
            </p>
          </>
        )
    },
    {
      ProjectId: "sleep-is-a-crime",
      video: trebuchetvid,
      images: [
        { src: trebuchet2, caption: "Raspberry pi connected to servo monitor, 8 bit display, and speaker", summary: "" },
        { src: trebuchet5, caption: "Weapon (containing marshmellow as ammo)", summary: "" },
        { src: trebuchet8, caption: "Celebrating a victorious launch", summary: "" },
        { src: trebuchet9, caption: "Very happy about it", summary: "" },
      ],
      title: "Sleep Is A Crime",
      technologies: "Technologies: Raspberry Pi Pico, Servo Motor, Woodwork (literally)",
      collab: "In collaboration with Kylee, Sophia Chen, and Sophia Schulz",
      description: (
        <>
          <p>
          What’s more terrible than a trebuchet? One that launches marshmellows at you EVERY 20 seconds and obnoxiously beeps the tune of “never gonna give you up” if you don’t hit that snooze button! For the Terrible Ideas hackathon, we had to make something that was completely useless and terrible. In our intial brainstorm, we thought, how do we ensure students don’t fall asleep when they study? Our answer was simple - pain and destruction.           </p>
          <p>
          We literally sawed down a block of wood to create the base for the trebuchet. Then, we glued a servo motor to a 3D printed hinge, and wired the motor up to the Raspberry Pi. The hinge will rotate 90 degrees after 20 seconds if the button on the Raspberry Pi is not pressed, and will unhook the wire - thus launching the trebuchet.  Then, the Raspberry Pi is programmed to beep the tune of “Never Gonna Give You Up.” This hackathon was so much fun, but we definitely did not need to listen to Rick Astley for three solid hours.
          </p>
          <p>
           You can read more about our awesome project on the <a href="https://terriblehack.nz/portfolio/sleep-is-a-crime/" target="_blank">Terrible Ideas</a> website 
          </p>

        </>
      )
  },
  {
    ProjectId: "line-following-robot",
    images: [
      { src: robot4, caption: "Robot in action under the projected ceiling light maze", summary: "" },
      { src: robot6, caption: "Close up of robot with lights on", summary: "" },
      { src: robot3, caption: "A very simple pbc with sensors", summary: "" },
      { src: robot2, caption: "The robot's microcontroller that the pbc is attached to", summary: "" },
      { src: robot1, caption: "May is proud of our creation!", summary: "" },
      { src: robot7, caption: "Early protoyping stages before soldering the pcb", summary: "" },
    ],
    title: "Line Following Robot",
    technologies: "Technologies: PSoC Microcontroller, PCB Design, Altium, C Language",
    collab: "In collaboration with May Sribunwongsa, Jordan Green, and Yogesh Dangwal",
    description: (
      <>
        <p>
        In this project, we undertake COMPSYS 301, a design course that requires us to form a four-person group to augment and program a two-wheeled robot. Our objective is to develop a robot capable of navigating a projected maze on the floor, using a ceiling-mounted projector. Throughout the project, we follow a design process involving continuous prototyping, testing, analysis, and refinement of our designs.
        </p>
        <p>
        In the analog design section, we designed the sensor and filter circuit. We prototyped the sensor, created truth tables, and ultimately transferred the final sensor layout to be manufactured on our own printed circuit board (PCB).        Shifting our perspective to the software design section, we implemented motor control, pathfinding algorithms, path tracking, and signal conditioning.
        </p>
        <p>
        This project is a culmilation of countless late nights in the lab with my teammates, losing our minds and picking over code! Sounds pretty horrible, but tackling a huge challenge with my teammate was actually so fun - we were sane because we had each other’s company. It wasn’t easy at all, but seeing the algorithm, sensor circuitry, and firmware all working together ……. it got me qutie emotional! I was so proud of our little robot for reaching the end of the maze.
        </p>

      </>
    )
},

{
  ProjectId: "circle-me-circle-you",
  images: [
    { src: circle5, caption: "Experimenting with circle radius", summary: "" },
    { src: circle6, caption: "Experimenting with colors", summary: "" },
    { src: circle4, caption: "Final color and circle combination", summary: "" },
  ],
  title: "Circle Me, Circle You",
  technologies: "Technologies: React, Vite, React-P5, P5.js",
  description: (
    <>
      <p>
      As users engage with the website, they experience an interplay between their actions and the dynamic formation of circles on the screen. By utilizing p5.js, I extracted the intensity of red values from each pixel in the webcam feed and translated it into corresponding circle sizes. Even in the absence of colors, the varying sizes of the circles come together, and form the same shape that the webcam sees. I loved doing this project and exploring the possibilities of creative coding. 
      </p>

    </>
  )
},

{
  ProjectId: "flappy-box",
  video:
    flappyvid,
    images: [
      { src: box3, caption: "Demo of game being played", summary: "" },
      { src: flappy4, caption: "Score tracking", summary: "" },
      { src: flappy3, caption: "DE0 board", summary: "" },
      { src: flappy2, caption: "Schema of logic", summary: "" },
    ],
  title: "Flappy Box",
  collab: "In collaboration with May Sribunwongsa and Jordan Green",
  technologies: "Technologies: Quartus, DE0 Board (FPGA Board), VHDL",
  description: (
    <>
      <p>
      Flappy box is a Flappy Bird-inspired game designed for the DE0 console using digital logic and digital design methodologies. The game utilizes input devices such as the PS/2 mouse, DIP switches, and push buttons available on the DE0 board for control. VHDL programming language and software tools including Quartus and ModelSim were employed to configure the game's digital design and logic for the firmware.     
      </p>
      <p>
      The game incorporates key game design elements, including limited lives, randomly generated pipe distances, memory storage for score keeping, power-ups providing temporary invisibility, and multiple difficulty levels. These features enhance the gameplay experience, offering challenges, progression, and strategic decision-making for players.
      </p>

    </>
  )
},

{
    ProjectId: "pokedex",
    images: [
      { src: pokedex1, caption: "Logic/sign up screen", summary: "" },
      { src: pokemon1, caption: "Landing page", summary: "" },
      { src: pokemon2, caption: "Viewing a pokemon (politoad)", summary: "" },
      { src: pokemon3, caption: "Viewing a favourited pokemon", summary: "" },
      { src: pokemon4, caption: "Viewing a pokemon (espeon)", summary: "" },
      { src: pokemon5, caption: "Favourites list of other accounts' favourites", summary: "" },
    ],
    title: "Pokedex",
    technologies: "Technologies: Mongo DB, Express, React, Node",
    description: (
      <>
        <p>
          This application enables users to view their own Pokémon collection. Users have the ability to select and manage their favourite Pokémon by adding or removing them from the favourites list. Additionally, users can access a list of their own favourite Pokémon as well as view favourites from other users. The project was developed as part of a 24-hour test for the SOFTENG 750 course, which required implementing API calls, the favouriting feature, and applying CSS styling to enhance the visual appeal.
        </p>
        <p>
          The website design drew inspiration from the iconic Pokedex concept, evoking nostalgia from Nintendo DS games such as Pokemon Black and White, HeartGold, Diamond/Pearl, and others. The chosen color palette reflected the distinct and contrasting colors associated with these Pokedexes, incorporating shades of yellow, green, red, and darker grey tones to maintain the Pokedex theme. The background design featured a grid pattern, reminiscent of the Unova Pokedexes. While the high-quality Pokémon images from the database contributed to a modern look, certain retro elements were preserved. This included the utilization of a sleek font and CSS animations, such as the spinning Pokeball on the login screen and sliding borders beneath each title. Throughout the design process, emphasis was placed on preserving the essence of the classic Pokemon aesthetic, thus retaining the bold and contrasting color scheme.
        </p>
      </>
    ),
  },

  {
    ProjectId: "designboard",
    images: [
      { src: board1, caption: "App design", summary: "" },
      { src: board5, caption: "Full 3 panel board", summary: "" },
      { src: board2, caption: "Graphics of analytics", summary: "" },
      { src: board3, caption: "Magazine design", summary: "" },
      { src: board4, caption: "Website design", summary: "" },
    ],
    title: "Scholarship Design Board",
    technologies: "Technologies: Adobe Illustrator",
    description: (
      <>
        <p>
          Produced a three-panel art design board with graphics advertising a conceptual futuristic tech company. The board is themed around futuristic and scientific advancements, contrasted with dystopian-like and immoral tech company practices. Designed typography, web mock ups, app mock up designs, and posters using Adobe Illustrator.
        </p>
        <p>
          Board awarded a $500 Scholarship for the NZQA Art Design Course.
        </p>
      </>
    ),
  },

  {
    ProjectId: "objectdetection",
    video: objectvid,
    images: [
      { src: ml1, caption: "Multiple object detection", summary: "" },
      { src: ml2, caption: "Snorlax", summary: "" },
    ],
    title: "Object Detection",
    technologies: "Technologies: CocoSSD, p5.js",
    description: (
      <>
        <p>
          Following The Coding Train's tutorial, this is a recreation of object detection using coco ssd/a pretrained model using the browser web editor p5.js. This exercise helped to further understanding in machine learning and different ways in which it can be applied. There are a total of 25 objects which could be identified with this model, and multiple objects can be found at the same time.
        </p>
      </>
    ),
  },

  {
    ProjectId: "bootleg-spotify",
    images: [
      { src: app1, caption: "Landing page", summary: "" },
      { src: app2, caption: "Artist list", summary: "" },
      { src: app3, caption: "Selected artist and their album (frank)", summary: "" },
      { src: app4, caption: "Selected artist and their album (ariana)", summary: "" },
    ],
    title: "Bootleg Spotify",
    collab: "In collaboration with Clinton Philathong",
    technologies: "Technologies: Android Studio, Java, Figma, Git Control",
    description: (
      <>
        <p>
          Developed a shopping app to simulate the act of purchasing items by designing the app using Figma, then coding the frontend and backend aspects of the app with Java on Android Studio. Applied concepts such as proper UI design, User Input, varying view groups (i.e Recyclerview), and working with databases. Project done in collaboration with a colleague using git version control features such as push, pull, commits, merge conflicts, and branching. Users will be able to select a genre of their liking on their main page, which will take them to a list of artists. Selecting an artist will bring users to their "artist" page which selects their most popular album along with its tracklist and description of the artist.
        </p>
      </>
    ),
  },

  {
    ProjectId: "mowynndotcom",
    images: [
      { src: page1, caption: "Landing page", summary: "" },
      { src: page2, caption: "Projects list", summary: "" },
      { src: page3, caption: "Project information", summary: "" },
    ],
    title: "mowynn.com",
    technologies: "Technologies: Html, css",
    description: (
      <>
        <p>
          My first ever personal website! I needed a repository to store all my personal projects, so I created this one with a simple white/blue 8-bit theme. I drew and animated the stars and friendly ghost too.
        </p>
        <p>
          The website is outdated, but I still keep it up as a reminder of how far I've come in my coding journey! You can still visit it at <a href="https://mowynn.com" target="_blank">mowynn.com</a>
        </p>
      </>
    ),
  },

  {
    ProjectId: "julia-fractals",
    video: juliavid,
    title: "Julia Fractals",
    technologies: "Technologies: Matlab",
    description: (
      <>
        <p>
          Created functions on Matlab using the Julia set to produce mathematically calculated fractals. These fractals are then able to be produced in different colours of choice along with frame rate, and then converted to a gif.
        </p>
        <p>
          This was my first ever exposure to creative coding. It really started things off for me!
        </p>
      </>
    ),
  },

  {
    ProjectId: "ripples",
    video: ripplesvid,
    title: "Ripples",
    technologies: "Technologies: p5.js",
    description: (
      <>
        <p>
          An exploration into creative coding using p5.js, each circle has noise added to its circumference which reacts differently to the movement of the user's cursor. The position of the mouse is taken into account when calculating the noise, which creates a ripple effect.
        </p>
      </>
    ),
  },

  // Add more project objects as needed
];

export default ProjectData;
