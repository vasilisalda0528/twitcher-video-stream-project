import React, { useState, useRef } from "react";
import Select from "react-select";
import debounce from "lodash.debounce";
import { IoMdFunnel } from "react-icons/io";

import Front from "@/Layouts/Front";
import { Head } from "@inertiajs/inertia-react";
import __ from "@/Functions/Translate";
import SecondaryButton from "@/Components/SecondaryButton";
import { FcEmptyFilter } from "react-icons/fc";
import { Inertia } from "@inertiajs/inertia";
import Spinner from "@/Components/Spinner";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";

import GameCard from "./GameCard";

export default function GameBrowse({ exploreImage, games }) {
  return (
    <Front
      containerClass="w-full"
      extraHeader={true}
      extraHeaderTitle={__("Games")}
      extraHeaderImage={exploreImage}
      extraHeaderText={""}
      extraImageHeight={"h-14"}
    >
      <div className="flex flex-wrap gap-3 justify-evenly -mt-16">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </Front>
  );
}
