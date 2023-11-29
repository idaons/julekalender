import { StyledEmoji, Tekst } from "../Components/LukeInnhold";
import * as React from "react";

const Sondag = () => {
  return (
    <Tekst>
      <h2>Første søndag i advent! </h2>
      Gå / løp / sykle / hink til ditt nærmeste bakeri å kjøp deg en kaffe og bolle!
      <br />
      <StyledEmoji ariaLabel="emoji-kafevare" content="☕ 🥐" />
    </Tekst>
  );
};
export default Sondag;
