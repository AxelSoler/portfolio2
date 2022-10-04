const Projects = () => {
  const stories = [
    {
      name: 'Multi-Post Stories',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
      mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
      desktopDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
      featured_image1: './images/design.jpg',
      featured_image2: './images/picturePopup.png',
      technologies: [
        'CSS',
        'html',
        'bootstrap',
        'ruby',
      ],
      technologies2: [
        'html',
        'Ruby on rails',
        'CSS',
        'Github',
      ],
      live: 'https://axelsoler.github.io/Axel-Soler-Portfolio/',
      source: 'https://github.com/AxelSoler',
    },
  ];
  return (
    <section className="work">
      {stories.map((story) => (
        <div key={story.name} className="story">
          <img className="picture" src={story.featured_image1} alt="my story" />
          <div className="pictureDescription">
            <h3 className="post">{story.name}</h3>
            <p className="postDescription">{story.description}</p>
            <button className="project" type="button">See Project</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
