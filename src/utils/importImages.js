const importImages = import.meta.glob(
    ["../assets/*.jpg", "../assets/*.jpeg", "../assets/*.png"],
    { eager: true }
  );
  
  const Images = {
    logo: importImages["../assets/logo.png"]?.default,
    reverseLogo : importImages["../assets/reverseLogo.png"]?.default,
    community : importImages["../assets/community.jpg"]?.default,
    support : importImages["../assets/support.jpg"]?.default,
    events : importImages["../assets/events.jpg"]?.default,
    communion1 : importImages["../assets/communion1.jpg"]?.default,
    communion2 : importImages["../assets/communion2.jpg"]?.default,
    userIcon : importImages["../assets/user.jpg"]?.default,
    speakerIcon : importImages["../assets/speakerIcon.png"]?.default,

  };
  
  export default Images;
  