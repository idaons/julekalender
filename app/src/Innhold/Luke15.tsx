import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";
import { useState } from "react";
import styled from "@emotion/styled";

const Kobra = () => {
  return (
    <>
      <h3>
        Din yogaøvelse: Kobra <Emoji ariaLabel="snake-emoji" content="🐍" />
      </h3>
      <p>
        Ligg på magen med strake, samlede bein og med hendene foran brystet. Pust inn, mens du langsomt løfter hodet og
        skyter fram brystet. Det er ryggen som skal bære kroppen. Bli i stillingen i 4–8 pust.
      </p>
    </>
  );
};

const Hund = () => {
  return (
    <>
      <h3>
        Din yogaøvelse: Hunden som ser ned <Emoji ariaLabel="dog-emoji" content="🐶" />{" "}
      </h3>
      <p>
        Ligg på knærne med hendene i gulvet i en skulderbreddes avstand. Hold tærne i gulvet, mens du strekker ut beina
        slik at kroppen danner en omvendt V med baken øverst. Føttene skal være parallelle, med en halv fotlengde mellom
        dem, mens hælene presses ned mot gulvet. Sug inn navlen, strekk ryggen og senk skuldrene. Trekk pusten dypt inn
        og ut gjennom nesen. Hold stillingen i 4–8 pust.
      </p>
    </>
  );
};
const Kamel = () => {
  return (
    <>
      <h3>
        Din yogaøvelse: Kamelen <Emoji ariaLabel="kamel-emoji" content="🐫" />
      </h3>
      <p>
        Stå med føttene i hoftebreddeavstand. Knytt hendene sammen, og bruk dem som støtte i korsryggen. Press albuene
        bakover, pust inn, og tøy framsiden av kroppen. Pust ut, og len deg forsiktig bakover. Press hoftene framover,
        og vend ansiktet oppover. Hold stillingen i 4–8 pust før du går forsiktig tilbake til utgangspunktet.
      </p>
    </>
  );
};

const Gresshoppe = () => {
  return (
    <>
      <h3>
        Din yogaøvelse: Gresshoppa <Emoji ariaLabel="cricket-emoji" content="🦗" />
      </h3>
      <p>
        Ligg på magen med ansiktet ned. Løft beina og brystet slik at de ikke berører bakken. Hold armene dine ved
        sidene med fingrene pekende mot tærne. Hold denne posisjonen i 20 til 30 sekunder mens du puster normalt.
      </p>
    </>
  );
};

interface IYoga {
  label: string;
  komponent: React.ReactNode;
}

const YogaPositions: EnumType = {
  Kobra: { label: "En kobra", komponent: <Kobra /> },
  Hund: { label: "En hund (som ser ned)", komponent: <Hund /> },
  Kamel: { label: "En kamel", komponent: <Kamel /> },
  Gresshoppe: { label: "En gresshoppe", komponent: <Gresshoppe /> },
};

type EnumType = { [s: string]: IYoga };

const StyledSelect = styled.select`
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 0.2rem;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const Luke15 = () => {
  const [yogaPosition, setYogaPosition] = useState("");
  const onYogaSelcted = (e: { currentTarget: any }) => {
    const target = e.currentTarget;
    setYogaPosition(target.value);
  };

  return (
    <LukeInnhold nummer={15}>
      <Tekst>
        <h2>
          Finn din yoga-posisjon - del 2! <Emoji ariaLabel="lotus-emoji" content="🧘" />{" "}
        </h2>
        <p>Hvilket dyr identifiserer du deg mest med?</p>
        <StyledSelect onChange={onYogaSelcted}>
          <option value="">Velg...</option>
          {Object.keys(YogaPositions).map((key: string) => (
            <option value={key} key={key}>
              {YogaPositions[key].label}
            </option>
          ))}
        </StyledSelect>
        {yogaPosition?.length > 0 && <>{YogaPositions[yogaPosition].komponent}</>}
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke15;
