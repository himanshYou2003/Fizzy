"use client"
import { Float } from "@react-three/drei";
import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatingSpeed?: number;
  rotatingIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?:ReactNode;
};

const FloatingCan = forwardRef<Group , FloatingCanProps>(
  (
    {
    flavor ="blackCherry",
    floatingSpeed=1.5,
    rotatingIntensity=1,
    floatIntensity=1,
    floatingRange =[-0.1,0.1],
    children,
    ...props
  },ref

) => {
  return (
    <group ref={ref} {...props}>
      <Float
        speed={floatingSpeed}
        rotationIntensity={rotatingIntensity}
        floatIntensity={floatIntensity}
        floatingRange={floatingRange}
      >
        {children}
        <SodaCan flavor={flavor}/>
      </Float>
    </group>
  );
})

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
