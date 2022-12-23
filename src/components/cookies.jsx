import React from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import Header from "../common/header";
import ParagraphText from "../common/paragraphText";

const Cookies = () => {
  const { pathname } = useLocation();
  const title = pathname.slice(1);

  return (
    <React.Fragment>
      <Header
        header="max-w-80% mx-auto pb-6 pt-12 text-center text-secondary tablet:pt-16 bigTab:max-w-700 laptop:max-w-80% laptop:pt-28"
        type="h1"
        heading={`This is the ${_.capitalize(title)} Component`}
        headingClasses="font-bold text-40 tablet:text-7xl laptop:text-80"
        text="This component has been implemented for the purpose of routing as there's no design for it."
        textClasses="mb-6 mt-4 text-center text-base tablet:mt-8 laptop:my-8"
      />
      <ParagraphText
        classes="mb-10 text-center text-secondary text-xs tablet:text-sm"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        voluptas consequuntur a earum repellendus laudantium, impedit maxime eum
        voluptates, alias explicabo! Illo ut cumque pariatur maiores quasi.
        Alias debitis est nesciunt deleniti perspiciatis praesentium minus,
        vitae a fugiat accusamus vero quam nostrum culpa fuga. Aut, placeat
        facilis, perferendis quis harum nulla iusto nostrum alias quam sit
        beatae accusamus ducimus officiis? Maxime ab voluptate dolore autem,
        exercitationem iste error consequatur esse eos labore facere provident
        quidem nostrum sint ipsum impedit? Beatae dignissimos maiores
        voluptatibus, libero cumque veritatis, doloribus minus accusantium,
        laudantium magni aliquam nesciunt sapiente! Soluta veritatis repellat
        voluptatibus doloremque aspernatur officiis minus tenetur earum, eveniet
        commodi voluptas quaerat illo corporis deleniti molestiae. Facere
        repudiandae omnis ea esse officia nam neque modi laudantium, maiores
        quisquam veritatis itaque, quis corporis. Vero accusantium debitis,
        incidunt sit delectus necessitatibus culpa eaque vitae quo reiciendis,
        qui officia nam ipsam expedita, nulla corporis? Maxime minus, sequi sint
        fugiat vitae magnam? Vero quod maxime totam doloribus. Quos nobis
        ratione optio ipsa minima rerum quaerat deleniti modi soluta odio sunt
        harum aperiam ad placeat, architecto asperiores error facere? Officia
        illum sequi laboriosam praesentium neque? Placeat accusamus nesciunt
        cumque impedit eaque architecto quaerat perspiciatis. Est ducimus
        debitis ipsum enim dolores, minus placeat optio quidem porro. Eum
        repudiandae nesciunt quisquam, suscipit at maxime repellat, dolorum
        ipsam, asperiores doloribus hic placeat facere tenetur ut omnis
        laudantium tempore! Eum unde, eligendi ab eaque vitae qui animi!
        Molestiae distinctio, possimus quis vitae doloribus inventore a rerum
        explicabo voluptas dignissimos placeat corporis? Veniam sed tenetur
        quibusdam architecto totam natus hic quod voluptate mollitia deserunt
        explicabo consequatur, quas officiis accusantium provident commodi sequi
        odio culpa. Nulla est nesciunt tenetur laboriosam amet praesentium
        veniam inventore hic similique magnam quasi incidunt, consequatur unde
        labore nostrum? Eveniet alias odit velit laudantium error dicta
        voluptates, aperiam pariatur praesentium nostrum saepe! Vel voluptas
        harum minus iusto dignissimos enim, ab omnis vero quasi quis, eaque in
        exercitationem alias eligendi, iste cum cumque illo obcaecati
        repellendus quam! Atque ipsam ipsum nostrum voluptas. Nisi non dolores
        illum! Sapiente libero iusto tempore vero alias animi doloremque ipsa
        sint, natus placeat vitae aut iure fugit impedit quia. Voluptatibus
        optio placeat unde mollitia. Velit dolorum libero vel esse sed
        necessitatibus perspiciatis perferendis cupiditate rem! Quibusdam
        sapiente delectus sed maiores impedit. Accusamus suscipit odio natus
        debitis eaque sequi amet ipsam nam? Doloremque eligendi deserunt vitae
        esse impedit voluptates omnis molestiae ipsum? Voluptatum tempora
        numquam doloribus officia harum laborum architecto possimus aperiam,
        unde quod delectus porro ducimus incidunt odit saepe! Eum, nobis a
        suscipit architecto ad nostrum maxime et dolores inventore impedit ut
        exercitationem cupiditate assumenda. Perferendis repellendus recusandae
        omnis. Blanditiis a reiciendis ab repellat. Sit soluta, non tempora
        obcaecati velit hic asperiores est. Hic itaque nulla harum magnam vero
        ducimus dicta sint, quibusdam provident eligendi officia? Reprehenderit,
        aperiam! Tempore obcaecati impedit, qui quae illo sapiente voluptatibus
        dolorum blanditiis et laboriosam possimus explicabo provident dolore
        rem, atque omnis reprehenderit vitae sint architecto, inventore ullam
        incidunt! Quo, nostrum. Nemo odit consequatur placeat corrupti adipisci
        nam, in quidem eveniet aut."
      />
    </React.Fragment>
  );
};

export default Cookies;
