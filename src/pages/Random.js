import Accordion from "../components/Accordion";

const Random = () => {
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
