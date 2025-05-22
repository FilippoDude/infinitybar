'use client'
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";
import Universe from "./components/universe/universe";
import { Canvas } from "@react-three/fiber";
gsap.registerPlugin(SplitText)
/*
        <div className="absolute w-full h-full filter brightness-50">
          <Image alt="Background image" src={"/homeBackground.png"} fill={true}></Image>
        </div>
        <nav className="absolute top-0 left-0 h-16 w-full bg-[#141415d0] flex items-center justify-center">
          <div className="absolute left-10 w-32 h-6"><Image alt="Logo" src={"/logo.png"} fill={true}></Image></div>
          <button className="absolute right-10 text-xl font-sans text-[#D9A166] font-bold">CONTATTACI</button>
          <div className="flex flex-row gap-6">
          </div>
        </nav>
*/
export default function Home() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if(titleRef.current != null){
      let split = new SplitText(titleRef.current, {
          type: "words, chars",
          position: "relative"
        }
      )
      gsap.from(split.chars, {
        duration: 1, 
        y: 50,     
        autoAlpha: 0,  
        stagger: 0.05,  
      });
    }
  },[]);
  return (
    <> 
      <section className="relative w-full h-[100lvh] flex items-center justify-center z-10 bg-[#0E0E0F]">
        <div className="absolute w-full h-full">
          <Universe></Universe>
        </div>
        <div className="relative">
          <h1 ref={titleRef} className="text-8xl font-sans text-white font-extrabold">Infinity bar</h1>
          <div className="flex flex-row gap-2 items-end mt">
            <button className=" px-2 py-1 border-1 border-white text-[#310047] opacity-75 text-xl bg-white">Luogo</button>
            <button className=" px-2 py-1 border-1 border-white text-white opacity-75 text-xl">Orari</button>
            <p className="text-xl text-white opacity-90">+39 383 392339039</p>
          </div>
        </div>
        {//<div className="absolute items-center bottom-2 flex flex-col">
          //<p className=" text-xl font-sans text-white opacity-60 font-normal">Aperti dalle 8 alle 22</p>
        //</div>
        }
      </section>
      <section className="relative w-full h-fit pb-10 flex items-center gap-10 flex-col z-10 bg-[#0E0E0F]">
        <h1 className="text-white mt-10 text-8xl font-mono max-w-300">Il bar <span className="font-black">numero 1</span> di Sant'Agata di Militello</h1>
        <div className="relative flex-row flex gap-36 mt-8 w-300">
          <div className="relative w-fit h-fit flex flex-col items-center">
            <p className="text-white text-6xl font-black">ORARIO</p>
            <p className="text-white text-3xl font-semibold opacity-90">- Lunedi a Sabato -</p>
            <p className="text-white text-3xl font-bold">8:00 alle 22:00</p>
            <p className="text-white text-3xl font-semibold opacity-90">- Domenica -</p>
            <p className="text-white text-3xl font-bold">8:00 alle 18:00</p>
          </div>
          <div className="relative w-fit h-fit flex flex-col ">
            <p className="text-white text-6xl font-black">LUOGO</p>
            <p className="text-white text-3xl font-normal">In Sant'Agata di Militello</p>
            <p className="text-white text-3xl font-semibold">Vicino l'ospedale</p>
            <p className="text-white text-3xl font-bold ">Di fronte ad Acqua e Sapone</p>
          </div>
          <div className="relative w-fit h-fit flex flex-col">
            <p className="text-white text-6xl font-black">SERVIZI</p>
            <p className="text-white text-3xl font-bold opacity-90">- Rosticceria</p>
            <p className="text-white text-3xl font-bold">- Pasticceria</p>
            <p className="text-white text-3xl font-bold opacity-90">- Gelateria</p>

          </div>
        </div>
      </section>
      {/*<section className="relative w-full py-10 bg-[#141415]">
        <div className="relative w-full h-full flex items-center justify-center gap-10">
          <div className="relative w-225 h-150">
            <div className="absolute top-0 left-0 w-full h-full filter brightness-50">
              <Image alt="Bar Image" src={"/aboutBackground.png"} fill={true}></Image>
            </div>
            <div className="relative p-10">
              <h2 className="font-bold text-white text-4xl"></h2>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="rounded-2xl overflow-hidden relative w-70 h-70 filter brightness-50">
              <Image alt="Bar Image" src={"/aboutBackground.png"} fill={true}></Image>
            </div>
            <div className="rounded-2xl overflow-hidden relative w-70 h-70 filter brightness-50">
              <Image alt="Bar Image" src={"/aboutBackground.png"} fill={true}></Image>
            </div>
          </div>
        </div>
        <div className="relative w-full bg-[#141415] flex flex-col items-center gap-10 mt-10">
          <div className="relative h-fit w-fit flex flex-row gap-5">
            <div className="relative w-150 h-100 border-2 border-[#E89947]">
              <Image alt="Pasticcini Image" src={"/pasticciniBackground.png"} fill={true}></Image>
            </div>
            <div className="relative w-150 h-100">  
              <h1 className=" text-5xl font-sans text-white font-semibold italic">I nostri pasticcini</h1>
              <p className=" text-3xl font-sans text-white opacity-75 font-semibold italic">Pasticcini e pasticcine sono tutti presenti</p>
            </div>
          </div>
      
          <div className="relative h-fit w-fit flex flex-row gap-5">
            <div className="relative w-150 h-100">
              <h1 className=" text-5xl font-sans text-white font-semibold italic">Gelati e granite</h1>
              <p className=" text-3xl font-sans text-white opacity-75 font-semibold italic">Granitini e granitine sono tutti presenti</p>
            </div>
            <div className="relative w-150 h-100  border-2 border-[#E89947]">  
              <Image alt="Pasticcini Image" src={"/gelatiBackground.png"} fill={true}></Image>
            </div>
          </div>
          <div className="relative h-fit w-fit flex flex-row gap-5">
            <div className="relative w-150 h-100 border-2 border-[#E89947]">
              <Image alt="Pasticcini Image" src={"/rosticceriaBackground.png"} fill={true}></Image>
            </div>
            <div className="relative w-150 h-100">  
              <h1 className="text-5xl font-sans text-white font-semibold italic">Rosticceria calda</h1>
              <p className="text-3xl font-sans text-white opacity-75 font-semibold italic">Rosticcerini e rosticcerine sono tutti presenti</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative w-full max-h-60 h-60 bg-[#232325]">
        <p className="ml-10 text-2xl font-sans text-white opacity-75 font-normal">Il bar Infinity</p>
      </footer>*/}
    </> 
  );
}
