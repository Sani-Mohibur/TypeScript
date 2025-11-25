interface Developer<T, X = null> {
  name: string;
  designation: string;
  skills: string;
  device: T;
  professionalLinks?: X;
}
interface DeviceWithDetails {
  model: string;
  brand: string;
  ram: string;
  ssd?: string;
  hdd?: string;
}
interface Device {
  hasDevice: Boolean;
}
interface ProfessionalLinks {
  linkedIn?: string;
  gitHub: string;
  portfolio?: string;
}
const developer1: Developer<DeviceWithDetails> = {
  name: "Farabi Sunny",
  designation: "Web Developer",
  skills: "MERN Stack",
  device: {
    model: "Vivobook 15",
    brand: "Asus",
    ram: "8GB",
  },
  professionalLinks: null,
};
const developer2: Developer<Device, ProfessionalLinks> = {
  name: "Humayun Ahmed",
  designation: "Web Developer",
  skills: "MERN, MEAN, MEVN, LAMP, LEMP",
  device: {
    hasDevice: false,
  },
  professionalLinks: {
    linkedIn: "Humayun-Ahmed",
    gitHub: "humayun-ahmed",
  },
};
