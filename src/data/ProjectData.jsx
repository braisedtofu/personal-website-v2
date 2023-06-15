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
import generate2 from '../assets/pikatune/generate2.png';
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
import box3 from '../assets/flappybox/box3.png';

const ProjectData = [
    {
        ProjectId: "pikatune",
        images: [
          village,
          pikatune1,
          pikatune2,
          building1,
          building2,
          building3,
          building4,
          generate1,
          generate2,
          playlist,
          battle1,
          battle2,
          battle3,
          friends,
          friends2,
        ],
        title: "Pikatune",
        technologies: "Technologies: MERN stack, Spotify API",
        collab: "In collaboration with Alan Lin, Danika Chhour, Saakshi Hedge, and May Sribunwongsa",
        description: (
          <>
            <p>
            Do you think you’ve caught them all? Well, YOU HAVEN’T! There are still so many tunes to catch out there. PikaTune is a Pokémon-themed playlist generator. The website aims to introduce new songs to people looking to discover new music. Users can register as Pokémon trainers and select a starter Pokémon to join them in their exciting music discovery journey. Once the user completes their sign-up, they will be directed to PikaTune village. PikaTune village has four accessible buildings; Pokémart, Pokémon Gym, Pokémon Centre and Social Tower.
            </p>
            <p>
            POKÉMART: Visit Pokémart to generate your own playlist. You will be prompted to select a Pokemon type you are vibing with. Add up to five artists/songs you enjoy to customise your playlist further. Once the playlist is generated, you can swap and delete songs you dislike, name your playlist and then save it to your account. To view and download your playlist to your own Spotify, email 750@wexfordbedroom.com to get your Spotify account added to permissions!
            </p>
            <p>
            POKÉCENTER: Visit the Pokémon Centre to view and edit your generated playlists.
            </p>
            <p>
            SOCIAL TOWER: Visit the Social Tower to view other trainers and add them to your friends list to track their levels!
            </p>
            <p>
            POKÉMON GYM: Once you have generated at least one playlist, you can visit the gym to level up your Pokémon. Cynthia, the gym leader, will ask you five randomised questions to test how well you know your generated playlists. Level up before your friends for ultimate bragging rights.
            </p>
            <p>
            I built this game in React, and worked on front-end engineering, game design, and UI design. This collaboration was such so fun!
            </p>
          </>
        )
      },

      {
        ProjectId: "bodypawsitive",
        images: [
          dog1,
          dog2,
          dog3,
          dog4,
          dog5,
          dog6,
          dog7,
          dog8,
          dog11,
        ],
        title: "Body Pawsitive",
        technologies: "MERN Stack, Raspberry Pico W, C/C++",
        collab: "In collaboration with Alexander Wiseman, Julie Kim, Kian Jazayeri, Lexin Lin, Owen Xu, and Violet Liu",
        description: (
          <>
            <p>
            This capstone project for my Computer Systems course involved a talented, multidisciplinary team comprising two electrical engineers, two software engineers, and three computer systems engineers. Together, we designed and developed a smart scale system specifically tailored for dogs. The system includes a scale equipped with a PCB housing weight sensors and signal conditioning. This PCB is connected to the Raspberry Pi Pico W, which efficiently handles tasks such as signal conversion, taring, stabilization, and power management. The weight data is then transmitted to the MERN stack frontend/backend, where it is displayed and logged on a web application.            </p>
            <p>
            I worked on the embedded software, specifically programming the Raspberry Pi Pico W, as well as the UX design and frontend development. Collaborating with such a diverse team was an incredible experience, and I made wonderful friends along the way!
            </p>
            <p>
            Give <a href="https://www.bodypawsitive.org/" target="_blank">Body Pawsitive</a> a visit! You can use my account: Username - Wynn, Passowrd - 12345.           
            </p>

          </>
        )
    },

      {
        ProjectId: "handwriting-prediction",
        images: [
          predict4,
          predict3,
          predict2,
          predict1,
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
      images: [
        trebuchet2,
        trebuchet5,
        trebuchet8,
        trebuchet9,
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
      robot4,
      robot6,
      robot3,
      robot2,
      robot1,
      robot7,
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
    circle5,
    circle6,
    circle4,
  ],
  title: "Circle Me, Circle You",
  technologies: "Technologies:   React, Vite, React-P5, P5.js",
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
  images: [
    box3,
    flappy4,
    flappy3,
    flappy2,


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
  ProjectId: "flappy-box",
  images: [
    box3,
    flappy4,
    flappy3,
    flappy2,
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


    // Add more project objects as needed
  ];
  
  export default ProjectData;
  
