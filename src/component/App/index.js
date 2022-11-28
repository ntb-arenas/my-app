import "./index.scss";
import Card from "../Card";
import EmptyState from "../EmptyState";

function App() {
  const cards = [
    {
      imgUrl: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      title: "Dell Laptop",
      desc: "Dell Inspiron is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a APU Quad Core A6 processor and it comes with 8GB of RAM. The Dell Inspiron packs 1TB of HDD storage. Graphics are powered by Nvidia GeForce GTX 1050.",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1559163499-413811fb2344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Apple Macbook",
      desc: "The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006. It replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005.",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1565221287653-9a2713dbe4ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Apple iPad",
      desc: "The iPad is a touchscreen tablet PC made by Apple . The original iPad debuted in 2010. Apple has three iPad product lines: iPad, iPad mini and iPad Pro. All models are available in silver, gray and gold.",
    },
  ];

  return <div className="App">{cards.length ? cards.map((card, index) => <Card key={index} id={index} title={card.title} desc={card.desc} imgUrl={card.imgUrl} />) : <EmptyState />}</div>;
}

export default App;
