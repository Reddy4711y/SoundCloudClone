import React from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LinearDeterminate from "./Progressbar";
import style from "./Player.module.css";
function Player() {
  return (
    <div>
      <div>
        <LinearDeterminate />
      </div>
      <div className={style.icons}>
        <SkipPreviousIcon />

        <PlayArrowIcon />

        <SkipNextIcon />
      </div>
    </div>
  );
}

export default Player;
