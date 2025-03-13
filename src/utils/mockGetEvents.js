import Images from "./importImages"; 

const mockGetEvents = () => {
  return [
    {
      id: 1,
      title: "Interfaith Unity Conference 2025",
      format: "In Person",
      startDate: "March 20, 2025",
      startTime: "10:00 AM",
      endDate: "March 20, 2025",
      endTime: "4:00 PM",
      timezone: "(GMT+5:30) India Standard Time",
      location: "New Delhi, India",
      type: "Free",
      capacity: "Unlimited",
      categories: ["Religious Gathering", "Community Service"],
      description:
        "An annual gathering promoting peace and unity among different faiths, with panel discussions and community activities.",
      image: Images.userIcon, 
      speakers: [
        { name: "Rev. John Smith", role: "Christian Pastor", avatar: Images.speakerIcon },
        { name: "Imam Kareem Ali", role: "Islamic Scholar", avatar: Images.speakerIcon },
      ],
    },
    {
      id: 2,
      title: "Charity Drive: Feeding the Homeless",
      format: "In Person",
      startDate: "April 5, 2025",
      startTime: "9:00 AM",
      endDate: "April 5, 2025",
      endTime: "5:00 PM",
      timezone: "(GMT+5:30) India Standard Time",
      location: "Mumbai, India",
      type: "Donation",
      capacity: "Limited",
      categories: ["Charity", "Community Service"],
      description:
        "A faith-driven initiative to provide meals, clothing, and support for the homeless in our community.",
      image: Images.userIcon, 
      speakers: [{ name: "Sister Maria Lopez", role: "Charity Coordinator", avatar: Images.speakerIcon }],
    },
    {
      id: 3,
      title: "Youth Faith Leadership Workshop",
      format: "In Person",
      startDate: "May 12, 2025",
      startTime: "11:00 AM",
      endDate: "May 12, 2025",
      endTime: "3:00 PM",
      timezone: "(GMT+5:30) India Standard Time",
      location: "Bangalore, India",
      type: "Free",
      capacity: "Unlimited",
      categories: ["Workshop", "Spiritual Growth"],
      description:
        "A workshop empowering young leaders with faith-based guidance to lead in their communities.",
      image: Images.userIcon, 
      speakers: [
        { name: "Brother Nathaniel Carter", role: "Youth Ministry Leader", avatar: Images.speakerIcon },
        { name: "Swami Rajananda", role: "Hindu Monk", avatar: Images.speakerIcon },
      ],
    },
    {
      id: 4,
      title: "Bible Study and Discussion Group",
      format: "In Person",
      startDate: "June 10, 2025",
      startTime: "7:00 PM",
      endDate: "June 10, 2025",
      endTime: "9:00 PM",
      timezone: "(GMT+5:30) India Standard Time",
      location: "Chennai, India",
      type: "Free",
      capacity: "Limited",
      categories: ["Religious Gathering", "Education"],
      description:
        "A guided study and discussion on key biblical teachings with open Q&A sessions.",
      image: Images.userIcon, 
      speakers: [{ name: "Pastor Samuel Davies", role: "Biblical Scholar", avatar: Images.speakerIcon }],
    },
    {
      id: 5,
      title: "Virtual Prayer Circle",
      format: "Online",
      startDate: "July 5, 2025",
      startTime: "6:00 AM",
      endDate: "July 5, 2025",
      endTime: "7:00 AM",
      timezone: "(GMT+5:30) India Standard Time",
      location: "Online",
      type: "Free",
      capacity: "Unlimited",
      categories: ["Spiritual Growth", "Community Service"],
      description:
        "Join believers across the world in a live online prayer session for healing and guidance.",
      image: Images.userIcon, 
      speakers: [{ name: "Rabbi David Cohen", role: "Jewish Religious Leader", avatar: Images.speakerIcon }],
    },
    {
      id: 6,
      title: "Gospel Music Night",
      format: "In Person",
      startDate: "August 18, 2025",
      startTime: "6:30 PM",
      endDate: "August 18, 2025",
      endTime: "9:00 PM",
      timezone: "(GMT+5:30) India Standard Time",
      location: "Kolkata, India",
      type: "Free",
      capacity: "Unlimited",
      categories: ["Music", "Religious Gathering"],
      description:
        "A night of uplifting gospel music and testimonies from local and international Christian artists.",
      image: Images.userIcon, 
      speakers: [{ name: "Choir Leader Hannah Green", role: "Music Director", avatar: Images.speakerIcon }],
    },
    {
      id: 7,
      title: "Spiritual Retreat: Meditation & Healing",
      format: "In Person",
      startDate: "September 15, 2025",
      startTime: "9:00 AM",
      endDate: "September 17, 2025",
      endTime: "5:00 PM",
      timezone: "(GMT+5:30) India Standard Time",
      location: "Rishikesh, India",
      type: "Paid",
      capacity: "Limited",
      categories: ["Spiritual Growth", "Meditation"],
      description:
        "A peaceful retreat to reconnect with God through meditation, silence, and healing activities.",
      image: Images.userIcon, 
      speakers: [{ name: "Guru Pranav Sharma", role: "Spiritual Healer", avatar: Images.speakerIcon }],
    },
    {
      id: 8,
      title: "Community Interfaith Dialogue",
      format: "In Person",
      startDate: "October 21, 2025",
      startTime: "2:00 PM",
      endDate: "October 21, 2025",
      endTime: "6:00 PM",
      timezone: "(GMT+5:30) India Standard Time",
      location: "Hyderabad, India",
      type: "Free",
      capacity: "Unlimited",
      categories: ["Community Service", "Interfaith"],
      description:
        "A discussion forum to foster understanding and unity among different faiths in the community.",
      image: Images.userIcon, 
      speakers: [
        { name: "Hindu Priest Rajeev Malhotra", role: "Vedic Scholar", avatar: Images.speakerIcon },
        { name: "Bishop Angela Stewart", role: "Christian Leader", avatar: Images.speakerIcon },
      ],
    },
  ];
};

export default mockGetEvents;
