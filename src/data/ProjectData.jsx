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
    // Add more project objects as needed
  ];
  
  export default ProjectData;
  