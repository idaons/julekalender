import * as React from "react";
import { Emoji, Tekst } from "../../Components/LukeInnhold";
import { useState } from "react";
import styled from "@emotion/styled";

const Kriger = () => {
  return (
    <>
      <h3>Din yogaøvelse: Kriger III </h3>
      <p>
        Fra stående, la det ene beinet løftes opp bak, samtidig som overkroppen strekkes ut framover. Armene kan være
        utstrakt fram eller bakover, eller bøyd med hendene i midja.
      </p>
    </>
  );
};
const Dødmann = () => {
  return (
    <>
      <h3>
        Din yogaøvelse: Dødmannstilling <Emoji ariaLabel="zombie-emoji" content="🧟" />
      </h3>
      <p>
        Denne stillingen er ypperlig for å finne roen og bekjempe stress. Du bør ligge i dødmannsstillingen minimum 5
        minutter for å få tilstrekkelig effekt. <br />
        Legg deg forsiktig ned på ryggen på en matte med føttene spredd. La armene ligge langs gulvet, litt ut fra
        kroppen og med håndflatene pekende opp. Pust dypt og rolig. Kjenn at hele kroppen nærmest synker ned i bakken.
        Vend oppmerksomheten mot kroppsdeler som føles anspente, og konsentrer deg om å få dem til slappe av.
      </p>
    </>
  );
};

const Barn = () => {
  return (
    <>
      <h3>
        Din yogaøvelse: Barnet <Emoji ariaLabel="baby-emoji" content="👶" />
      </h3>
      <p>
        Sitt på hælene dine. Nnærne skal være omtrent like bredt plassert som hoftebredden din. Føttene skal være
        samlet, slik at storetærne berører hverandre. <br />
        Bøy deg fremover til overkroppen hviler på lårene og hodet berører gulvet.
        <br />
        Pust ut mens du presser halebenet ned mot hælene.
        <br />
        Legg armene mot underlaget på utsiden av lårene med håndflatene opp.
        <br />
        Hvil i denne posisjonen i noen minutter mens du puster inn og ut.
        <br />
      </p>
    </>
  );
};

interface IYoga {
  label: string;
  komponent: React.ReactNode;
}
const YogaPositions: EnumType = {
  Kriger: { label: "En kriger", komponent: <Kriger /> },
  DødMann: { label: "En død mann", komponent: <Dødmann /> },
  Barn: { label: "Et barn", komponent: <Barn /> },
};

type EnumType = { [s: string]: IYoga };

const StyledSelect = styled.select`
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 0.2rem;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const Yoga = () => {
  const [yogaPosition, setYogaPosition] = useState("");
  const onYogaSelcted = (e: { currentTarget: any }) => {
    const target = e.currentTarget;
    setYogaPosition(target.value);
  };

  return (
    <Tekst>
      <h2>
        Finn din yoga-posisjon! <Emoji ariaLabel="lotus-emoji" content="🧘" />
      </h2>
      <p>Hva identifiserer du deg mest med?</p>
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
  );
};

export default Yoga;
