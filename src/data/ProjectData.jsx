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
              We developed a user-friendly GUI program in Python to make it easy to work with handwritten letter and digit prediction. The program lets you do cool things like downloading the EMNIST dataset, checking out dataset images, choosing models for training, and predicting handwritten letters/digits. After training a model on a dataset, you can simply load that model in and start drawing on the built in canvas to start predicting! We learnt how to use Python's  multithreading, box layouts, and utilised pytorch/torchvision package to train models like LeNet5 and MLP and test different datasets.
            </p>
            <p>
              You can grab the EMNIST dataset and dive into exploring the dataset images. Pick your favorite models and train them on the dataset, which are provided by the pytorch/torchvision package. The program lets you play around with parameters like the percentage of the dataset used for training, the number of epochs, batch size, and whether to use an MLP or LeNet model. You can customize the settings to fit your specific needs and see how different configurations affect the results.
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
  