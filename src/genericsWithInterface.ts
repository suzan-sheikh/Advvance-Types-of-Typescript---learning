interface Developer<T, X = null> {
  name: string;
  salary: string;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface SmartW {
  DName: string;
  DMode: string;
  Other?: string;
}

const poorDeveloper: Developer<SmartW> = {
  name: "Mr. Poor",
  salary: "20",
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    DName: "honor",
    DMode: "2014",
  },
};

interface SmartW2 {
  DName: string;
  DMode: string;
  callingFeature: boolean;
  AiFeature: boolean;
  Other?: string;
}
interface Bike {
    bikeName: "walton"
}

const richDeveloper: Developer<SmartW2, Bike> = {
  name: "Mr. Rich",
  salary: "200",
  device: {
    brand: "Apple",
    model: "A21",
    releasedYear: "2026",
  },
  smartWatch: {
    DName: "apple",
    DMode: "2026",
    callingFeature: true,
    AiFeature: true,
  },
  bike: {
    bikeName: 'walton'
  }

};
