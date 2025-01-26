import { DividerElement } from "./components/Element/Divider.element";
import { TextElement } from "./components/Element/Text.element";

function App() {
  const handleRedirect = () => {
    window.location.assign("https://github.com/kevinjosec");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <TextElement children="</>" color="red" variant="header" />
      <TextElement
        children="Build your own portfolio."
        variant="header"
        onClick={handleRedirect}
      />
      <DividerElement />
      <TextElement
        children="This repo contains the neccesary components to build your own portfolio"
        variant="subheader"
      />
    </div>
  );
}

export default App;
