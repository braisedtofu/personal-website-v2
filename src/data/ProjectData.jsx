import predict4 from '../assets/AlphabetPrediction/predict4.png';

const ProjectData = [
    {
        ProjectId: "handwriting-prediction",
        image: predict4,
        title: "Handwritten Alphabet and Number Recognition",
        technologies: "Technologies: Python, Pytorch/Torchvision",
        collab: "In collaboration with May Sribunwongsa",
        description: (
          <>
            <p>
              A user-friendly GUI program was developed in Python to make it easy to work with handwritten letter and digit prediction. The program lets you do cool things like downloading the EMNIST dataset, checking out dataset images, choosing models for training, and predicting handwritten letters/digits. Python's awesome features like multithreading, box layouts, and the pytorch/torchvision package were used to train models like LeNet5 and MLP and test different datasets.
            </p>
            <p>
              With this GUI program, you'll have a smooth and enjoyable experience. You can grab the EMNIST dataset and dive into exploring the dataset images. Pick your favorite models and train them on the dataset using the power of the pytorch/torchvision package. You'll be amazed at how quickly you can train and test different models!
            </p>
            <p>
              Want to tweak the training process? No problem! The program lets you play around with parameters like the percentage of the dataset used for training, the number of epochs, batch size, and whether to use an MLP or LeNet model. You can customize the settings to fit your specific needs and see how different configurations affect the results.
            </p>
          </>
        )
      },
                {
      ProjectId: "",
      title: "Project 2",
      description: "This is the description for Project 2.",
      // Add more properties as needed
    },
    // Add more project objects as needed
  ];
  
  export default ProjectData;
  