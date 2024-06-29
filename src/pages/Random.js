import DropDown from "../components/DropDown";
import Accordion from "../components/Accordion";

const Random = () => {
  // const options = [
  //   { label: 1, value: 1 },
  //   { label: 2, value: 2 },
  //   { label: 3, value: 3 },
  //   { label: 4, value: 4 },
  //   { label: 5, value: 5 },
  //   { label: 6, value: 6 },
  //   { label: 7, value: 7 },
  //   { label: 8, value: 8 },
  // ];

  const accordionContent = [
    {
      label: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare velit ut blandit viverra. Cras finibus id mauris quis varius. Etiam leo libero, cursus sit amet rhoncus eu, commodo vel augue. Sed commodo mattis ipsum, non maximus arcu pretium nec. Proin vel mauris nisi. Maecenas dignissim sem eget eros sodales bibendum.",
    },
    {
      label: "Nunc sed felis nec",
      content:
        "Donec tempor euismod imperdiet. Nam quis lorem vitae libero ultricies ullamcorper. Nulla vitae eros finibus lectus dictum suscipit. Etiam vulputate quis risus at ultrices. Pellentesque id metus erat. Aliquam rutrum pulvinar semper.",
    },
    {
      label: "Curabitur suscipit velit vitae",
      content:
        "Aenean nisi nisl, blandit sit amet erat et, eleifend lobortis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      label: "Vestibulum suscipit tellus",
      content:
        "Nam a condimentum est, sed gravida dui. Pellentesque ac nibh et arcu hendrerit semper a sit amet diam. In ac hendrerit urna, sollicitudin scelerisque nisl.",
    },
    {
      label: "Vivamus vitae mollis",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare velit ut blandit viverra. Cras finibus id mauris quis varius. Etiam leo libero, cursus sit amet rhoncus eu, commodo vel augue. Sed commodo mattis ipsum, non maximus arcu pretium nec. Proin vel mauris nisi. Maecenas dignissim sem eget eros sodales bibendum.",
    },
  ];

  return (
    <div className="m-4">
      <Accordion content={accordionContent} />
    </div>
  );
};

export default Random;
