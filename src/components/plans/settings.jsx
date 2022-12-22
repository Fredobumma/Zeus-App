import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../common/header";
import ParagraphText from "../../common/paragraphText";

const Settings = () => {
  const { pathname } = useLocation();
  const title = pathname.slice(7);

  return (
    <section>
      <Header
        header="max-w-80% mt-12 mx-auto text-center text-secondary bigTab:max-w-700 laptop:max-w-80%"
        type="h2"
        heading={`This is the ${title} Component`}
        headingClasses="font-bold tablet:leading-[56px] text-3xl tablet:text-40 laptop:text-5xl"
        text="This component has been implemented for the purpose of routing as there's no design for it."
        textClasses="mb-6 mt-4 text-center text-base tablet:mt-8 laptop:my-8"
      />
      <ParagraphText
        classes="mb-10 text-center text-secondary text-xs tablet:text-sm"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        soluta fuga debitis, molestiae maxime explicabo dignissimos fugiat
        laboriosam quasi sint fugit voluptatibus, nobis incidunt voluptates
        doloribus libero quod adipisci enim! Dolorum vel hic molestias saepe
        sequi quas natus dolor cum, tempore, omnis animi. Itaque rerum similique
        beatae deleniti impedit ad soluta quaerat dolorum nisi. Odio nulla
        quibusdam corporis voluptas id libero laudantium suscipit,
        exercitationem ab animi facere error nesciunt a! Doloribus ipsam
        dolores, quae quam a vel incidunt ducimus, iusto repellat exercitationem
        non! Aspernatur beatae, doloribus dolorum doloremque porro reprehenderit
        minus magnam ea fugiat voluptas vitae nemo cum accusamus fuga?"
      />
    </section>
  );
};

export default Settings;
